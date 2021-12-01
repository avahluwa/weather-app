import { useState } from 'react';

export function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function onSubmit(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onSubmit,
    };
}
