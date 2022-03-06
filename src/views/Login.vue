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
        <form class="flex flex-col space-y-4 mt-4" @submit.prevent="login">
          <input
            class="inp rounded-none p-2 text-xs"
            name="email"
            v-model="email"
            :error="emailError"
            type="email"
            placeholder="Ihre@email.com"
            required
          />

          <div class="relative flex flex-col">
            <input
              v-if="showPassword"
              class="inp rounded-none p-2 text-xs"
              name="password"
              v-model="password"
              :error="passwordError"
              type="text"
              placeholder="Passwort"
            />
            <input
              v-else
              class="inp rounded-none p-2 text-xs"
              name="password"
              v-model="password"
              :error="passwordError"
              type="password"
              placeholder="Passwort"
            />
            <span
              @click="toggleShow"
              v-if="showPassword"
              class="text-grey-grey text-base fa fa-fw field-icon absolute right-3 top-4 fa-eye"
            ></span>
            <span
              v-else
              @click="toggleShow"
              class="text-grey-grey text-base fa fa-fw field-icon absolute right-3 top-4 fa-eye-slash"
            ></span>
            <password-meter :password="password" />
          </div>
          <div class="link-text text-right text-base">Passwort vergessen?</div>
          <div class="grid grid-cols-4">
            <button
              class="login-btn col-start-2 col-end-4 rounded-lg text-white-white text-md border-2 border-grey-grey border-opacity-40"
            >
              LOG IN
            </button>
          </div>
          {{ error }}
        </form>
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
import { useForm, useField } from "vee-validate";
import { LOGIN } from "../store/modules/actions.type";
import { computed } from "vue";
import { ref } from "vue";
import PasswordMeter from "vue-simple-password-meter";
export default {
  components: { PasswordMeter },

  setup() {
    const { handleSubmit } = useForm();
    const login = handleSubmit((values) => {
      store.dispatch({
        type: LOGIN,
        values,
      });
    });

    const email = useField("email");

    const password = useField("password");

    const showPassword = ref(false);

    function toggleShow() {
      showPassword.value = !showPassword.value;
    }

    return {
      toggleShow,
      showPassword,
      login,
      email: email.value,
      password: password.value,
      emailError: email.errorMessage,
      passwordError: password.errorMessage,
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
