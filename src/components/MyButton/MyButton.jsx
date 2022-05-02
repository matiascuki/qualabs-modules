import React from 'react';
import "./MyButton.css"


const SIZES = ['btn--small', 'btn--medium'];

const COLOR = ['btn--violet', 'btn--red', 'btn--yellow', 'btn--pink','btn--green'];

const MyButton = ({
    children,
    buttonColor,
    buttonSize,
    type,
    onClick,
    active
}) => {

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    return (
        <button
            className={`btn ${checkButtonSize} ${checkButtonColor} ${active}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>

    );
};

export default MyButton;