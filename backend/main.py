from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import mediapipe as mp
print("MediaPipe version:", getattr(mp, "__version__", "No version"))
print("MediaPipe file:", getattr(mp, "__file__", "No file"))
print("Has solutions:", hasattr(mp, "solutions"))
import pickle
import numpy as np
from collections import Counter
import base64
import cv2
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open("model.pkl", "rb") as f:
    model = pickle.load(f)

mp_hands = mp.solutions.hands
hands_sentences = mp_hands.Hands(
    max_num_hands=1,
    min_detection_confidence=0.3,
    min_tracking_confidence=0.3
)

letters = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    prediction_history = []
    history_size = 20
    score = 0
    target_letter = random.choice(letters)

    try:
        while True:
            # Receive base64 image from frontend
            data = await websocket.receive_text()
            
            # Decode base64 to image
            img_data = base64.b64decode(data.split(",")[1])
            np_arr = np.frombuffer(img_data, np.uint8)
            frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
            
            if frame is None:
                continue

            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            results = hands_sentences.process(rgb_frame)

            prediction = None
            confidence = 0

            if results.multi_hand_landmarks:
                for hand_landmarks in results.multi_hand_landmarks:
                    landmark_list = []
                    for lm in hand_landmarks.landmark:
                        landmark_list.extend([lm.x, lm.y, lm.z])
                    
                    prediction_input = np.array(landmark_list).reshape(1, -1)
                    prediction = model.predict(prediction_input)[0]
                    probabilities = model.predict_proba(prediction_input)[0]
                    confidence = int(max(probabilities) * 100)

                    prediction_history.append(prediction)
                    if len(prediction_history) > history_size:
                        prediction_history.pop(0)

                    prediction = Counter(prediction_history).most_common(1)[0][0]

                    # Check if correct
                    correct = prediction == target_letter
                    if correct:
                        score += 1
                        target_letter = random.choice(letters)

            await websocket.send_json({
    "prediction": prediction if results.multi_hand_landmarks else None,
    "confidence": confidence,
    "target": target_letter,
    "score": score,
    "hand_detected": results.multi_hand_landmarks is not None
})

    except Exception as e:
        print(f"Connection closed: {e}")
@app.websocket("/ws/sentence")
async def sentence_websocket(websocket: WebSocket):
    await websocket.accept()
    prediction_history = []
    history_size = 10

    try:
        while True:
            data = await websocket.receive_text()
            
            img_data = base64.b64decode(data.split(",")[1])
            np_arr = np.frombuffer(img_data, np.uint8)
            frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
            
            if frame is None:
                continue

            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            results = hands_sentences.process(rgb_frame)

            prediction = None
            confidence = 0

            if results.multi_hand_landmarks:
                for hand_landmarks in results.multi_hand_landmarks:
                    landmark_list = []
                    for lm in hand_landmarks.landmark:
                        landmark_list.extend([lm.x, lm.y, lm.z])
                    
                    prediction_input = np.array(landmark_list).reshape(1, -1)
                    prediction = model.predict(prediction_input)[0]
                    probabilities = model.predict_proba(prediction_input)[0]
                    confidence = int(max(probabilities) * 100)

                    prediction_history.append(prediction)
                    if len(prediction_history) > history_size:
                        prediction_history.pop(0)

                    prediction = Counter(prediction_history).most_common(1)[0][0]

            await websocket.send_json({
                "prediction": prediction if results.multi_hand_landmarks else None,
                "confidence": confidence,
                "hand_detected": results.multi_hand_landmarks is not None
            })

    except Exception as e:
        print(f"Connection closed: {e}")       