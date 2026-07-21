import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import LearningLibrary from "./pages/LearningLibrary";
import Live from "./pages/Live";
import Quiz from "./pages/Quiz";
import SentenceBuilder from "./pages/SentenceBuilder";
import Cam from "./pages/Cam";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/learn" element={<LearningLibrary />} />
        <Route path="/practice" element={<Live />} />
        <Route path="/about" element={<SentenceBuilder />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/cam" element={<Cam />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;