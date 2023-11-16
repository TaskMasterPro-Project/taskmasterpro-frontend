export interface User {
    username: string;
    email: string;
    accessToken: string;
    role: UserRole
}

export enum UserRole {
    ADMIN, USER
}