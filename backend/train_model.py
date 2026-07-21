import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import pickle
import os
import cv2
import mediapipe as mp

# MediaPipe setup
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    static_image_mode=True,
    max_num_hands=1,
    min_detection_confidence=0.5
)

# ── Step 1: Load Kaggle dataset ──────────────────────────────
print("Loading Kaggle dataset...")
kaggle_data = pd.read_csv("../data/asl_landmarks.csv", header=None)
X_kaggle = kaggle_data.iloc[:, 1:].values
y_kaggle = kaggle_data.iloc[:, 0].values
print(f"Kaggle samples: {len(X_kaggle)}")

# ── Step 2: Extract landmarks from your own images ───────────
DATASET_DIR = "../data/dataset/asl alphabet"

X_own = []
y_own = []

if os.path.exists(DATASET_DIR):
    print("Loading your own collected images...")
    for label in os.listdir(DATASET_DIR):
        label_dir = os.path.join(DATASET_DIR, label)
        if not os.path.isdir(label_dir):
            continue
        for img_file in os.listdir(label_dir):
            img_path = os.path.join(label_dir, img_file)
            img = cv2.imread(img_path)
            if img is None:
                continue
            rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            results = hands.process(rgb)
            if results.multi_hand_landmarks:
                for hand_landmarks in results.multi_hand_landmarks:
                    landmarks = []
                    for lm in hand_landmarks.landmark:
                        landmarks.extend([lm.x, lm.y, lm.z])
                    X_own.append(landmarks)
                    y_own.append(label)
    print(f"Your own samples: {len(X_own)}")
else:
    print("No own dataset folder found, using Kaggle only")

# ── Step 3: Combine datasets ─────────────────────────────────
if len(X_own) > 0:
    X_own = np.array(X_own)
    y_own = np.array(y_own)
    
    # Repeat your own data 15 times to make it dominant
    X_own_weighted = np.vstack([X_own] * 15)
    y_own_weighted = np.concatenate([y_own] * 15)
    
    # Combine: your weighted data + Kaggle as backup
    X = np.vstack([X_own_weighted, X_kaggle])
    y = np.concatenate([y_own_weighted, y_kaggle])
    print(f"Your samples (weighted): {len(X_own_weighted)}")
    print(f"Kaggle samples: {len(X_kaggle)}")
    print(f"Total combined samples: {len(X)}")
else:
    X = X_kaggle
    y = y_kaggle
# ── Step 4: Train ─────────────────────────────────────────────
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print("Training model...")
model = RandomForestClassifier(n_estimators=30, max_depth=15, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# ── Step 5: Save ──────────────────────────────────────────────
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model saved as model.pkl")