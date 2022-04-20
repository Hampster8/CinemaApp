import React, { useEffect, useState } from 'react';

const useLocalStorage = (key) => {
    const [value, SetValue] = useState(
        JSON.parse(localStorage.getItem(key))
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, SetValue];
}

export default useLocalStorage;