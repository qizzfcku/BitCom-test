export interface User {
    id: number,
    login: string,
    password: string
    userDetails: UserInfo
}

export interface UserInfo {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: string,
}
