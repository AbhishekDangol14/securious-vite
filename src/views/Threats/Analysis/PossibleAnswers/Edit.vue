<template>
  <div>
    <div class="created-analysis-component mx-0 p-5">
      <draggable class="dragArea list-group w-full" :list="answers">
        <transition-group>
          <div
            class="list-group-item p-3 text-center"
            v-for="(element,index) in answers"
            :key="element"
          >
            <component
              v-bind:is="'PossibleAnswer'"
              :removePossibleAnswer="removeAnswer"
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
          class="ternary-button"
          :faIcon="'fa fa-plus'"
          title="Add new answer"
          @click="addAnswer"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import { computed, defineComponent, WritableComputedRef } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import PossibleAnswer from "@/views/Threats/Analysis/PossibleAnswers/PossibleAnswerEdit.vue";
import { useStore } from "vuex";
import { ADD_EDIT_ANSWER, SET_ANSWER_LIST } from "@/store/modules/mutations.type";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    PossibleAnswer,
    Button,
  },
  setup() {
    const store = useStore()
    const route = useRoute()

    const answers: WritableComputedRef<string> = computed({
      get() {
        return store.state.question.state.editQuestion.answers
      },
      set(value) {
        store.commit(SET_ANSWER_LIST,value)
      },
    });
    
    function removeAnswer(element) {
      console.log(store.state.question.state.question.answers)
    }

    function addAnswer() {
      store.commit(ADD_EDIT_ANSWER,
      {
        id: '',
        analysis_question_id: '',
        solution_partner_product_id: '',
        friendlyTranslations: {
            "EN.title": {
                id: '',
                name: "title",
                value: ""
            },
            "DE.title": {
                id: '',
                name: "title",
                value: null
            }
        }
      })
    }
    return {
      answers,
      removeAnswer,
      addAnswer
    };
  },
  
});
</script>

<style></style>

// methods: {
  //   addAnswer() {
  //     this.list.push({
  //       name: "Example Possible Answer",
  //     });
  //   },
  //   removeAnswer(element) {
  //     var removeIndex = this.list
  //       .map(function (item) {
  //         return item.name;
  //       })
  //       .indexOf(element.name);
  //     this.list.splice(removeIndex, 1);
  //   },
  // },
