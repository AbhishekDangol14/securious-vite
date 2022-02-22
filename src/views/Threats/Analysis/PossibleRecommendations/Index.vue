<template>
  <div>
    <div class="created-analysis-component mx-0 p-5">
      <draggable
        class="dragArea list-group w-full"
        handle=".handle"
        :list="recommendation"
      >
        <transition-group>
          <div
            class="list-group-item p-3 text-center"
            v-for="(element,index) in recommendation"
            :key="element"
          >
            <component
              v-bind:is="'PossibleRecommendation'"
              :removePossibleRecommendation="removeItem"
              :item="element"
              :index="index"
            />
          </div>
        </transition-group>
      </draggable>
    </div>

    <div class="flex flex-row-reverse m-4 pb-8">
      <div class="text-right">
        <Button
          path_name="createThreatRecommendation"
          :faIcon="'fa fa-plus'"
          title="Add new questions"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import { defineComponent,WritableComputedRef,computed } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import PossibleRecommendation from "@/views/Threats/Analysis/PossibleRecommendations/PossibleRecommendation.vue";
import { SET_RECOMMENDATION_LIST } from "@/store/modules/mutations.type";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    PossibleRecommendation,
    Button,
  },
  setup(){
    const store = useStore()
    const route = useRoute()
    const recommendation = computed({
      get() {
        if (route.params.id)
          return store.state.question.state.editQuestion.recommendation
        return store.state.question.state.question.recommendation
      },
      set(value) {
        store.commit(SET_RECOMMENDATION_LIST,value)
      },
    });
    return {
      recommendation
    }
  }
});
</script>

<style></style>
