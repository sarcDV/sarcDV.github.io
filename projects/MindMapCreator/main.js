// =========================
// INITIAL SETUP
// =========================

const svg = d3.select("#graph");
const g = svg.append("g");

let root = null;
let currentLayout = "horizontal"; // "horizontal" or "radial"

const zoom = d3.zoom().on("zoom", (event) => {
  g.attr("transform", event.transform);
});
svg.call(zoom);

const boxWidth = 180;
const boxHeight = 30;

const treeLayout = d3.tree().nodeSize([80, 250]); // Increased spacing for horizontal layout too
const radialLayout = d3.cluster().size([2 * Math.PI, 600]); // angle, radius - increased from 300 to 600 for more spacing


// =========================
// THEME TOGGLE
// =========================

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};


// =========================
// LAYOUT TOGGLE
// =========================

document.getElementById("toggleLayout").onclick = () => {
  currentLayout = currentLayout === "horizontal" ? "radial" : "horizontal";
  if (root) {
    update(root);
  }
};

// Collapse all nodes
document.getElementById("collapseAll").onclick = () => {
  if (root) {
    root.each(d => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      }
    });
    update(root);
  }
};

// Expand all nodes
document.getElementById("expandAll").onclick = () => {
  if (root) {
    root.each(d => {
      if (d._children) {
        d.children = d._children;
        d._children = null;
      }
    });
    update(root);
  }
};

// Zoom controls
document.getElementById("zoomIn").onclick = () => {
  svg.transition().call(zoom.scaleBy, 1.2);
};

document.getElementById("zoomOut").onclick = () => {
  svg.transition().call(zoom.scaleBy, 0.8);
};

document.getElementById("resetZoom").onclick = () => {
  svg.transition().call(zoom.transform, d3.zoomIdentity);
};


// =========================
// EXPORT BUTTONS
// =========================

document.getElementById("exportSVG").onclick = () => {
  const svgNode = document.querySelector("svg");
  const svgData = new XMLSerializer().serializeToString(svgNode);
  const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "diagram.svg";
  link.click();

  URL.revokeObjectURL(url);
};

document.getElementById("exportPNG").onclick = () => {
  const svgNode = document.querySelector("svg");
  const svgData = new XMLSerializer().serializeToString(svgNode);
  const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = svgNode.clientWidth;
    canvas.height = svgNode.clientHeight;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(url);

    canvas.toBlob(blob => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "diagram.png";
      link.click();
    });
  };
  img.src = url;
};


// =========================
// CUSTOM LINK PATH
// =========================

function linkPath(d) {
  if (currentLayout === "horizontal") {
    const sourceX = d.source.x;
    const sourceY = d.source.y + boxWidth / 2;
    const targetX = d.target.x;
    const targetY = d.target.y - boxWidth / 2;
    const midY = (sourceY + targetY) / 2;

    return `
      M ${sourceY},${sourceX}
      C ${midY},${sourceX} ${midY},${targetX} ${targetY},${targetX}
    `;
  } else {
    // For radial layout, adjust for potentially larger spacing
    const sx = d.source.y;
    const sy = d.source.x;
    const tx = d.target.y;
    const ty = d.target.x;
    const mx = (sx + tx) / 2;

    return `
      M ${sx},${sy}
      C ${mx},${sy} ${mx},${ty} ${tx},${ty}
    `;
  }
}


// =========================
// BUILD HIERARCHY FROM JSON
// =========================

function buildHierarchy(node) {
  const { key, value } = node;
  const children = [];

  if (value !== null && typeof value === "object") {
    if (Array.isArray(value)) {
      value.forEach((item, i) => {
        children.push(buildHierarchy({ key: `[${i}]`, value: item }));
      });
    } else {
      Object.entries(value).forEach(([k, v]) => {
        children.push(buildHierarchy({ key: k, value: v }));
      });
    }
  }

  return {
    name: key,
    rawValue: value,
    children: children.length ? children : null
  };
}


// =========================
// TEXT TRUNCATION HELPER
// =========================

function truncateText(text, maxLength = 20) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength - 3) + "...";
}

// =========================
// UPDATE FUNCTION
// =========================

