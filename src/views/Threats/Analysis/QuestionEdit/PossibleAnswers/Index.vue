<template>
  <div>
    <div class="created-analysis-component mx-0 p-5">
      <draggable class="dragArea list-group w-full" :list="list">
        <transition-group>
          <div
            class="list-group-item p-3 text-center"
            v-for="element in list"
            :key="element.name"
          >
            <component
              v-bind:is="'PossibleAnswer'"
              :removePossibleAnswer="removeAnswer"
              :item="element"
            />
          </div>
        </transition-group>
      </draggable>
    </div>

    <div class="flex flex-row-reverse m-4 pb-8">
      <div class="text-right">
        <Button
          class="ternary-button"
          :faIcon="'fa fa-plus'"
          title="Add new questions"
          @click="addAnswer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import PossibleAnswer from "@/views/Threats/Analysis/QuestionEdit/PossibleAnswers/PossibleAnswer.vue";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    PossibleAnswer,
    Button,
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: "One" },
        {
          name: "Two",
        },
      ],
      dragging: false,
    };
  },
  methods: {
    addAnswer() {
      this.list.push({
        name: "Example Possible Answer",
      });
    },
    removeAnswer(element) {
      var removeIndex = this.list
        .map(function (item) {
          return item.name;
        })
        .indexOf(element.name);
      this.list.splice(removeIndex, 1);
    },
  },
});
</script>

<style></style>
