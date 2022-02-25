<template>
  <div class="mb-3 w-auto">
    <label class="block text-grey-grey text-md font-normal text-left" :for="id">
      {{ name }}
    </label>

    <datepicker
      :class="'appearance-none border h-10 text-base text-black focus:border-grey-grey focus:bg-white bg-secondary-blue border-blue-100 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:shadow-outline'"
      v-model="value"
    />
    <p class="text-green-green text-base pl-1">{{ message }}</p>
    <p class="text-red-red text-base pl-1">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import Datepicker from "vue3-datepicker";
import { computed, defineComponent, defineEmits } from "vue";
import { ref } from "vue";

export default defineComponent({
  components: {
    Datepicker,
  },
  props: {
    id: String,
    name: String,
    placeholder: String,
    message: String,
    error: String,
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    return {
      value: ref(new Date()),
    };
  },
});
</script>

<style scoped></style>
