<template>
  <div class="flex gap-4 pb-3 align-middle">
    <label for="toggle" class="text-md font-bold text-grey-grey w-fit">{{
      name
    }}</label>
    <div
      class="relative grid w-10 h-6 rounded-md bg-ternary select-none transition duration-200 ease-in"
    >
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        class="toggle-checkbox absolute block w-5 h-5 mx-0.5 self-center rounded-md bg-white appearance-none cursor-pointer"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 p-1 rounded-md bg-grey-100 cursor-pointer"
      ></label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    name: String,
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped>
.toggle-checkbox:checked {
  right: 0;
  border-color: #68d391;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #68d391;
}
</style>
