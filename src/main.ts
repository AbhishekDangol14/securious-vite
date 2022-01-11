import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import axios from 'axios'

import './css/tailwind.css'

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('ID_TOKEN_KEY');

    if (authRequired && !loggedIn) {
      next('/login');
    } 
    else if(!authRequired && loggedIn) {
      next('/dashboard');
    }
    else {
      next()
    }
  });

const token = localStorage.getItem('ID_TOKEN_KEY')
if (token)
  axios.defaults.headers.common['Authorization'] = "Bearer "+token

createApp(App).use(store).use(router).mount('#app')

