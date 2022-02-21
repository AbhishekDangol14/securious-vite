<template>
  <div v-if="recommendationTitle[index].friendlyTranslations" class="border border-grey-grey border-opacity-20 relative shadow-sm">
    <a
      @click="removeQuestion(item)"
      class="absolute -top-3 -right-2 cursor-pointer"
    >
      <img src="@/assets/icons/close-box.svg" alt="" />
    </a>
    <div class="flex flex-row items-stretch mt-auto">
      <div class="mt-auto mb-auto table-cell p-2 ml-3">
        <a
          class="draggable-handler sortable-handle handle align-middle m-0 p-0"
        >
          <img src="@/assets/icons/drag-handler.svg" alt="" />
        </a>
      </div>
      <div class="grow">
        <div class="grid grid-cols-5 p-2">
          <div
            class="col-start-1 col-end-5 my-4 border-l border-blue-blue border-opacity-20 pl-2"
          >
            <div class="flex justify-start my-4">
              <div class="box-border block min-w-min m-0 p-1">
                <input
                  class="text-medium font-semibold outline-none"
                  ref="edit_question_label"
                  type="text"
                  v-if="recommendationActive"
                  v-on:keyup.enter="toggleActiveQuestionTitle"
                  v-model="recommendationTitle[index].friendlyTranslations['EN.title'].value"
                />
              </div>

              <h
                class="box-content text-medium font-semibold text-blue-blue min-w-min"
                v-if="recommendationActive === false"
              >
                {{ recommendationTitle[index].friendlyTranslations["EN.title"].value }}
              </h>
              <a
                v-if="!recommendationActive"
                @click="toggleActiveQuestionTitle"
                class="edit-question-title w-5 ml-2"
              >
                <i class="cursor-pointer fa fa-pencil"></i>
              </a>

              <a
                v-if="recommendationActive"
                @click="setTitle"
                class="save-question-title w-5 ml-2"
              >
                <i class="cursor-pointer fa fa-folder"></i>
              </a>
            </div>
            <div class="flex flex-row mt-2 gap-8">
              <Switch />

              <div class="text-base text-grey-grey">
                <p>Points &nbsp;<span class="font-bold text-medium">0</span></p>
              </div>

              <div class="text-base text-grey-grey">
                <b>Display Options:</b>
              </div>
            </div>
          </div>
          <div class="col-end-7 col-span-1">
            <div>
              <div class="mb-1 ml-3">
                <b class="text-blue-blue"> DE </b>
                |
                <b class="text-blue-blue">EN</b>
              </div>
              <Button
                path_name="editThreatRecommendation"
                title="Edit"
                :faIcon="'fa fa-pencil'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Switch from "@/components/Switch.vue";
import { computed, defineComponent, toRef } from "@vue/runtime-core";
import { ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Button,
    Switch,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true
    },
    removeQuestion: Function,
  },
  setup(props) {
    const store = useStore()
    const recommendationActive = ref(false)

    function toggleActiveQuestionTitle() {
      recommendationActive.value = true
    }

    function setTitle() {
      recommendationActive.value = false
    }
    return {
      recommendationActive,
      recommendationTitle: computed(() => store.state.threat.state.editThreat.recommendation),
      toggleActiveQuestionTitle,
      setTitle
    }
  }
});
</script>

<style></style>

  // data() {
  //   return {
  //     recommendationActive: false,
  //     questionTitle: this.item.name,
  //   };
  // },
  //   methods: {
  //   toggleActiveQuestionTitle() {
  //     this.recommendationActive = true;
  //   },
  //   setTitle() {
  //     this.recommendationActive = false;
  //   },
  // },