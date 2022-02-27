<template>
  <div class="cursor-pointer">
    <div
      class="pt-2.5 align-middle pb-2 px-6 rounded-md outline-none hover:border-grey-grey border-transparent border hover:border-opacity-20"
    >
      <a
        @click="toggleSelector"
        aria-expanded="false"
        aria-haspopup="true"
        class="text-blue-blue font-semibold text-base"
        data-toggle="dropdown"
        role="button"
      >
        <span class="control-label"> DE </span>
        <i class="fa fa-angle-down ml-1 text-grey-grey"></i>
      </a>
    </div>
    <div v-if="selector"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  setup() {
    const selector = ref(false);

    function toggleSelector() {
      selector.value = !selector.value;
    }
    return {
      selector,
      toggleSelector,
    };
  },
});
</script>
