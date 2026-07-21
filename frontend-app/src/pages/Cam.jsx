import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

function Cam() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const wsRef = useRef(null);
  const [prediction, setPrediction] = useState(null);
  const [target, setTarget] = useState(null);
  const [score, setScore] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [handDetected, setHandDetected] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Start webcam
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });

    // Connect WebSocket
    const ws = new WebSocket("ws://localhost:8000/ws");
    wsRef.current = ws;

    ws.onopen = () => setConnected(true);
    ws.onclose = () => setConnected(false);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrediction(data.prediction);
      setTarget(data.target);
      setScore(data.score);
      setConfidence(data.confidence);
      setHandDetected(data.hand_detected);
    };

    // Send frames every 100ms
    const interval = setInterval(() => {
      if (ws.readyState !== WebSocket.OPEN) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (!video || !canvas) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      const base64 = canvas.toDataURL("image/jpeg", 0.7);
      ws.send(base64);
    }, 100);

    return () => {
      clearInterval(interval);
      ws.close();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main className="pt-20 pb-20 md:pl-64 md:pr-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl font-bold mb-2">Live Webcam Practice</h1>
          <p className="text-on-surface-variant mb-8">
            Show the sign for the target letter to score points
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Webcam */}
            <div className="relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full rounded-2xl border-2 border-primary"
              />
              <canvas ref={canvasRef} className="hidden" />
              <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${connected ? "bg-primary text-on-primary" : "bg-error text-white"}`}>
                {connected ? "Connected" : "Disconnected"}
              </div>
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-4">

              {/* Target */}
              <div className="bg-surface border border-outline-variant p-6 rounded-2xl text-center">
                <p className="text-sm text-on-surface-variant mb-2">SHOW THIS SIGN</p>
                <div className="text-8xl font-bold text-primary">{target || "..."}</div>
              </div>

              {/* Prediction */}
              <div className="bg-surface border border-outline-variant p-6 rounded-2xl text-center">
                <p className="text-sm text-on-surface-variant mb-2">DETECTED SIGN</p>
                <div className={`text-6xl font-bold ${handDetected ? "text-on-surface" : "text-outline-variant"}`}>
                  {handDetected ? (prediction || "...") : "No hand"}
                </div>
                {handDetected && (
                  <p className="text-sm text-on-surface-variant mt-2">
                    Confidence: {confidence}%
                  </p>
                )}
              </div>

              {/* Score */}
              <div className="bg-primary p-6 rounded-2xl text-center">
                <p className="text-sm text-on-primary opacity-70 mb-2">SCORE</p>
                <div className="text-5xl font-bold text-on-primary">{score}</div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cam;