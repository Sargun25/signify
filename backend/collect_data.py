import cv2
import os
import mediapipe as mp

# Change this to the letter you want to collect
LABEL = "Z"
NUM_IMAGES = 200
SAVE_DIR = f"../data/dataset/asl alphabet/{LABEL}"

os.makedirs(SAVE_DIR, exist_ok=True)

mp_hands = mp.solutions.hands
mp_draw = mp.solutions.drawing_utils
hands = mp_hands.Hands(max_num_hands=1, min_detection_confidence=0.7)

cap = cv2.VideoCapture(0)
count = len(os.listdir(SAVE_DIR))

print(f"Collecting images for: {LABEL}")
print(f"Already have {count} images. Collecting {NUM_IMAGES} more.")
print("Press SPACE to start collecting, Q to quit")

collecting = False

while True:
    ret, frame = cap.read()
    if not ret:
        break

    frame = cv2.flip(frame, 1)
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(rgb)

    if results.multi_hand_landmarks:
        for lm in results.multi_hand_landmarks:
            mp_draw.draw_landmarks(frame, lm, mp_hands.HAND_CONNECTIONS)

    cv2.putText(frame, f"Label: {LABEL} | Collected: {count}/{NUM_IMAGES}", 
                (10, 40), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
    
    if collecting:
        cv2.putText(frame, "COLLECTING...", (10, 80), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
        if results.multi_hand_landmarks:
            img_path = os.path.join(SAVE_DIR, f"{count}.jpg")
            cv2.imwrite(img_path, frame)
            count += 1
            if count >= NUM_IMAGES:
                print(f"Done collecting {LABEL}!")
                break
    else:
        cv2.putText(frame, "Press SPACE to start", (10, 80),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 0), 2)

    cv2.imshow("Collect Data", frame)
    key = cv2.waitKey(1) & 0xFF
    if key == ord('q'):
        break
    elif key == ord(' '):
        collecting = True

cap.release()
cv2.destroyAllWindows()