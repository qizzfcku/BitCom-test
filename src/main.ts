import '@/assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useUserStore} from "@/modules/authentication/store";

const app = createApp(App)

app.use(createPinia())
app.use(router)

const userStore = useUserStore();
userStore.loadUser();

app.mount('#app')
