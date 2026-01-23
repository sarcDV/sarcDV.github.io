let pyodideReadyPromise = null;
let points = []; // {x, y, label}
const RANGE = 3; // fixed coordinate system [-3,3]

function pyBool(v) { return v ? "True" : "False"; }

async function loadPyodideAndPackages() {
  const status = document.getElementById("status");
  const runBtn = document.getElementById("run-btn");

  status.textContent = "Loading Pyodide…";
  const pyodide = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/",
  });

  status.textContent = "Installing scikit-learn & matplotlib…";
  await pyodide.loadPackage("micropip");
  await pyodide.runPythonAsync(`
import micropip
await micropip.install("scikit-learn")
await micropip.install("matplotlib")
  `);

  status.textContent = "Ready.";
  runBtn.disabled = false;
  return pyodide;
}

pyodideReadyPromise = loadPyodideAndPackages();

function getNum(id, fallback) {
  const v = parseFloat(document.getElementById(id).value);
  return isNaN(v) ? fallback : v;
}
function getInt(id, fallback) {
  const v = parseInt(document.getElementById(id).value, 10);
  return isNaN(v) ? fallback : v;
}
function getBool(id) {
  return document.getElementById(id).checked;
}

function getSelectedClass() {
  return parseInt(document.querySelector('input[name="add-class"]:checked').value, 10);
}

function dataToPixel(x, y, imgWidth, imgHeight) {
  const px = ((x + RANGE) / (2 * RANGE)) * imgWidth;
  const py = imgHeight - ((y + RANGE) / (2 * RANGE)) * imgHeight;
  return { px, py };
}

function pixelToData(px, py, imgWidth, imgHeight) {
  const x = (px / imgWidth) * (2 * RANGE) - RANGE;
  const y = ((imgHeight - py) / imgHeight) * (2 * RANGE) - RANGE;
  return { x, y };
}

function drawPoints() {
  const img = document.getElementById("plot");
  const canvas = document.getElementById("overlay");
  const ctx = canvas.getContext("2d");

  if (!img.width || !img.height) return;

  canvas.width = img.width;
  canvas.height = img.height;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const p of points) {
    const { px, py } = dataToPixel(p.x, p.y, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(px, py, 5, 0, 2 * Math.PI);
    ctx.fillStyle = p.label === 0 ? "#ff5555" : "#4f8cff";
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.stroke();
  }
}

