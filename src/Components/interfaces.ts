export interface APIResponse<T> {
    data: T,
    isLoading: boolean;
    error: Error;
    isSuccess:boolean;
    onSuccess ?: any;
  }