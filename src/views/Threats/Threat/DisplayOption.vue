<template>
  <div>
    <h class="text-medium font-semibold text-blue-blue mx-5">Display Options</h>
  </div>
  <div class="grid grid-cols-2 mx-5 space-x-8 p-5">
    <div>
      <div>
        <Switch name="Active" v-model="threat.is_display_active_always" />
      </div>
      <div class="mt-2">
        <Switch :alternate="true" name="Show if industry is:" v-model="threat.show_if_industry" />
      </div>
      <div class="mt-3">
        <Vselect 
          :options="industries"
          :reduce="(item) => item.id"
          label="name" 
          v-model="threat.industries" 
          multiple
        />
      </div>
    </div>
    <div>
      <div>
        <Switch :alternate="true" name="Show if company size is:" v-model="threat.show_if_company_size" />
        <div class="my-10">
          <Slider v-model="threat.company_size" :max="500" :min="0" :step="1" />
        </div>
        <Switch
          :alternate="true"
          name="Show if using the following asset(s):"
        />
        <div class="mt-3">
          <Vselect
            name="Assets"
            :options="assets"
            label="name"
            :data="threat.assets"
            :multiple="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from "@/components/Switch.vue";
import Slider from "@vueform/slider";
import Vselect from "vue-select";
import "vue-select/dist/vue-select.css";
import { defineComponent } from "@vue/runtime-core";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent ({
  components: {
    Switch,
    Slider,
    Vselect
  },
  props: {
    language: String,
    industries: Array,
    assets: Array
  },
  setup(props){
    const store = useStore()

    return {
      threat: computed(() => store.state.threat.state.threat),
    }
  }
});
</script>
<style src="@vueform/slider/themes/default.css"></style>


