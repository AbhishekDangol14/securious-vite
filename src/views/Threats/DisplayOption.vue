<template>
  <div>
    <h class="text-medium font-semibold text-blue-blue mx-5">Display Options</h>
  </div>
  <div class="grid grid-cols-2 mx-5 space-x-8 p-5">
    <div>
      <div>
        <Switch name="Active" />
      </div>
      <div class="mt-2">
        <Switch :alternate="true" name="Show if industry is:" />
      </div>
      <div class="mt-3">
        <VSelect
          class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
          multiple
          :options="industries"
          :reduce="(industry) => industry.id"
          label="name"
        />
      </div>
    </div>
    <div>
      <div>
        <Switch :alternate="true" name="Show if company size is:" />
        <div class="my-10">
          <Slider v-model="valueOfOptions" :max="500" :min="0" :step="1" />
        </div>
        <Switch
          :alternate="true"
          name="Show if using the following asset(s):"
        />
        <div class="mt-3">
          <VSelect
            class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
            multiple
            :options="assets"
            :reduce="(asset) => asset.id"
            label="name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import Slider from "@vueform/slider";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  data() {
    return {
      valueOfOptions: [20, 40],
      industries: [
        { id: 1, name: "Industry 1" },
        { id: 2, name: "Industry 2" },
      ],
      assets: [
        { id: 1, name: "Asset 1" },
        { id: 2, name: "Asset 2" },
      ],
    };
  },
  components: {
    // Input,
    Switch,
    Slider,
    VSelect,
  },
};
</script>

<style>
.style-chooser .vs__dropdown-toggle {
  height: auto;
  min-height: 45px;
}
</style>
