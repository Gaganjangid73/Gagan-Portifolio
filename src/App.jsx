import { useState } from "react";
import Navbar from "./Component/Navbar";
import Homepage from "./pages/Homepage";
import Slidebar from "./Component/slidebar";


function App() {
  return (
    <div className="bg-black w-full h-screen">
      <div className="flex flex-1 justify-center">
        <Navbar />
      </div>
      <div> <Homepage/> </div>
    </div>
  );
}

export default App;
