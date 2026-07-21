import cv2
import mediapipe as mp
import csv
import os

# Ask for gesture label
label = input("Enter gesture label: ")

# Create data folder
if not os.path.exists("data"):
    os.makedirs("data")

# CSV file path
file_path = "data/gesture_data.csv"

# MediaPipe setup
mp_hands = mp.solutions.hands
mp_draw = mp.solutions.drawing_utils

hands = mp_hands.Hands(
    max_num_hands=1,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.7
)

# Webcam
cap = cv2.VideoCapture(0)

print("Press 's' to save sample")
print("Press 'q' to quit")

while True:

    success, frame = cap.read()

    if not success:
        break

    # Mirror image
    frame = cv2.flip(frame, 1)

    # Convert to RGB
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Detect hands
    results = hands.process(rgb_frame)

    landmark_list = []

    if results.multi_hand_landmarks:

        for hand_landmarks in results.multi_hand_landmarks:

            # Draw landmarks
            mp_draw.draw_landmarks(
                frame,
                hand_landmarks,
                mp_hands.HAND_CONNECTIONS
            )

            # Extract ALL landmarks
            for lm in hand_landmarks.landmark:

                landmark_list.extend([
                    lm.x,
                    lm.y,
                    lm.z
                ])

    # Display webcam
    cv2.imshow("Collect Data", frame)

    key = cv2.waitKey(1)

    # Save sample
    if key == ord('s'):

        if landmark_list:

            row = [label] + landmark_list

            with open(file_path, mode='a', newline='') as f:

                writer = csv.writer(f)
                writer.writerow(row)

            print(f"{label} sample saved!")

    # Quit
    if key == ord('q'):
        break

# Cleanup
cap.release()
cv2.destroyAllWindows()