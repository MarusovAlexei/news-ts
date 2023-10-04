export enum Method {
    Get = 'GET',
    Post = 'POST',
}

export enum StatusOptions {
    ok = 'ok',
    error = 'error',
}

export type Callback<T> = (data?: T) => void;
