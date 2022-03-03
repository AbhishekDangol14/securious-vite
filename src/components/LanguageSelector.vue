<template>
  <div>
    <VSelect
      class="language-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
      :id="id"
      :placeholder="placeholder"
      :options="options"
      :label="label"
      v-model="value"
      @option:selecting="switchLang"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, defineEmits, ref } from "vue";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default defineComponent({
  components: {
    VSelect,
  },
  props: {
    id: String,
    placeholder: String,
    name: String,
    label: String,
    modelValue: String
  },
  setup(props,{emit}) {
    const options = ["DE", "EN"];
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    })
    
    function switchLang(value){
      emit("option:selecting", value)
    }

    return {
      value,
      options,
      switchLang,
    };
  },
});
</script>

<style scoped>
.language-chooser .vs__dropdown-toggle {
  height: auto;
  min-height: 35px;
}
.vs--searchable .vs__dropdown-toggle {
  border-radius: 50px;
  padding: 8px 20px;
}
.vs__selected {
  font-size: 14px;
  font-weight: 600;
  color: #055ca8;
}
</style>
