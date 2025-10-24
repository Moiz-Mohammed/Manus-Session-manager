# AI/ML Algorithms and Implementation Guide

## Introduction
This document provides a comprehensive guide to different machine learning algorithms and how to build them. It covers the theoretical foundations, mathematical concepts, and practical implementation details for each algorithm type.

## 1. Supervised Learning Algorithms

### 1.1 Classification Algorithms

#### 1.1.1 Logistic Regression
**Concept**: A statistical method for analyzing a dataset where the outcome is binary (0/1, Yes/No, True/False).

**How it works**:
- Uses the logistic function (sigmoid) to transform linear predictions into probability values between 0 and 1
- Decision boundary is created where probability equals 0.5
- Uses maximum likelihood estimation to find optimal parameters

**Implementation steps**:
1. Prepare your data (normalize features)
2. Initialize parameters (weights and bias)
3. Define the sigmoid function: `sigmoid(z) = 1/(1+e^(-z))`
4. Compute the cost function (log loss)
5. Update parameters using gradient descent
6. Repeat steps 4-5 until convergence
7. Make predictions using the trained model

**Python implementation example**:
```python
import numpy as np

class LogisticRegression:
    def __init__(self, learning_rate=0.01, num_iterations=1000):
        self.learning_rate = learning_rate
        self.num_iterations = num_iterations
        self.weights = None
        self.bias = None
        
    def sigmoid(self, z):
        return 1 / (1 + np.exp(-z))
    
    def fit(self, X, y):
        # Initialize parameters
        m, n = X.shape
        self.weights = np.zeros(n)
        self.bias = 0
        
        # Gradient descent
        for i in range(self.num_iterations):
            # Forward pass
            z = np.dot(X, self.weights) + self.bias
            predictions = self.sigmoid(z)
            
            # Compute gradients
            dw = (1/m) * np.dot(X.T, (predictions - y))
            db = (1/m) * np.sum(predictions - y)
            
            # Update parameters
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
            
    def predict_proba(self, X):
        z = np.dot(X, self.weights) + self.bias
        return self.sigmoid(z)
    
    def predict(self, X, threshold=0.5):
        return self.predict_proba(X) >= threshold
```

#### 1.1.2 Support Vector Machines (SVM)
**Concept**: Finds the hyperplane that best separates classes with the maximum margin.

**How it works**:
- Maximizes the margin between the closest points (support vectors) of different classes
- Can use kernel functions to handle non-linear decision boundaries
- Solves a quadratic optimization problem

**Implementation steps**:
1. Prepare your data (normalize features)
2. Choose a kernel function (linear, polynomial, RBF)
3. Set hyperparameters (C, gamma, etc.)
4. Train the model by solving the quadratic optimization problem
5. Identify support vectors
6. Make predictions using the trained model

**Python implementation with scikit-learn**:
```python
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

# Create a pipeline with preprocessing and SVM
svm_pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('svm', SVC(kernel='rbf', C=1.0, gamma='scale', probability=True))
])

# Train the model
svm_pipeline.fit(X_train, y_train)

# Make predictions
predictions = svm_pipeline.predict(X_test)
```

### 1.2 Regression Algorithms

#### 1.2.1 Linear Regression
**Concept**: Models the relationship between dependent and independent variables by fitting a linear equation.

**How it works**:
- Finds the best-fitting line that minimizes the sum of squared errors
- Uses ordinary least squares (OLS) method to estimate parameters
- Can be extended to multiple regression with multiple features

**Implementation steps**:
1. Prepare your data (normalize features)
2. Initialize parameters (weights and bias)
3. Define the prediction function: `y_pred = X * weights + bias`
4. Compute the cost function (mean squared error)
5. Update parameters using gradient descent
6. Repeat steps 4-5 until convergence
7. Make predictions using the trained model

