---
marp: true
theme: default
style: |
  section {
    background-color: #000000; /* Change background color */
    color: #fff; /* Change text color */
    font-size: 22px;
  }
  h1 {
    color: #ffffff; /* Change H1 color */
  }
  .p {
    font-size: 12px; /* Adjust as needed */
  }
  .logo {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 150px; /* Adjust logo size */
  }
  .white-link {
        color: white; /* Set link color to white */
        text-decoration: none; /* Optional: remove underline */
  }
  .my-image {
    width: 100px; /* Set the width */
    height: auto; /* Maintain aspect ratio */
    display: block; /* Center the image */
    margin: 0 auto; /* Center the image horizontally */
  }
  .image-row {
    display: flex; /* Use flexbox to arrange images in a row */
    justify-content: space-around; /* Space images evenly */
    align-items: center; /* Center images vertically */
  }
  .image-row img {
    height: 150px; /* Set a fixed height for all images */
    width: auto; /* Maintain aspect ratio */
  }
  .left-align {
    text-align: left; /* Align text to the left */
    font-size: 14px; /* Adjust font size */
  }
  .right-align {
    text-align: right; /* Align text to the left */
    font-size: 14px; /* Adjust font size */
  }
---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


# Machine Learning Performance Improvement

## based on <a href="https://machinelearningmastery.com/machine-learning-performance-improvement-cheat-sheet/" target="_blank" class="white-link">Machine Learning Performance Improvement Cheat Sheet</a><br>
<!-- ![logo](images_videos/DuskRise-Logo-White-1.png) -->
<div class="left-align">
    Alessandro Sciarra<br>
    <!-- Duskrise Italia Srl European HQ<br> -->
    <!-- Via Ostiense, 92 - 00154 Roma<br> -->
    <a href="mailto:alex.sciarra@dgmail.com" class="white-link">alex.sciarra@gmail.com</a><br>
    <a href="https://sarcdv.github.io/" target="_blank" class="white-link">Visit my Webpage</a><br>
    <!-- <a href="https://www.google.com/maps/search/?api=1&query=Via+Ostiense,+92,+00154+Roma" target="_blank" class="white-link">View on Google Maps</a> -->
</div>

---

# Tips, Tricks and Hacks That You Can Use To Make Better Predictions

 1. Improve Performance With Data
 2. Improve Performance With Algorithms
 3. Improve Performance With Algorithm Tuning
 4. Improve Performance With Ensembles

---

## Improve Performance With Data

Strategy: Create new and different perspectives on your data in order to best expose the structure of the underlying problem to the learning algorithms.

**Get more data**

  -  More data can indeed enhance model performance. When a model has access to a larger and more diverse dataset, it can learn better representations and generalize well to unseen examples.
  -  However, there’s a point of diminishing returns. Collecting an excessive amount of data might not always lead to significant improvements. It’s essential to strike a balance between data quantity and model complexity.

---

## Improve Performance With Data

**Generate more data**

  - **Data Augmentation**: Augmenting existing data is a common approach. By applying various transformations to your original data, you create new examples.
  - **Permutation**: Permuting existing data involves shuffling the order of features or samples.
  - **Generative Models**: Probabilistic models can generate new data samples.
  - **Synthetic Data**: Create synthetic data that resembles your real data. This can be useful for privacy-preserving purposes or when real data is scarce. Be cautious about maintaining statistical properties (e.g., distribution, correlations) when generating synthetic data.


---

## Improve Performance With Data

**Clean your data**

- **Handling Missing Data**: Identify and address missing values (Imputation; Forward/Backward Fill; Remove rows).
- **Outlier Detection and Treatment**: Outliers can distort your model (use Z-score; IQR). Decide whether to remove outliers or transform them.
- **Data Validation**: Check for data consistency.
- **Handling Duplicates**: Remove duplicate records to avoid biasing your analysis.
- **Addressing Corrupt Data**: If you suspect corrupt observations, investigate their source. It could be due to measurement errors, sensor malfunctions, or data entry mistakes. Correct or remove such data points.
- **Feature Engineering**: Create new features that capture relevant information.

---

## Improve Performance With Data

**Resample data**

- **Downsampling (Under-sampling)**: In cases where you have an imbalanced dataset (e.g., rare events), downsampling can help. Randomly remove instances from the majority class until the class distribution is more balanced. Be cautious not to lose critical information by removing too many samples.
- **Upsampling (Over-sampling)**: When you want to improve representation of a minority class, consider upsampling. Duplicate instances from the minority class or generate synthetic samples (e.g., using SMOTE - Synthetic Minority Over-sampling Technique). Upsampling helps prevent the model from being biased toward the majority class.
- **Stratified Sampling**: When splitting your data into training and validation sets, use stratified sampling. This ensures that the class distribution in both sets remains similar to the original dataset.

---

## Improve Performance With Data

**Resample data**

- **Bootstrapping**: Bootstrapping involves randomly sampling with replacement from your dataset. It’s useful for estimating confidence intervals or creating new datasets for model training.
- **Subsampling for Speed**: If your dataset is large and training is time-consuming, consider using a smaller random sample for initial experiments. Once you’re satisfied with your approach, scale up to the full dataset.
- **Temporal Resampling**: For time-series data, you can resample by time intervals (e.g., daily, weekly, monthly). Aggregating data over intervals can reveal trends and patterns

---

## Improve Performance With Data

**Reframe Your Problem**

- **Regression**: If your original problem was a classification task, consider reframing it as a regression task.
- **Binary Classification to Multiclass**: If you’re solving a binary classification problem (e.g., spam detection), consider expanding it to a multiclass problem.
- **Multiclass to Binary Classification**: Sometimes simplifying a multiclass problem to binary can be beneficial.
- **Anomaly Detection**: If you suspect that your data contains anomalies (outliers), consider reframing your problem as an anomaly detection task. Detect unusual patterns, fraud, or errors.

---

## Improve Performance With Data

**Reframe Your Problem**

- **Time Series Forecasting**: If your data has a temporal component (e.g., stock prices, weather), reframe it as a time series forecasting problem. Predict future values based on historical data.
- **Rating and Recommender Systems**: If you have user-item interactions (e.g., movie ratings, product reviews), consider building a rating or recommender system. Predict user preferences or recommend items based on past behavior.
- **Sequence-to-Sequence Problems**: If your data involves sequences (e.g., natural language, DNA sequences), reframe it as a sequence-to-sequence problem

---

## Improve Performance With Data

**Rescale Your Data**

- **Normalization (Min-Max Scaling)**: In normalization, we transform the data to a fixed range, typically $[0, 1]$. The formula for normalization is:
    $X_{normalized} = \frac{X-X_{min}}{X_{max}-X_{min}}$
    where $X$ is the original value, $X_{min}$​ is the minimum value in the dataset and $X_{max}$​ is the maximum value in the dataset. Normalization is useful when features have different scales and you want them to be on a similar scale.
- **Standardization (Z-Score Scaling)**: Standardization transforms the data to have a mean of 0 and standard deviation of 1.The formula for standardization is:
    $X_{standardized}=\frac{X−\mu}{\sigma}$
    where: $X$ is the original value, $\mu$ is the mean of the dataset and $\sigma$ is the standard deviation of the dataset. Standardization is useful when features have different units or distributions.
- **When to Use Whic**h: Use normalization when you want to preserve the original data range and ensure values are within $[0, 1]$. Use standardization when you want to center the data around 0 and handle outliers effectively.

---

## Improve Performance With Data

**Transform Your Data**

- **Box-Cox Transformation**: The Box-Cox transformation is useful when dealing with non-Gaussian data. It aims to make the data more Gaussian-like. The formula for the Box-Cox transformation is:
    $X_{transformed}=\frac{X^{\lambda}−1}{\lambda}$
    where: $X$ is the original value, $\lambda$ is a parameter that determines the type of transformation (e.g., ($\lambda = 0$) corresponds to the natural logarithm).
