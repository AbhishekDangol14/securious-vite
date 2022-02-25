<template>
  <div class="mb-3 w-auto search-box">
    <label class="block text-grey-grey text-md font-normal text-left" :for="id">
      {{ name }}
    </label>
    <input
      :class="'search-field appearance-none border h-10 text-base text-black focus:border-grey-grey focus:bg-white bg-secondary-blue border-blue-100 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:shadow-outline'"
      :id="id"
      :placeholder="placeholder"
      v-model="value"
    />
    <i class="fa fa-search"></i>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, defineEmits } from "vue";
export default defineComponent({
  props: {
    id: String,
    name: String,
    placeholder: String,
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    return {
      value: computed({
        get() {
          return props.modelValue;
        },
        set(value) {
          context.emit("update:modelValue", value);
        },
      }),
    };
  },
});
</script>

<style scoped>
.search-field {
  height: auto;
  min-height: 45px;
  padding-left: 30px;
}
.search-box {
  position: relative;
}

.search-box i {
  position: absolute;
  left: 10px;
  top: 38px;
  color: gray;
}
</style>
