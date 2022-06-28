import localforage from 'localforage';
import { useState, useLayoutEffect } from 'react';
export { localforage };

// https://reactjs.org/docs/hooks-custom.html
export function useLocalForage(key, defaultValue) {
    // only supports primitives, arrays, and {} objects
    const [state, setState] = useState(defaultValue);
    const [loading, setLoading] = useState(true);

    // useLayoutEffect will be called before DOM paintings and before useEffect
    useLayoutEffect(() => {
        let allow = true;
        localforage.getItem(key).then(value => {
            if (value === null) throw '';
            if (allow) setState(value);
        }).catch(() => localforage.setItem(key, defaultValue)).then(() => {
            if (allow) setLoading(false);
        });
        return () => allow = false;
    }, []);
    // useLayoutEffect does not like Promise return values.
    useLayoutEffect(() => {
        // do not allow setState to be called before data has even been loaded!
        if (!loading) localforage.setItem(key, state);
    }, [state]);
    return [state, setState, loading];
}

// notification example (different from mantine notification)
export function notify(title, body) {
    new Notification(title, {
        body: body || "",
    });
}