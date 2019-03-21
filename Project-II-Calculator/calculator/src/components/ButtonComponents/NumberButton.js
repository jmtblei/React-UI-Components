import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div className="numberscomponent">
            <button className={props.buttonStyle}>{props.text}</button>
        </div>
    )
};

export default NumberButton;