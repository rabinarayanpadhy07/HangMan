import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../../components/HangMan/Hangman";

function PlayGame() {
    const [usedLetters, setUsedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const location = useLocation();
    const wordSelected = location.state?.wordSelected;

    const handleLetterClick = (letter) => {
        if (wordSelected.toUpperCase().includes(letter)) {
            console.log('correct');
        } else {
            console.log('incorrect');
            setStep(step + 1);
        }
        setUsedLetters((prev) => [...prev, letter]);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">Guess The Letters</h1>

            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
                {/* Masked Text Display */}
                <MaskedText text={wordSelected} usedLetters={usedLetters} />
                
                <hr className="my-4"/>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Letter Buttons Section */}
                    <div className="md:basis-2/4 mb-4 md:mb-0">
                        <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
                    </div>

                    {/* Hangman Image Section */}
                    <div className="md:basis-2/4 flex justify-center items-center">
                        <HangMan step={step} />
                    </div>
                </div>
            </div>

            <hr className="my-6 w-full max-w-3xl"/>

            {/* Restart Game Button */}
            <Link
                to='/start'
                className="text-white text-lg md:text-xl rounded-md hover:bg-red-700 bg-red-600 px-4 md:px-6 py-2 md:py-3 mt-4 transition duration-300"
            >
                Restart The Game
            </Link>
        </div>
    );
}

export default PlayGame;
