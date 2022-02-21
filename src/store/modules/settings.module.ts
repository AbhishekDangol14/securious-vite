import router from '@/router'
import axios from 'axios'
import { ENABLE_EMAIL_2FA, GET_GOOGLE_CODE, VERIFY_EMAIL_CODE, VERIFY_GOOGLE_CODE } from './actions.type'
import { SET_CODE } from './mutations.type'

export const settings_module = {
    state: {
        code: null
    },
    actions: {
        [GET_GOOGLE_CODE] (context){
            axios.post('http://127.0.0.1:8000/api/admin/register/google2fa').then((response) => {
                context.commit(SET_CODE,response.data.data)
            })
        },
        [VERIFY_GOOGLE_CODE] (context, verification_code) {
            axios.post('http://127.0.0.1:8000/api/admin/validate_google_secret',verification_code).then((response) => {
                console.log(response)
            })
        },
        [ENABLE_EMAIL_2FA] (context) {
            axios.post('http://127.0.0.1:8000/api/admin/enable_email_2fa').then((response) => {
                console.log(response)
            }) 
        },
        [VERIFY_EMAIL_CODE] (context, emailVerification_code) {
            axios.post('http://127.0.0.1:8000/api/admin/validate_email_secret',{emailVerification_code: emailVerification_code}).then((response) => {
                localStorage.setItem('EMAIL2FA','0')
                router.push('/dashboard')
            })
        }
    },
    mutations: {
        [SET_CODE] (state,response) {
            state.code = response
        }
    }
}