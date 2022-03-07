<template>
  <Layout Title="Industries">
    <div class="m-10">
      <div class="flex flex-row">
        <div class="flex gap-4">
          <div>
            <Input type="text" name="Search" placeholder="Search" v-model="searchQuery" />
          </div>
          <div class="flex">
            <div class="flex flex-col end">
              <div class="w-full"></div>
              <AddIndustryButton :canAdd="add" >Add new industry</AddIndustryButton>
            </div>
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
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 ml-4">
        <Industry
          v-for="(item, index) in searchIndustry"
          :item="item"
          :index="index"
          :key="JSON.stringify(item)"
        />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount, watch, ref } from "vue";
import Layout from "../components/Main.vue";
import Input from "@/components/Input.vue";
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
    Input,
    AddIndustryButton,
  },
  setup() {
    const store = useStore();

    const add = computed(() => store.state.industry.state.canAdd)

    const industries = computed(() => store.state.industry.state.industries)

    let language = ref()

    if(localStorage.getItem('LANGUAGE'))
      language.value = localStorage.getItem('LANGUAGE') 

    const searchQuery = ref('')

    const searchIndustry = computed(() => {
      return industries.value.filter((industry) => {
        if(industry.id){
          if(industry.friendlyTranslations[language.value+'.title'].value.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1)
            return true;
          else
            return false;
        }
        else
          return true;
      });
    });
    
    onBeforeMount(() => {
      store.dispatch(GET_INDUSTRIES)
    })

    return {
      searchIndustry,
      searchQuery,
      add
    };
  },
});
</script>
