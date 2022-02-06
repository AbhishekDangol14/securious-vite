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
      <div class="ml-5">
        <input
          class="editable-labels"
          ref="edit_question_label"
          type="text"
          v-if="questionActive"
          v-model="questionTitle"
          v-on:keyup.enter="toggleActiveQuestionTitle"
        />

        <h class="text-lg font-semibold" v-if="questionActive === false">
          {{ questionTitle }}
        </h>
        <a
          v-if="!questionActive"
          @click="toggleActiveQuestionTitle"
          class="edit-question-title"
          role="button"
          >Edit
        </a>
        <a
          v-if="questionActive"
          @click="setTitle"
          class="edit-question-title"
          role="button"
          >Save
        </a>
      </div>
      <div class="ml-auto">
        <Button name="secondary-button" title="Edit" />
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
      this.questionTitle = "Lalalal";
    },
  },
};
</script>

<style></style>
