import "./input.css"
import Button from "./button"

export default function InputSection () {
    return <div className="inputWithButton">
        <input type="url" placeholder={"Enter the link here..."}/>
        <Button 
        className="input-button"
        text="Shorten it"
        />
    </div>
}
