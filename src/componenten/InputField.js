import React from 'react';

function InputField({name, inputType, label, changeHandler, value}) {
    return (
        <>
            <label htmlFor={`${name}-field`}>{label}</label>
            <input
                name={name}
                id={`${name}-field`}
                type={inputType}
                value={value}
                onChange={changeHandler}
            />
        </>
    );
}


export default InputField;






