import React, {forwardRef, useEffect} from 'react';

const Input = forwardRef(({id, label, type = "text", name, value, onChange, placeholder}, ref) => {

    useEffect(() => {
        ref.current.focus();
    }, [ref])

    return (
        <label htmlFor="name">
            {label}
            <input
                ref={ref}
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </label>
    );
})

export default Input;
