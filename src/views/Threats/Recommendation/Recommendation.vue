<template>
  <div class="border border-grey-grey border-opacity-20 relative shadow-sm">
    <a
      @click="removeRecommendation(item)"
      class="absolute -top-3 -right-2 cursor-pointer"
    >
      <img src="@/assets/icons/close-box.svg" alt="" />
    </a>
    <div class="flex flex-row items-stretch mt-auto">
      <div class="mt-auto mb-auto table-cell p-2 ml-3 cursor-move">
        <a
          class="draggable-handler sortable-handle handle align-middle m-0 p-0"
        >
          <img src="@/assets/icons/drag-handler.svg" alt="" />
        </a>
      </div>
      <div class="grow">
        <div class="grid grid-cols-5 p-2">
          <div class="col-start-1 col-end-5 my-4">
            <div class="flex justify-start my-4">
              <div class="box-border block min-w-min m-0 p-1">
                <input
                  class="text-medium font-semibold outline-none"
                  ref="edit_question_label"
                  type="text"
                  v-if="questionActive"
                  v-model="questionTitle"
                  v-on:keyup.enter="toggleActiveQuestionTitle"
                />
              </div>

              <h
                class="box-content text-medium font-semibold text-blue-blue min-w-min"
                v-if="questionActive === false"
              >
                {{ questionTitle }}
              </h>
              <a
                v-if="!questionActive"
                @click="toggleActiveQuestionTitle"
                class="edit-question-title w-5 ml-2"
              >
                <i class="cursor-pointer fa fa-pencil"></i>
              </a>

              <a
                v-if="questionActive"
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
              <Button title="Edit" :faIcon="'fa fa-pencil'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Switch from "@/components/Switch.vue";

export default {
  data() {
    return {
      questionActive: false,
      questionTitle: this.item.name,
    };
  },
  components: {
    Button,
    Switch,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    removeRecommendation: Function,
  },
  methods: {
    toggleActiveQuestionTitle() {
      this.questionActive = true;
    },
    setTitle() {
      this.questionActive = false;
    },
  },
};
</script>

<style></style>