async function runDemo() {
  const status = document.getElementById("status");
  const img = document.getElementById("plot");
  const runBtn = document.getElementById("run-btn");

  status.textContent = "Training…";
  runBtn.disabled = true;

  const dataset = document.getElementById("dataset").value;
  const noise = getNum("noise", 0.3);
  const testSize = getNum("test-size", 0.4);
  const seed = getInt("seed", 42);

  const enabled = {
    knn: getBool("clf-knn"),
    linear_svm: getBool("clf-linear-svm"),
    rbf_svm: getBool("clf-rbf-svm"),
    gp: getBool("clf-gp"),
    tree: getBool("clf-tree"),
    rf: getBool("clf-rf"),
    mlp: getBool("clf-mlp"),
    ada: getBool("clf-ada"),
    nb: getBool("clf-nb"),
    qda: getBool("clf-qda"),
  };

  const knnK = getInt("knn-k", 3);
  const linearC = getNum("linear-C", 0.025);
  const rbfC = getNum("rbf-C", 1);
  const rbfGamma = getNum("rbf-gamma", 2);
  const treeDepth = getInt("tree-depth", 5);
  const rfDepth = getInt("rf-depth", 5);
  const rfNEstimators = getInt("rf-n-estimators", 10);
  const mlpAlpha = getNum("mlp-alpha", 1);

  const X_js = points.map(p => [p.x, p.y]);
  const y_js = points.map(p => p.label);

  const pyodide = await pyodideReadyPromise;

  const pythonCode = `
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.colors import ListedColormap
from io import BytesIO
import base64

from sklearn.datasets import make_circles, make_classification, make_moons
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis
from sklearn.ensemble import AdaBoostClassifier, RandomForestClassifier
from sklearn.gaussian_process import GaussianProcessClassifier
from sklearn.gaussian_process.kernels import RBF
from sklearn.inspection import DecisionBoundaryDisplay
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier

plt.style.use("dark_background")

R = 3

X_js = np.array(${JSON.stringify(X_js)}) if ${X_js.length} > 0 else np.empty((0,2))
y_js = np.array(${JSON.stringify(y_js)}) if ${y_js.length} > 0 else np.empty((0,))

dataset = "${dataset}"
noise = float(${noise})
test_size = float(${testSize})
seed = int(${seed})

enabled = {
    "knn": ${pyBool(enabled.knn)},
    "linear_svm": ${pyBool(enabled.linear_svm)},
    "rbf_svm": ${pyBool(enabled.rbf_svm)},
    "gp": ${pyBool(enabled.gp)},
    "tree": ${pyBool(enabled.tree)},
    "rf": ${pyBool(enabled.rf)},
    "mlp": ${pyBool(enabled.mlp)},
    "ada": ${pyBool(enabled.ada)},
    "nb": ${pyBool(enabled.nb)},
    "qda": ${pyBool(enabled.qda)},
}

knn_k = int(${knnK})
linear_C = float(${linearC})
rbf_C = float(${rbfC})
rbf_gamma = float(${rbfGamma})
tree_depth = int(${treeDepth})
rf_depth = int(${rfDepth})
rf_n_estimators = int(${rfNEstimators})
mlp_alpha = float(${mlpAlpha})

names = []
classifiers = []

if enabled["knn"]:
    names.append("KNN")
    classifiers.append(KNeighborsClassifier(knn_k))

if enabled["linear_svm"]:
    names.append("Linear SVM")
    classifiers.append(SVC(kernel="linear", C=linear_C, random_state=seed))

if enabled["rbf_svm"]:
    names.append("RBF SVM")
    classifiers.append(SVC(gamma=rbf_gamma, C=rbf_C, random_state=seed))

if enabled["gp"]:
    names.append("Gaussian Process")
    classifiers.append(GaussianProcessClassifier(1.0 * RBF(1.0), random_state=seed))

if enabled["tree"]:
    names.append("Decision Tree")
    classifiers.append(DecisionTreeClassifier(max_depth=tree_depth, random_state=seed))

if enabled["rf"]:
    names.append("Random Forest")
    classifiers.append(RandomForestClassifier(
        max_depth=rf_depth,
        n_estimators=rf_n_estimators,
        max_features=1,
        random_state=seed,
    ))

if enabled["mlp"]:
    names.append("Neural Net")
    classifiers.append(MLPClassifier(alpha=mlp_alpha, max_iter=1000, random_state=seed))

if enabled["ada"]:
    names.append("AdaBoost")
    classifiers.append(AdaBoostClassifier(random_state=seed))

if enabled["nb"]:
    names.append("Naive Bayes")
    classifiers.append(GaussianNB())

if enabled["qda"]:
    names.append("QDA")
    classifiers.append(QuadraticDiscriminantAnalysis())

if len(classifiers) == 0:
    names.append("Naive Bayes")
    classifiers.append(GaussianNB())

if X_js.shape[0] > 0:
    X = X_js
    y = y_js
else:
    if dataset == "moons":
        X, y = make_moons(noise=noise, random_state=seed)
    elif dataset == "circles":
        X, y = make_circles(noise=noise, factor=0.5, random_state=seed)
    else:
        X, y = make_classification(
            n_features=2, n_redundant=0, n_informative=2,
            random_state=seed, n_clusters_per_class=1
        )
    X = (X - X.mean(axis=0)) / X.std(axis=0)
    X = np.clip(X, -R, R)

figure = plt.figure(figsize=(max(6, 3 * (len(classifiers) + 1)), 4))
i = 1

cm = plt.cm.RdBu
cm_bright = ListedColormap(["#ff5555", "#4f8cff"])

ax = plt.subplot(1, len(classifiers) + 1, i)
ax.set_title("Input data", fontsize=9)
ax.scatter(X[:,0], X[:,1], c=y, cmap=cm_bright, edgecolors="k", s=15)
ax.set_xlim(-R, R)
ax.set_ylim(-R, R)
ax.set_xticks(())
ax.set_yticks(())
i += 1

for name, clf in zip(names, classifiers):
    ax = plt.subplot(1, len(classifiers) + 1, i)
    clf_pipe = make_pipeline(StandardScaler(), clf)
    clf_pipe.fit(X, y)
    score = clf_pipe.score(X, y)
    DecisionBoundaryDisplay.from_estimator(
        clf_pipe, X, cmap=cm, alpha=0.8, ax=ax, eps=0.5
    )
    ax.scatter(X[:,0], X[:,1], c=y, cmap=cm_bright, edgecolors="k", s=15)
    ax.set_xlim(-R, R)
    ax.set_ylim(-R, R)
    ax.set_xticks(())
    ax.set_yticks(())
    ax.set_title(name, fontsize=8)
    ax.text(
        R - 0.3,
        -R + 0.3,
        ("%.2f" % score).lstrip("0"),
        size=8,
        horizontalalignment="right",
    )
    i += 1

plt.tight_layout()

buf = BytesIO()
plt.savefig(buf, format="png", dpi=120, bbox_inches="tight")
buf.seek(0)
img_b64 = base64.b64encode(buf.read()).decode("ascii")
buf.close()
img_b64
  `;

  try {
    const result = await pyodide.runPythonAsync(pythonCode);
    img.src = "data:image/png;base64," + result;
    img.onload = () => {
      syncCanvasSize();
      drawPoints();
    };
    status.textContent = "Done.";
  } catch (err) {
    console.error(err);
    status.textContent = "Error: " + err;
  } finally {
    runBtn.disabled = false;
  }
}

