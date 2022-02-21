<template>
  <Layout Title="Create Threats">
    <div class="m-12">
      <div class="grid grid-cols-2">
        <div class="">
          <router-link :to="{ name: 'threats' }" href="#" class="text-blue-blue"
            ><i class="fa fa-angle-left"></i> Back to Threat
            Library</router-link
          >
        </div>
        <DeleteEditSave name="update_threat" />
        <div class="col-end-9 text-grey-grey ml-1">
          <!-- language dropdown -->
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
            class="nav-link block font-medium text-xxl leading-tight border-x-0 border-t-0 border-b-0 border-transparent px-6 py-4 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
            >Threat</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            href="#tabs-profile"
            class="nav-link block font-medium text-xxl leading-tight border-x-0 border-t-0 border-b-0 border-transparent px-6 py-4 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
            >Analysis</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            href="#tabs-messages"
            class="nav-link block font-medium text-xxl leading-tight border-x-0 border-t-0 border-b-0 border-transparent px-6 py-4 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
            >Recommendations</a
          >
        </li>
      </ul>
      <div class="tab-content bg-white shadow-primary" id="tabs-tabContent">
        <div
          class="tab-pane fade show active"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
        >
          <ThreatDetailUpdate />
        </div>
        <div
          class="tab-pane fade"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          <Analysis />
        </div>
        <div
          class="tab-pane fade"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          <Recommendation />
        </div>
      </div>
      <div class="mt-8 mb-8">
        <DeleteEditSave name="update_threat" />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import Layout from "@/components/Main.vue";
import ThreatDetailUpdate from "@/views/Threats/Threat/ThreatUpdate/ThreatDetailUpdate.vue";
import Analysis from "@/views/Threats/Analysis/Analysis.vue";
import Recommendation from "@/views/Threats/Recommendation/Index.vue";
import DeleteEditSave from "@/views/Threats/Threat/DeleteEditSave.vue";
import { useStore } from "vuex";
import { EDIT_THREAT } from "@/store/modules/actions.type";
import { useRoute } from "vue-router";

export default defineComponent({ 
  components: {
    Layout,
    ThreatDetailUpdate,
    Analysis,
    Recommendation,
    DeleteEditSave,
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    onBeforeMount(() => {
      store.dispatch(EDIT_THREAT,route.params.id)
    })
    return {
    }
  },
});
</script>
<style scoped>
.nav-link.active {
  color: #055ca8;
  font-weight: bold;
  border: 0;
  border-top: #055ca8 solid 3px;
  background-color: #fff;
}
</style>
