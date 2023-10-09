import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.js";
import Skills from "./pages/skills/skills.js";
import About from "./pages/about/about.js";
import WorkExperience from "./pages/workexp/workexp.js";
import PreLoader2 from "./components/Loader/loader";

let App = () => {
  return (
    <Routes>
      <Route path="/" element={<PreLoader2 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work-experience" element={<WorkExperience />} />
    </Routes>
  );
};

export default App;
