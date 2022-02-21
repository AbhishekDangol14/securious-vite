<template>
  <div>
    <div class="created-analysis-component mx-0 p-5">
      <draggable
        class="dragArea list-group w-full"
        handle=".handle"
        :list="list"
      >
        <transition-group>
          <div
            class="list-group-item p-3 text-center"
            v-for="element in list"
            :key="element.name"
          >
            <component
              v-bind:is="'PossibleRecommendation'"
              :removePossibleRecommendation="removeItem"
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
          @click="addItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import PossibleRecommendation from "@/views/Threats/Analysis/QuestionEdit/PossibleRecommendations/PossibleRecommendation.vue";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    PossibleRecommendation,
    Button,
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: "Possible Recommendation 1" },
        {
          name: "Possible Recommendation 2",
        },
      ],
      dragging: false,
    };
  },
  methods: {
    addItem() {
      this.list.push({
        name: "New Question",
      });
    },
    removeItem(element) {
      // get index of object with id:37
      var removeIndex = this.list
        .map(function (item) {
          return item.name;
        })
        .indexOf(element.name);

      // remove object
      this.list.splice(removeIndex, 1);
    },
  },
});
</script>

<style></style>
