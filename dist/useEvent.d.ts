declare type Callback = (...args: any[]) => any;
export declare const useEvent: <C extends Callback>(callback: C) => C;
export {};
