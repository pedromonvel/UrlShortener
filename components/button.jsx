import "./button.css";

export default function Button ({text, style, className}){
    return <>
        <button style={{ 
            color: "white", 
            height: "40px", 
            borderRadius: "6px", 
            width: "85px", 
            cursor: "pointer",
            ...style
            }} className={`button ${className}`}>{text}</button>
    </>
}