import React, { useState } from "react";

const CallBack = () => {
    const [text, setText] = useState("im gonna change onclick");

    const handleClick = () => {
        setText("Text Changed");
    };

    const handleCorrect = () => {
        setText(prevText => prevText + " (changed with callback)");
    };

    return (
        <div>
            <p>{text}</p>
            <button onClick={handleClick}>normal change</button>
            <button onClick={handleCorrect}>callback change </button>
        </div>
    );
};

export default CallBack;