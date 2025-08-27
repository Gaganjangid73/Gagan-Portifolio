import Homepage from "./pages/Homepage";
import Experience from "./pages/experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Skills from "./pages/Skills"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Homepage />}>
          <Route index element={<div className="text-white mt-20 px-6">Welcome!</div>} />
          {/* Nested Route */}
          <Route path="experience" element={<Experience />} />
           <Route path="projects" element={<Projects />} />
           <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
