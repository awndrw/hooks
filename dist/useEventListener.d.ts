import React from 'react';
import { EventListener } from '@wiggindev/utils';
export declare const useEventListener: <K extends string, E extends HTMLElement>(eventName: K, listener: EventListener<HTMLElementEventMap, K>, element: React.RefObject<E>) => void;
