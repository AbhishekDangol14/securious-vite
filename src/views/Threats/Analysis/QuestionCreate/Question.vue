<template>
  <div class="grid grid-cols-2 space-x-8 py-10">
    <div class="basis-1/2">
      <Input
        type="text"
        id="title"
        name="Question Title"
        placeholder="New Question"
        v-model="question.friendlyTranslations['EN'].title"
      />
      <div class="flex gap-8 relative">
        <div class="w-2/4">
          <Vselect
            name="Question Type"
            placeholder="Please select the company asset"
            :options="type"
            :reduce="(item) => item.name"
            label="name"
            v-model="question.question_type"
          />
        </div>

        <div class="w-2/4">
          <Vselect
            name="Detail level"
            placeholder="Please select level"
            :options="levels"
            :reduce="(item) => item.name"
            label="name"
            v-model="question.details_level"
          />
        </div>
      </div>
      <div class="mt-3">
        <span class="text-base font-semibold text-grey-grey">Description</span>
        <CKEditor v-model="question.friendlyTranslations['EN'].description" />
      </div>
      <div class="mt-3">
        <span class="text-base font-semibold text-grey-grey">Explanation</span>
        <CKEditor v-model="question.friendlyTranslations['EN'].explanation" />
      </div>
      <Input
        type="text"
        class="mt-3"
        id="video_link"
        name="Video Link (Optional)"
        placeholder="Please put here video link"
        v-model="question.video_link"
      />
    </div>
    <div class="basis-1/2">
      <div>
        <Switch
          :alternate="true"
          class="mt-2"
          name="Show if industry is"
          v-model="question.show_if_industry"
        />
      </div>
      <Vselect multiple :options="getIndustries" :reduce="(item) => item.id" label="name" v-model="question.industries" />

      <Switch
        :alternate="true"
        class="mt-2"
        name="Show only for company size"
        v-model="question.show_if_company_size"
      />
      <div class="my-4">
        <Slider v-model="question.company_size" :max="500" :min="0" :step="1" />
      </div>

      <div class="my-2">
        <Switch :alternate="true" name="Show if using the following assets" />
      </div>

      <VueSelect multiple :options="getAssets" label="name" v-model="question.assets" />

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
import VueSelect from "@/components/Select.vue";
import { defineComponent } from "@vue/runtime-core";
import Vselect from "vue-select";
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default defineComponent({
  components: {
    Input,
    Switch,
    CKEditor,
    Slider,
    VueSelect,
    Vselect,
  },
  setup() {
    const store = useStore()
    const selectedLanguage = ref(localStorage.getItem('LANGUAGE'))
    const getIndustries = computed(() => store.state.threat.state.getIndustries)
    const getAssets = computed(() => store.state.threat.state.getAssets)

    const type = [
      { name: "Radio" },
      { name: "Multiple Choice" },
      { name: "Text" },
      { name: "DropDown" },
      { name: "DropDown Multiple Choice" },
      { name: "Slider" },
    ];
    const levels = [{ name: "Low" }, { name: "Medium" }, { name: "High" }];

    return {
      question: computed(() => store.state.question.state.question),
      getIndustries,
      type,
      levels,
      getAssets
    }
  }
});
</script>
<style src="@vueform/slider/themes/default.css"></style>
<style>
.slider-base {
  height: 12px;
}
.slider-horizontal .slider-handle {
  top: -2px;
}
</style>
