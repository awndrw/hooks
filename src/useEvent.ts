import React from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

type Callback = (...args: any[]) => any;

export const useEvent = <C extends Callback>(callback: C): C => {
    const callbackRef = React.useRef(callback);
    useIsomorphicLayoutEffect(() => {
        callbackRef.current = callback;
    });
    return React.useMemo(() => callbackRef.current, []);
};
