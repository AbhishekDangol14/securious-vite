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
            class="list-group-item border border-grey-grey m-1 p-3 text-center"
            v-for="element in list"
            :key="element.name"
          >
            <component
              v-bind:is="'PosssibleRecommendation'"
              :title="element.name"
            />
          </div>
        </transition-group>
      </draggable>
    </div>

    <div></div>
    <div class="text-right mt-10">
      <form>
        <button
          class="btn btn-rounded btn-outline-primary theme-border theme-color"
          id="add-new-question"
          type="submit"
        >
          Add new recommendation&nbsp;<i class="fa fa-plus"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import PosssibleRecommendation from "@/views/Threats/Recommendation/Recommendation.vue";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    PosssibleRecommendation,
  },
  data() {
    return {
      list: [
        { name: "Recommendation1", id: 1 },
        {
          name: "Recommendation2",
          id: 2,
        },
      ],
      dragging: false,
    };
  },
  methods: {},
});
</script>

<style></style>