- **Exponential Transformation**: Applying an exponential function to your data can help expose certain features. For example, if you have data with exponential growth (e.g., population growth, viral spread), taking the logarithm can linearize the relationship.

---

## Improve Performance With Data

**Transform Your Data**

- **Square Root Transformation**: Taking the square root of data can mitigate the impact of extreme values and make the distribution more symmetric.
- **Rank Transformation**: If your data doesn’t follow a specific distribution, consider ranking the values. This assigns ranks based on their order. Rank-based features can be useful for non-parametric models.
- **Quantile Transformation**: The quantile transformation maps data to a uniform distribution. It’s particularly useful when you want to ensure that your data has a consistent distribution across percentiles.

---

## Improve Performance With Data

**Project Your Data**

- **Principal Component Analysis (PCA)**: PCA is a widely used technique for dimensionality reduction. It identifies the principal components (linear combinations of original features) that explain the most variance in the data. By selecting a subset of these components, you can reduce the dimensionality while retaining as much information as possible. PCA is particularly useful when dealing with correlated features.
- **t-SNE (t-Distributed Stochastic Neighbor Embedding)**: t-SNE is an unsupervised technique that focuses on preserving pairwise similarities between data points. It maps high-dimensional data to a lower-dimensional space (usually 2D or 3D) while emphasizing the separation between dissimilar points. t-SNE is commonly used for visualization and clustering tasks.
---

## Improve Performance With Data

**Project Your Data**

- **UMAP (Uniform Manifold Approximation and Projection)**: UMAP is another dimensionality reduction method that preserves both local and global structure. It’s particularly effective for nonlinear data. UMAP can be used for visualization, clustering, and manifold learning.
- **Autoencoders**: Autoencoders are neural network architectures used for unsupervised representation learning. They consist of an encoder (maps input data to a lower-dimensional representation) and a decoder (reconstructs the original data from the representation).By training an autoencoder, you can learn a compressed representation of your data.

---

## Improve Performance With Data
**Feature Selection**

- **Why Feature Selection?**
    + Simplification: By selecting only relevant features, models become easier to interpret for researchers and users.
    + Efficiency: Reducing the number of features leads to shorter training times.
    + Curse of Dimensionality: When dealing with high-dimensional data, feature selection helps avoid the curse of dimensionality.
    + Model Compatibility: Selecting relevant features improves compatibility with specific learning model classes.
    + Symmetry Encoding: Feature selection can encode inherent symmetries present in the input space.
- **Redundant vs. Irrelevant Features**:
    + Redundant: Features that convey similar information and can be removed without significant loss of information.
    + Irrelevant: Features that do not contribute meaningfully to the model’s performance.

---

## Improve Performance With Data
**Feature Selection**

- **Techniques for Feature Selection**:
    + Filter Methods: These evaluate features independently of the learning algorithm. Common filter methods include:
        - Variance Threshold: Removes low-variance features.
        - Univariate Tests: Selects features based on statistical tests (e.g., chi-squared, ANOVA).
    + Wrapper Methods: Use a predictive model to score feature subsets. Examples include recursive feature elimination (RFE) and forward/backward selection.
        - Embedded Methods: Incorporate feature selection within the learning algorithm itself. For instance:
            - Lasso Regression: Penalizes coefficients, leading to automatic feature selection.
            - Regularized Trees: Decision trees with built-in feature selection.

---

## Improve Performance With Data
**Feature Selection**


- **Checklist for Feature Selection**: When selecting features for your machine learning models, consider the following:
    + Domain Knowledge: Understand the problem and the relevance of each feature.
    + Correlation: Remove highly correlated features.
    + Feature Importance: Use models like random forests or gradient boosting to assess feature importance.


---

## Improve Performance With Data
**Feature engineering**

- **Feature Creation**:
    + Binning: Convert continuous variables (e.g., age) into categorical bins (e.g., age groups: young, middle-aged, senior).
    + One-Hot Encoding: Convert categorical variables (e.g., country names) into binary columns (0 or 1) for each category.
    + Date Decomposition: Extract year, month, day, day of the week, etc., from date features.
    + Text Features:
        - Bag of Words: Create a vector representation of text data by counting word occurrences.
        - TF-IDF: Weigh words based on their importance in a document.
        - Interaction Terms: Multiply or combine existing features to capture interactions (e.g., age * income).
    
    
---
## Improve Performance With Data
**Feature engineering**

- **Aggregation**:
    + Group Statistics: Calculate summary statistics (mean, median, max, etc.) for groups within a dataset.
    + Time-Based Aggregation: Aggregate data over time intervals (e.g., daily, weekly) to create new features.
    + Rolling Windows: Compute moving averages, cumulative sums, or other rolling statistics.
    
- **Domain-Specific Features**:
    + Business Metrics: Create features relevant to your domain (e.g., customer churn rate, conversion rate).
    + Geospatial Features: Use latitude, longitude, and distance calculations.
    + Seasonal Trends: Capture seasonal patterns (e.g., holiday season, summer).
    
---
## Improve Performance With Data
**Feature engineering**

- **Feature Scaling and Normalization**:
    + Standardize features to have zero mean and unit variance (e.g., using Z-score normalization).
    + Min-max scaling: Scale features to a specific range (e.g., [0, 1]).

- **Feature Importance**:
    + Random Forest Feature Importance: Measures how much each feature contributes to model performance.
    + Permutation Importance: Shuffles feature values and observes the impact on model accuracy.


---
## Improve Performance With Algorithms

**Strategy**: 
- Identify the algorithms and data representations that perform above a baseline of performance and better than average. 
- Remain skeptical of results and design experiments that make it hard to fool yourself.

---
## Improve Performance With Algorithms

**Resampling Method**

- **Train and Test Split** :
    + Description: The train and test split is the simplest resampling method and widely used.
    + Process, separate your dataset into two parts (Rows are randomly assigned to each dataset to ensure objectivity):
        - Training Dataset: Used to train the machine learning model.
        - Test Dataset: Held back to evaluate the model’s performance.
    + Purpose:
        - Estimate how well the model will perform on unseen data.
        - Helps choose model parameters or select the best model.
    + Consistency:
        - When comparing multiple algorithms or configurations, use the same train and test split for fair comparison.
        - You can achieve this by seeding the random number generator consistently or holding the same split for multiple algorithms.

---
## Improve Performance With Algorithms

**Resampling Method**

- **k-fold Cross Validation**:
    + Description: k-fold cross validation divides the dataset into k subsets (folds) and iteratively trains and evaluates the model.
    + Process:
        - Split the data into k equally sized folds.
        - Train the model on k-1 folds and evaluate it on the remaining fold.
        - Repeat this process k times, using a different fold as the test set each time.
        - Compute the average performance across all k iterations.

---
## Improve Performance With Algorithms

**Resampling Method**

- **k-fold Cross Validation**:
    + Benefits:
        - Reduces bias by using different subsets for training and testing.
        - Provides a more robust estimate of model performance.
    + Holdout Validation Dataset:
        - Sometimes, a separate holdout validation dataset is used in addition to k-fold cross-validation.
        - The holdout dataset is not part of the k-fold process but serves as an additional validation set.
    + Choosing k:
        - Common choices for k are 5 or 10, but it depends on the dataset size and computational resources.


---
## Improve Performance With Algorithms

**Resampling Method**

- How to Choose:
    + Use train-test split for quick initial assessment.
    + Use k-fold cross-validation for more robust evaluation.
    + Consider a holdout validation dataset if needed.

---
## Improve Performance With Algorithms
**Evaluation Metric**

- **Area Under the Receiver Operating Characteristic Curve (AUC-ROC)**: This metric is widely used for binary classification. It assesses the model’s ability to distinguish between positive and negative instances. A higher AUC-ROC indicates better performance.

