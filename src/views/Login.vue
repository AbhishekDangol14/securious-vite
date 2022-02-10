<template>
    <div class="grid grid-cols-2 login">
        <div class="left_content">
            <div class="logo-area">
                <img class="h-14 mt-16 ml-14" src="../assets/views/securious-logo.svg" alt="Securious"/>
            </div>
            <div class="login-form mt-24 max-w-sm flex flex-col ml-40">
                <div class="form-title">Einloggen</div>
                <form class="flex flex-col space-y-3 mt-4" @submit.prevent='login'>
                    <input class="inp rounded-none p-2 text-xs" name="email" v-model="email" :error="emailError" type="email" placeholder="Ihre@email.com" required/>
                    <input class="inp rounded-none p-2 text-xs" name="password" v-model="password" :error="passwordError" type="password" placeholder="Passwort" />
                    <div class="link-text text-right text-sm">Passwort vergessen?</div>
                    <div class="grid grid-cols-3">
                        <button class="col-start-2 col-end-2 rounded-lg text-white-white p-2">LOGIN</button>
                    </div>
                </form>
                <div class="register flex justify-center space-x-4 pt-4">
                    <div class="text-xs">
                        Noch kein Account? 
                    </div>
                    <div class="text-xs link-text"> 
                        <router-link to="/">Registrieren</router-link>
                    </div>
                </div>
            </div>
            <div class="footer-text text-sm text-center m-12">
                Falls Sie noch das alte passwortlose System von securious benutzt haben und kein Password haben, <router-link class="link-text" to="/">klicken Sie hier</router-link> Sie hier um eines zu erstellen. 
            </div>
            <div class="footer-link link-text text-sm mt-20 flex justify-center space-x-4">
                <div>Impressum</div>
                <div>Datenchutz</div>
            </div>
        </div>
        <div class="right_content p-3">
            <img src="../assets/views/login-page.svg" alt="Securious login page image"/>
        </div>
    </div>
</template>

<script lang="ts">
    import store from '../store'
    import { useForm,useField } from 'vee-validate'
    import { LOGIN } from '../store/modules/actions.type'

    export default{
        setup() {
            const { handleSubmit } = useForm();
            const login = handleSubmit(values =>  {
                store.dispatch({
                    type: LOGIN,
                    values
                })
            })

            const email = useField('email')

            const password = useField('password')

            return {
                login,
                email: email.value,
                password: password.value,
                emailError: email.errorMessage,
                passwordError: password.errorMessage
            }
        }
    };
</script>

<style scoped>
    @media (max-width: 576px) {
        .right_content{
            display: none;
        }
    }
    .right_content{
        background: url("../assets/views/background.svg") no-repeat center center;
        min-height: 600px;
        height: 100vh;
    }
    .form-title{
        color: #055ca8;
        font-size: 35px;
        font-weight: bold;
    }
    .inp{
        border: 1px solid #b2b2b2;
    }

    button{
        background: linear-gradient(135deg, #0b3a96 0%, #2592d1 100%) !important;
    }

    button:hover{
        background: linear-gradient(255deg, #0b3a96 0%, #2592d1 100%) !important;;
    }

    .footer-text{
        font-weight: bold;
        color: #707070;
    }

    .link-text{
        color: #2592d1;
    }
</style>
