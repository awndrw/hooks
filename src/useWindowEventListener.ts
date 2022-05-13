import React from 'react';
import { useEvent } from './useEvent';
import { EventName, EventListener } from './types';

export const useWindowEventListener = <K extends EventName<WindowEventMap>>(
    eventName: K,
    listener: EventListener<WindowEventMap, K>
) => {
    const stableListener = useEvent(listener);
    React.useEffect(() => {
        if (!window || !window.addEventListener) {
            return;
        }
        window.addEventListener(eventName, stableListener);
        return () => window.addEventListener(eventName, stableListener);
    }, [eventName, stableListener]);
};
