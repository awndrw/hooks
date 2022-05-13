import React from 'react';
import { useEvent } from './useEvent';
import { EventName, EventListener } from './events';

export const useDocumentEventListener = <K extends EventName<DocumentEventMap>>(
    eventName: K,
    listener: EventListener<DocumentEventMap, K>
) => {
    const stableListener = useEvent(listener);
    React.useEffect(() => {
        if (!document || !document.addEventListener) {
            return;
        }
        document.addEventListener(eventName, stableListener);
        return () => document.addEventListener(eventName, stableListener);
    }, [eventName, stableListener]);
};
