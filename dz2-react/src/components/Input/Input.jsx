import React from 'react';

function Input({name,OnChangeFunc,value}) {
    return (
        <input name={name}
                onChange={OnChangeFunc}

        />
        );
}

export default Input;