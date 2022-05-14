import React from 'react';
import { useEvent } from './useEvent';
import { events, EventName, EventListener } from '@wiggindev/utils';

export const useDocumentEventListener = <K extends EventName<DocumentEventMap>>(
    eventName: K,
    listener: EventListener<DocumentEventMap, K>
) => {
    const stableListener = useEvent(listener);
    React.useEffect(() => {
        if (!document || !document.addEventListener) {
            return;
        }
        events.document.on(eventName, stableListener);
        return () => events.document.off(eventName, stableListener);
    }, [eventName, stableListener]);
};
