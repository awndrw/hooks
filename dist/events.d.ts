declare type EventMap = WindowEventMap | DocumentEventMap | HTMLElementEventMap;
export declare type EventName<M extends EventMap> = keyof M;
export declare type EventListener<M extends EventMap, N extends EventName<M>> = (event: M[N]) => void;
export {};
