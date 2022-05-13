import React from 'react';
import { useEvent } from './useEvent';
import { EventName, EventListener } from './events';

export const useEventListener = <
    K extends EventName<HTMLElementEventMap>,
    E extends HTMLElement
>(
    eventName: K,
    listener: EventListener<HTMLElementEventMap, K>,
    element: React.RefObject<E>
) => {
    const stableListener = useEvent(listener);
    React.useEffect(() => {
        const node = element.current;
        if (!node || !node.addEventListener) {
            return;
        }
        node.addEventListener(eventName, stableListener);
        return () => node.addEventListener(eventName, stableListener);
    }, [element, eventName, stableListener]);
};
