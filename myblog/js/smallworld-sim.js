// Simplified small-world demo (n=30, k=4)
const n = 30;
let k = 4;
let p = 0;
let graph = [];

function initializeLattice() {
  graph = Array(n).fill().map(() => new Set());
  for (let i = 0; i < n; i++) {
    for (let d = 1; d <= k/2; d++) {
      graph[i].add((i + d) % n);
      graph[i].add((i - d + n) % n);
    }
  }
}

function rewire(p) {
  // Copy lattice
  initializeLattice();
  const edgesToRewire = [];
  for (let i = 0; i < n; i++) {
    for (let j of graph[i]) {
      if (i < j) edgesToRewire.push([i, j]); // avoid duplicates
    }
  }

  for (const [i, j] of edgesToRewire) {
    if (Math.random() < p) {
      // Remove old edge
      graph[i].delete(j);
      graph[j].delete(i);
      // Add new random edge
      let l;
      do {
        l = Math.floor(Math.random() * n);
      } while (l === i || graph[i].has(l));
      graph[i].add(l);
      graph[l].add(i);
    }
  }
}

function approximateMetrics() {
  // Approximate clustering
  let C_sum = 0;
  for (let i = 0; i < n; i++) {
    const neighbors = Array.from(graph[i]);
    let e = 0;
    for (let a = 0; a < neighbors.length; a++) {
      for (let b = a + 1; b < neighbors.length; b++) {
        if (graph[neighbors[a]].has(neighbors[b])) e++;
      }
    }
    const ki = neighbors.length;
    C_sum += ki < 2 ? 0 : (2 * e) / (ki * (ki - 1));
  }
  const C = C_sum / n;

  // Approximate L via sampling (10% of pairs)
  let totalDist = 0, count = 0;
  const samplePairs = Math.min(50, n * (n - 1) / 2);
  for (let s = 0; s < samplePairs; s++) {
    const i = Math.floor(Math.random() * n);
    const j = Math.floor(Math.random() * n);
    if (i === j) continue;
    const d = bfsDistance(i, j);
    if (d !== -1) {
      totalDist += d;
      count++;
    }
  }
  const L = count > 0 ? (totalDist / count).toFixed(2) : '∞';

  return { L, C: C.toFixed(3) };
}

function bfsDistance(start, end) {
  const queue = [{ node: start, dist: 0 }];
  const visited = new Set([start]);
  while (queue.length) {
    const { node, dist } = queue.shift();
    if (node === end) return dist;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({ node: neighbor, dist: dist + 1 });
      }
    }
  }
  return -1;
}

// DOM
const slider = document.getElementById('p-slider');
const pValue = document.getElementById('p-value');
const LDisplay = document.getElementById('L-value');
const CDisplay = document.getElementById('C-value');

slider.addEventListener('input', () => {
  p = parseFloat(slider.value);
  pValue.textContent = p.toFixed(2);
  rewire(p);
  const { L, C } = approximateMetrics();
  LDisplay.textContent = L;
  CDisplay.textContent = C;
});

// Init
initializeLattice();
const init = approximateMetrics();
LDisplay.textContent = init.L;
CDisplay.textContent = init.C;
