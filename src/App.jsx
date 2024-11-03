import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {
  const navigate = useNavigate();
  const [hasStarted, setHasStarted] = useState(false);

  const handleStartGame = () => {
    setHasStarted(true);
    navigate("/start");
  };

  return (
    <>
      {/* Render the landing page only if the game hasn't started */}
      {!hasStarted && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-center">
            Welcome to HangMan
          </h1>
          
          {/* Start Game Button */}
          <button
            onClick={handleStartGame}
            className="bg-yellow-500 hover:bg-yellow-600 text-lg sm:text-2xl font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-md transition duration-300 w-full max-w-xs"
          >
            Start Game
          </button>
        </div>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
      </Routes>
    </>
  );
}

export default App;
