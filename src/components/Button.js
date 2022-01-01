import React from 'react';

function Button({label, onClick, isSubmitButton}) {

    if(isSubmitButton) {
        return <button type="submit">{label}</button>
    }

    return (
        <button onClick={onClick}>{label}</button>
    );
}

export default Button;