- **Precision, Recall**:These metrics are useful when dealing with imbalanced datasets. Precision measures the proportion of true positive predictions among all positive predictions, while recall (also known as sensitivity) quantifies the proportion of true positives correctly identified by the model.

- **F1-Score**: The F1-score balances precision and recall. It’s particularly valuable when both false positives and false negatives need to be minimized.
    
---
## Improve Performance With Algorithms
**Evaluation Metric**

- **Mean Squared Error (MSE) and R-squared ($R^2$) for Regression**:
    + MSE measures the average squared difference between the predicted values and the actual (observed) values in a regression model. 
    $MSE=\frac{1}{n}\Sigma_{i=1} ^{n}(y_i - \hat{y_i})^2$ where: $n$ is the number of data points, $y_i$​ represents the actual value for the (i)-th data point and $\hat{y_i}$​ represents the predicted value for the (i)-th data point. A lower MSE indicates better model performance. It penalizes larger errors more heavily due to the squaring operation.
    + $R^2$ (also known as the coefficient of determination) quantifies the proportion of variance in the dependent variable (target) that is explained by the independent variables (features) in the regression model. $R^2 = 1-\frac{SSR}{SST}$,​ where: $SSR$ is the sum of squared residuals (sum of squared differences between predicted and actual values), $SST$ is the total sum of squares (sum of squared differences between actual values and the mean of the dependent variable). An $R^2$ value close to 1 indicates that a large proportion of the variance in the target variable is explained by the model. An $R^2$ value close to 0 suggests that the model does not explain much of the variance. Negative $R^2$ values can occur if the model performs worse than a simple mean-based model.
    

---
## Improve Performance With Algorithms
**Evaluation Metric**

- **Log Loss (Logarithmic Loss)**:
    + Log Loss measures the discrepancy between predicted probabilities and actual class labels. It quantifies how well a model’s predicted probabilities align with the true labels.
    $LogLoss = -\frac{1}{n}\Sigma_{i=1} ^n (y_i \cdot \log(\hat{y_i}) + (1-y_i)\cdot \log(1-\hat{y_i}))$, where: $n$ is the number of data points, $y_i$​ represents the actual binary class label (0 or 1) for the (i)-th data point and $\hat{y_i}$​ represents the predicted probability of the positive class (class 1) for the (i)-th data point. Lower log loss values indicate better model performance. Log loss penalizes incorrect predictions based on their confidence scores (predicted probabilities). It encourages the model to produce well-calibrated probabilities.

---
## Improve Performance With Algorithms
**Evaluation Metric**

- **Matthews Correlation Coefficient ($MCC$)**: The $MCC$, invented by Brian Matthews in 1975, measures the differences between actual values and predicted values in a binary classification problem.
    + $MCC=\frac{TP\cdot TN - FP \cdot FN}{\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}}$​, where:
        - $TP$ is the count of true positives.
        - $TN$ is the count of true negatives.
        - $FP$ is the count of false positives.
        - $FN$ is the count of false negatives.
    +  $MCC$ ranges from -1 to 1 (similar to a correlation coefficient). A value close to 1 indicates strong agreement between predicted and actual labels. A value close to -1 suggests strong disagreement. A value close to 0 means the classifier performs no better than random guessing.

    + Advantages of $MCC$: Unlike the F1 score, which focuses on positive class performance, MCC considers all four entries in the confusion matrix (TP, TN, FP, FN). It helps identify the effectiveness of the classifier for both positive and negative class samples. MCC is particularly useful for imbalanced classification problems.

---
## Improve Performance With Algorithms
**Evaluation Metric**

- **Matthews Correlation Coefficient ($MCC$)** Example:
    + Consider a confusion matrix with the following entries: (TP = 90), (FP = 4), (TN = 1), (FN = 5)
    + The resulting MCC is approximately 0.14, indicating poor performance. 
    + In contrast, the F1 score for the same example is misleadingly high (0.9524).

- Conclusion: 
    + While MCC provides a comprehensive view of classification performance, the choice between MCC and other metrics (such as F1-score) depends on the problem context and class labeling conventions.

---
## Improve Performance With Algorithms

**Evaluation Metric**

- Custom Metrics:
    + Problem Context: Understand the unique aspects of your problem. Consider factors like class imbalance, business requirements, and domain-specific constraints.
    + Define Your Metric, identify what you want to measure. For example:
        - If you’re working on a recommendation system, you might create a custom metric that combines relevance, diversity, and novelty.
        - If you’re dealing with time-series data, you could design a metric that accounts for temporal patterns or lagged effects.
        - If fairness is crucial, create a custom fairness metric that assesses disparities across different demographic groups.
    + Mathematical Formulation:
        - Express your custom metric mathematically. It could involve combining existing metrics, introducing weights, or incorporating domain-specific knowledge.
        - For instance, if you’re building a fraud detection model, you might create a custom metric that balances precision, recall, and the cost of false positives.

---
## Improve Performance With Algorithms

**Evaluation Metric**

- Custom Metrics:
    + Implementation:
        - Implement your custom metric in your evaluation pipeline.
        - Ensure that it aligns with your problem’s objectives and provides meaningful insights.

---
## Improve Performance With Algorithms

**Evaluation Metric**

- Example Custom Metrics:
    + Normalized Discounted Cumulative Gain (NDCG): Used in information retrieval and recommendation systems to measure the quality of ranked lists.
    + Coverage: Measures the proportion of items covered by recommendations.
    + Gini Index: Evaluates income inequality and can be adapted for other contexts.
    + Custom Loss Functions: If standard loss functions don’t fit your problem, design your own (e.g., Huber loss, quantile loss).


---
## Improve Performance With Algorithms

**Baseline Performance**

- Random Algorithm (Random Guessing):
    + A random algorithm predicts outcomes randomly, without any knowledge of the data. For binary classification, it might predict class labels with a 50% chance for each class.
    + Example: If you’re predicting whether an email is spam or not, a random algorithm would randomly assign “spam” or “not spam” labels.
    + Baseline performance: The accuracy achieved by the random algorithm.
    
---
## Improve Performance With Algorithms

**Baseline Performance**

- Zero Rule Algorithm (Predict Mean or Mode):
    + The zero rule algorithm makes predictions based on the most frequent class (mode) or the average value (mean) of the target variable.
    + For classification:
        - Predict the majority class for all instances.
        - Baseline performance: Accuracy based on the majority class.
    + For regression:
        - Predict the mean (or median) of the target variable for all instances.
        - Baseline performance: Mean squared error (MSE) or other regression metrics based on the mean prediction.

---
## Improve Performance With Algorithms

**Baseline Performance**

- Why Establish a Baseline?
    + Baselines help us understand whether our model provides meaningful improvements over simple methods.
    + If our advanced model performs only slightly better than the baseline, it may not be worth the added complexity.

- Statistical Significance Tests:
    + Use statistical tests (such as t-tests or permutation tests) to determine if the difference between the advanced model and the baseline is statistically significant.
    + If the improvement is significant, it justifies using the more complex model.


---
## Improve Performance With Algorithms

**Linear Algorithms**

Linear Regression:
    - Description: Linear regression is a fundamental algorithm for modeling the relationship between input features (independent variables) and a continuous target variable (output).
    - How It Works: It assumes a linear relationship between the features and the target. The goal is to find the best-fitting line (or hyperplane in higher dimensions) that minimizes the sum of squared errors.
    - Use Cases: Linear regression is commonly used for predicting numerical values (e.g., house prices, stock prices, temperature).
    - Advantages: Simple, interpretable, and fast to train.

---
## Improve Performance With Algorithms

**Linear Algorithms**
Ridge Regression (L2 Regularization):    
    - Description: Ridge regression extends linear regression by adding an L2 regularization term to the loss function. It helps prevent overfitting.
    - How It Works: The regularization term penalizes large coefficients, encouraging simpler models.
    - Use Cases: When dealing with multicollinearity (highly correlated features) or when you want to avoid overfitting.
    - Advantages: Handles multicollinearity, robust to outliers.

