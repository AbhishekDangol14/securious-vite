<template>
  <Layout Title="Company Assets & Solution Partners">
    <div class="m-11">
      <div>
        <div class="grid grid-cols-6 gap-4">
          <div>
            <Search type="text" name="Search" placeholder="Search..." />
          </div>
          <div>
            <span class="text-base text-grey-grey">Status</span>
            <VSelect
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="options"
              :reduce="(item) => item.id"
              label="name"
            />
          </div>
          <div>
            <span class="text-base text-grey-grey">Category</span>
            <VSelect
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="options"
              :reduce="(item) => item.id"
              label="name"
            />
          </div>
          <div></div>
          <div></div>
          <div class="col-span-1 m-auto">
            <Button
              path_name="createSolutionpartners"
              name="primary-button"
              title="Add new partner"
              :faIcon="'fa fa-plus'"
            />
            <!-- <AddButton path="solution-partners/create"
              >Add new partner</AddButton
            > -->
          </div>
        </div>
      </div>
      <div class="my-4">
        <div>
          <span class="mr-auto text-base"
            ><b class="text-grey-grey">Show:</b>&nbsp;<b class="text-blue-blue"
              >12</b
            >
            <b class="text-grey-grey">&nbsp;out of 82</b></span
          >
        </div>
      </div>
      <div class="flex flex-row gap-8 flex-wrap">
        <SolutionPartner
          v-for="item in products"
          :item="item"
          v-bind:key="item"
        />
      </div>
      <div class="grid place-items-center my-10">
        <Button
          title="Show More"
          class="ternary-button"
          :faIcon="'fa fa-plus'"
        />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from "vue";
import Layout from "@/components/Main.vue";
import Button from "@/components/Button.vue";
// import Switch from "@/components/Switch.vue";
import Search from "@/components/Search.vue";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { useStore } from "vuex";
import { GET_SOLUTION_PARTNER } from "@/store/modules/actions.type";
import SolutionPartner from "@/components/SolutionPartners/SolutionPartnerCard.vue";

export default defineComponent({
  components: {
    Layout,
    Button,
    VSelect,
    // Switch,
    Search,
    SolutionPartner,
  },
  setup() {
    const store = useStore();
    var options = [
      { id: 1, name: "Example 1" },
      { id: 2, name: "Example 2" },
    ];
    onBeforeMount(() => {
      store.dispatch(GET_SOLUTION_PARTNER);
    });
    return {
      products: computed(
        () => store.state.solutionPartner.state.solutionPartners
      ),
      options,
    };
  },
});
</script>
<style>
.style-chooser .vs__dropdown-toggle {
  height: auto;
  min-height: 45px;
}
</style>
