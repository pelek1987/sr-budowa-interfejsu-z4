import React, {forwardRef} from 'react';

const FormToggler =  forwardRef(({onKeyDown, onClick}, ref) => {
    return (
        <div>
            To search, press <input ref={ref} type="button" onKeyDown={onKeyDown} onClick={onClick} value="ENTER"/>
        </div>
    );
})

export default FormToggler;
