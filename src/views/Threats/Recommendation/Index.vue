<template>
  <div>
    <div class="created-analysis-component mx-0 p-5">
      <draggable
        class="dragArea list-group w-full"
        :list="list"
        handle=".handle"
      >
        <transition-group>
          <div
            class="list-group-item m-1 p-3 text-center"
            v-for="element in list"
            :key="element.name"
          >
            <component
              v-bind:is="'PosssibleRecommendation'"
              :removeRecommendation="removeItem"
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
import PosssibleRecommendation from "@/views/Threats/Recommendation/Recommendation.vue";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    PosssibleRecommendation,
    Button,
  },
  data() {
    return {
      list: [
        { name: "Recommendation1" },
        {
          name: "Recommendation2",
        },
      ],
      dragging: false,
    };
  },
  methods: {
    addItem() {
      this.list.push({
        name: "New Recommendation",
      });
    },
    removeItem(element) {
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