**Python implementation example**:
```python
import numpy as np

class LinearRegression:
    def __init__(self, learning_rate=0.01, num_iterations=1000):
        self.learning_rate = learning_rate
        self.num_iterations = num_iterations
        self.weights = None
        self.bias = None
        
    def fit(self, X, y):
        # Initialize parameters
        m, n = X.shape
        self.weights = np.zeros(n)
        self.bias = 0
        
        # Gradient descent
        for i in range(self.num_iterations):
            # Forward pass
            predictions = np.dot(X, self.weights) + self.bias
            
            # Compute gradients
            dw = (1/m) * np.dot(X.T, (predictions - y))
            db = (1/m) * np.sum(predictions - y)
            
            # Update parameters
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
            
    def predict(self, X):
        return np.dot(X, self.weights) + self.bias
```

## 2. Unsupervised Learning Algorithms

### 2.1 Clustering Algorithms

#### 2.1.1 K-Means Clustering
**Concept**: Partitions data into K distinct clusters based on distance to the centroid of each cluster.

**How it works**:
- Randomly initializes K cluster centroids
- Assigns each data point to the nearest centroid
- Updates centroids based on the mean of assigned points
- Repeats assignment and update steps until convergence

**Implementation steps**:
1. Prepare your data (normalize features)
2. Choose the number of clusters K
3. Initialize K centroids randomly
4. Assign each data point to the nearest centroid
5. Update centroids by taking the mean of all points assigned to that cluster
6. Repeat steps 4-5 until centroids no longer change significantly

**Python implementation example**:
```python
import numpy as np

class KMeans:
    def __init__(self, n_clusters=3, max_iterations=100):
        self.n_clusters = n_clusters
        self.max_iterations = max_iterations
        self.centroids = None
        
    def fit(self, X):
        # Initialize centroids randomly
        idx = np.random.choice(len(X), self.n_clusters, replace=False)
        self.centroids = X[idx]
        
        for _ in range(self.max_iterations):
            # Assign clusters
            clusters = self._assign_clusters(X)
            
            # Store old centroids for convergence check
            old_centroids = self.centroids.copy()
            
            # Update centroids
            for i in range(self.n_clusters):
                if np.sum(clusters == i) > 0:
                    self.centroids[i] = np.mean(X[clusters == i], axis=0)
            
            # Check for convergence
            if np.all(old_centroids == self.centroids):
                break
                
    def _assign_clusters(self, X):
        # Calculate distance to each centroid
        distances = np.sqrt(((X - self.centroids[:, np.newaxis])**2).sum(axis=2))
        # Return index of closest centroid
        return np.argmin(distances, axis=0)
    
    def predict(self, X):
        return self._assign_clusters(X)
```

## 3. Reinforcement Learning Algorithms

### 3.1 Q-Learning
**Concept**: A model-free reinforcement learning algorithm that learns the value of actions in states.

**How it works**:
- Maintains a Q-table that stores the expected reward for each state-action pair
- Updates Q-values based on the Bellman equation
- Balances exploration and exploitation using an epsilon-greedy policy

**Implementation steps**:
1. Initialize Q-table with zeros for all state-action pairs
2. Choose an action using epsilon-greedy policy
3. Perform the action and observe reward and new state
4. Update Q-value using the Bellman equation
5. Repeat steps 2-4 for each time step until the episode ends
6. Repeat steps 2-5 for multiple episodes

**Python implementation example**:
```python
import numpy as np

class QLearning:
    def __init__(self, n_states, n_actions, learning_rate=0.1, discount_factor=0.9, epsilon=0.1):
        self.n_states = n_states
        self.n_actions = n_actions
        self.learning_rate = learning_rate
        self.discount_factor = discount_factor
        self.epsilon = epsilon
        self.q_table = np.zeros((n_states, n_actions))
        
    def choose_action(self, state):
        # Epsilon-greedy policy
        if np.random.random() < self.epsilon:
            # Explore: choose a random action
            return np.random.randint(self.n_actions)
        else:
            # Exploit: choose the best action for this state
            return np.argmax(self.q_table[state])
    
    def update(self, state, action, reward, next_state):
        # Bellman equation update
        best_next_action = np.argmax(self.q_table[next_state])
        td_target = reward + self.discount_factor * self.q_table[next_state, best_next_action]
        td_error = td_target - self.q_table[state, action]
        self.q_table[state, action] += self.learning_rate * td_error
```

## 4. Neural Networks

### 4.1 Feedforward Neural Network
**Concept**: A basic neural network where information flows in one direction from input to output.

