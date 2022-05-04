export enum LifecycleStatus {
    WAITINGLOAD= "waitingLoad",
    LOADING = 'loading',
    LOADED = 'loaded',
    ERROR = 'error'
  }
  
  export type Lifecycle = {
    [x in LifecycleStatus]?: (el?:HTMLElement) => void;
  };