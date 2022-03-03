<template>
    <Layout Title="Potential Threats">
    <div class="cusomer-threat m-8">
        <ul
        class="nav nav-tabs flex flex-wrap list-none pl-3"
        id="tabs-tab"
        role="tablist"
        >
            <li class="nav-item" role="presentation">
            <a
                href="#tabs-analysis"
                class="nav-link block font-light text-med leading-tight border-x-0 border-t-0 border-b-0 border-transparent px-6 py-2 hover:border-transparent hover:text-blue-blue focus:border-transparent active"
                id="tabs-analysis-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-analysis"
                role="tab"
                aria-controls="tabs-analysis"
                aria-selected="true"
                >Current Threats</a
            >
            </li>
            <li class="nav-item" role="presentation">
            <a
                href="#tabs-neutralized"
                class="nav-link block font-light text-med leading-tight border-x-0 border-t-0 border-b-0 border-transparent px-6 py-2 hover:border-transparent hover:text-blue-blue focus:border-transparent"
                id="tabs-neutralized-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-neutralized"
                role="tab"
                aria-controls="tabs-neutralized"
                aria-selected="false"
                >Neutralized Threats</a
            >
            </li>
            <li class="nav-item" role="presentation">
            <a
                href="#tabs-reanalysis"
                class="nav-link block font-light text-med leading-tight border-x-0 border-t-0 border-b-0 border-transparent px-6 py-2 hover:border-transparent hover:text-blue-blue focus:border-transparent"
                id="tabs-reanalysis-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-reanalysis"
                role="tab"
                aria-controls="tabs-reanalysis"
                aria-selected="false"
                >Reanalyse Threat</a
            >
            </li>
        </ul>
        <hr class="border-grey-200 border-1" />
        <div class="tab-content" id="tabs-tabContent">
        <div
          class="tab-pane fade show active mt-8"
          id="tabs-analysis"
          role="tabpanel"
          aria-labelledby="tabs-analysis-tab"
        >
          <Analysis />
        </div>
        <div
          class="tab-pane fade"
          id="tabs-neutralized"
          role="tabpanel"
          aria-labelledby="tabs-neutralized-tab"
        >
          Neutralized
        </div>
        <div
          class="tab-pane fade"
          id="tabs-reanalysis"
          role="tabpanel"
          aria-labelledby="tabs-reanalysis-tab"
        >
          Reanalysis
        </div>
        </div>
    </div>
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/components/Main.vue'
import Analysis from '@/views/Customer/Threats/Analysis.vue'

export default defineComponent({
    components: {
        Layout,
        Analysis
    }
})
</script>

<style scoped>
.nav-link.active {
  color: #055ca8;
  border: 0;
  border-bottom: #055ca8 solid 3px;
}
</style>