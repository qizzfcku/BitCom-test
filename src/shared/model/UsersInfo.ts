import type {UserInfo} from "@/entities/user/model/userInfo";

export interface UsersDetails {
    userDetails: UserInfo[]
}

export const UsersDetails: UsersDetails = {
    "userDetails": [
        {
            "id": 1,
            "firstName": "Иван",
            "lastName": "Иванов",
            "phoneNumber": "+7 123 456 7890",
            "address": "г. Москва, ул. Ленина, д. 1"
        },
        {
            "id": 2,
            "firstName": "Петр",
            "lastName": "Петров",
            "phoneNumber": "+7 987 654 3210",
            "address": "г. Санкт-Петербург, ул. Пушкина, д. 2"
        },
        {
            "id": 3,
            "firstName": "Сергей",
            "lastName": "Сергеев",
            "phoneNumber": "+7 555 666 7777",
            "address": "г. Новосибирск, ул. Сибирская, д. 3"
        }
    ]
}
