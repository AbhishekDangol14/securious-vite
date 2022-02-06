<template>
  <div>
    <div class="flex">
      <div class="align-middle p-0 my-auto">
        <a
          class="draggable-handler sortable-handle handle align-middle m-0 p-0"
        >
          <img src="@/assets/icons/drag-handler.svg" alt="" />
        </a>
      </div>
      <div class="ml-5 flex items-stretch">
        <div class="w-full">
          <input
            class="editable-labels text-lg font-semibold outline-none w-full"
            ref="edit_question_label"
            type="text"
            v-if="questionActive"
            v-model="questionTitle"
            v-on:keyup.enter="toggleActiveQuestionTitle"
          />

          <h class="text-lg font-semibold" v-if="questionActive === false">
            {{ questionTitle }}
          </h>
        </div>

        <img
          v-if="!questionActive"
          @click="toggleActiveQuestionTitle"
          class="edit-question-title w-5 ml-2"
          src="@/assets/icons/edit-icon.svg"
        />
        <img
          v-if="questionActive"
          @click="setTitle"
          class="save-question-title w-5 ml-2"
          src="@/assets/icons/save-icon.svg"
        />
      </div>
      <div class="ml-auto">
        <Button title="Edit" class="bg-color-200" />
      </div>
    </div>
    <div class="flex">
      <div class="px-4">
        <Switch name="" />
      </div>
      <div class="px-4">
        <p>Points</p>
      </div>
      <div class="px-4">
        <p>Display Options:</p>
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
      questionTitle: this.title,
    };
  },
  components: {
    Button,
    Switch,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
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
