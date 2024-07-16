export interface User {
    id: number,
    login: string,
    password: string
}

export interface CredentialUser {
    user: User[];
}
