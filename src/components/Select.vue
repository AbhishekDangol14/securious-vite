<template>
  <div>
    <span class="text-base font-semibold text-grey-grey" :for="id">{{
      name
    }}</span>

    <VSelect
      v-if="multiple"
      multiple
      class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
      :id="id"
      :placeholder="placeholder"
      :options="options"
      :reduce="(item) => item.id"
      :label="label"
    />
    <VSelect
      v-if="!multiple"
      class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
      :id="id"
      :placeholder="placeholder"
      :options="options"
      :reduce="(item) => item.id"
      :label="label"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, defineEmits } from "vue";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default defineComponent({
  components: {
    VSelect,
  },
  props: {
    id: String,
    multiple: Boolean,
    placeholder: String,
    options: String,
    name: String,
    label: String,
  },
});
</script>

<style>
.style-chooser .vs__dropdown-toggle {
  height: auto;
  min-height: 45px;
}
</style>
