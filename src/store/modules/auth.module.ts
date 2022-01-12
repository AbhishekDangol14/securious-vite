import router from '../../router'
import axios from 'axios'
import {
    LOGIN,
    LOGOUT,
    REGISTER,
    CHECK_AUTH,
  } from "./actions.type";
import { SET_AUTH, PURGE_AUTH } from "./mutations.type"; 

export const auth_module = {
    state: {
        user: {},
        menu: {}
    },
    actions: {
        [LOGIN] (context, credentials){
            axios.post('http://127.0.0.1:8000/api/login', credentials.values).then((response) => {
                context.commit(SET_AUTH, response)
                router.push('/dashboard') 
            })
        },
        [LOGOUT](context) {
            context.commit(PURGE_AUTH);
        },
        [CHECK_AUTH] (){
            if(localStorage.getItem('ID_TOKEN_KEY'))
                return true;
            else
                return false;
        },
        [REGISTER] (context, credentials){
            axios.post('http://127.0.0.1:8000/api/register', credentials.values).then((response) => {
            localStorage.setItem('ID_TOKEN_KEY', response.data.data.token)
            router.push('/dashboard')
            });
        }
    },
    mutations: {
        [SET_AUTH](state, user) {
            localStorage.setItem('USER', JSON.stringify(user.data.data.resource))
            localStorage.setItem('ID_TOKEN_KEY', user.data.data.resource.token)
        },
        [PURGE_AUTH](state){
            localStorage.removeItem('ID_TOKEN_KEY')
            localStorage.removeItem('USER')
        }
    }
}
