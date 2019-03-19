import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <div className="actioncomponent">
            <button className={props.style}>{props.text}</button>
        </div>
    )
};

export default ActionButton;