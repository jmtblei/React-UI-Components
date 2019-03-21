import React from 'react';
import NumberButton from './NumberButton';
import ZeroClearButton from './ZeroClearButton';

const buttons = [
    {number: 7},
    {number: 8},
    {number: 9},
    {number: 4},
    {number: 5},
    {number: 6},
    {number: 1},
    {number: 2},
    {number: 3},
]

function ButtonContainer() {
    const ButtonGrid = buttons.map(button => <NumberButton text={button.number} buttonStyle="button"/>);

    return (
        <div className="buttonscontainer">
            <ZeroClearButton className="zcbutton" text="clear"/>
            <div className="gridcontainer">
                {ButtonGrid}
            </div>
            <ZeroClearButton className="zcbutton" text="0"/>
        </div>
    )
};

export default ButtonContainer;