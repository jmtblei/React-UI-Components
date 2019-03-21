import React from 'react';
import './Button.css';

function ZeroClearButton(props) {
    return (
        <div className="zeroclearcomponent">
            <button className={props.className}>{props.text}</button>
        </div>
    )
};

export default ZeroClearButton;