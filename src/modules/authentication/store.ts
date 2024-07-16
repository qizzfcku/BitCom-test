import { defineStore } from 'pinia'
import type {User} from '@/types/auth'

interface UserState {
    userData: User | null,
}

export const useUserStore = defineStore('auth', {
    state: (): UserState => ({
        userData: null,
    }),
    actions: {
        getUser(user: User) {
            this.userData = user;
            localStorage.setItem('userData', JSON.stringify(user));
        },
        loadUser() {
            const userData = localStorage.getItem('userData');
            if(userData){
                this.userData = JSON.parse(userData) as User
            }
        },
        deleteUser() {
            this.userData = null;
            localStorage.removeItem('userData');
        }
    }

})
