<template>
  <div>
    <button
      class="add-button p-3 bg-primary rounded-lg text-white-white text-center"
      @click="addIndustry"
    >
      <slot></slot>
      <i v-if="faIcon" :class="faIcon"></i>
      <img v-if="icon" class="w-5 h-5 self-center" :src="icon" alt="icon" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from "vue";
import { useStore } from "vuex";
import { NEW_INDUSTRY } from "@/store/modules/actions.type";

export default defineComponent({
  props: {
    path: String,
  },
  setup(props) {
    const store = useStore();

    let path_name = "/" + props.path;

    function addIndustry() {
      store.dispatch(NEW_INDUSTRY, {
        id: null,
        details_level: "low",
        is_active: 0,
        friendlyTranslations: {
          EN: {
            name: "",
          },
          DE: {
            name: "",
          },
        },
      });
    }

    return {
      addIndustry,
      path_name,
    };
  },
});
</script>