---
## Improve Performance With Algorithms

**Linear Algorithms**
Lasso Regression (L1 Regularization):
    - Description: Similar to ridge regression, lasso regression adds an L1 regularization term. It encourages sparsity by driving some coefficients to exactly zero.
    - How It Works: Lasso performs feature selection by shrinking less important features to zero.
    - Use Cases: Feature selection, when you want a sparse model.
    - Advantages: Automatic feature selection, interpretable.

---
## Improve Performance With Algorithms

**Linear Algorithms**
Elastic Net Regression:
    - Description: Elastic Net combines L1 (lasso) and L2 (ridge) regularization.
    - How It Works: It balances the benefits of both regularization techniques.
    - Use Cases: When you need both feature selection and robustness against multicollinearity.
    - Advantages: Flexible, handles correlated features.


---
## Improve Performance With Algorithms

**Linear Algorithms**
Logistic Regression:
- **Description**: Despite the name, logistic regression is a linear model for binary classification (predicting probabilities of class membership).
- **How It Works**: It models the log-odds of the probability of the positive class.
- **Use Cases**: Spam detection, medical diagnosis, churn prediction.
- **Advantages**: Interpretable, widely used.

---
## Improve Performance With Algorithms
**Linear Algorithms**
Support Vector Machines (SVM):
- Description: SVMs can be linear or nonlinear, but the linear variant is powerful for binary classification.
- How It Works: SVM finds the hyperplane that best separates the classes while maximizing the margin.
- Use Cases: Image classification, text categorization, anomaly detection.
- Advantages: Effective in high-dimensional spaces, robust to outliers.

---
## Improve Performance With Algorithms

**Linear Algorithms**
Perceptron:
- Description: The perceptron is a simple linear classifier.
- How It Works: It updates weights based on misclassified instances.
- Use Cases: Basic binary classification tasks.
- Advantages: Lightweight, easy to understand.


---
## Improve Performance With Algorithms

**Nonlinear Algorithms**

- Support Vector Machines (SVM): SVM is a versatile algorithm that can handle both linear and nonlinear problems. In the nonlinear case, SVM uses the “kernel trick” to map input features into a higher-dimensional space, where they become linearly separable. Common kernel functions include the radial basis function (RBF), polynomial, and sigmoid kernels.
- Decision Trees: Decision trees are non-linear classifiers that recursively split the feature space based on attribute values. They can capture complex decision boundaries and are interpretable. However, they can be prone to overfitting if not pruned properly.
- Neural Networks: Neural networks (including deep learning models) are highly flexible and can learn intricate patterns from data. They consist of interconnected layers of neurons and are particularly effective for complex tasks. However, they require more data and computational resources.
    
---
## Improve Performance With Algorithms

**Nonlinear Algorithms**

- k-Nearest Neighbors (KNN): KNN is a simple yet effective non-parametric algorithm. It classifies an instance based on the majority class of its k nearest neighbors in the feature space. It works well for both linear and nonlinear problems.
- Random Forests: Random forests are ensemble methods that combine multiple decision trees. They reduce overfitting and improve performance by averaging predictions from individual trees.
- Naive Bayes: Naive Bayes is a probabilistic classifier based on Bayes’ theorem. Despite its “naive” assumptions (independence of features), it often performs surprisingly well for text classification and other tasks.

**Remember that the choice of algorithm depends on your specific problem, dataset size, interpretability requirements, and computational resources.** 
**It’s a good practice to spot-check multiple algorithms and compare their performance before selecting the most suitable one for your task.**


---
## Improve Performance With Algorithms

**Steal from Literature / State of the art**

When researching algorithms for specific problems, it’s valuable to explore the existing literature to gain insights and inspiration. Here are some commonly reported algorithms that have demonstrated success in various domains:

- Convolutional Neural Networks (CNNs): CNNs excel in image recognition tasks. They use convolutional layers to automatically learn hierarchical features from images. CNNs have been widely used for image classification, object detection, and segmentation.
- Long Short-Term Memory (LSTM) Networks: LSTMs are a type of recurrent neural network (RNN) designed for sequential data. They work well for tasks like natural language processing (NLP), speech recognition, and time series prediction.
- Transformer Models: Transformers, such as BERT and GPT, have revolutionized NLP tasks. They use self-attention mechanisms to capture contextual information and achieve state-of-the-art results in tasks like text classification, named entity recognition, and machine translation.

---
## Improve Performance With Algorithms

**Steal from Literature / State of the art**

- Random Forests: Random forests are ensemble methods that combine multiple decision trees. They work well for both classification and regression tasks. Random forests are robust, handle missing data, and provide feature importance scores.
- Gradient Boosting Machines (GBMs): GBMs, like XGBoost and LightGBM, are boosting algorithms that sequentially build an ensemble of weak learners. They perform well in structured data tasks and are known for their high accuracy and interpretability.
- Reinforcement Learning Algorithms: For problems involving sequential decision-making, reinforcement learning (RL) algorithms like Q-learning, policy gradients, and actor-critic methods can be effective. RL has applications in robotics, game playing, and recommendation systems.
- Graph Neural Networks (GNNs): GNNs operate on graph-structured data and are useful for tasks like node classification, link prediction, and social network analysis. They learn representations by aggregating information from neighboring nodes.


---
## Improve Performance With Algorithms

**Standard Configurations**

When evaluating algorithms, it’s essential to start with standard configurations to give each method a fair chance. 
While hyperparameter tuning comes later, here are some common configurations for the algorithms we discussed earlier:

- Support Vector Machines (SVM):
    + Kernel: The choice of kernel (linear, RBF, polynomial, etc.) affects SVM performance. Start with RBF (Gaussian) kernel as a default.
    + Regularization parameter: Set a moderate value (e.g., 1.0) to avoid overfitting.
    +Other SVM-specific parameters: Explore settings like shrinking heuristic and cache size.

---
## Improve Performance With Algorithms

**Standard Configurations**
  
- Decision Trees:
    + Maximum depth: Limit the depth to prevent overfitting (e.g., set a maximum depth of 5 or 10).
    + Minimum samples per leaf: Set a reasonable value (e.g., 5) to control leaf node size.
    + Criterion (e.g., Gini impurity or entropy): Use the default or experiment with both.
    
- Neural Networks (NNs):
    + Architecture: Start with a simple feedforward architecture (e.g., one hidden layer).
    + Activation functions: Use ReLU (Rectified Linear Unit) for hidden layers.
    + Learning rate: Begin with a small value (e.g., 0.001).
    + Batch size: Experiment with different batch sizes (e.g., 32, 64).

---
## Improve Performance With Algorithms

**Standard Configurations**


- k-Nearest Neighbors (KNN):
    + Number of neighbors (k): Try different values (e.g., 3, 5, 10).
    + Distance metric: Euclidean distance is common, but consider others (e.g., Manhattan).
- Random Forests:
    + Number of trees: Start with 100 trees.
    + Maximum depth: Limit tree depth to avoid overfitting.
    + Feature subsampling: Randomly select features for each tree (e.g., sqrt(n_features)).
- Naive Bayes:
    + No hyperparameters to tune, as Naive Bayes is simple and assumes feature independence.


**Remember that these are initial settings, and you’ll fine-tune them later during model selection and validation.**
**Additionally, consider cross-validation to assess performance across different configurations.**



---
## Improve Performance With Algorithm Tuning
**Strategy**: 
Get the most out of well-performing machine learning algorithms.

---
## Improve Performance With Algorithm Tuning

**Diagnostics**: Diagnosing the performance of machine learning algorithms is crucial for improving their effectiveness.

