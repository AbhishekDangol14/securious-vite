import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

const auth_module = {
  actions: {
      LOGIN (context, credentials){
          axios.post('http://127.0.0.1:8000/api/login', credentials.values).then((response) => {
          localStorage.setItem('ID_TOKEN_KEY', response.data.data.token)
          router.push('/dashboard')
          });
      },
      CHECK_AUTH (){
          if(localStorage.getItem('ID_TOKEN_KEY'))
              return true;
          else
              return false;
      },
      REGISTER (context, credentials){
          axios.post('http://127.0.0.1:8000/api/register', credentials.values).then((response) => {
          localStorage.setItem('ID_TOKEN_KEY', response.data.data.token)
          router.push('/dashboard')
          });
      }
  }
}

export default createStore({
  state: {
    token: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth_module,
  }
})
