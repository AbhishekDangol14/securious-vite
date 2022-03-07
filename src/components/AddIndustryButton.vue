<template>
  <div v-if="canAdd"> 
    <button
      class="add-button p-3 bg-primary rounded-lg text-white-white text-center"
      @click="addIndustry"
    >
      <slot></slot>
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>
  <div v-else>
    <button
      class="add-button p-3 bg-ternary rounded-lg text-white-white text-center cursor-not-allowed"
    >
      <slot></slot>
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from "vue";
import { useStore } from "vuex";
import { NEW_INDUSTRY } from "@/store/modules/actions.type";
import { CAN_ADD } from "@/store/modules/mutations.type";
export default defineComponent({
  props: {
    canAdd: Boolean,
  },
  setup(props) {
    const store = useStore();

    function addIndustry() {    
      store.dispatch(NEW_INDUSTRY, {
        id: '',
        details_level: '',
        is_active: 0,
        friendlyTranslations: {
          EN: {
            name: "",
          },
          DE: {
            name: "",
          },
        },
      })

      store.commit(CAN_ADD,false)
    }
    return {
      addIndustry,
    };
  },
});
</script>
