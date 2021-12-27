<template>
  <div class="flex flex-col justify-center align-middle home">
    <div class="grid justify-items-center">
      <div>
        <router-link to="/"><img src="../assets/logo.svg" alt="Securious" class="h-24"/></router-link>
      </div>
      <div class="text-white text-2xl tracking-widest mt-16">WILLKOMMEN</div>
      <div class="note-text text-white text-center text-sm mt-4">
        Loggen Sie sich ein oder registrieren Sie sich jetzt, um Ihre Unternehmenssicherheit zu prüfen und zu verbessern!
      </div>
      <div class="mt-8 flex space-x-4">
        <router-link class="btn border rounded-full text-center  text-sm text-white p-2 w-96" to="/register">REGISTRIEREN</router-link>
        <router-link class="btn border rounded-full text-center text-sm text-white p-2 w-96" to="/login">EINLOGGEN</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  background: url("https://app.securious.de/images/common/page-background.png") no-repeat center center;
  background-size: cover;
  min-height: 100vh;
}
.btn:hover {
  background-color: #fff;
  color: #1269b8;
}
</style>