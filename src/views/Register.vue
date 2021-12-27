<template>
    <div class="grid grid-cols-2 login">
        <div class="left_content">
            <div class="logo-area">
                <img class="h-14 mt-16 ml-14" src="../assets/views/securious-logo.svg" alt="Securious"/>
            </div>
            <div class="login-form mt-14 max-w-sm flex flex-col ml-40">
                <div class="form-title mt-14">Schützen Sie Ihr Unternehmen</div>
                <div class="form-description text-base pt-4">Fügen Sie einfach Ihre geschäftliche E-Mail-Adresse und ein Passwort ein und es kann losgehen! </div>
                <Form class="flex flex-col space-y-3 mt-4" @submit='register'>
                    <Field class="inp rounded-none p-2 text-xs" name="email" type="email" placeholder="Ihre@email.com" :rules="isRequired" />
                    <ErrorMessage name="email" />
                    <Field class="inp rounded-none p-2 text-xs" name="password" type="password" placeholder="Passwort" :rules="isRequired"/>
                    <ErrorMessage name="password" />
                    <div class="text-xs pt-5 pb-6">Mit der Anmeldung stimmen Sie den Datenschutzbestimmungen zu.</div>
                    <div class="flex justify-center">
                        <button class="rounded-full text-white text-sm pl-10 pr-10 pt-2 pb-2">JETZT LOSLEGEN</button>
                    </div>
                </Form>
                <div class="form-footer flex justify-center p-3 space-x-4">
                    <div class="question text-xs text-gray-500">Bereits registriert? </div>
                    <div class="login-link text-xs text-blue-500"><router-link to="/login">Einloggen</router-link></div>
                </div>
            </div>
        </div>
        <div class="right_content p-3">
            <img src="../assets/views/login-page.svg" alt="Securious login page image"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Field, Form, ErrorMessage } from 'vee-validate'
    import store from '../store'

    export default{
        components: {
            Field,
            Form,
            ErrorMessage
        },

        methods: {
            isRequired(value) {
                if (value && value.trim()) {
                    return true;
                }
                return 'This is required';
            },
            register(values) {
                store.dispatch({
                    type: 'REGISTER',
                    values
                });
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
