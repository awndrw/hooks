import { EventListener } from './types';
export declare const useWindowEventListener: <K extends keyof WindowEventMap>(eventName: K, listener: EventListener<WindowEventMap, K>) => void;
