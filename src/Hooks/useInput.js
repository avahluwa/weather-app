import React, { useState } from 'react';

export const useInput = startValue => {
    const [value, setValue] = useState(startValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onSubmit: event => {
                setValue(event.target.value);
            }
        }
    }
}