import cv2
import mediapipe as mp
import csv
import os

# Dataset path
dataset_path = "dataset/asl_alphabet_train"

# Output CSV
output_file = "data/asl_landmarks.csv"

# MediaPipe setup
mp_hands = mp.solutions.hands

hands = mp_hands.Hands(
    static_image_mode=True,
    max_num_hands=1,
    min_detection_confidence=0.5
)

# Create CSV file
with open(output_file, mode='w', newline='') as f:

    writer = csv.writer(f)

    # Loop through gesture folders
    for label in os.listdir(dataset_path):

        label_folder = os.path.join(dataset_path, label)

        # Skip non-folders
        if not os.path.isdir(label_folder):
            continue

        print(f"Processing {label}...")

        # Loop through images
        for image_name in os.listdir(label_folder):

            image_path = os.path.join(label_folder, image_name)

            # Read image
            image = cv2.imread(image_path)

            if image is None:
                continue

            # Convert to RGB
            rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

            # Process hand landmarks
            results = hands.process(rgb_image)

            # If hand detected
            if results.multi_hand_landmarks:

                for hand_landmarks in results.multi_hand_landmarks:

                    landmark_list = []

                    # Extract landmarks
                    for lm in hand_landmarks.landmark:

                        landmark_list.extend([
                            lm.x,
                            lm.y,
                            lm.z
                        ])

                    # Save row
                    row = [label] + landmark_list

                    writer.writerow(row)

print("Landmark extraction complete!")