- Overfitting:
    + Definition: An overfit model is one that has learned the training data too well, including the statistical noise or random fluctuations. It performs exceptionally well on the training set but poorly on unseen data (test/validation set).
    + Causes:
        - Using a complex model for a simple problem, which captures noise from the data.
        - When the data itself lacks inherent patterns.
    + Visual Causes:
        - Low training accuracy and low test/validation accuracy.
        - High training accuracy but poor test/validation accuracy.

---
## Improve Performance With Algorithm Tuning

**Diagnostics**: Diagnosing the performance of machine learning algorithms is crucial for improving their effectiveness.

- Overfitting:
    + Learning Curve:
        - Initially high training loss that gradually decreases with more examples, but eventually flattens out.
    + Action:
        - Consider simplifying the model, reducing complexity, or using regularization techniques.

---
## Improve Performance With Algorithm Tuning

**Diagnostics**

- Underfitting:
    + Definition: An underfit model fails to learn the underlying patterns in the data. It performs poorly on both the training set and the test/validation set.
    + Causes:
        - Using a simple model for a complex problem, missing important patterns.
        - When the data itself lacks inherent patterns.
    + Visual Causes:
        - Low training accuracy and low test/validation accuracy.
        - High training accuracy but poor test/validation accuracy.

---
## Improve Performance With Algorithm Tuning

**Diagnostics**

- Underfitting:
    + Learning Curve:
        - Gradual convergence of training and validation loss, indicating that adding more training examples doesn’t help improve performance.
    + Action:
        - Consider using a more complex model or collecting more relevant data.


---
## Improve Performance With Algorithm Tuning

**Diagnostics**

- Learning Curves:
    + Purpose: Learning curves plot the training and validation loss by incrementally adding new training examples.
    + Interpretation:
        - If the curves converge and remain close, it suggests a good fit model.
        - If the training loss remains flat, it indicates underfitting.
        - If the training loss decreases but the validation loss increases, it suggests overfitting.
    + Example:
        - Using logistic regression to predict the species of the Iris dataset, we can create a learning curve. A good fit model shows similar cross-validation accuracy and training accuracy.


---
## Improve Performance With Algorithm Tuning

**Try Intuition**: Intuition plays a significant role in machine learning, especially when fine-tuning algorithms. 
While rigorous analysis and experimentation are essential, sometimes our gut feelings can guide us toward promising directions.

- Exploring Hyperparameters:
    + Gut Feeling: When you’ve worked with a specific algorithm for a while, you develop a sense of which hyperparameters might matter most.
    + Action: Trust your intuition and experiment with different values for hyperparameters. For example:
        - In neural networks, adjusting the learning rate, batch size, or the number of hidden layers.
        - In decision trees, tuning the maximum depth, minimum samples per leaf, or the splitting criterion.
    + Feedback Cycle: Quickly iterate by training models with different hyperparameters and observing their performance.

---
## Improve Performance With Algorithm Tuning

**Try Intuition** 
- Feature Engineering:
    + Gut Feeling: Intuition can guide you toward relevant features or transformations.
    + Action:
        - Consider domain-specific knowledge: What features might be important for your problem?
        - Create new features by combining existing ones (e.g., ratios, differences, interactions).
        - Use intuition to identify potential interactions between features.
    + Feedback Cycle: Observe how these engineered features impact model performance.

---
## Improve Performance With Algorithm Tuning

**Try Intuition**

- Model Selection:
    + Gut Feeling: Sometimes, you just have a hunch that a particular algorithm might work well for your problem.
    + Action:
        - Trust your intuition and try different algorithms:
            + Linear models (e.g., linear regression, logistic regression).
            + Tree-based models (e.g., decision trees, random forests, gradient boosting).
            + Neural networks.
        - Consider the problem’s characteristics (e.g., linearity, non-linearity, feature importance).
    + Feedback Cycle: Compare the performance of different models.
    
---
## Improve Performance With Algorithm Tuning

**Try Intuition**

- Data Exploration:
    + Gut Feeling: When exploring your dataset, intuition can guide you toward interesting patterns.
    +  Action:
        - Visualize data distributions, correlations, and outliers.
        - Trust your intuition to identify potential data issues (missing values, outliers, skewed distributions).
    + Feedback Cycle: Clean the data based on your observations.


---
## Improve Performance With Algorithm Tuning

**Steal from literature**: The literature provides valuable insights into commonly used parameters and their ranges.

- Decision Trees:
    + Parameters:
        - max_depth: Controls the maximum depth of the tree. Smaller values prevent overfitting.
        - min_samples_split: Minimum number of samples required to split an internal node.
        - min_samples_leaf: Minimum number of samples required in a leaf node.
    + Ranges:
        - max_depth: Typically set between 3 and 10.
        - min_samples_split: Often set to 2 to 10% of the total samples.
        - min_samples_leaf: Usually set to 1 or 5.
    
---
## Improve Performance With Algorithm Tuning

**Steal from literature**
- Random Forests:
    + Parameters:
        - Same as decision trees, plus:
        - n_estimators: Number of trees in the forest.
        - max_features: Number of features to consider when splitting.
    + Ranges:
        - n_estimators: Commonly between 100 and 1000.
        - max_features: Usually set to “sqrt” (square root of the total features).


---
## Improve Performance With Algorithm Tuning

**Steal from literature**
- Gradient Boosting:
    + Parameters:
        - n_estimators: Number of boosting stages (trees).
        - learning_rate: Controls the contribution of each tree.
        - max_depth: Similar to decision trees.
    + Ranges:
        - n_estimators: Typically between 100 and 1000.
        - learning_rate: Varies (0.01 to 0.1 is common).
        - max_depth: Similar to decision trees (3 to 10).

---
## Improve Performance With Algorithm Tuning

**Steal from literature**
- Neural Networks (Deep Learning):
    + Parameters:
        - hidden_layers: Number of hidden layers.
        - neurons_per_layer: Number of neurons in each hidden layer.
        - activation_function: e.g., ReLU, sigmoid, tanh.
    + Ranges:
        - hidden_layers: Typically 1 to 3.
        - neurons_per_layer: Experiment with different sizes (e.g., 64, 128, 256).
        - activation_function: Depends on the problem.


---
## Improve Performance With Algorithm Tuning

**Random Search** is a powerful technique for hyperparameter optimization in machine learning. 
It allows you to explore a wide range of hyperparameter values without exhaustively searching the entire space.

- param_distributions:
    + Defines the search space for hyperparameters.
    + Specify a dictionary where each key corresponds to a hyperparameter, and the value is a distribution (e.g., uniform, normal) from which random values are drawn.
    + Example: { 'learning_rate': [0.01, 0.1, 0.2], 'max_depth': [3, 5, 10] }
- n_iter:
    + The number of random hyperparameter combinations to be chosen.
    + Determines how many random samples are drawn from the search space.
    + Larger values explore more combinations but increase computation time.

---
## Improve Performance With Algorithm Tuning

**Random Search**
- scoring:
    + The method of scoring used to assess the model’s performance.
    + Common options include accuracy, F1-score, mean squared error (MSE), etc.
     + Choose an appropriate metric based on your problem type (classification or regression).
- random_state:
    + Controls the randomization of the sample of hyperparameter combinations obtained at each execution.
    + Set a fixed seed for reproducibility or leave it as None for true randomness.
- n_jobs:
    + Specifies the number of parallel jobs that will be run when the search is executed.
    + Use -1 to utilize all available CPU cores for faster search.

---
## Improve Performance With Algorithm Tuning

**Grid search** is a systematic approach for hyperparameter tuning in machine learning. 
It involves evaluating a predefined set of hyperparameter combinations to find the best configuration for your model.

- Learning Rate:
    + Purpose: Controls the step size during gradient descent.
    + Values: Typically a grid of values like [0.001, 0.01, 0.1].
    + Impact: A higher learning rate may lead to faster convergence but risk overshooting the optimal solution.
- Batch Size:
    + Purpose: Determines the number of training examples used in each iteration.
    + Values: Common choices include [16, 32, 64].
    + Impact: Larger batch sizes stabilize training but require more memory.

