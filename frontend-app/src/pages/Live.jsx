import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const allSigns = [
  { label: "A", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133743/Screenshot_2026-06-11_044754_py7zds.png" },
  { label: "B", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133743/Screenshot_2026-06-11_044802_won6sb.png" },
  { label: "C", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133744/Screenshot_2026-06-11_044807_kv9laz.png" },
  { label: "D", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133744/Screenshot_2026-06-11_044823_ojmnwj.png" },
  { label: "E", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133745/Screenshot_2026-06-11_044829_yui6ph.png" },
  { label: "F", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133746/Screenshot_2026-06-11_044853_ayngfa.png" },
  { label: "G", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133747/Screenshot_2026-06-11_044900_avo2m8.png" },
  { label: "H", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133748/Screenshot_2026-06-11_044906_s3nfpr.png" },
  { label: "I", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133749/Screenshot_2026-06-11_044915_tmzdyr.png" },
  { label: "J", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133750/Screenshot_2026-06-11_044923_tqtbcn.png" },
  { label: "K", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133130/Screenshot_2026-06-11_044046_jyfyit.png" },
  { label: "L", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133280/Screenshot_2026-06-11_044058_nterdd.png" },
  { label: "M", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133281/Screenshot_2026-06-11_044106_n6hfkq.png" },
  { label: "N", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133750/Screenshot_2026-06-11_044947_uwh7m3.png" },
  { label: "O", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133752/Screenshot_2026-06-11_045000_a45sim.png" },
  { label: "P", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133752/Screenshot_2026-06-11_045007_y9mmvy.png" },
  { label: "Q", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133282/Screenshot_2026-06-11_044115_dz1ygt.png" },
  { label: "R", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133282/Screenshot_2026-06-11_044120_fy64x7.png" },
  { label: "S", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133282/Screenshot_2026-06-11_044127_jfdwz9.png" },
  { label: "T", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133753/Screenshot_2026-06-11_045030_efj4bc.png" },
  { label: "U", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133754/Screenshot_2026-06-11_045037_ycm0ga.png" },
  { label: "V", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133283/Screenshot_2026-06-11_044139_hxkpti.png" },
  { label: "W", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133283/Screenshot_2026-06-11_044145_zta9ru.png" },
  { label: "X", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133284/Screenshot_2026-06-11_044150_ttgd3r.png" },
  { label: "Y", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133755/Screenshot_2026-06-11_045055_bkj2qh.png" },
  { label: "Z", image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133756/Screenshot_2026-06-11_045103_gnfs0i.png" },
  
];

const getRandom = () => allSigns[Math.floor(Math.random() * allSigns.length)];

function Live() {
  const lastCorrectTime = useRef(0);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();
  const [currentSign, setCurrentSign] = useState(getRandom());
  const currentSignRef = useRef(currentSign);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [history, setHistory] = useState([]);
  const wsRef = useRef(null);
const canvasRef = useRef(null);
const [prediction, setPrediction] = useState(null);
const [confidence, setConfidence] = useState(0);
const [handDetected, setHandDetected] = useState(false);
const [cameraStarted, setCameraStarted] = useState(false);

useEffect(() => {
  return () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (wsRef.current) wsRef.current.close();
  };
}, []);

  const stopCamera = () => {
  if (wsRef.current) {
    wsRef.current.close();
    wsRef.current = null;
  }
  if (streamRef.current) {
    streamRef.current.getTracks().forEach(track => track.stop());
    streamRef.current = null;
  }
  if (videoRef.current) {
    videoRef.current.srcObject = null;
  }
  setCameraStarted(false);
};

  const skipRound = () => {
  const next = getRandom();
  setHistory(prev => [...prev.slice(-9), { result: "skip" }]);
  setCurrentSign(next);
  currentSignRef.current = next;
  setRound(r => r + 1);
};
const resetCamera = () => {
  if (streamRef.current) {
    streamRef.current.getTracks().forEach(track => track.stop());
    streamRef.current = null;
  }
  if (videoRef.current) {
    videoRef.current.srcObject = null;
  }
  setCameraStarted(false);
};
const startCamera = () => {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    streamRef.current = stream;
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = () => videoRef.current.play();
    }
    setCameraStarted(true);

    
    const ws = new WebSocket("wss://signify-gwci.onrender.com/ws");
    wsRef.current = ws;

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  setPrediction(data.prediction);
  setConfidence(data.confidence);
  setHandDetected(data.hand_detected);

  const now = Date.now();
  if (
    data.prediction &&
    data.confidence > 35 &&
    data.prediction === currentSignRef.current.label &&
    now - lastCorrectTime.current > 2000
  ) {
    lastCorrectTime.current = now;
    const next = getRandom();
    setScore(s => s + 10);
    setHistory(prev => [...prev.slice(-9), { result: "correct" }]);
    setRound(r => r + 1);
    setCurrentSign(next);
    currentSignRef.current = next;
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

  return (
    <div>
      <main className="lg:ml-64 pt-24 pb-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest">
                  Live Challenge
                </span>
              </div>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary leading-tight">
                Live Sign Challenge
              </h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-on-surface-variant">ROUND</p>
              <p className="font-bold text-2xl text-primary">{round}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left panel */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-surface border-2 border-primary rounded-xl p-6 relative overflow-hidden shadow-[8px_8px_0_0_#bdcd9c]">
                <div className="mt-4">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block mb-2 uppercase tracking-tighter">
                    Current Task
                  </span>
                  <p className="font-headline-lg text-headline-lg text-on-background mb-4">
                    Show this sign:
                  </p>
                  <div className="flex justify-center items-center bg-surface-container-lowest border border-outline-variant rounded-xl mb-4 overflow-hidden">
                    <img
                      src={currentSign.image}
                      alt={currentSign.label}
                      className="w-full object-contain max-h-48"
                    />
                  </div>
                  <div className="text-center text-6xl font-bold text-primary mb-4">
                    {currentSign.label}
                  </div>
                  <div className="flex justify-between items-center px-4 py-3 bg-secondary-container rounded-lg">
                    <span className="font-label-sm text-label-sm text-on-secondary-container">Score</span>
                    <span className="font-title-md text-title-md text-primary">{score} pts</span>
                  </div>
                </div>
              </div>

              {/* Round history */}
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-4">
                <h3 className="font-title-md text-title-md mb-3">Round History</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      i < history.length
                        ? history[i].result === "skip"
                          ? "bg-outline-variant border-outline text-on-surface-variant"
                          : "bg-primary-container border-primary text-on-primary-container"
                        : "bg-surface-container-highest border-outline-variant"
                    }`}>
                      {i < history.length && history[i].result !== "skip" && (
                        <span className="material-symbols-outlined text-sm">check</span>
                      )}
                      {i >= history.length && (
                        <span className="text-xs text-on-surface-variant">{i + 1}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
{/* Webcam */}
            <div className="lg:col-span-8">
              <div className="relative bg-inverse-surface rounded-2xl overflow-hidden border-4 border-outline aspect-video">
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
                      className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_4px_0_0_#26320f]"
                    >
                      <span className="material-symbols-outlined">videocam</span>
                      Start Camera
                    </button>
                  </div>
                )}

                {cameraStarted && (
                  <div className="absolute top-6 left-6 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <div className="w-3 h-3 bg-error rounded-full animate-pulse" />
                    <span className="text-white font-label-sm text-label-sm tracking-widest uppercase">
                      Live
                    </span>
                  </div>
                )}

                {cameraStarted && handDetected && confidence > 30 && (
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    <div className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Detected: {prediction}
                    </div>
                    <div className="bg-primary/80 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {confidence}% confident
                    </div>
                  </div>
                )}
                
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col md:flex-row gap-4">
                <button
                  onClick={resetCamera}
                  className="flex-1 flex items-center justify-center gap-2 bg-secondary py-4 px-6 rounded-xl text-white font-bold shadow-[0_4px_0_0_#4c463f] active:translate-y-1 active:shadow-none transition-all">
                  <span className="material-symbols-outlined">restart_alt</span>
                  RESET CAMERA
                </button>
                <button
                  onClick={skipRound}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary py-4 px-6 rounded-xl text-white font-bold shadow-[0_4px_0_0_#26320f] active:translate-y-1 active:shadow-none transition-all">
                  <span className="material-symbols-outlined">skip_next</span>
                  SKIP ROUND
                </button>
                <button
                  onClick={stopCamera}
                  className="flex-[1.5] flex items-center justify-center gap-2 bg-tertiary py-4 px-6 rounded-xl text-white font-bold shadow-[0_4px_0_0_#46232e] active:translate-y-1 active:shadow-none transition-all">
                  <span className="material-symbols-outlined">flag</span>
                  QUIT CHALLENGE
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Live;