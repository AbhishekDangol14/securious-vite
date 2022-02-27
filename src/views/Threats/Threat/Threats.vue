<template>
  <Layout Title="Threat Library">
    <div class="threats">
      <AddButton path="threat/create">Add new threat</AddButton>
      <div class="threat-content grid grid-cols-3 gap-x-4 mt-8 ml-6 mr-6">
        <ThreatCard v-for="item in threat" v-bind:key="item" :item="item" />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from "vue";
import Layout from "@/components/Main.vue";
import AddButton from "@/components/AddButton.vue";
import ThreatCard from "@/components/Threats/ThreatCard.vue"
import { useStore } from "vuex";
import { GET_THREATS } from "@/store/modules/actions.type";

export default defineComponent({
  components: {
    Layout,
    AddButton,
    ThreatCard
  },
  setup() {
    const store = useStore()
    
    onBeforeMount(() => {
      store.dispatch(GET_THREATS)
    })
    
    return {
      threat: computed(() => store.state.threat.state.threats)
    };
  },
});
</script>
