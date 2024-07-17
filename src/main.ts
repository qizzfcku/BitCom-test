import '@/app/assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/providers/router'
import { useUserStore} from "@/entities/user/model/store";

const app = createApp(App)

app.use(createPinia())
app.use(router)

const userStore = useUserStore();
userStore.loadUser();

app.mount('#app')
