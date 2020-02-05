export interface CommonState {
    error?: CommonError;
    loading?: boolean;
}
export interface CommonError {
    code: number;
    message: string[];
}
