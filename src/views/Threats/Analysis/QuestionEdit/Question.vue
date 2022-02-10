<template>
  <div class="grid grid-cols-2 space-x-8 py-10">
    <div class="basis-1/2">
      <Input id="title" name="Question Title" placeholder="New Question" />
      <div class="flex gap-8 relative">
        <div class="w-2/4">
          <span class="text-base font-semibold text-grey-grey"
            >Question Type</span
          >
          <VSelect
            class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
            :options="types"
            :reduce="(type) => type.id"
            label="name"
          />
        </div>

        <div class="w-2/4">
          <span class="text-base font-semibold text-grey-grey"
            >Detail level</span
          >
          <VSelect
            class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
            :options="levels"
            :reduce="(level) => level.id"
            label="name"
          />
        </div>
      </div>
      <div class="mt-3">
        <span class="text-base font-semibold text-grey-grey">Description</span>
        <CKEditor />
      </div>
      <div class="mt-3">
        <span class="text-base font-semibold text-grey-grey">Explanation</span>
        <CKEditor />
      </div>
      <Input
        class="mt-3"
        id="video_link"
        name="Video Link (Optional)"
        placeholder="Please put here video link"
      />
    </div>
    <div class="basis-1/2">
      <div>
        <Switch :alternate="true" class="mt-2" name="Show if industry is" />
      </div>
      <VSelect
        multiple
        class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
        :options="industries"
        :reduce="(industry) => industry.id"
        label="name"
      />
      <Switch
        :alternate="true"
        class="mt-2"
        name="Show only for company size"
      />
      <div class="my-4">
        <Slider v-model="valueOfSlider" :max="500" :min="0" :step="1" />
      </div>

      <div class="my-2">
        <Switch :alternate="true" name="Show if using the following assets" />
      </div>
      <VSelect
        multiple
        class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
        :options="assets"
        :reduce="(asset) => asset.id"
        label="name"
      />
      <Switch
        :alternate="true"
        name="Display if these conditions are met"
        class="my-4"
      />

      <div class="text-left mt-3">
        <a class="text-blue-blue text-base cursor-pointer">+Add</a>
      </div>
      <Switch :alternate="true" name="Automation conditions:" class="my-4" />
    </div>
  </div>
</template>

<script lang="ts">
// import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import CKEditor from "@/components/CKEditor.vue";
import Slider from "@vueform/slider";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  data() {
    return {
      valueOfSlider: [0, 500],
      industries: [
        { id: 1, name: "Insutry 1" },
        { id: 2, name: "Industry 2" },
      ],
      types: [
        { id: 1, name: "Radio" },
        { id: 2, name: "Multiple Choice" },
        { id: 3, name: "Text" },
        { id: 4, name: "DropDown" },
        { id: 5, name: "DropDown Multiple Choice" },
        { id: 6, name: "Slider" },
      ],
      levels: [
        { id: 1, name: "Low" },
        { id: 2, name: "Medium" },
        { id: 3, name: "High" },
      ],
    };
  },
  components: {
    // Button,
    Input,
    Switch,
    CKEditor,
    Slider,
    VSelect,
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>

<style>
.style-chooser .vs__dropdown-toggle {
  height: auto;
  min-height: 45px;
}
</style>
