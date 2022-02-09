<template>
  <Layout Title="Threat - Edit:">
    <div class="m-12">
      <div class="grid grid-cols-2">
        <div class="">
          <a href="#" class="text-blue-blue"
            ><i class="fa fa-angle-left"></i> Back to threat edit</a
          >
        </div>
        <DeleteEditSave />
        <div class="col-end-9 text-grey-grey ml-1">
          <!-- language dropdown -->
        </div>
      </div>
      <div class="container my-10">
        <div class="pl-7 w-full bg-secondary-blue py-3">
          <span class="text-xxxl font-bold text-blue-blue"> Analysis </span>
        </div>
        <div class="px-8 bg-white py-4">
          <div
            class="border border-grey-grey border-opacity-20 py-6 px-4 mb-2 rounded"
          >
            <div
              class="border-l-2 border-blue-blue border-opacity-20 py-6 ml-1"
            >
              <span class="font-bold text-lg pl-5 text-blue-blue">
                New Question
              </span>
            </div>
          </div>
          <ul
            class="nav nav-tabs flex flex-wrap list-none pl-0 -mb-1"
            id="tabs-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <a
                href="#tabs-home"
                class="nav-link block font-medium text-medium leading-tight border-x-0 border-t-0 border-b-0 border-transparent px-6 py-4 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                id="tabs-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-home"
                role="tab"
                aria-controls="tabs-home"
                aria-selected="true"
                >Question</a
              >
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#tabs-profile"
                class="nav-link block font-medium text-medium leading-tight border-x-0 border-t-0 border-b-0 border-transparent px-6 py-4 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                id="tabs-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-profile"
                role="tab"
                aria-controls="tabs-profile"
                aria-selected="false"
                >Possible Answers</a
              >
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#tabs-messages"
                class="nav-link block font-medium text-medium leading-tight border-x-0 border-t-0 border-b-0 border-transparent px-6 py-4 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                id="tabs-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messages"
                role="tab"
                aria-controls="tabs-messages"
                aria-selected="false"
                >Possible Recommendations</a
              >
            </li>
          </ul>
          <div class="tab-content bg-white" id="tabs-tabContent">
            <div
              class="tab-pane fade show active"
              id="tabs-home"
              role="tabpanel"
              aria-labelledby="tabs-home-tab"
            >
              <Question />
            </div>
            <div
              class="tab-pane fade"
              id="tabs-profile"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab"
            >
              <PossibleAnswers />
            </div>
            <div
              class="tab-pane fade"
              id="tabs-messages"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab"
            >
              <PossibleRecommendations />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 mb-8">
        <DeleteEditSave />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Main.vue";
import Question from "@/views/Threats/Analysis/QuestionEdit/Question.vue";
import PossibleAnswers from "@/views/Threats/Analysis/QuestionEdit/PossibleAnswers.vue";
import PossibleRecommendations from "@/views/Threats/Analysis/QuestionEdit/PossibleRecommendations.vue";
import DeleteEditSave from "@/views/Threats/DeleteEditSave.vue";

export default defineComponent({
  components: {
    Layout,
    Question,
    PossibleAnswers,
    PossibleRecommendations,
    DeleteEditSave,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.nav-link.active {
  color: #055ca8;
  font-weight: bold;
  border: 0;
  border-bottom: #055ca8 solid 2px;
  background-color: #fff;
}
</style>
