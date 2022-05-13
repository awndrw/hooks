import { EventListener } from './events';
export declare const useDocumentEventListener: <K extends keyof DocumentEventMap>(eventName: K, listener: EventListener<DocumentEventMap, K>) => void;
