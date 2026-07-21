import { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar";

function SentenceBuilder() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const wsRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraStarted, setCameraStarted] = useState(false);
  const [sentence, setSentence] = useState([]);
  const [currentPrediction, setCurrentPrediction] = useState(null);
  const [confidence, setConfidence] = useState(0);
  const [handDetected, setHandDetected] = useState(false);
  const [log, setLog] = useState("> Waiting for camera...");
  const lastAddedRef = useRef(null);
  const lastAddedTimeRef = useRef(0);

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (wsRef.current) wsRef.current.close();
    };
  }, []);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => videoRef.current.play();
      }
      setCameraStarted(true);

      const ws = new WebSocket("ws://signify-gwci.onrender.com/ws/sentence");
      wsRef.current = ws;

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setHandDetected(data.hand_detected);
        setConfidence(data.confidence);

        if (data.hand_detected && data.prediction && data.confidence > 50) {
          setCurrentPrediction(data.prediction);

          const now = Date.now();
          // Add letter to sentence if held for 1.5 seconds
          if (
            data.prediction === lastAddedRef.current &&
            now - lastAddedTimeRef.current > 1500
          ) {
            const time = new Date().toLocaleTimeString([], { hour12: false });
            setSentence(prev => [...prev, data.prediction]);
            setLog(`> [${time}] Detected sign: "${data.prediction}"`);
            lastAddedTimeRef.current = now + 1500; // prevent spam
          } else if (data.prediction !== lastAddedRef.current) {
            lastAddedRef.current = data.prediction;
            lastAddedTimeRef.current = now;
          }
        } else {
          setCurrentPrediction(null);
        }
      };

      const interval = setInterval(() => {
  if (!canvasRef.current || !videoRef.current || ws.readyState !== WebSocket.OPEN) return;
  if (videoRef.current.videoWidth === 0 || videoRef.current.videoHeight === 0) return;
  const canvas = canvasRef.current;
  canvas.width = videoRef.current.videoWidth;
  canvas.height = videoRef.current.videoHeight;
  canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
  const base64 = canvas.toDataURL("image/jpeg", 0.7);
  if (base64 === "data:,") return;
  ws.send(base64);
}, 100);

      ws.onclose = () => clearInterval(interval);
    });
  };

  const stopCamera = () => {
    if (wsRef.current) { wsRef.current.close(); wsRef.current = null; }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;
    setCameraStarted(false);
  };

  const speakSentence = () => {
    const text = sentence.join(" ");
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <Navbar />
      <main className="md:ml-52 pt-20 pb-20 px-6 md:px-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="font-display-lg text-display-lg text-on-surface">
              Sentence Builder
            </h2>
            <p className="font-body-lg text-on-surface-variant">
              Sign clearly to construct your message in real-time.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Webcam column */}
          <div className="flex flex-col gap-6">
            <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              <canvas ref={canvasRef} className="hidden" />
              
              {!cameraStarted && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface-container-high">
                  <button
                    onClick={startCamera}
                    className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold text-lg"
                  >
                    <span className="material-symbols-outlined">videocam</span>
                    Start Camera
                  </button>
                </div>
              )}

              {cameraStarted && handDetected && currentPrediction && (
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Detected: {currentPrediction}
                  </div>
                  <div className="bg-primary/80 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {confidence}%
                  </div>
                </div>
              )}

              {cameraStarted && (
                <button
                  onClick={stopCamera}
                  className="absolute top-4 right-4 z-20 bg-error text-white px-4 py-2 rounded-full text-sm font-bold"
                >
                  Stop Camera
                </button>
              )}
            </div>

            <div className="mt-6 p-6 bg-secondary-container rounded-xl border border-outline-variant paper-texture">
              <h3 className="font-title-md text-title-md text-on-secondary-container mb-2">
                Tips for Better Accuracy
              </h3>
              <ul className="font-body-md text-on-secondary-container space-y-1 opacity-80">
                <li>• Keep your hands within the frame</li>
                <li>• Ensure adequate lighting on your hand</li>
                <li>• Hold each sign steady for 1.5 seconds to add it</li>
              </ul>
            </div>
          </div>

          {/* Sentence panel */}
          <div className="flex flex-col gap-6">
            <div className="flex-grow bg-[#fffdf5] border-2 border-outline paper-texture rounded-xl p-8 flex flex-col min-h-[400px] notebook-border">
              <div className="flex items-center justify-between border-b-2 border-primary/20 pb-4 mb-6">
                <span className="font-headline-lg text-headline-lg text-primary opacity-40">
                  Sheet No. 042
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  FORMAT: ASL_SENTENCE_v1
                </span>
              </div>
              <div className="flex-grow font-display-lg text-[40px] text-on-surface flex flex-wrap content-start gap-x-2">
                {sentence.length === 0 ? (
                  <span className="text-outline-variant text-2xl">Start signing to build your sentence...</span>
                ) : (
                  sentence.map((word, i) => (
                    <span key={i} className="transition-all duration-500">
                      {word}
                    </span>
                  ))
                )}
              </div>
              <div className="mt-8 pt-8 border-t-2 border-dashed border-outline-variant flex flex-wrap gap-4">
                <button
                  onClick={() => setSentence([])}
                  className="flex-1 min-w-[140px] py-4 bg-surface-container-high text-on-surface border-2 border-on-surface-variant rounded-xl font-title-md tactile-button flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">delete</span>
                  Clear
                </button>
                <button
                  onClick={speakSentence}
                  className="flex-1 min-w-[140px] py-4 bg-primary text-on-primary border-2 border-on-primary-container rounded-xl font-title-md tactile-button flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">volume_up</span>
                  Speak
                </button>
                <button
                  onClick={() => setSentence(prev => prev.slice(0, -1))}
                  className="flex-1 min-w-[140px] py-4 bg-tertiary-container text-on-tertiary-container border-2 border-on-tertiary-fixed-variant rounded-xl font-title-md tactile-button flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">backspace</span>
                  Undo
                </button>
              </div>
            </div>

            {/* Log */}
            <div className="bg-inverse-surface text-inverse-on-surface p-4 rounded-xl font-mono text-[12px] opacity-90 border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full animate-pulse ${cameraStarted ? "bg-green-500" : "bg-error"}`} />
                <span className="uppercase font-bold tracking-tighter text-primary-fixed">
                  Engine Status: {cameraStarted ? "Active" : "Offline"}
                </span>
              </div>
              <p className="opacity-60">{`> [14:02:11] Detection module initialized...`}</p>
              <p className="opacity-60">{log}</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default SentenceBuilder;