---
## Improve Performance With Algorithm Tuning

**Grid search** 
- Number of Epochs:
    + Purpose: Defines the number of times the model iterates over the entire training dataset.
    + Values: Start with a coarse grid (e.g., [10, 20, 50]) and refine later.
    + Impact: Too few epochs may underfit, while too many may overfit.
- Number of Neurons in Hidden Layers:
    + Purpose: Determines the complexity of the neural network.
    + Values: Explore different sizes (e.g., [64, 128, 256]).
    + Impact: More neurons allow the model to learn complex patterns.


---
## Improve Performance With Algorithm Tuning

**Grid search** 
- Activation Functions:
    + Purpose: Defines the non-linearity of neural network layers.
    + Values: Consider options like 'relu', 'tanh', and 'sigmoid'.
    + Impact: Different activations affect model behavior.
- Weight Initialization:
    + Purpose: Sets initial weights for neural network layers.
    + Values: Options include 'glorot_uniform', 'he_normal', etc.
    + Impact: Proper initialization can improve convergence.

---
## Improve Performance With Algorithm Tuning

**Grid search** 
- Dropout Rate:
    + Purpose: Controls regularization by randomly dropping neurons during training.
    + Values: Try [0.1, 0.2, 0.5].
    + Impact: Prevents overfitting.
- Optimization Algorithms:
    + Purpose: Determines how the model updates weights.
    + Values: Explore options like 'adam', 'sgd', and 'rmsprop'.
    + Impact: Different algorithms have varying convergence behavior.

---
## Improve Performance With Algorithm Tuning

**Optimize**

- Parameters vs. Hyperparameters:
    + Parameters: These are internal to the model and are learned from data during training. Examples include weights in neural networks, support vectors in support vector machines, and coefficients in linear regression.
    + Hyperparameters: These are external to the model and cannot be estimated from data. They influence the model’s behavior but are set manually by the practitioner. Examples include learning rates, regularization strengths, and the number of hidden layers in neural networks.


---
## Improve Performance With Algorithm Tuning

**Optimize**
- Optimization Algorithms: Optimization is the process of finding input parameters that result in the maximum or minimum value of an objective function. It underlies many machine learning algorithms. Different optimization algorithms are used to find optimal hyperparameters. Two important ones:
    + Gradient Descent:
        - Purpose: Finds local minima of a differentiable function.
        - Geometric Intuition: Imagine a parabolic graph (e.g., $Y=X^2$). The minima correspond to the origin (0, 0). As we move closer to the minima, the slope (gradient) reduces. Gradient Descent exploits this behavior.
        - Algorithm:
            + Start with an initial point (e.g.,$X_0$).
            + Update the point iteratively: $X_i=X_{i-1}-r \cdot \frac{df}{dx}$​, where $r$ is the learning rate and $\frac{df}{dx}$​ is the gradient.
            + Stop when the difference between consecutive points is small.
        - Application: Used for model training and optimization.

---
## Improve Performance With Algorithm Tuning

**Optimize**
- Different optimization algorithms are used to find optimal hyperparameters. Let’s discuss the second one:
    + Stochastic Gradient Descent (SGD):
        - Purpose: An extension of gradient descent.
        - Algorithm:
            + Instead of using the entire dataset, randomly sample a mini-batch of data.
            + Update the model parameters based on the gradient computed from the mini-batch.
            + Repeat for multiple mini-batches.
        - Advantages: Faster convergence, less memory usage, and better generalization.
        - Application: Commonly used in deep learning and large-scale optimization.

---
## Improve Performance With Algorithm Tuning

**Optimize**
Leraning Rate:

- Definition: Determines the step size during optimization.
- Role: Affects how quickly the algorithm converges to the optimal solution.
- Tuning: Experiment with different learning rates (e.g., 0.001, 0.01, 0.1) to find the best value.

---
## Improve Performance With Algorithm Tuning

**Optimize**
Grid Search and Random Search:

- Grid Search: Exhaustively evaluates hyperparameter combinations from predefined grids. Useful for exploring a wide range of values.
- Random Search: Randomly samples hyperparameters from specified distributions. Efficient for exploring diverse configurations.
- Application: Both methods help find optimal hyperparameters.


---
## Improve Performance With Algorithm Tuning
**Alternate implementations**:Exploring alternate implementations of machine learning algorithms can be beneficial for improving performance.

- Differential Testing:
    + Concept: Differential testing involves comparing results from different implementations of the same algorithm using the same data.
    + Application Beyond Deep Learning:
        - A recent study explored differential testing for classification algorithms beyond deep learning.
        - Frameworks like Scikit-learn, Weka, Spark MLlib, and Caret were considered.
        - While there’s potential, determining identical configurations across frameworks can be challenging.
        - Deviations in scores and classes were observed, but a lenient approach based on statistical significance helped mitigate test failures.

---
## Improve Performance With Algorithm Tuning
**Alternate implementations**

- Linear Regression:
    + Importance: Linear regression is a fundamental technique.
    + Successful Application: Differential testing has been effectively applied to linear regression.
    + Ground Truth: In this case, analytic solutions served as ground truth oracles.
    + Multiple Powerful Implementations: The availability of powerful linear regression implementations facilitated this approach.


---
## Improve Performance With Algorithm Tuning
**Alternate implementations**

- Gradient Boosting:
    + Ensemble Algorithm: Gradient boosting combines multiple decision trees.
    +  Implementations:
        - Scikit-Learn: Provides a robust implementation.
        - XGBoost, LightGBM, and CatBoost: Other popular libraries for gradient boosting.
    + Standardized Code Examples: You can find ready-to-use code examples for these implementations in Python.

---
## Improve Performance With Algorithm Tuning
**Alternate implementations**

- Machine Learning Algorithms:
    + Decision trees.
    + Naive Bayes.
    + Random forest.
    + Support vector machines.
    + K-nearest neighbors.
    + K-means clustering.
    + Gaussian mixture models.
    + Hidden Markov models.

---
## Improve Performance With Algorithm Tuning
**Algorithm Extensions**

- Ensemble Techniques:
    + Purpose: Combine multiple models to create a stronger overall predictor. Examples:
        - Bagging (Bootstrap Aggregating): Constructs an ensemble of models by training them on bootstrapped subsets of the data. Random Forest is a popular bagging-based algorithm.
        - Boosting: Iteratively builds a strong model by focusing on samples that were misclassified in previous iterations. Algorithms like AdaBoost, Gradient Boosting (GBM), and XGBoost fall into this category.
        - Stacking: Combines predictions from multiple models as input to a meta-model (often a simple linear regression or neural network).
---
## Improve Performance With Algorithm Tuning
**Algorithm Extensions**

- Regularization Techniques:
    + Purpose: Prevent overfitting by adding constraints to the model. Examples:
        - L1 (Lasso) Regularization: Adds an absolute value penalty to the model’s coefficients, encouraging sparsity.
        - L2 (Ridge) Regularization: Adds a squared value penalty to the coefficients, preventing extreme weights.
        - Elastic Net: Combines L1 and L2 regularization.
---
## Improve Performance With Algorithm Tuning
**Algorithm Extensions**

- Feature engineering:
    + Purpose: Create new features or transform existing ones to improve model performance. Examples:
        - Polynomial Features: Introduce higher-order terms (e.g., quadratic, cubic) of existing features.
        - Interaction Terms: Multiply features together to capture interactions.
        - Feature Scaling: Normalize or standardize features to ensure consistent scales.


---
## Improve Performance With Algorithm Tuning
**Algorithm Extensions**

- Advanced Decision Trees:
    + Purpose: Enhance decision tree-based algorithms. Examples:
        - Random Forest: An ensemble of decision trees that reduces overfitting..
        - Gradient Boosting Machines (GBM): Sequentially builds decision trees, correcting errors made by previous trees.
        - XGBoost: An optimized version of GBM with additional features like regularization and parallelization.
