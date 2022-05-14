import { EventListener } from '@wiggindev/utils';
export declare const useDocumentEventListener: <K extends string>(eventName: K, listener: EventListener<DocumentEventMap, K>) => void;
