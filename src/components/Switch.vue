<template>
  <div class="flex gap-1 pb-1 align-middle">
    <label
      v-if="!alternate"
      for="toggle"
      class="text-base font-bold text-grey-grey w-fit"
      >{{ name }}</label
    >
    <div
      class="relative grid w-10 h-6 rounded-md bg-ternary select-none transition duration-2006 ease-in"
    >
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        class="toggle-checkbox absolute block w-5 h-5 mx-0.5 self-center rounded-md bg-white appearance-none cursor-pointer"
        v-model="value"
        @click="switchChange"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 p-1 rounded-md bg-grey-100 cursor-pointer"
      ></label>
    </div>
    <label
      v-if="alternate"
      for="toggle"
      class="text-base font-bold text-grey-grey w-fit"
      >{{ name }}</label
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  props: {
    name: String,
    modelValue: Boolean,
    alternate: Boolean,
  },
  emits: ["update:modelValue", "btn-click"],
  setup(props, { emit }) {
    function switchChange() {
      emit("btn-click");
    }
    return {
      switchChange,
      value: computed({
        get() {
          return props.modelValue;
        },
        set(value) {
          emit("update:modelValue", value);
        },
      }),
    };
  },
});
</script>

<style scoped>
.toggle-checkbox:checked {
  right: 0;
  border-color: #68d391;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #61b756;
}
</style>
