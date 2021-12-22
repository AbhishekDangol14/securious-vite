<template>
  <div class="home overflow-hidden">
    <div class="flex flex-row justify-center pt-48">
        <router-link to="/"><img src="../assets/logo.svg" alt="Securious" class="h-4/5 w-80"/></router-link>
    </div>
    <div class="label-text text-white text-center text-xl tracking-widest mt-16">WILLKOMMEN</div>
    <div class="flex justify-center"><div class="note-text text-white text-center text-sm mt-4 max-w-sm">Loggen Sie sich ein oder registrieren Sie sich jetzt, um Ihre Unternehmenssicherheit zu prüfen und zu verbessern! </div></div>
    <div class="btn-container flex justify-center space-x-8 mt-8">
      <button class="btn border rounded-full text-center font-serif text-sm text-white p-1 w-48"><router-link to="/">REGISTRIEREN</router-link></button>
      <button class="btn border rounded-full text-center font-serif text-sm text-white p-1 w-48"><router-link to="/">EINLOGGEN</router-link></button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>

<style>
.home {
  background: url("https://app.securious.de/images/common/page-background.png") no-repeat;
  background-size: cover;
  height: 100vh;
  max-height: 100%;
}
.label-text{
  font-family: 'Titillium Web', sans-serif;
}
.note-text{
  font-family: 'Titillium Web', sans-serif;
}

.btn:hover {
  background-color: #fff;
  color: #1269b8;
}
</style>