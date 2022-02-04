<template>
  <div>
    <div class="created-analysis-component mx-0 p-5">
      <draggable class="dragArea list-group w-full" :list="list">
        <transition-group>
          <div
            class="list-group-item border border-grey-grey m-1 p-3 text-center"
            v-for="element in list"
            :key="element.name"
          >
            <component
              v-bind:is="'ThreatAnalysisQuestion'"
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
          Add new question&nbsp;<i class="fa fa-plus"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import ThreatAnalysisQuestion from "@/views/Threats/Analysis/Question.vue";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    ThreatAnalysisQuestion,
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: "John", id: 1 },
        {
          name: "Jany",
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
