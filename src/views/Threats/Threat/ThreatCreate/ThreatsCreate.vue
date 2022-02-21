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
        <DeleteEditSave name="store_threat" />
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
      </div>
      <div class="mt-8 mb-8">
        <DeleteEditSave name="store_threat" />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Main.vue";
import ThreatDetailCreate from "@/views/Threats/Threat/ThreatCreate/ThreatDetailCreate.vue";
import DeleteEditSave from "@/views/Threats/Threat/DeleteEditSave.vue";

export default defineComponent({
  components: {
    Layout,
    ThreatDetailCreate,
    DeleteEditSave,
  },
  setup() {
    return {
    };
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
