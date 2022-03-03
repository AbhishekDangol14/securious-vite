<template>
  <Layout Title="Threat Library">
    <div class="threats m-10">
      <div>
        <div class="grid grid-cols-6 gap-4">
          <div>
            <Search type="text" name="Search" placeholder="Search..." v-model="searchQuery" />
          </div>
          <div>
            <span class="text-base font-semibold text-grey-grey"
              >Industries</span
            >
            <VSelect
              multiple
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="industries"
              label="name"
            />
          </div>
          <div>
            <span class="text-base font-semibold text-grey-grey">Services</span>
            <VSelect
              multiple
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="services"
              label="name"
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
          v-for="threat in searchedProducts"
          v-bind:key="threat"
          :threat="threat"
          :language="language"
        />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from "vue";
import Layout from "@/components/Main.vue";
import Search from "@/components/Search.vue";
import Button from "@/components/Button.vue";
import ThreatCard from "@/components/Threats/ThreatCard.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Slider from "@/components/Slider.vue";
import { useStore } from "vuex";
import { GET_THREATS } from "@/store/modules/actions.type";

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
    const threats = computed(() => store.state.threat.state.threats)
    const industries = [
      { id: 1, name: "Industry 1" },
      { id: 2, name: "Industry 2" },
      { id: 3, name: "Industry 3" },
    ];
    const services = [
      { id: 1, name: "Service 1" },
      {
        id: 2,
        name: "Antivirus",
      },
    ];
    const statuses = ["All", "Published", "Drafted", "Deleted"];
    const sorts = ["Name", "Importance", "Recently Added"];
    let language = ref(localStorage.getItem('LANGUAGE'));
    const searchQuery = ref("")

    function switchLang(value){
      language.value = value
    }
    const searchedProducts = computed(() => {
      return threats.value.filter((threat) => {
        return (
          threat.friendlyTranslations[language.value+'.title'].value
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });

    console.log(searchedProducts)

    onBeforeMount(() => {
      store.dispatch(GET_THREATS);
    });

    return {
      threats,
      valueOfSlider: [0, 500],
      industries,
      services,
      statuses,
      sorts,
      language,
      searchQuery,
      searchedProducts,
      switchLang,
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
