type EventMap = WindowEventMap | DocumentEventMap | HTMLElementEventMap;

export type EventName<M extends EventMap> = keyof M;
export type EventListener<M extends EventMap, N extends EventName<M>> = (
    event: M[N]
) => void;
