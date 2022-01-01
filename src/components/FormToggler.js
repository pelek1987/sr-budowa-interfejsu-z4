import React, {forwardRef} from 'react';

const FormToggler =  forwardRef(({onKeyDown}, ref) => {
    return (
        <div>
            To search, press <input ref={ref} type="button" onKeyDown={onKeyDown} value="ENTER"/>
        </div>
    );
})

export default FormToggler;
