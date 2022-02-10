import router from '../../router'
import axios from 'axios'
import {
    LOGIN,
    LOGOUT,
    REGISTER,
    CHECK_AUTH,
    VERIFY,
  } from "./actions.type";
import { SET_AUTH, PURGE_AUTH } from "./mutations.type"; 

export const auth_module = {
    state: {
        user: {},
    },
    actions: {
        async [LOGIN] (context, credentials){
            await axios.post('http://127.0.0.1:8000/api/login', credentials.values).then((response) => {
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
        },
        async [VERIFY] (context, code) {
            const date = new Date().toLocaleDateString()
            alert(code)
            // await axios.post('http://127.0.0.1:8000/api/verify', code).then((response) => {
            //     localStorage.setItem('EMAIL_VERIFIED_AT',date)
            // })
        }
    },
    mutations: {
        [SET_AUTH](state, user) {
            localStorage.setItem('USER', JSON.stringify(user.data.data.resource))
            localStorage.setItem('ID_TOKEN_KEY', user.data.data.resource.token)
            if (user.data.data.resource.email_verified_at)
                localStorage.setItem('EMAIL_VERIFIED_AT',user.data.data.resource.email_verified_at)
        },
        [PURGE_AUTH](state){
            localStorage.removeItem('ID_TOKEN_KEY')
            localStorage.removeItem('USER')
            localStorage.removeItem('EMAIL_VERIFIED_AT')
            router.push('/login')
        }
    }
}
