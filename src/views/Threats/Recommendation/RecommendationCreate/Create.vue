<template>
  <Layout Title="Threat - Edit:">
    <div class="m-12">
      <div class="grid grid-cols-2">
        <div class="">
          <router-link
            :to="{ name: 'threatUpdate' }"
            href="#"
            class="text-blue-blue"
            ><i class="fa fa-angle-left"></i> Back to Analysis</router-link
          >
        </div>
        <DeleteEditSave name="save_recommendation" />
        <div class="col-end-9 text-grey-grey ml-1">
          <!-- language dropdown -->
        </div>
      </div>
      <div class="container my-10">
        <div class="pl-7 w-full bg-secondary-blue py-3">
          <span class="text-xxxl font-bold text-blue-blue">
            Recommendations
          </span>
        </div>
        <div class="px-8 bg-white py-4">
          <div
            class="border border-grey-grey border-opacity-20 py-6 px-4 -ml-3 mb-2 rounded"
          >
            <div
              class="border-l-2 border-blue-blue border-opacity-20 py-6 ml-1"
            >
              <span class="font-bold text-lg pl-5 text-blue-blue">
                Possible Recommendation
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2 space-x-8 py-10">
            <div
              class="basis-1/2 border-r-2 border-blue-blue border-opacity-20 pr-4"
            >
              <span class="text-base font-semibold text-grey-grey">Title</span>
              <Input id="title" placeholder="Possible Recommendation" type="text" v-model="recommendation.friendlyTranslations['EN'].title" />
              <Switch :alternate="true" class="mt-2" name="Is Automated" v-model="recommendation.is_automated" />
              <div class="flex gap-8 relative">
                <div class="w-2/4">
                  <Vselect
                    name="For Question"
                    placeholder="Please Select the question"
                    :options="questions"
                    :reduce="(item) => item.id"
                    label="question"
                    v-model="recommendation.question_answer.question_id"
                  />
                </div>

                <div class="w-1/4">
                  <Vselect
                    multiple
                    name="For Answer"
                    placeholder="Please Select the answer"
                    :options="answers"
                    :reduce="(item) => item.id"
                    label="answer"
                    v-model="recommendation.question_answer.answers"
                  />
                </div>
                <div class="w-1/4 align-middle">
                  <a class="absolute top-6 cursor-pointer">
                    <img src="@/assets/icons/close-box.svg" alt="" />
                  </a>
                </div>
              </div>
              <div class="text-left mt-3">
                <a class="text-blue-blue text-base cursor-pointer">+Add</a>
              </div>
              <div class="flex gap-8">
                <div class="w-2/4">
                  <span class="text-base font-semibold text-grey-grey"
                    >Once sentence recommendation</span
                  >
                  <Input id="category" placeholder="Short Description" type="text" v-model="recommendation.friendlyTranslations['EN'].one_sentence_recommendation" />
                </div>

                <div class="w-2/4">
                  <Vselect
                    name="For Answer"
                    placeholder="Points"
                    :options="points"
                    label="Points"
                    v-model="recommendation.points"
                  />
                </div>
              </div>
              <Switch
                :alternate="true"
                class="mt-2"
                name="Show only if industry is"
                v-model="recommendation.show_if_industry"
              />

              <Vselect
                multiple
                placeholder="Please select industry"
                :options="industries"
                :reduce="(item) => item.id"
                label="name"
                v-model="recommendation.industries"
              />

              <Switch
                :alternate="true"
                name="Show only for company size:"
                class="my-4"
                v-model="recommendation.show_if_company_size"
              />
              <Slider v-model="recommendation.company_size" :max="500" :min="0" :step="1" />

              <Switch
                :alternate="true"
                name="Show if using following asset(s) :"
                class="mt-4"
              />

              <Vselect
                multiple
                placeholder="Please select the company asset"
                :options="industries"
                :reduce="(item) => item.id"
                label="name"
              />

              <Switch
                :alternate="true"
                name="Display if these conditions are met:"
                class="mt-4"
                v-model="recommendation.display_if_conditions"
              />
            </div>
            <div class="basis-1/2">
              <span class="text-base font-bold text-grey-grey"
                >Description</span
              >
              <CKEditor v-model="recommendation.friendlyTranslations['EN'].description" />
              <div v-show="addDescription" class="flex gap-8 relative mt-3">
                <div class="w-3/5">
                  <span class="text-base font-semibold text-grey-grey"
                    >Description for</span
                  >
                  <CKEditor />
                </div>

                <div class="w-2/5">
                  <VueSelect
                    name="Company Assets"
                    :multiple="true"
                    placeholder="Please select the answer"
                    :options="assets"
                    label="name"
                  />
                </div>
                <div class="w-1/5 align-middle">
                  <a class="absolute top-6 cursor-pointer">
                    <img src="@/assets/icons/close-box.svg" alt="" />
                  </a>
                </div>
              </div>
              <div class="text-left mt-3">
                <a class="text-blue-blue text-base cursor-pointer" @click="addDescriptionFor">+Add Description</a
                >
              </div>
            </div>
          </div>
          <div>
            <SolutionProducts />
          </div>
        </div>
      </div>
      <div class="mt-8 mb-8">
        <DeleteEditSave name="save_recommendation" />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent,computed, ref } from "vue";
import Layout from "@/components/Main.vue";
import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import CKEditor from "@/components/CKEditor.vue";
import Slider from "@vueform/slider";
import DeleteEditSave from "@/views/Threats/Threat/DeleteEditSave.vue";
import SolutionProducts from "@/views/Threats/Recommendation/SolutionProducts/Index.vue";
import VueSelect from "@/components/Select.vue";
import Vselect from "vue-select";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Input,
    Switch,
    CKEditor,
    Slider,
    Layout,
    DeleteEditSave,
    SolutionProducts,
    VueSelect,
    Vselect
  },

  setup() {
    const store = useStore()
    const addDescription = ref(false)
    const questions = [
      { id: 1, question: "Wahat is Anti virus?" },
      { id: 2, question: "What do you mean by that ?" },
    ]
    const answers = [
      { id: 1, answer: "A software protect from virus" },
      { id: 2, answer: " I don't know" },
    ]

    const points = [0, 10, 20, 30]

    const assets = [
      { id: 1, name: "Asset 1" },
      { id: 2, name: "Asset 2" },
    ]
    const industries = [
      { id: 1, name: "Industry 1" },
      { id: 2, name: "Industry 2" },
    ]

    function addDescriptionFor() {
      addDescription.value = true
    }
    return {
      recommendation: computed(() => store.state.recommendation.state.recommendation),
      questions,
      industries,
      assets,
      points,
      answers,
      addDescription,
      addDescriptionFor
    }
  },
});
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style></style>
