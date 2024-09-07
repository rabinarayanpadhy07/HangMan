import { Route, Routes } from "react-router-dom";

import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {
  return (

    <>
    <div className="bg-red-500 items-center justify-center text-4xl text-center font-semibold h-25">
     Welcome to HangMan
    </div>
    <Routes>
      <Route path="/play" element={<PlayGame />} />
      <Route path="/start" element={<StartGame />} />
  
    </Routes>
    </>
   
      
  );
}

export default App;
