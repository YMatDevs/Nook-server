
type Error = {
    message: string;
    details: Object;
}

export type ApiResponse = {
    status: number;
    success: boolean;
    data?: Object;
    error?: Error;
}