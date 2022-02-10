import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import axios from 'axios'

import './css/index.scss';

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('ID_TOKEN_KEY');
    const email = localStorage.getItem('EMAIL_VERIFIED_AT');

    if (to.path == '/verify' || !authRequired){ 
      next()
    }
    if (authRequired && !loggedIn) {
      next('/login');
    } 
    else if(!authRequired && loggedIn) {
      axios.defaults.headers.common['Authorization'] = "Bearer "+loggedIn
      next('/dashboard');
    }
    else if(!email && loggedIn) {
      if (!authRequired)
        next()
      next('/verify')
    }
    else {
      axios.defaults.headers.common['Authorization'] = "Bearer "+loggedIn
      next()
    }
  });

createApp(App).use(store).use(router).mount('#app')


