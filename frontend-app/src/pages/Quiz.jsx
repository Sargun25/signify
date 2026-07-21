import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const allQuestions = {
  phrases: [
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181074/thankyou_bfjo0j.png", correct: "Thank You", options: ["Hello", "Thank You", "Please", "Sorry"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181061/hello_gewsxd.png", correct: "Hello", options: ["Sorry", "Hello", "Help", "No"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181070/please_kp6lco.png", correct: "Please", options: ["Yes", "Thank You", "Please", "Stop"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181072/sorry_bslk37.png", correct: "Sorry", options: ["Sorry", "No", "Help", "Please"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181063/iloveyou_ohwgrf.png", correct: "I Love You", options: ["Hello", "Yes", "I Love You", "Thank You"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181067/no_jdxkgt.png", correct: "No", options: ["No", "Stop", "Sorry", "Help"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181078/yes_btpfvm.png", correct: "Yes", options: ["Please", "Yes", "Hello", "No"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181062/help_uogubm.png", correct: "Help", options: ["Stop", "Sorry", "Help", "Please"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181073/stop_gcixdy.png", correct: "Stop", options: ["No", "Stop", "Sorry", "Help"] },
  ],
  numbers: [
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181049/0_zwuwzh.png", correct: "0", options: ["0", "O", "C", "9"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181049/1_t7croh.png", correct: "1", options: ["1", "D", "G", "L"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181049/2_lel5m3.png", correct: "2", options: ["2", "V", "U", "K"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181050/3_khfc7n.png", correct: "3", options: ["3", "W", "4", "6"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181050/4_pf6ekw.png", correct: "4", options: ["4", "3", "5", "W"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181050/5_efovyi.png", correct: "5", options: ["5", "B", "4", "W"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181051/6_l8hzus.png", correct: "6", options: ["6", "7", "3", "9"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181052/7_l1x3xy.png", correct: "7", options: ["7", "6", "8", "4"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181052/8_rnj0q3.png", correct: "8", options: ["8", "7", "9", "6"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181053/9_v9htxv.png", correct: "9", options: ["9", "8", "0", "7"] },
    {image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181054/10_qvxyqc.png", correct: "10", options: ["10", "11", "12", "9"] },
  ],
  alphabet: [
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181055/A_whofez.png", correct: "A", options: ["A", "S", "E", "M"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181055/B_apc6fx.png", correct: "B", options: ["B", "D", "P", "F"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181056/C_rf9x19.png", correct: "C", options: ["C", "O", "G", "Q"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181057/D_hycyai.png", correct: "D", options: ["D", "G", "1", "P"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181057/E_uiuyrj.png", correct: "E", options: ["E", "A", "S", "N"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181058/F_qxwo6k.png", correct: "F", options: ["F", "2", "K", "U"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181059/G_bfmvxq.png", correct: "G", options: ["G", "H", "D", "Q"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181060/H_o54mcu.png", correct: "H", options: ["H", "G", "U", "N"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181062/I_s69tlr.png", correct: "I", options: ["I", "J", "Y", "1"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181063/J_i3pwbl.png", correct: "J", options: ["J", "I", "Z", "Y"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181064/K_z236td.png", correct: "K", options: ["K", "P", "R", "H"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181065/L_miykmw.png", correct: "L", options: ["L", "1", "D", "G"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181066/M_pfld1o.png", correct: "M", options: ["M", "N", "E", "S"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181066/N_donr4n.png", correct: "N", options: ["N", "M", "T", "U"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181068/O_idhqo4.png", correct: "O", options: ["O", "C", "0", "G"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181069/P_u8lzks.png", correct: "P", options: ["P", "K", "D", "B"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781182399/Q_vwps9c.png", correct: "Q", options: ["Q", "G", "D", "P"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181070/R_ikonla.png", correct: "R", options: ["R", "U", "V", "K"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181071/S_gzfqgf.png", correct: "S", options: ["S", "A", "E", "M"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181073/T_s417jd.png", correct: "T", options: ["T", "D", "N", "X"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181075/U_tqukj4.png", correct: "U", options: ["U", "H", "N", "R"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181075/V_oeuvnx.png", correct: "V", options: ["V", "U", "2", "K"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181076/W_ltk03r.png", correct: "W", options: ["W", "3", "M", "F"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181077/X_kpmy88.png", correct: "X", options: ["X", "D", "G", "1"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181077/Y_zvqfhr.png", correct: "Y", options: ["Y", "I", "J", "V"] },
    { image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781181079/Z_fkcbic.png", correct: "Z", options: ["Z", "J", "X", "N"] },
  ],
};

const quizTypes = [
  { key: "phrases", label: "Phrases Quiz", description: "Test your knowledge of common ASL phrases", color: "#b98896", textColor: "#46232e" },
  { key: "numbers", label: "Numbers Quiz", description: "Test your knowledge of ASL numbers 0-9", color: "#8c9b6e", textColor: "#26320f" },
  { key: "alphabet", label: "Alphabet Quiz", description: "Test your knowledge of the ASL alphabet", color: "#ebe1d8", textColor: "#1f1b16" },
];
const preloadImages = (questions) => {
  questions.forEach(q => {
    const img = new Image();
    img.src = q.image;
  });
};

function QuizGame({ questions, onBack }) {
const [shuffled] = useState(() => shuffle(questions).slice(0, 10));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  useEffect(() => {
  preloadImages(shuffled);
}, []);
  const total = shuffled.length;
  const q = shuffled[current];

  const handleAnswer = (option) => {
    if (selected) return;
    setSelected(option);
    if (option === q.correct) setScore((s) => s + 10);
  };

  const nextQuestion = () => {
    if (current + 1 >= total) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  if (finished) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-surface border border-outline-variant p-8 rounded-xl text-center">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 border-4 border-primary rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display-lg text-headline-lg text-primary">
                {Math.round((score / (total * 10)) * 100)}%
              </span>
            </div>
          </div>
          <h2 className="font-headline-lg text-headline-lg mb-2">
            {score >= total * 7 ? "Great Job!" : "Keep Practicing!"}
          </h2>
          <p className="text-on-surface-variant mb-8">
            You scored {score} out of {total * 10}
          </p>
          <div className="flex flex-col gap-3">
            <button onClick={onBack} className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold">
              Back to Quizzes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <button onClick={onBack} className="text-sm text-on-surface-variant flex items-center gap-1 mb-2">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back
          </button>
          <h2 className="font-headline-lg mt-1">Daily Review</h2>
        </div>
        <div className="text-right">
          <p className="text-sm text-on-surface-variant">CURRENT SCORE</p>
          <p className="font-display-lg text-headline-lg text-primary">
            {String(score).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        {shuffled.map((_, i) => (
          <div key={i} className={`h-2 flex-1 rounded-full transition-all ${i <= current ? "bg-primary" : "bg-outline-variant"}`} />
        ))}
      </div>

      <div className="bg-surface border border-outline-variant p-6 rounded-xl relative">
        <div className="absolute top-0 right-0 bg-secondary-container px-4 py-1 rounded-bl-xl text-sm font-bold">
          Q {current + 1}/{total}
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center mt-4">
          <div className="w-full md:w-1/2 aspect-square bg-surface-container-high border-2 border-primary rounded-xl flex items-center justify-center">
            <img src={q.image} alt="ASL sign" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <p className="font-title-md text-title-md mb-2">What does this sign mean?</p>
            {q.options.map((option) => {
              let style = "border-outline-variant bg-surface hover:border-primary";
              if (selected) {
                if (option === q.correct) style = "border-primary bg-primary-fixed";
                else if (option === selected) style = "border-error bg-error-container";
              }
              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-4 rounded-xl border-2 font-body-lg flex justify-between items-center transition-all ${style}`}
                >
                  <span>{option}</span>
                  {selected && option === q.correct && <span className="material-symbols-outlined text-primary">check_circle</span>}
                  {selected && option === selected && option !== q.correct && <span className="material-symbols-outlined text-error">cancel</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {selected && (
        <div className="p-6 border-2 border-outline-variant rounded-xl bg-surface-container-lowest">
          <div className="flex gap-4 items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${selected === q.correct ? "bg-primary" : "bg-error"}`}>
              <span className="material-symbols-outlined text-white">
                {selected === q.correct ? "check" : "close"}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-title-md">{selected === q.correct ? "Correct!" : "Not quite!"}</h3>
              <p className="text-on-surface-variant text-sm mt-1">The correct answer is <strong>{q.correct}</strong>.</p>
            </div>
            <button onClick={nextQuestion} className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold">
              {current + 1 >= total ? "See Results" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Quiz() {
  const [activeQuiz, setActiveQuiz] = useState(null);

  return (
    <div>
      <Navbar />
      <main className="pt-20 pb-20 md:pl-64 md:pr-20 px-4 min-h-screen">
        {activeQuiz ? (
          <QuizGame
            questions={allQuestions[activeQuiz]}
            onBack={() => setActiveQuiz(null)}
          />
        ) : (
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display-lg text-3xl font-bold mb-2">Quizzes</h1>
            <p className="text-on-surface-variant mb-8">Choose a quiz to start practicing</p>
            <div className="grid grid-cols-1 gap-6">
              {quizTypes.map((quiz) => (
                <button
                  key={quiz.key}
                  onClick={() => setActiveQuiz(quiz.key)}
                  className="p-6 rounded-2xl text-left hover:shadow-lg transition-all hover:-translate-y-1 min-h-48"
                  style={{ backgroundColor: quiz.color }}
                >
                  <h3 className="font-bold text-xl mb-2" style={{ color: quiz.textColor }}>
                    {quiz.label}
                  </h3>
                  <p className="text-sm" style={{ color: quiz.textColor, opacity: 0.8 }}>
                    {quiz.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1" style={{ color: quiz.textColor }}>
                    <span className="text-sm font-bold">Start</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Quiz;