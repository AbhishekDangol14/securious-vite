import router from '../../router'
import axios from 'axios'
import {
    LOGIN,
    LOGOUT,
    REGISTER,
    CHECK_AUTH,
    VERIFY,
    VERIFY_EMAIL_CODE,
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
        async [REGISTER] (context, {credentials, role }){
            credentials.role = role.value
            await axios.post('http://127.0.0.1:8000/api/register', credentials).then((response) => {
                localStorage.setItem('USER', JSON.stringify(response.data.data))
                localStorage.setItem('ID_TOKEN_KEY', response.data.data.token)
                localStorage.setItem('LANGUAGE', response.data.data.selected_language)
                router.push('/verify')
            });
        },
        async [VERIFY] (context, code) {
            const user = localStorage.getItem('USER') 
            const email = user ? JSON.parse(user).email : ''
            await axios.post('http://127.0.0.1:8000/api/verification', {email: email,code: code}).then((response) => {
                localStorage.setItem('EMAIL_VERIFIED_AT', response.data)
                router.push('/dashboard')
            })
        },
    },
    mutations: {
        [SET_AUTH](state, user) {
            localStorage.setItem('USER', JSON.stringify(user.data.data.resource))
            localStorage.setItem('ID_TOKEN_KEY', user.data.data.resource.token)
            localStorage.setItem('LANGUAGE', user.data.data.resource.selected_language)
            localStorage.setItem('EMAIL2FA',user.data.data.resource.email_2fa_enabled)
            if (user.data.data.resource.email_verified_at)
                localStorage.setItem('EMAIL_VERIFIED_AT',user.data.data.resource.email_verified_at)
        },
        [PURGE_AUTH](state){
            localStorage.clear()
            router.push('/login')
        }
    }
}