---
## Improve Performance With Algorithm Tuning
**Algorithm Extensions**

- Kernel Methods:
    + Purpose: Transform data into a higher-dimensional space to capture complex patterns. Examples:
        - Support Vector Machines (SVM): Uses kernel functions (e.g., linear, polynomial, radial basis function) to find optimal hyperplanes.
        - Kernel PCA: Applies kernel trick to principal component analysis (PCA).
---
## Improve Performance With Algorithm Tuning
**Algorithm Extensions**

- Neural Network Architectures:
    + Purpose: Explore different neural network structures. Examples:
        - Convolutional Neural Networks (CNNs): Effective for image and spatial data.
        - Recurrent Neural Networks (RNNs): Suitable for sequential data (e.g., time series, natural language)..
        - Long Short-Term Memory (LSTM): A type of RNN with memory cells.
---
## Improve Performance With Algorithm Tuning
**Algorithm Extensions**

- Hyperparameter Optimization:
    + Purpose: Fine-tune hyperparameters for better performance. Methods:
        - Grid Search: Exhaustively search predefined hyperparameter combinations.
        - Random Search: Randomly sample hyperparameters from specified distributions.
        - Bayesian Optimization: Uses probabilistic models to guide the search

---
## Improve Performance With Algorithm Tuning
**Algorithm Customizations**

Customizing machine learning algorithms for specific use cases is essential to achieve optimal performance.

- Domain-Specific Expertise:
    + Purpose: Adapt the algorithm to specialized knowledge in certain domains. Examples:
        - In healthcare, customize an algorithm to handle medical data, patient records, and specific disease patterns.
        - In finance, adjust an algorithm to consider stock market trends, economic indicators, and risk factors.
    
---
## Improve Performance With Algorithm Tuning
**Algorithm Customizations**
   
- Data Specificity:
    + Purpose: Fine-tune the algorithm with your own data. Examples:
        - If you’re building a recommendation system, incorporate user behavior data specific to your platform.
        - For image classification, train the algorithm on a dataset relevant to your application (e.g., medical images, satellite imagery).

---
## Improve Performance With Algorithm Tuning
**Algorithm Customizations**
   
- Hyperparameter Tuning:
    + Purpose: Optimize hyperparameters for better performance. Examples:
        - Adjust learning rates, regularization strengths, and batch sizes.
        - Experiment with different architectures (e.g., neural network layers, tree depths).
    
---
## Improve Performance With Algorithm Tuning
**Algorithm Customizations**
   
- Loss Function Selection:
    + Purpose: Choose an appropriate loss function based on your problem. Examples:
        - For regression tasks, use mean squared error (MSE) or mean absolute error (MAE).
        - For classification, consider cross-entropy loss or hinge loss.

---
## Improve Performance With Algorithm Tuning
**Algorithm Customizations**
   
- Internal Optimization Methods:
    +  Purpose: Modify optimization techniques. Examples:
        - Use stochastic gradient descent (SGD) with momentum or adaptive learning rates (e.g., Adam, RMSProp).
        - Explore second-order optimization methods (e.g., L-BFGS).
---
## Improve Performance With Algorithm Tuning
**Algorithm Customizations**
    
- Feature Engineering:
    + Purpose: Create new features or preprocess existing ones. Examples:
        - Extract relevant information from text (e.g., bag-of-words, TF-IDF).
        - Normalize numerical features (e.g., min-max scaling, z-score normalization).
 
---
## Improve Performance With Algorithm Tuning
**Algorithm Customizations**
    
- Algorithm-Specific Decisions:
    + Purpose: Tailor the algorithm to your problem characteristics. Examples:
        - In decision trees, choose the splitting criterion (e.g., Gini impurity, information gain).
        - For support vector machines (SVM), select the kernel type (e.g., linear, polynomial, radial basis function).

---
## Improve Performance With Algorithm Tuning

# CONTACT EXPERTS!

---

## Improve Performance With Ensembles

**Strategy**: 
Combine the predictions of multiple well-performing models.


---
## Improve Performance With Ensembles
**Blend Model Predictions**

Combining predictions from multiple models is a powerful technique to improve overall performance.

- Voting (Mode):
    + Purpose: Combine predictions by taking the mode (most frequent class) across models. 
        - Application:
            + For classification tasks, train several models (e.g., decision trees, random forests, support vector machines).
            + When making predictions, let each model vote for the class label, and choose the most common prediction.
        - Advantages:
            + Simple and effective.
            + Reduces bias from individual models.
        - Considerations:
            + Ensure diversity among models (e.g., different algorithms, hyperparameters).

---
## Improve Performance With Ensembles
**Blend Model Predictions**

- Averaging (Mean):
    + Purpose: Combine predictions by taking the average (mean) of predicted probabilities or regression values.
        - Application:
            + For regression tasks or probabilistic classification (e.g., logistic regression), average the predicted values.
            + Works well when models have similar performance.
        - Advantages:
            + Smooths out individual model variations.
            + Robust to outliers.
        - Considerations:
            + Normalize probabilities if using averaging for classification.

---
## Improve Performance With Ensembles
**Blend Model Predictions**
- Weighted Averaging:
    + Purpose: Assign different weights to each model’s prediction.
        - Application:
            + If you have confidence in certain models, give them higher weights.
            + Combine predictions as: Ensemble Prediction=∑i=1Nwi⋅Modeli(input)Ensemble Prediction=∑i=1N​wi​⋅Modeli​(input), where wiwi​ are weights.
        - Advantages:
            + Allows emphasizing stronger models.
            + Fine-tunes ensemble behavior.
        - Considerations:
            + Weights can be determined through cross-validation or expert judgment.

---
## Improve Performance With Ensembles
**Blend Model Predictions**
- Stacking (Meta-Learning):
    + Purpose: Train a meta-model (often a simple linear regression) on predictions from base models.
        - Application:
            + Train multiple base models (e.g., decision trees, neural networks).
            + Use their predictions as features for the meta-model.
            + The meta-model learns to combine base model predictions.
        - Advantages:
            + Captures complex interactions between models.
            + Adapts to individual model strengths.
        - Considerations:
            + Requires additional training data for the meta-model.

---
## Improve Performance With Ensembles
**Blend Model Predictions**
- Bagging and Boosting:
    + Purpose: Ensemble techniques that combine multiple models.
        - Application:
            + Bagging (Bootstrap Aggregating): Randomly sample subsets of data and train models independently. Combine their predictions (e.g., Random Forest).
            + Boosting: Sequentially build models, correcting errors made by previous models (e.g., AdaBoost, Gradient Boosting).
        - Advantages:
            + Robustness and improved performance.
            + Handle overfitting and underfitting.
        - Considerations:
            + Choose appropriate base models and hyperparameters.

---
## Improve Performance With Ensembles
**Blend Data Representations**

Combining predictions from models trained on different data representations is a powerful technique that can lead to improved performance.

- Multiple Data Representations:
    + Scenario: Suppose you have multiple ways to represent your data. For example:
        - Text Data: You’ve extracted features from text using techniques like TF-IDF or word embeddings.
        - Image Data: You’ve used convolutional neural networks (CNNs) to extract features from images.
        - Tabular Data: You’ve engineered features from structured tabular data.
    + Custom Models: Train separate models on each data representation. For instance:
        - A text-based model (e.g., recurrent neural network or transformer) for text data.
        - A CNN-based model for image data.
        - A gradient boosting model for tabular data.

---
## Improve Performance With Ensembles
**Blend Data Representations**
- Predictions from Individual Models:
    + Prediction Step:
        - Make predictions using each model on your validation or test set.
        - Obtain class probabilities (for classification) or regression values (for regression).
    + Example:
        - For a binary classification problem, each model produces probabilities for class 0 and class 1.

---
## Improve Performance With Ensembles
**Blend Data Representations**

