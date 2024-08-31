import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handle);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

useDebounce.proTypes = {
    value: PropTypes.string,
    delay: PropTypes.number,
};
export default useDebounce;
