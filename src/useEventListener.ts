import React from 'react';
import { useEvent } from './useEvent';
import { events, EventName, EventListener } from '@wiggindev/utils';

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
        events.element.on(node, eventName, stableListener);
        return () => events.element.off(node, eventName, stableListener);
    }, [element, eventName, stableListener]);
};