function syncCanvasSize() {
  const img = document.getElementById("plot");
  const canvas = document.getElementById("overlay");
  const rect = img.getBoundingClientRect();
  canvas.style.left = rect.left + "px";
  canvas.style.top = rect.top + "px";
  canvas.width = img.width;
  canvas.height = img.height;
}

function setupCanvasInteraction() {
  const canvas = document.getElementById("overlay");
  const img = document.getElementById("plot");

  canvas.addEventListener("mousedown", async (e) => {
    if (!img.width || !img.height) return;

    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    const { x, y } = pixelToData(px, py, canvas.width, canvas.height);

    if (e.shiftKey) {
      // remove nearest point
      let bestIdx = -1;
      let bestDist = 0.3; // threshold in data space
      for (let i = 0; i < points.length; i++) {
        const dx = points[i].x - x;
        const dy = points[i].y - y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      }
      if (bestIdx !== -1) {
        points.splice(bestIdx, 1);
      }
    } else {
      // add point
      const label = getSelectedClass();
      points.push({ x, y, label });
    }

    drawPoints();
    await runDemo();
  });
}

document.getElementById("run-btn").addEventListener("click", () => {
  runDemo();
});

document.getElementById("generate-btn").addEventListener("click", async () => {
  // clear JS points so Python generates synthetic, then pull them back?
  // For now: just clear and let Python generate; user edits from there.
  points = [];
  await runDemo();
});

document.getElementById("reset-btn").addEventListener("click", async () => {
  points = [];
  drawPoints();
  await runDemo();
});

window.addEventListener("load", () => {
  setupCanvasInteraction();
});

window.addEventListener("resize", () => {
  syncCanvasSize();
  drawPoints();
});
