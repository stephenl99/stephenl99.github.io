import {useState, useEffect} from "react";

let string;
string = "Software Engineer";
let time = 200;
function Typing() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(()  => {
        const interval = setInterval(() => {
            if (index < string.length) {
                setText(text => (text + string[index]));
                setIndex(index => index + 1);
            } else {
                clearInterval(interval);
            }
        }, time);
        return () => clearInterval(interval);
    })
    return (
        <div style={{ fontSize: '24px' }}>
            {text}
            <span className={`cursor ${index === string.length ? 'cursor-done' : ''}`}>|</span>
        </div>
    )
}

export default Typing;