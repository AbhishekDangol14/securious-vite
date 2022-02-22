<template>
  <div v-if="question.friendlyTranslations" class="grid grid-cols-2 space-x-8 py-10">
    <div class="basis-1/2">
      <Input id="title" name="Question Title" placeholder="New Question" type="text" v-model="question.friendlyTranslations[language+'.title'].value" />
      <div class="flex gap-8 relative">
        <div class="w-2/4">
          <Vselect
            name="Question Type"
            placeholder="Please select the company asset"
            :options="types"
            label="name"
            v-model="question.assets"
          />
        </div>

        <div class="w-2/4">
          <Vselect
            name="Detail level"
            :options="levels"
            label="name"
            v-model="question.details_level"
          />
        </div>
      </div>
      <div class="mt-3">
        <span class="text-base font-semibold text-grey-grey">Description</span>
        <CKEditor v-model="question.friendlyTranslations[language+'.description'].value" />
      </div>
      <div class="mt-3">
        <span class="text-base font-semibold text-grey-grey">Explanation</span>
        <CKEditor v-model="question.friendlyTranslations[language+'.explanation'].value" />
      </div>
      <Input
        class="mt-3"
        id="video_link"
        name="Video Link (Optional)"
        placeholder="Please put here video link"
        v-model="question.video_link"
        type="text"
      />
    </div>
    <div class="basis-1/2">
      <div>
        <Switch class="mt-2" name="Show if industry is" v-model="question.show_if_industry" />
      </div>
      <Vselect :multiple="true" :options="industries" label="name" v-model="question.industries" />

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
        <Switch :alternate="true" name="Show if using the following assets" v-model="question.show_if_using_asset" />
      </div>

      <VueSelect :multiple="true" :options="assets" label="name" v-model="question.assets" />

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
import Vselect from "vue-select";
import { defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { EDIT_QUESTION } from "@/store/modules/actions.type";

export default defineComponent ({
  components: {
    Input,
    Switch,
    CKEditor,
    Slider,
    VueSelect,
    Vselect
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const language = localStorage.getItem('LANGUAGE')
    
    onBeforeMount(() => {
      store.dispatch(EDIT_QUESTION,route.params.id)
    })
    return {
      question: computed(() => store.state.question.state.editQuestion ),
      language,
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
});
</script>
<style src="@vueform/slider/themes/default.css"></style>
