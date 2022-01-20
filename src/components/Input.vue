<template>
  <div class="mb-5 w-auto">
    <label class="block text-grey-grey pl-1 text-md font-bold" :for="id">
      {{ name }}
    </label>
    <input
      class="appearance-none border h-10 text-base text-black focus:border-grey-grey focus:bg-white bg-secondary-blue border-blue-100 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:shadow-outline"
      :id="id"
      :type="type ? type : 'text'"
      :placeholder="placeholder"
    />
    <p class="text-green-green text-base pl-1">{{ message }}</p>
    <p class="text-red-red text-base pl-1">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    id: String,
    name: String,
    type: String,
    placeholder: String,
    message: String,
    error: String,
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped></style>
