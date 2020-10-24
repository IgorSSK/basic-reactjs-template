import React, { useEffect, useRef } from 'react';

import { InputField } from './styles';

import { TextFieldProps } from '@material-ui/core/TextField';
import { useField } from '@unform/core';
import  InputMask from 'react-input-mask';
import InputAdornment from '@material-ui/core/InputAdornment';

interface InputMaskProps {
    mask?: string | Array<(string | RegExp)>;
    maskchar?: string | null;
    alwaysShowMask?: boolean;
}
interface InputProps  {
    startAdornment?: any;
    endAdornmnet?: any;
}

const Input: React.FC<TextFieldProps & InputProps & InputMaskProps> = ({ name = "", mask, maskchar, alwaysShowMask, startAdornment, endAdornmnet, InputProps, ...props }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, defaultValue = "", registerField, error, clearError } = useField(name);
    
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        })
    }, [fieldName, registerField]);    

    return (
        <InputMask mask={mask ? mask : ""} alwaysShowMask={alwaysShowMask} onFocus={clearError}>
            {() => (
                <InputField
                    id={fieldName}
                    inputRef={inputRef}
                    error={!!error}
                    helperText={error}
                    defaultValue={defaultValue}
                    variant='outlined'
                    InputProps={{
                        startAdornment: startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>,
                        endAdornment: endAdornmnet && <InputAdornment position="end">{endAdornmnet}</InputAdornment>,
                        ...InputProps
                    }}
                    {...props} />
            )}
        </InputMask>
    );
}

export default Input;