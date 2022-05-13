import { EventListener } from './events';
export declare const useWindowEventListener: <K extends keyof WindowEventMap>(eventName: K, listener: EventListener<WindowEventMap, K>) => void;
