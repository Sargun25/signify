import cv2
import mediapipe as mp
import pickle
import numpy as np
from collections import Counter
import time
import random

# Load trained model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)
# Prediction smoothing
prediction_history = []
history_size = 10
# Sentence builder
sentence = ""

# Cooldown system
last_letter = ""
last_added_time = 0
cooldown_seconds = 1
# Learning mode
letters = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

target_letter = random.choice(letters)

score = 0

# MediaPipe setup
mp_hands = mp.solutions.hands
mp_draw = mp.solutions.drawing_utils

hands = mp_hands.Hands(
    max_num_hands=1,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.7
)

# Start webcam
cap = cv2.VideoCapture(0)

while True:

    success, frame = cap.read()

    if not success:
        break

    # Flip frame
    frame = cv2.flip(frame, 1)

    # Convert to RGB
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Process frame
    results = hands.process(rgb_frame)

    if results.multi_hand_landmarks:

        for hand_landmarks in results.multi_hand_landmarks:

            # Draw skeleton
            mp_draw.draw_landmarks(
                frame,
                hand_landmarks,
                mp_hands.HAND_CONNECTIONS
            )

            # Extract landmarks
            landmark_list = []

            for lm in hand_landmarks.landmark:

                landmark_list.extend([
                    lm.x,
                    lm.y,
                    lm.z
                ])

            # Convert to NumPy array
            prediction_input = np.array(landmark_list).reshape(1, -1)

           # Predict gesture
            prediction = model.predict(prediction_input)[0]

            # Get confidence scores
            probabilities = model.predict_proba(prediction_input)[0]

            # Highest confidence
            confidence = max(probabilities)

            # Convert to percentage
            confidence_percent = int(confidence * 100)

            # Store prediction
            prediction_history.append(prediction)

            # Keep only latest predictions
            if len(prediction_history) > history_size:
                prediction_history.pop(0)

            # Most common prediction
            stable_prediction = Counter(prediction_history).most_common(1)[0][0]
            
            # Current time
            current_time = time.time()

            # Hold-to-confirm system

            # If new gesture appears
            if stable_prediction != last_letter:

                last_letter = stable_prediction
                last_added_time = current_time

            # If gesture held long enough
            elif current_time - last_added_time > cooldown_seconds:

            # Learning mode check
                if stable_prediction == target_letter:

                    score += 1

                    target_letter = random.choice(letters)

                    last_added_time = current_time 

            # Show target letter
            cv2.putText(
                frame,
                f"Show sign: {target_letter}",
                (10, 50),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                (0, 255, 255),
                2
            )

            # Show prediction
            cv2.putText(
                frame,
                f"Prediction: {stable_prediction}",
                (10, 100),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                (0, 255, 0),
                2
            )

            # Show score
            cv2.putText(
                frame,
                f"Score: {score}",
                (10, 150),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                (255, 0, 0),
                2
            )
            # Show controls
            cv2.putText(
                frame,
                "S = Skip | R = Reset | Q = Quit",
                (10, 200),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.7,
                (255, 255, 255),
                2
            )
    # Show webcam
    cv2.imshow("Sign Language Prediction", frame)

    key = cv2.waitKey(1) & 0xFF

    # Quit
    if key == ord('q'):
            break

    # Skip letter
    elif key == ord('s'):

            target_letter = random.choice(letters)

    # Reset score
    elif key == ord('r'):

            score = 0

# Cleanup
cap.release()
cv2.destroyAllWindows()