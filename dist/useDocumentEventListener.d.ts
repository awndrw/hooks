import { EventListener } from './types';
export declare const useDocumentEventListener: <K extends keyof DocumentEventMap>(eventName: K, listener: EventListener<DocumentEventMap, K>) => void;
