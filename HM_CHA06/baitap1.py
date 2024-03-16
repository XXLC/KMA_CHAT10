import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

# Tạo dữ liệu ngẫu nhiên
X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

# Visualize dữ liệu
plt.scatter(X[:, 0], X[:, 1], s=50)
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.title("Randomly Generated Data")
plt.show()

# Áp dụng thuật toán gom nhóm KMeans
kmeans = KMeans(n_clusters=4)
kmeans.fit(X)

# Lấy các trung tâm của các cụm
centers = kmeans.cluster_centers_

# Lấy nhãn của các cụm
labels = kmeans.labels_

# Visualize kết quả
plt.scatter(X[:, 0], X[:, 1], c=labels, s=50, cmap='viridis')
plt.scatter(centers[:, 0], centers[:, 1], c='red', s=200, alpha=0.5)
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.title("Clustering Results")
plt.show()
