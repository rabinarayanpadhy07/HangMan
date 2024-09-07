import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../../components/HangMan/Hangman";

function PlayGame() {

    const [usedLetters, setUsedLetters] = useState([]);
    const [step,setStep] = useState(0);
    const location = useLocation();
const wordSelected = location.state?.wordSelected;
    const handleLetterClick = function(letter) {
        if (wordSelected.toUpperCase().includes(letter)) {
            console.log('correct')
        }else{
            console.log('incorrect')
            setStep(step+1);
        }
        setUsedLetters([...usedLetters, letter]);
    }

    return (
        <div>
            <h1 className="text-3xl">Guess The Letters </h1>
            
            <MaskedText text={wordSelected} usedLetters={usedLetters} />
            <hr/>
        <div className="flex justify-between items-center">
        <div className="basis-2/4">
        <LetterButtons  text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
        </div>
         
        <div className="basis-2/4 flex justify-center items-center">
        <HangMan step={step}/>
        </div>
    
        </div>
        
           
            <hr />

            <Link to='/start' className="text-black-600 text-3xl rounded-md hover:text-black-700 bg-red-600 px-1 py-1 "> Restart The Game </Link>
        </div>
    );
}
export default PlayGame;