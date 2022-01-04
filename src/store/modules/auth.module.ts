import router from '../../router'
import axios from 'axios'
import {
    LOGIN,
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
            axios.post('http://127.0.0.1:8000/api/login', credentials.values).then((data) => {
                context.commit(SET_AUTH, data)
                router.push('/dashboard')
            });
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
            state.user = user.data.data
            localStorage.setItem('ID_TOKEN_KEY', user.data.data.token)
        }
    }
}