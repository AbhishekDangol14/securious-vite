<template>
  <div class="home">
    <div class="flex justify-center pt-8">
      <div>
        <img src="../assets/logo.svg" alt="Securious" class="h-48 w-96"/>
      </div>
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
}
</style>