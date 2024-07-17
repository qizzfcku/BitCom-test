import type {User} from "@/entities/user/model/auth";

export interface CredentialUsers {
  user: User[];
}

export const credentialUser : CredentialUsers = {
  "user" : [
    {
      "id": 1,
      "login": "admin",
      "password": "admin"
    },
    {
      "id": 2,
      "login": "admin1",
      "password": "admin1"
    },
    {
      "id": 3,
      "login": "admin2",
      "password": "admin2"
    }
  ]
}

