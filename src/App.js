import React from "react";
import RoundOne from "./components/roundDesigns/RoundOne";

import Home from "./Home";

function App() {
  return (
    <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-black relative">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
      </div>
    </div>
  );
}

export default App;