- Combining Predictions:
    + Voting or Averaging:
        - Voting (Mode): Combine class predictions by taking the mode (most frequent class) across models.
        - Averaging (Mean): Combine predicted probabilities by taking the average.
    + Weighted Averaging:
        - Assign different weights to each model’s predictions based on their performance.
        - Combine predictions as: Ensemble Prediction=∑i=1Nwi⋅Modeli(input)Ensemble Prediction=∑i=1N​wi​⋅Modeli​(input), where wiwi​ are weights.
    + Stacking (Meta-Learning):
        - Train a meta-model (e.g., logistic regression) on predictions from individual models.
        - The meta-model learns to combine base model predictions.
---
## Improve Performance With Ensembles
**Blend Data Representations**

- Benefits:
    + Diversity: Different data representations capture complementary information.
    + Robustness: Ensemble methods reduce the impact of individual model biases.
    + Improved Generalization: Blending predictions often leads to better performance.
- Considerations:
    + Data Consistency: Ensure that predictions from different models are aligned (e.g., same order of samples).
    + Hyperparameter Tuning: Optimize hyperparameters for each model individually.
    + Validation Set: Use a separate validation set to tune ensemble weights or meta-model hyperparameters.


---
## Improve Performance With Ensembles
**Blend Data Samples**
Bootstrap aggregation (bagging) is a powerful ensemble technique that combines predictions from multiple models trained on different subsamples of the training data.

- Bagging Overview:
    + Purpose: Reduce variance and improve model robustness.
    + Process:
        - Create multiple bootstrap samples (randomly drawn with replacement) from the original training data.
        - Train a separate model (often the same algorithm) on each bootstrap sample.
        - Combine predictions from all models (e.g., by averaging or voting) to make the final prediction.
    + Benefits:
        - Uncorrelated Predictions: Bagging works best when individual models produce predictions that are uncorrelated or complementary.
        - Reduced Overfitting: By averaging or voting, bagging reduces overfitting compared to using a single model.
---
## Improve Performance With Ensembles
**Blend Data Samples**
- Algorithm-Specific Bagging:
    + Random Forest:
        - A popular bagging-based ensemble algorithm.
        - Base model: Decision trees.
        - Each tree is trained on a different bootstrap sample.
        - Predictions are combined by majority voting (classification) or averaging (regression).
        - Random feature selection during tree construction further enhances diversity.
    + Bagged Ensembles:
        - You can apply bagging to other algorithms as well (e.g., bagged SVM, bagged neural networks).

---
## Improve Performance With Ensembles
**Blend Data Samples**
- Uncorrelated Models:
    + Diverse Views of Data:
        - Bagging works best when each model sees a slightly different view of the data.
        - For example, different subsets of features or different subsets of samples.
    + Uncorrelated Errors:
        - If models make errors in different ways, their predictions will be uncorrelated.
        - This diversity leads to better ensemble performance.

---
## Improve Performance With Ensembles
**Blend Data Samples**
- Hyperparameter Tuning:
    + Base Model Hyperparameters: Optimize hyperparameters for each base model (e.g., tree depth, learning rate).
    + Ensemble Hyperparameters:
        - Determine the number of base models (trees) to include in the ensemble.
        - Cross-validation can help find the optimal ensemble size.

- Validation and Test Sets:

    + Validation Set: Use a separate validation set to tune ensemble weights (if applicable).
    + Test Set: Evaluate the final ensemble on a held-out test set to estimate its performance.

---
## Improve Performance With Ensembles
**Correct Predictions**

- Post-Processing Techniques:
    + Purpose: Modify model predictions after they are generated. Examples:
        - Threshold Adjustment:
            + For binary classification, adjust the decision threshold (e.g., from 0.5 to a different value) to balance precision and recall.
            + If false positives or false negatives are more critical, shift the threshold accordingly.
        - Calibration:
            + Calibrate predicted probabilities to match the true class proportions.
            + Techniques like Platt scaling or isotonic regression can be used.
        - Ranking Correction:
            + If your model ranks predictions (e.g., recommendation systems), apply ranking-based corrections.
            + Ensure that higher-ranked items are indeed more relevant.
---
## Improve Performance With Ensembles
**Correct Predictions**

- Boosting Algorithms:
     + Purpose: Boosting iteratively corrects prediction errors by combining weak models. Examples:
        - AdaBoost (Adaptive Boosting):
            + Sequentially trains models, giving more weight to misclassified samples.
            + Combines their predictions to create a strong ensemble.
        - Gradient Boosting:
            + Similar to AdaBoost but uses gradient descent to optimize a loss function.
            + Corrects errors by fitting subsequent models to the residuals of the previous ones.


---
## Improve Performance With Ensembles
**Correct Predictions**

- Custom Correction Models:
    + Purpose: Train a separate model to correct predictions. Examples:
        - Error Correction Models:
            + Train a regression model to predict the difference between true labels and model predictions.
            + Add this correction to the original predictions.
        - Residual Networks (ResNets):
            + Originally used for image classification, ResNets learn residual mappings.
            + They can be adapted to correct predictions by learning the difference between true labels and model outputs.
---
## Improve Performance With Ensembles
**Correct Predictions**

- Ensemble of Correctors:
    + Purpose: Combine multiple correction models. Example:
        - Train several custom correction models (e.g., one for threshold adjustment, one for ranking correction).
        - Combine their corrections using voting, averaging, or stacking.
    + Evaluate on Validation Set:
        - Purpose: Validate the effectiveness of correction techniques.
        - Steps:
            + Apply corrections to model predictions on a validation set.
            + Measure performance metrics (e.g., accuracy, F1-score) before and after correction.
            + Choose the best approach based on validation results.

---
## Improve Performance With Ensembles
**Learn to Combine**

- Stacking Overview:
    + Purpose: Combine diverse models to create a stronger ensemble.
    + Process:
        - Train several base models (often with different algorithms) on the same dataset.
        - Use their predictions as features for a meta-model (aggregator).
        - The meta-model learns to combine base model predictions optimally.
    + Benefits:
        - Complementary Strengths: Stacking leverages the strengths of different models.
        - Non-Linear Combinations: The meta-model can learn non-linear relationships between base model predictions.
---
## Improve Performance With Ensembles
**Learn to Combine**

- Steps in Stacking:
    + Data Splitting: Split your data into training, validation, and test sets.
    + Base Models:
        - Train multiple base models (e.g., decision trees, neural networks, SVMs) on the training set.
        - Each model produces predictions for the validation set.
    + Final Prediction:
        - Combine base model predictions using the trained meta-model.
        - Apply this ensemble to the test set for final predictions.
    + Meta-Model (Aggregator):
        - Use the base model predictions as features for the meta-model.
        - Train the meta-model (often a simple linear regression or neural network) on the validation set.s

<!-- FuckDuskRise_@#2024 -->

---
## Improve Performance With Ensembles
**Learn to Combine**

- Multiple Layers of Stacking:
    + Stacking can be recursive:
        - You can repeat the process by stacking multiple layers of base models and meta-models.
        - Each layer learns to combine predictions from the previous layer.
        - However, deeper stacking may lead to overfitting, so use it judiciously.
- Hyperparameter Tuning:
    + Base Models: Optimize hyperparameters for each base model.
    + Meta-Model: Tune hyperparameters for the meta-model (e.g., regularization strength, learning rate).
---
## Improve Performance With Ensembles
**Learn to Combine**

- Validation and Test Setss:
    + Validation Set: Use the validation set to train the meta-model and evaluate its performance.
    + Test Set: Apply the final ensemble (base models + meta-model) to the test set for unbiased evaluation.
- Example:
    + Suppose you have three base models: a random forest, a gradient boosting machine, and a neural network.
    + Train each model on the training set and obtain their predictions on the validation set.
    + Use these predictions as features for a linear regression meta-model.
    + The meta-model learns how to optimally combine the base model predictions.
