<template>
  <div class="grid grid-cols-2 login">
    <div class="left_content">
      <div class="logo-area m-login-logo-margin ml-4">
        <img
          class="h-14 mt-16 ml-14"
          src="../assets/views/securious-logo.svg"
          alt="Securious"
        />
      </div>
      <div class="register-form mt-12 max-w-sm flex flex-col ml-40">
        <div class="form-title mt-8">Schützen Sie Ihr Unternehmen</div>
        <div class="form-description text-md pt-4">
          Fügen Sie einfach Ihre geschäftliche E-Mail-Adresse und ein Passwort
          ein und es kann losgehen!
        </div>
        <form class="flex flex-col space-y-1.5 mt-4" @submit.prevent="register">
          <input
            class="inp rounded-none p-2.5 text-xs"
            name="email"
            v-model="email"
            :error="emailError"
            type="email"
            placeholder="Ihre@email.com"
          />
          <span class="text-lg">{{ emailError }}</span>
          <div class="relative flex flex-col">
            <input
              v-if="showPassword"
              class="inp rounded-none p-2.5 text-xs"
              name="password"
              v-model="password"
              :error="passwordError"
              type="text"
              placeholder="Passwort"
            />
            <input
              v-else
              class="inp rounded-none p-2.5 text-xs"
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
          </div>

          <span class="text-lg">{{ passwordError }}</span>
          <div class="text-base text-grey-grey pt-5 pb-6">
            Mit der Anmeldung stimmen Sie
            <router-link class="link-text font-normal" to="/login"
              >den Datenschutzbestimmungen zu.</router-link
            >
          </div>
          <div class="flex justify-center">
            <button
              class="rounded-md text-white-white text-md pl-10 pr-10 pt-2 pb-2"
            >
              JETZT LOSLEGEN
            </button>
          </div>
        </form>
        <div class="form-footer flex justify-center p-3 space-x-4 mt-4">
          <div class="question text-base text-gray-500">
            Bereits registriert?
          </div>
          <div class="link-text font-semibold text-base">
            <router-link to="/login">Einloggen</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="right_content p-0">
      <div class="text-white-white font-bold text-center text-2xl mt-16">
        Schützen Sie Ihr Unternehmen vor Cyber-Angriffen
      </div>
      <p class="text-white-white text-center text-base pt-4 pl-24 pr-24 pb-6">
        Mit securious können Sie in einfachen, kleinen Schritten Ihre
        IT-Sicherheit überprüfen und durch umsetzbare und konkrete Maßnahmen
        erhöhen.
      </p>
      <ul class="text-white-white text-center text-base">
        <li>
          <i class="fa fa-check"></i>&nbsp;Sie müssen kein
          IT-Sicherheits-Experte sein.
        </li>
        <li>
          <i class="fa fa-check"></i>&nbsp;Wie greifen nie auf Ihre interne
          Systeme zu.
        </li>
        <li>
          <i class="fa fa-check"></i>&nbsp;Die Analyse der IT-Sicherheit wird
          immer kostenlos sein.
        </li>
      </ul>
      <div class="flex justify-center pt-12 pb-8 h-4/6">
        <img
          src="../assets/views/login-page.svg"
          alt="Securious login page image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useForm, useField } from "vee-validate";
import { REGISTER } from "@/store/modules/actions.type";
import { defineComponent, onBeforeMount } from "vue";
import store from "@/store";
import { propsToAttrMap } from "@vue/shared";
import registerService from "@/service/register.service";
import { ref } from "vue";

export default defineComponent({
  props: {
    slug: null,
  },
  setup(props) {
    const { handleSubmit } = useForm();
    const { role, getRole } = registerService();

    const register = handleSubmit((credentials): void => {
      store.dispatch({
        type: REGISTER,
        credentials,
        role,
      });
    });

    const email = useField("email");

    const password = useField("password");
    const showPassword = ref(false);

    function toggleShow() {
      showPassword.value = !showPassword.value;
    }

    onBeforeMount(() => {
      props.slug ? getRole(props.slug) : getRole();
    });

    return {
      showPassword,
      toggleShow,
      register,
      email: email.value,
      password: password.value,
      emailError: email.errorMessage,
      passwordError: password.errorMessage,
    };
  },
});
</script>

<style scoped>
@media (max-width: 576px) {
  .right_content {
    display: none;
  }
}
.right_content {
  /* background: url("../assets/views/background.svg") no-repeat center center; */
  background: url("../assets/components/background_register.svg") no-repeat
    center center;
  min-height: 600px;
  height: 100vh;
}
.form-title {
  color: #055ca8;
  font-size: 35px;
  font-weight: bold;
}
.inp {
  border: 1px solid #b2b2b2;
}

button {
  background: linear-gradient(135deg, #0b3a96 0%, #2592d1 100%) !important;
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

.form-description {
  color: #707070;
}
.register-form {
  max-width: 442px;
}
</style>
