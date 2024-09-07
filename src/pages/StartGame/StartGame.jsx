import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

function StartGame() {

    const navigate = useNavigate();
    
    function handleSubmit(value) {
        navigate('/play',{state:{wordSelected:value}});
    }

    return (
        <div>
            <TextInputFormContainer onSubmit={handleSubmit} />
        </div>
    );
}
export default StartGame;