import React from 'react';
import ActionButton from './ActionButton';

const buttons = [
    {action: '÷'},
    {action: 'x'},
    {action: '-'},
    {action: '+'},
    {action: '='},
]

function ActionContainer() {
    const ActionColumn = buttons.map(button => <ActionButton text={button.action} style="button actions"/>);

    return (
        <div className="actioncontainer">
            <div className="actioncolumn">
                {ActionColumn}
            </div>
        </div>
    )
};

export default ActionContainer;