<template>
  <div class="grid grid-cols-2 space-x-8 py-10">
    <div class="basis-1/2">
      <Input id="title" name="Question Title" placeholder="New Question" />
      <div class="flex gap-8 relative">
        <div class="w-2/4">
          <VueSelect
            name="Question Type"
            placeholder="Please select the company asset"
            :options="types"
            label="name"
          />
        </div>

        <div class="w-2/4">
          <VueSelect
            name="Detail level"
            :multiple="true"
            :options="levels"
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
      <VueSelect :multiple="true" :options="industries" label="name" />

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

      <VueSelect :multiple="true" :options="assets" label="name" />

      <Switch
        :alternate="true"
        name="Display if these conditions are met"
        class="mt-2"
      />
      <div class="flex items-center flex-row gap-2 mt-2">
        <div class="flex-fill grow">
          <div class="flex flex-row gap-2">
            <div class="w-6/12">
              <VueSelect :options="questions" label="name" />
            </div>
            <div class="w-2/12">
              <VueSelect :options="relations" label="name" />
            </div>
            <div class="w-6/12">
              <VueSelect :options="answers" label="name" />
            </div>
          </div>
        </div>
        <div>
          <a class="cursor-pointer">
            <img src="@/assets/icons/close-box.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="flex items-center flex-row gap-2">
        <div class="flex-fill grow">
          <div class="flex flex-row gap-2 justify-center">
            <div class="w-6/12"></div>
            <div class="w-20 my-2">
              <VueSelect :options="logics" label="name" />
            </div>
            <div class="w-6/12"></div>
          </div>
          <div class="flex flex-row gap-2">
            <div class="w-6/12">
              <VueSelect :options="questions" label="name" />
            </div>
            <div class="w-2/12">
              <VueSelect :options="relations" label="name" />
            </div>
            <div class="w-6/12">
              <VueSelect :options="answers" label="name" />
            </div>
          </div>
        </div>
        <div>
          <a class="cursor-pointer">
            <img src="@/assets/icons/close-box.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="text-left mt-3">
        <a class="text-blue-blue text-base cursor-pointer">+Add</a>
      </div>
      <Switch :alternate="true" name="Automation conditions:" class="mt-2" />
    </div>
  </div>
</template>

<script lang="ts">
// import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import CKEditor from "@/components/CKEditor.vue";
import Slider from "@vueform/slider";
import VueSelect from "@/components/Select.vue";

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
      questions: [
        { id: 1, name: "What is New Question " },
        { id: 2, name: "How this happened " },
        { id: 3, name: "Why is it so " },
      ],
      answers: [
        { id: 1, name: "Answer 1 " },
        { id: 2, name: "Answer 2 " },
        { id: 3, name: "Answer 3 " },
      ],
      relations: [{ name: "is" }, { name: "is not " }],
      logics: [{ name: "AND" }, { name: "OR " }],
    };
  },
  components: {
    // Button,
    Input,
    Switch,
    CKEditor,
    Slider,
    VueSelect,
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