**How it works**:
- Consists of input layer, hidden layers, and output layer
- Each neuron applies a weighted sum of inputs followed by an activation function
- Learns through backpropagation and gradient descent

**Implementation steps**:
1. Define network architecture (number of layers, neurons per layer)
2. Initialize weights and biases
3. Forward pass: compute outputs through the network
4. Compute loss function
5. Backward pass: compute gradients using backpropagation
6. Update weights and biases using gradient descent
7. Repeat steps 3-6 until convergence

**Python implementation example**:
```python
import numpy as np

class NeuralNetwork:
    def __init__(self, layer_sizes, learning_rate=0.01):
        self.layer_sizes = layer_sizes
        self.learning_rate = learning_rate
        self.weights = []
        self.biases = []
        
        # Initialize weights and biases
        for i in range(len(layer_sizes) - 1):
            self.weights.append(np.random.randn(layer_sizes[i], layer_sizes[i+1]) * 0.01)
            self.biases.append(np.zeros((1, layer_sizes[i+1])))
    
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-x))
    
    def sigmoid_derivative(self, x):
        return x * (1 - x)
    
    def forward(self, X):
        self.activations = [X]
        self.z_values = []
        
        for i in range(len(self.weights)):
            z = np.dot(self.activations[-1], self.weights[i]) + self.biases[i]
            self.z_values.append(z)
            activation = self.sigmoid(z)
            self.activations.append(activation)
            
        return self.activations[-1]
    
    def backward(self, X, y):
        m = X.shape[0]
        
        # Compute output layer error
        output_error = self.activations[-1] - y
        
        # Backpropagate error
        deltas = [output_error * self.sigmoid_derivative(self.activations[-1])]
        
        for i in range(len(self.weights) - 1, 0, -1):
            delta = np.dot(deltas[0], self.weights[i].T) * self.sigmoid_derivative(self.activations[i])
            deltas.insert(0, delta)
        
        # Update weights and biases
        for i in range(len(self.weights)):
            self.weights[i] -= self.learning_rate * np.dot(self.activations[i].T, deltas[i]) / m
            self.biases[i] -= self.learning_rate * np.sum(deltas[i], axis=0, keepdims=True) / m
    
    def fit(self, X, y, epochs=1000):
        for epoch in range(epochs):
            # Forward pass
            output = self.forward(X)
            
            # Backward pass
            self.backward(X, y)
            
            # Compute loss (optional)
            if epoch % 100 == 0:
                loss = np.mean(np.square(output - y))
                print(f"Epoch {epoch}, Loss: {loss}")
    
    def predict(self, X):
        return self.forward(X)
```

## 5. Ensemble Methods

### 5.1 Random Forest
**Concept**: Combines multiple decision trees to improve prediction accuracy and control overfitting.

**How it works**:
- Creates multiple decision trees using bootstrap samples of the data
- Each tree considers a random subset of features at each split
- Aggregates predictions through voting (classification) or averaging (regression)

**Implementation steps**:
1. Create bootstrap samples of the training data
2. Train a decision tree on each bootstrap sample, considering only a random subset of features at each split
3. Make predictions with each tree
4. Aggregate predictions through voting or averaging

**Python implementation with scikit-learn**:
```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import RandomForestRegressor

# For classification
rf_classifier = RandomForestClassifier(
    n_estimators=100,  # Number of trees
    max_depth=None,    # Maximum depth of trees
    min_samples_split=2,
    min_samples_leaf=1,
    max_features='sqrt'  # Number of features to consider at each split
)
rf_classifier.fit(X_train, y_train)

# For regression
rf_regressor = RandomForestRegressor(
    n_estimators=100,
    max_depth=None,
    min_samples_split=2,
    min_samples_leaf=1,
    max_features='sqrt'
)
rf_regressor.fit(X_train, y_train)
```

## 6. Dimensionality Reduction

### 6.1 Principal Component Analysis (PCA)
**Concept**: Reduces the dimensionality of data while preserving as much variance as possible.

**How it works**:
- Computes the covariance matrix of the data
- Finds the eigenvectors and eigenvalues of the covariance matrix
- Projects data onto the principal components (eigenvectors with highest eigenvalues)

