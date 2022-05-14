import { EventListener } from '@wiggindev/utils';
export declare const useWindowEventListener: <K extends string>(eventName: K, listener: EventListener<WindowEventMap, K>) => void;
