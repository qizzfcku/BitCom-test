import { defineStore } from 'pinia'
import type {User} from '@/entities/user/model/auth'

interface UserState {
    userData: User | null,
}

export const useUserStore = defineStore('auth', {
    state: (): UserState => ({
        userData: null,
    }),
    getters: {
        isAuthenticated: (state): boolean => state.userData !== null,
        getUserData: (state): User | null => state.userData
    },
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
