import React, {useEffect, useRef, useState, useCallback} from 'react';

import {useField} from '@unform/core';

import {Container} from './styles';
import {IconBaseProps} from "react-icons";

type InputProps = {
    name: string,
    icon?: React.ComponentType<IconBaseProps>,
    placeholder?: string,
}

export function Input({name, icon: Icon, ...rest}: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);


    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    const {fieldName, defaultValue, registerField} = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            {Icon && <Icon size={20}/>}

            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
            />
        </Container>
    );
}

