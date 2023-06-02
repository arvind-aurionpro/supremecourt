/* eslint-disable */
import React from 'react';
import { Button } from 'react-bootstrap';


export const GlobalButton = (props) => {
    const { text, className, callback, disabled, noUpperCase } = props;;
    return (

        <Button
            variant={className}
            onClick={() => {
                callback();
            }}
            disabled={disabled}
            style={{ ...props.style }}
            onFocus={(e) => (e.target.blur())}
        >
            {text && ((!noUpperCase) ? text : text.toUpperCase())}
        </Button>

    );
}
