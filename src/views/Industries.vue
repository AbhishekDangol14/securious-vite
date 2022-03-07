<template>
  <Layout Title="Industries">
    <div class="m-11">
      <div>
        <div class="flex justify-between">
          <div class="w-72">
            <Search type="text" name="Search" placeholder="Search" />
          </div>
          <div class="flex m-auto mr-0">
            <div class="flex flex-col">
              <div class="w-full"></div>
              <AddIndustryButton
                path="industries"
                :faIcon="'fa fa-plus'"
              ></AddIndustryButton>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="my-4">
          <div class="flex gap-4">
            <span class="mr-auto text-base"
              ><b class="text-grey-grey">Show:</b>&nbsp;<b
                class="text-blue-blue"
                >12</b
              >
              <b class="text-grey-grey">&nbsp;out of 82</b></span
            >
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-8">
        <Industry
          v-for="(item, index) in industries"
          :item="item"
          :index="index"
          v-bind:key="item.details_level"
        />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import Layout from "../components/Main.vue";
import Search from "@/components/Search.vue";
import AddIndustryButton from "@/components/AddIndustryButton.vue";
import Industry from "../components/Industry.vue";
import { GET_INDUSTRIES } from "@/store/modules/actions.type";
import { useStore } from "vuex";
// import axios from "axios";
export default defineComponent({
  components: {
    // AddButton,
    Industry,
    Layout,
    Search,
    AddIndustryButton,
  },
  setup() {
    const store = useStore();
    store.dispatch(GET_INDUSTRIES);
    return {
      industries: computed(() => store.state.industry.state.industries),
    };
  },
});
</script>
