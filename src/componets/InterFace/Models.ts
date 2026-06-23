export interface LogInResponse {
    staffId: string;
    storeId: string;
    password: string;
}

export interface UserResponse {
    id: number;
    username: string;
    email: string;
    mobile: string;
    created_date: string;
}

export interface GeneralResponse {
    code: number;
    message: string;
    data: UserResponse;
}

export interface saveSimRequest {
    simNo: string;
    accountNumber: string;
    mobileNumber: string;
    staffId: string;
 
}


export interface deleteUserRequest {
    id: number;
}

export interface updateUserRequest {
    id: number;
    username: string;
    password: string;
    email: string;
    mobile: string;
}