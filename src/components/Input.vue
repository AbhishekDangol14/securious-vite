<template>
  <div class="mb-3 w-auto">
    <label class="block text-grey-grey text-md font-normal text-left" :for="id">
      {{ name }}
    </label>
    <input
      :class="
        type == 'text'
          ? 'appearance-none border input-field text-base text-black focus:border-grey-grey focus:bg-white bg-secondary-blue border-blue-100 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:shadow-outline'
          : ''
      "
      :id="id"
      :type="type ? type : 'text'"
      :placeholder="placeholder"
      v-model="value"
    />
    <p class="text-green-green text-base pl-1">{{ message }}</p>
    <p class="text-red-red text-base pl-1">{{ error }}</p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, defineEmits } from "vue";
export default defineComponent({
  props: {
    id: String,
    name: String,
    type: String,
    placeholder: String,
    message: String,
    error: String,
    modelValue: String,
  },
});
</script>

<style scoped>
.input-field {
  height: 45px;
}
</style>
