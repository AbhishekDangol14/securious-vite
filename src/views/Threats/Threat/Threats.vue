<template>
  <Layout Title="Threat Library">
    <div class="threats m-10">
      <div>
        <div class="grid grid-cols-6 gap-4">
          <div>
            <Search type="text" name="Search" placeholder="Search..." v-model="searchQuery" @input="industryFilter" />
          </div>
          <div>
            <span class="text-base font-semibold text-grey-grey"
              >Industries</span
            >
            <VSelect
              multiple
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="getIndustries"
              label="name"
              :reduce="(item) => item.id"
              @option:selected ="industryFilter"
              @option:deselected="industryFilter"
              v-model="searchIndustries"
            />
          </div>
          <div>
            <span class="text-base font-semibold text-grey-grey">Services</span>
            <VSelect
              multiple
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="getAssets"
              :reduce="(item) => item.id"
              @option:selected  ="industryFilter"
              label="name"
              v-model="assets"
            />
          </div>
          <div>
            <span class="text-base text-grey-grey">Status</span>
            <VSelect
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="statuses"
            />
          </div>
          <div>
            <span class="text-base font-semibold text-grey-grey"
              >Company Size</span
            >
            <Slider
              :valueOfSlider="valueOfSlider"
              :max="500"
              :min="0"
              :step="1"
            />
          </div>
          <div>
            <span class="text-base text-grey-grey">Sort By</span>
            <VSelect
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="sorts"
            />
          </div>
        </div>
      </div>
      <div>
        <div class="my-10">
          <div class="flex gap-4">
            <span class="mr-auto text-base"
              ><b class="text-grey-grey">Show:</b>&nbsp;<b
                class="text-blue-blue"
                >12</b
              >
              <b class="text-grey-grey">&nbsp;out of 82</b></span
            >

            <Button
              path_name="createThreats"
              name="ternary-button"
              title="Import/Export Data"
              :faIcon="'fa fa-plus'"
              >Add new threat</Button
            >
            <Button
              path_name="createThreats"
              name="primary-button"
              title="Add new threat"
              :faIcon="'fa fa-plus'"
              >Add new threat</Button
            >
           <LanguageSelector v-model="language" @option:selecting="switchLang" />
          </div>
        </div>
      </div>
      <div class="threat-content grid grid-cols-3 gap-x-4 mt-8 ml-6 mr-6">
        <ThreatCard
          v-for="threat in threats"
          v-bind:key="threat"
          :threat="threat"
          :language="language"
        />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref, watch } from "vue";
import Layout from "@/components/Main.vue";
import Search from "@/components/Search.vue";
import Button from "@/components/Button.vue";
import ThreatCard from "@/components/Threats/ThreatCard.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Slider from "@/components/Slider.vue";
import { useStore } from "vuex";
import { GET_DROPDOWN, GET_THREATS, DROPDOWN, SEARCH_THREAT } from "@/store/modules/actions.type";

export default defineComponent({
  components: {
    Layout,
    ThreatCard,
    LanguageSelector,
    VSelect,
    Slider,
    Button,
    Search,
  },
  setup() {
    const store = useStore();
    const threats = computed(() => store.state.threat.state.searchThreats)

    const statuses = ["All", "Published", "Drafted", "Deleted"];
    const sorts = ["Name", "Importance", "Recently Added"];
    let language = ref(localStorage.getItem('LANGUAGE'));
    const searchQuery = ref("")
    const searchIndustries = ref([])
    const assets = ref([])

    const getIndustries = computed(() => store.state.threat.state.getIndustries)
    const getAssets = computed(() => store.state.threat.state.getAssets)

    function switchLang(value){
      language.value = value
      store.dispatch(DROPDOWN,language.value)
    }

    function industryFilter(){
      store.dispatch({
        type: SEARCH_THREAT,
        searchQuery,
        searchIndustries,
        assets,
        language
      })
    }
    
    // searchedProducts = computed(() => {
    //   return threats.value.filter((threat) => {
    //     return (
    //       threat.friendlyTranslations[language.value+'.title'].value
    //         .toLowerCase()
    //         .indexOf(searchQuery.value.toLowerCase()) != -1
    //     );
    //   });
    // });

    onBeforeMount(async() => {
      store.dispatch(GET_THREATS)
      await store.dispatch(GET_DROPDOWN)
      store.dispatch(DROPDOWN,language.value)
    });

    return {
      valueOfSlider: [0, 500],
      statuses,
      sorts,
      language,
      searchQuery,
      threats,
      switchLang,
      industryFilter,
      assets,
      getIndustries,
      getAssets,
      searchIndustries
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
