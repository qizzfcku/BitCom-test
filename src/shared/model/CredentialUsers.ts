import type {User} from "@/entities/user/model/auth";

export interface CredentialUsers {
  user: User[];
}

export const credentialUser : CredentialUsers = {
  "user" : [
    {
      "id": 1,
      "login": "admin",
      "password": "admin",
      "userDetails": {
        "firstName": "Иван",
        "lastName": "Иванов",
        "phoneNumber": "+7 123 456 7890",
        "address": "г. Москва, ул. Ленина, д. 1"
      }
    },
    {
      "id": 2,
      "login": "admin1",
      "password": "admin1",
      "userDetails": {
        "firstName": "Петр",
        "lastName": "Петров",
        "phoneNumber": "+7 987 654 3210",
        "address": "г. Санкт-Петербург, ул. Пушкина, д. 2"
      }
    },
    {
      "id": 3,
      "login": "admin2",
      "password": "admin2",
      "userDetails": {
        "firstName": "Петр",
        "lastName": "Петров",
        "phoneNumber": "+7 987 654 3210",
        "address": "г. Санкт-Петербург, ул. Пушкина, д. 2"
      }
    }
  ]
}

