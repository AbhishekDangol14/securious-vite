<template>
    <div class="grid grid-cols-2 login">
        <div class="left_content">
            <div class="logo-area">
                <img class="h-14 mt-16 ml-14" src="../assets/views/securious-logo.svg" alt="Securious"/>
            </div>
            <div class="login-form mt-12 max-w-sm flex flex-col ml-40">
                <div class="form-title mt-14">Schützen Sie Ihr Unternehmen</div>
                <div class="form-description text-base pt-4">Fügen Sie einfach Ihre geschäftliche E-Mail-Adresse und ein Passwort ein und es kann losgehen! </div>
                <form class="flex flex-col space-y-1.5 mt-4" @submit.prevent='register'>
                    <input class="inp rounded-none p-2.5 text-xs" name="email" v-model="email" :error="emailError" type="email" placeholder="Ihre@email.com" />
                    <span class="text-lg">{{ emailError }}</span>
                    <input class="inp rounded-none p-2.5 text-xs" name="password" v-model="password" :error="passwordError" type="password" placeholder="Passwort" />
                    <span class="text-lg">{{ passwordError }}</span>
                    <div class="text-xs pt-5 pb-6">Mit der Anmeldung stimmen Sie den Datenschutzbestimmungen zu.</div>
                    <div class="flex justify-center">
                        <button class="rounded-md text-white-white text-sm pl-10 pr-10 pt-2 pb-2">JETZT LOSLEGEN</button>
                    </div>
                </form>
                <div class="form-footer flex justify-center p-3 space-x-4">
                    <div class="question text-xs text-gray-500">Bereits registriert? </div>
                    <div class="login-link text-xs text-blue-500"><router-link to="/login">Einloggen</router-link></div>
                </div>
            </div>
        </div>
        <div class="right_content p-3">
            <div class="text-white-white text-center text-2xl mt-16">Schützen Sie Ihr Unternehmen vor Cyber-Angriffen</div>
            <p class="text-white-white text-center text-sm pt-4 pl-24 pr-24 pb-6">Mit securious können Sie in einfachen, kleinen Schritten Ihre IT-Sicherheit überprüfen und durch umsetzbare und konkrete Maßnahmen erhöhen. </p>
            <ul class="text-white-white text-center text-xs space-y-1">
                <li><i class="fa fa-check"></i>Sie müssen kein IT-Sicherheits-Experte sein.</li>
                <li><i class="fa fa-check"></i>Wie greifen nie auf Ihre interne Systeme zu.</li>
                <li><i class="fa fa-check"></i>Die Analyse der IT-Sicherheit wird immer kostenlos sein.</li>
            </ul>
            <div class="flex justify-center pt-12 pb-8 h-4/6">
                <img src="../assets/views/login-page.svg" alt="Securious login page image"/>
            </div>       
        </div>
    </div>
</template>

<script lang="ts">
import { useForm,useField } from 'vee-validate'
import { REGISTER } from '@/store/modules/actions.type'
import { defineComponent, onBeforeMount } from 'vue'
import store from '@/store'
import { propsToAttrMap } from '@vue/shared';
import registerService from '@/service/register.service'

export default defineComponent ({
    props: {
        slug: null
    },
    setup(props) {
        const { handleSubmit } = useForm();
        const { role,getRole } = registerService();
        
        const register = handleSubmit((credentials): void =>  {
            store.dispatch({
                type: REGISTER,
                credentials,
                role
            })
        })

        const email = useField('email')

        const password = useField('password')

        onBeforeMount(() => {
            props.slug ? getRole(props.slug) : getRole()
        })

        return {
            register,
            email: email.value,
            password: password.value,
            emailError: email.errorMessage,
            passwordError: password.errorMessage,
        }
    }
});
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
        font-size: 33px;
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

    .form-description{
        color: #707070;
    }
</style>
