// Presentation component
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button" ;

function TextInputForm({ handleFormSubmit, handleTextInputChange, value, inputType, setInputType }) {
    return (
        <form className="flex items-end m-5 gap-2" onSubmit={handleFormSubmit}>
            <div className="flex-1">
                 <TextInput 
                    label="Enter a word or phrase for your freinds"
                    type={inputType}
                    value={value}
                    onChange={handleTextInputChange}
                />
            </div>

            <div>
                <Button 
                    styleType="warning"
                    text={inputType === 'password' ? 'Show' : 'Hide'}
                    onClickHandler={() => setInputType(inputType === 'password' ? 'text' : 'password')}
                />
            </div>

            <div>
                <Button 
                    text="OK"
                    buttonType="submit"
                />
            </div>
        </form>
    );

}

export default TextInputForm;