function update(source) {
  if (!root) return;

  if (currentLayout === "horizontal") {
    treeLayout(root);
  } else {
    radialLayout(root);
    root.each(d => {
      const angle = d.x;
      const r = d.y;
      d.x = r * Math.sin(angle);
      d.y = r * Math.cos(angle);
    });
  }

  const link = g.selectAll(".link")
    .data(root.links(), d => d.target.data.name);

  link.enter()
    .append("path")
    .attr("class", "link")
    .merge(link)
    .transition()
    .duration(400)
    .attr("d", linkPath);

  link.exit().remove();

  const node = g.selectAll(".node")
    .data(root.descendants(), d => d.data.name);

  const nodeEnter = node.enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${source.y0 ?? 0},${source.x0 ?? 0})`)
    .on("click", (event, d) => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    });


  nodeEnter.append("circle")
    .attr("class", "highlight-circle")
    .attr("r", boxHeight)
    .attr("fill", "none")
    .attr("stroke", "#ff4d4d")
    .attr("stroke-width", 3)
    .attr("opacity", 0);

  nodeEnter.append("rect")
    .attr("x", -boxWidth / 2)
    .attr("y", -boxHeight / 2)
    .attr("width", boxWidth)
    .attr("height", boxHeight)
    .attr("fill", d => {
      if (!d.parent) return "#b7e4c7";
      if (d.children || d._children) return "#ffe8a1";
      return "#cfe2ff";
    });

  // Add mouse event handlers for custom tooltip
  nodeEnter.on("mouseover", (event, d) => {
    const v = d.data.rawValue;
    let fullText;
    if (!d.children && !d._children && typeof v !== "object") {
      fullText = `${d.data.name}: ${String(v)}`;
    } else {
      fullText = d.data.name;
    }

    // Create or update tooltip div
    let tooltip = document.getElementById("tooltip");
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.id = "tooltip";
      document.body.appendChild(tooltip);
    }

    tooltip.innerHTML = fullText;
    tooltip.style.display = "block";

    // Position tooltip near cursor
    tooltip.style.left = (event.pageX + 10) + "px";
    tooltip.style.top = (event.pageY - 30) + "px";
  })
  .on("mousemove", (event) => {
    const tooltip = document.getElementById("tooltip");
    if (tooltip) {
      tooltip.style.left = (event.pageX + 10) + "px";
      tooltip.style.top = (event.pageY - 30) + "px";
    }
  })
  .on("mouseout", () => {
    const tooltip = document.getElementById("tooltip");
    if (tooltip) {
      tooltip.style.display = "none";
    }
  });

  nodeEnter.append("text")
    .attr("text-anchor", "middle")
    .attr("dy", 4)
    .text(d => {
      const v = d.data.rawValue;
      let textContent;
      if (!d.children && !d._children && typeof v !== "object") {
        textContent = `${d.data.name}: ${String(v)}`;
      } else {
        textContent = d.data.name;
      }
      return truncateText(textContent);
    });

  const nodeUpdate = nodeEnter.merge(node);

  // Update mouse event handlers for tooltips
  nodeUpdate.on("mouseover", (event, d) => {
    const v = d.data.rawValue;
    let fullText;
    if (!d.children && !d._children && typeof v !== "object") {
      fullText = `${d.data.name}: ${String(v)}`;
    } else {
      fullText = d.data.name;
    }

    // Create or update tooltip div
    let tooltip = document.getElementById("tooltip");
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.id = "tooltip";
      document.body.appendChild(tooltip);
    }

    tooltip.innerHTML = fullText;
    tooltip.style.display = "block";

    // Position tooltip near cursor
    tooltip.style.left = (event.pageX + 10) + "px";
    tooltip.style.top = (event.pageY - 30) + "px";
  })
  .on("mousemove", (event) => {
    const tooltip = document.getElementById("tooltip");
    if (tooltip) {
      tooltip.style.left = (event.pageX + 10) + "px";
      tooltip.style.top = (event.pageY - 30) + "px";
    }
  })
  .on("mouseout", () => {
    const tooltip = document.getElementById("tooltip");
    if (tooltip) {
      tooltip.style.display = "none";
    }
  });

  nodeUpdate.transition()
    .duration(400)
    .attr("transform", d => `translate(${d.y},${d.x})`);

  node.exit().transition()
    .duration(300)
    .attr("transform", d => `translate(${source.y},${source.x})`)
    .remove();

  root.x0 = root.x;
  root.y0 = root.y;
}


// =========================
// LOAD JSON FILE
// =========================

document.getElementById("fileInput").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const text = await file.text();
  const json = JSON.parse(text);

  g.selectAll("*").remove();

  const rootData = { key: "root", value: json };
  const hierarchyData = buildHierarchy(rootData);
  root = d3.hierarchy(hierarchyData);

  root.x0 = 0;
  root.y0 = 0;

  update(root);

  svg.call(zoom.transform, d3.zoomIdentity.translate(40, 40));
});


// =========================
// SEARCH WITH HALO HIGHLIGHT
// =========================

document.getElementById("searchBox").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  if (!root) return;

  expandAll(root);
  update(root);

  g.selectAll(".highlight-circle")
    .attr("opacity", d => {
      const label = d.data.name.toLowerCase();
      const value = String(d.data.rawValue).toLowerCase();
      return (query && (label.includes(query) || value.includes(query))) ? 1 : 0;
    });
});

function expandAll(d) {
  if (d._children) {
    d.children = d._children;
    d._children = null;
  }
  if (d.children) {
    d.children.forEach(expandAll);
  }
}
