<template>
  <div>
    <div class="created-analysis-component mx-0 p-5">
      <draggable
        class="dragArea list-group w-full"
        handle=".handle"
        v-model="question"
      >
        <transition-group>
          <div
            class="list-group-item p-3 text-center"
            v-for="(element,index) in question"
            :key="element.name"
          >
            <component
              v-bind:is="'ThreatAnalysisQuestion'"
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
          path_name="createThreatQuestion"
          :faIcon="'fa fa-plus'"
          title="Add new questions"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import { computed, defineComponent,ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import ThreatAnalysisQuestion from "@/views/Threats/Analysis/Question.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    ThreatAnalysisQuestion,
    Button,
  },
  setup(){
    const store = useStore()

    function addItem() {
        alert('hello')
    }
    function removeItem(element){
      console.log(element)
    }

    return {
      question: computed(() => store.state.threat.state.editThreat.analysisQuestion),
      addItem,
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