**Implementation steps**:
1. Standardize the data
2. Compute the covariance matrix
3. Compute eigenvectors and eigenvalues of the covariance matrix
4. Sort eigenvectors by decreasing eigenvalues
5. Select top k eigenvectors to form a projection matrix
6. Transform the original data using the projection matrix

**Python implementation example**:
```python
import numpy as np

class PCA:
    def __init__(self, n_components):
        self.n_components = n_components
        self.components = None
        self.mean = None
        
    def fit(self, X):
        # Center the data
        self.mean = np.mean(X, axis=0)
        X_centered = X - self.mean
        
        # Compute covariance matrix
        cov_matrix = np.cov(X_centered, rowvar=False)
        
        # Compute eigenvectors and eigenvalues
        eigenvalues, eigenvectors = np.linalg.eigh(cov_matrix)
        
        # Sort eigenvectors by decreasing eigenvalues
        idx = np.argsort(eigenvalues)[::-1]
        eigenvectors = eigenvectors[:, idx]
        
        # Store first n_components eigenvectors
        self.components = eigenvectors[:, :self.n_components]
        
    def transform(self, X):
        # Center the data
        X_centered = X - self.mean
        
        # Project data onto principal components
        return np.dot(X_centered, self.components)
```

## 7. Advanced Topics

### 7.1 Retrieval-Augmented Generation (RAG)
**Concept**: Enhances language model outputs by retrieving relevant information from external knowledge sources.

**How it works**:
- Combines a retrieval system with a generative model
- Retrieves relevant documents or passages based on the input query
- Augments the input with retrieved information
- Generates a response based on both the original input and retrieved information

**Implementation components**:
1. Document indexing and embedding
2. Retrieval system (e.g., vector database)
3. Query processing
4. Context augmentation
5. Generation with an LLM

**Python implementation outline**:
```python
from sentence_transformers import SentenceTransformer
from transformers import AutoTokenizer, AutoModelForCausalLM
import faiss
import numpy as np

class RAGSystem:
    def __init__(self, retriever_model_name, generator_model_name):
        # Initialize retriever
        self.retriever = SentenceTransformer(retriever_model_name)
        
        # Initialize generator
        self.tokenizer = AutoTokenizer.from_pretrained(generator_model_name)
        self.generator = AutoModelForCausalLM.from_pretrained(generator_model_name)
        
        # Initialize vector database
        self.index = None
        self.documents = []
        
    def index_documents(self, documents):
        self.documents = documents
        
        # Compute embeddings for all documents
        embeddings = self.retriever.encode(documents)
        
        # Create FAISS index
        dimension = embeddings.shape[1]
        self.index = faiss.IndexFlatL2(dimension)
        self.index.add(np.array(embeddings).astype('float32'))
        
    def retrieve(self, query, k=3):
        # Compute query embedding
        query_embedding = self.retriever.encode([query])
        
        # Search for similar documents
        distances, indices = self.index.search(np.array(query_embedding).astype('float32'), k)
        
        # Return retrieved documents
        return [self.documents[i] for i in indices[0]]
    
    def generate(self, query):
        # Retrieve relevant documents
        retrieved_docs = self.retrieve(query)
        
        # Augment query with retrieved documents
        context = "\n".join(retrieved_docs)
        augmented_query = f"Context: {context}\n\nQuestion: {query}\n\nAnswer:"
        
        # Generate response
        inputs = self.tokenizer(augmented_query, return_tensors="pt")
        outputs = self.generator.generate(
            inputs.input_ids, 
            max_length=200, 
            num_return_sequences=1, 
            temperature=0.7
        )
        
        # Decode and return response
        response = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        return response
```

## Conclusion
This guide provides a foundation for understanding and implementing various machine learning algorithms. Each algorithm has its strengths, weaknesses, and appropriate use cases. When implementing these algorithms in practice, consider factors such as:

- Data preprocessing requirements
- Hyperparameter tuning
- Model evaluation metrics
- Computational complexity
- Interpretability

For production applications, it's often beneficial to use established libraries like scikit-learn, TensorFlow, or PyTorch, which provide optimized implementations of these algorithms. However, understanding the underlying principles and being able to implement them from scratch is valuable for customization and deeper comprehension of machine learning concepts.
