<template>
  <div v-if="recommendation">
    <div class="created-analysis-component mx-0 p-5">
      <draggable
        class="dragArea list-group w-full"
        handle=".handle"
        v-model="recommendation"
      >
        <transition-group>
          <div
            class="list-group-item p-3 text-center"
            v-for="(element,index) in recommendation"
            :key="element"
          >
            <component
              v-bind:is="'Recommendation'"
              :removeQuestion="removeItem"
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
          title="Add new recommendation"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import { computed, defineComponent,ref, WritableComputedRef } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import Recommendation from "@/views/Threats/Recommendation/Recommendation.vue";
import { useStore } from "vuex";
import { SET_RECOMMENDATION_LIST } from "@/store/modules/mutations.type";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    Recommendation,
    Button,
  },
  setup(){
    const store = useStore()

    const recommendation: WritableComputedRef<string> = computed({
      get() {
        return store.state.threat.state.editThreat.recommendation
      },
      set(value) {
        store.commit(SET_RECOMMENDATION_LIST,value)
      },
    });

    function removeItem(element){
      console.log(element)
    }

    return {
      recommendation,
      removeItem
    }
  }
});
</script>

<style></style>

  // setup() {
  //   const router = useRouter()
  //   let list = ref([
  //       { name: "John" },
  //       { name: "Jany" },
  //       { name: "Hello" }
  //     ])
    

  //   function removeItem(element) {
  //     // get index of object with id:37
  //     var removeIndex = list.value
  //       .map(function (item) {
  //         return item.name;
  //       })
  //       .indexOf(element.name);

  //     // remove object
  //     list.value.splice(removeIndex, 1);
  //   }

  //   return {
  //     list,
  //     removeItem,
  //     addItem,
  //   };
  // },
