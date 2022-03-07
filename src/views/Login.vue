<template>
  <div class="grid grid-cols-2 login">
    <div class="left_content">
      <div class="logo-area">
        <img
          class="h-login-logo m-login-logo-margin ml-10"
          src="../assets/views/securious-logo.svg"
          alt="Securious"
        />
      </div>
      <div class="login-form flex flex-col">
        <div class="form-title">Einloggen</div>

        <Form
          class="flex flex-col space-y-3 mt-4"
          @submit="handleSubmit"
          :validation-schema="schema"
        >
          <Field
            class="inp rounded-none p-2 text-xs"
            id="email"
            name="email"
            type="email"
          />
          <ErrorMessage name="email" class="text-base text-red-red" />
          <Field
            class="inp rounded-none p-2 text-xs"
            id="password"
            name="password"
            type="password"
          />
          <ErrorMessage name="password" class="text-base text-red-red" />
          <div class="link-text text-right text-base">Passwort vergessen?</div>
          <span class="text-base text-red-red" v-if="backendError.length">{{
            backendError
          }}</span>
          <div class="grid grid-cols-4">
            <button
              class="login-btn col-start-2 col-end-4 rounded-lg text-white-white text-md border-2 border-grey-grey border-opacity-40"
            >
              LOG IN
            </button>
          </div>
        </Form>

        <div class="register flex justify-center space-x-6 pt-6">
          <div class="text-base text-grey-grey">Noch kein Account?</div>
          <div class="text-base link-text font-semibold">
            <router-link to="/">Registrieren</router-link>
          </div>
        </div>
      </div>
      <div class="footer-text text-base text-center m-12 justify-center px-10">
        Falls Sie noch das alte passwortlose System von securious benutzt haben
        und kein Password haben,
        <router-link class="link-text font-normal" to="/"
          >klicken Sie hier</router-link
        >
        Sie hier um eines zu erstellen.
      </div>
      <div
        class="footer-link link-text text-base mt-10 flex justify-center space-x-4"
      >
        <div class="cursor-pointer">Impressum</div>
        <div class="cursor-pointer">Datenchutz</div>
      </div>
    </div>
    <div class="wrapper_right">
      <div class="right_content pr-1 ml-2 pl-2">
        <img
          src="../assets/views/login-page.svg"
          alt="Securious login page image"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import store from "../store";
// import { useForm,useField } from 'vee-validate'
import { Field, Form, ErrorMessage, useField } from "vee-validate";
import * as Yup from "yup";
import { LOGIN } from "../store/modules/actions.type";
import { computed } from "vue";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const schema = Yup.object().shape({
      email: Yup.string().email().required().label("Email Address"),
      password: Yup.string().min(5).required().label("Your Password"),
    });

    function handleSubmit(values) {
      store.dispatch(LOGIN, values);
    }

    const backendError = computed(() => store.state.auth.state.error);

    return {
      backendError,
      schema,
      handleSubmit,
    };
  },
};
</script>
<style scoped>
@media (max-width: 576px) {
  .right_content {
    display: none;
  }
}
.wrapper_right {
  min-height: 600px;
  height: 100vh;
  padding: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/views/background.svg") no-repeat center center;
}
.right_content {
  position: relative;
  width: 100%;
  height: 100%;
}

.right_content > img {
  width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}
.form-title {
  color: #055ca8;
  font-size: 35px;
  font-weight: bold;
}
.inp {
  border: 1px solid #b2b2b2;
  height: 40px;
}

button {
  background: linear-gradient(155deg, #0b3a96 0%, #2592d1 100%) !important;
}

button:hover {
  background: linear-gradient(255deg, #0b3a96 0%, #2592d1 100%) !important;
}

.footer-text {
  font-weight: bold;
  color: #707070;
}

.link-text {
  color: #2592d1;
}
.logo-area {
  padding-left: 3.96%;
  width: 400px;
}
.logo-area > .img {
  width: 220px;
  height: auto;
}

.login-form {
  margin-top: 104px;
  margin-left: 155px;
  max-width: 442px;
}

.login-btn {
  display: inline-block;
  padding-top: 0.571429rem;
  padding-right: 1rem;
  padding-bottom: 0.571429rem;
  padding-left: 1rem;
}
</style>
