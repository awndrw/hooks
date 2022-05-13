import React from 'react';
import { EventListener } from './types';
export declare const useEventListener: <K extends keyof HTMLElementEventMap, E extends HTMLElement>(eventName: K, listener: EventListener<HTMLElementEventMap, K>, element: React.RefObject<E>) => void;
