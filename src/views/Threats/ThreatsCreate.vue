<template>
  <Layout Title="Create Threats">
    <div class="m-4">
      <ul
        class="nav nav-tabs flex flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <a
            href="#tabs-home"
            class="nav-link block font-medium text-lg font-semibold leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
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
            class="nav-link block font-medium text-lg font-semibold leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
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
            class="nav-link block font-medium text-lg font-semibold leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
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
          <ThreatDetailCreate />
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
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Main.vue";
import ThreatDetailCreate from "@/views/Threats/ThreatDetailCreate.vue";
import Analysis from "@/views/Threats/Analysis/Analysis.vue";
import Recommendation from "@/views/Threats/Recommendation/Index.vue";

export default defineComponent({
  components: {
    Layout,
    ThreatDetailCreate,
    Analysis,
    Recommendation,
  },
  setup() {
    return {};
  },
});
</script>
