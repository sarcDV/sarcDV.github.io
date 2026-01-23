# 🎨 Interactive Classifier Playground  
### *A fully serverless, browser‑based machine‑learning lab powered by Pyodide + scikit‑learn*

This project turns your browser into a **real‑time ML sandbox**.  
No Python installation. No backend. No dependencies.  
Just open the page and start *drawing your own dataset*.

---

## 🚀 Features

- **Click‑to‑add points** directly on the plot  
- **Shift‑click to remove** the nearest point  
- **Instant retraining** of all selected classifiers  
- **10+ scikit‑learn models** running entirely in the browser  
- **Live hyperparameter tuning** (C, gamma, depth, k, estimators, etc.)  
- **Synthetic dataset generator** (moons, circles, linear)  
- **Dark mode UI**  
- **Scrollable classifier comparison layout**  
- **Zero backend — 100% serverless**  
- Powered by **Pyodide**, **matplotlib**, and **scikit‑learn** compiled to WebAssembly

---

## 🧠 Why this exists

Machine learning is easiest to understand when you can **see** how algorithms behave.

This playground lets you:

- Visualize decision boundaries  
- Explore bias vs variance  
- Understand how hyperparameters shape models  
- Build intuition by *drawing your own dataset*  
- Teach ML concepts interactively without installing anything  

It’s perfect for workshops, classrooms, demos, or just playing around.

---

## 🖼️ How it works

The app uses:

- **Pyodide** to run Python in the browser  
- **scikit‑learn** for classifiers  
- **matplotlib** for decision boundary plots  
- A transparent **HTML canvas** overlay for interactive point editing  
- JavaScript to maintain the dataset and send it to Python on every update  

Every time you add/remove a point or change a parameter:

1. JS updates the dataset  
2. JS sends `X` and `y` to Python  
3. Python retrains all enabled classifiers  
4. Python renders a new PNG  
5. JS overlays your points instantly for zero‑latency feedback  

---

## 📦 Installation

No installation needed.

Just clone the repo and open `index.html` in your browser:

```bash
git clone https://github.com/sarcDV/projects/InteractiveClassifierPlayground
cd InteractiveClassifierPlayground
open index.html
```

Or host it on GitHub Pages / Netlify / Vercel — it’s fully static.

---

## 🕹️ Usage

### Add points  
Click anywhere on the plot.  
Choose the class using the radio buttons (0 or 1).

### Remove points  
Shift‑click near a point to delete it.

### Generate synthetic data  
Use the “Generate synthetic dataset” button.

### Reset  
Clear all points and start fresh.

### Tune hyperparameters  
Adjust sliders/inputs and hit **Run**.

### Toggle classifiers  
Enable/disable any model to compare decision boundaries.

---

## 🧩 Classifiers included

- K‑Nearest Neighbors  
- Linear SVM  
- RBF SVM  
- Gaussian Process  
- Decision Tree  
- Random Forest  
- Neural Network (MLP)  
- AdaBoost  
- Naive Bayes  
- Quadratic Discriminant Analysis  

---

## 🛠️ Tech Stack

- **Pyodide** (Python in WebAssembly)  
- **scikit‑learn**  
- **matplotlib**  
- **JavaScript**  
- **HTML/CSS**  
- **No backend**  

---

## 🤝 Contributing

PRs welcome — especially for:

- New classifiers  
- More hyperparameters  
- Better UI/UX  
- Performance improvements  
- New dataset types  

---

## 📜 License

MIT — free to use, modify, and share.

---

## ⭐ If you like this project…

Give it a star on GitHub.  
It helps others discover it and encourages more browser‑based ML tools.
