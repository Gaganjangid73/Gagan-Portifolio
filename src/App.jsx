import Homepage from "./pages/Homepage";
import Experience from "./pages/experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Skills from "./pages/Skills"
import Home from "./pages/Home"

function App() {
  //  this is portfolio is responsive for laptop or a big screen 
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Homepage />}>
          <Route index element={<Home />} />
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
