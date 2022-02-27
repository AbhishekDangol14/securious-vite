<template>
  <div class="grid grid-cols-2 mx-5 space-x-8 p-5" v-if="selectedLanguage">
    <div class="basis-1/2">
      <div class="flex">
        <div class="w-2/5">
          <Input
            type="text"
            id="title"
            name="Title"
            placeholder="Please write title of threat"
            v-model="threat.friendlyTranslations[selectedLanguage].title"
          />
        </div>
        <div class="pl-8 flex gap-4 justify-center align-middle items-center">
          <span>
            <FileUpload @my-file="uploadFile" />
          </span>
          <div class="gap-2 flex flex-col">
            <Button
              name="ternary-button"
              :faIcon="'fa fa-file-upload'"
              title="Upload"
            />
            <Button
              name="ternary-button"
              :faIcon="'fa fa-hand-pointer'"
              title="Select"
            />
          </div>
        </div>
      </div>
      <div class="mt-3">
        <b class="text-grey-grey font-bold text-base"
          >Max Points: <span class="text-blue-blue">0</span>
        </b>
      </div>
      <div class="mt-4">
        <Vselect
          name="Category"
          multiple
          placeholder="Please select the company asset"
          :options="categories"
          label="category"
          :reduce="(item) => item.id"
          v-model="threat.category_id"
        />
      </div>
      <Input
        type="text"
        name="Estimated time (in minutes)"
        placeholder="Please put estimated time in minutes here."
        v-model="threat.estimated_time_in_minutes"
      />
      <div class="mb-5">
        <b class="text-grey-grey text-base"
          >Time to analysis by Users (In minutes):
          <span class="text-blue-blue"> N/A</span>
        </b>
      </div>
      <CKEditor name="Description" v-model="threat.friendlyTranslations[selectedLanguage].description" />
      <Input
        type="text"
        class="mt-3"
        id="video_link"
        name="Video Link (Optional)"
        placeholder="Please put here video link"
        v-model="threat.video_link"
      />
    </div>
    <div class="basis-1/2">
      <div>
        <h class="text-medium font-semibold -ml-2 text-blue-blue"
          >Define Importance</h
        >
      </div>
      <Switch class="mt-2" name="Mark always as important" v-model="threat.is_always_important" />
      <Switch :alternate="true" name="Mark as important if industry is:" v-model="threat.important_if_industry_id" />

      <Vselect 
        :options="industries"
        :reduce="(item) => item.id"
        label="name"
        v-model="threat.important_industry"
        multiple
      />      

      <Switch
        :alternate="true"
        name="Mark as if company size is:"
        class="my-4"
      />
      <Slider v-model="threat.important_company_size" :max="500" :min="0" :step="1" />
    </div>
  </div>
  <div class="px-2 mb-2">
    <hr class="opacity-10" />
  </div>
  <DisplayOption />
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import FileUpload from "@/components/FileUpload.vue";
import CKEditor from "@/components/CKEditor.vue";
import Slider from "@vueform/slider";
import DisplayOption from "@/views/Threats/Threat/DisplayOption.vue";
import Vselect from "vue-select";
import { computed, defineComponent,onBeforeMount,ref } from 'vue';
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Button,
    Input,
    Switch,
    FileUpload,
    CKEditor,
    Slider,
    DisplayOption,
    Vselect
  },
  setup() {   
    const store = useStore() 
    let selectedLanguage = localStorage.getItem('LANGUAGE')
    
    const industries = ref([
      { id: 1, name: "Industry 1" },
      { id: 2, name: "Industry 2" },
    ])

    const categories = ref([
      { id: 1, category: "Category 1" },
      { id: 2, category: "Category 2" },
    ])

    function uploadFile(image) {
      const reader = new FileReader();
      let rawImg;
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        rawImg = reader.result;
        store.state.threat.state.threat.image = rawImg
        console.log(rawImg)
      };   
    }

    return {
      threat: computed(() => store.state.threat.state.threat),
      industries,
      categories,
      selectedLanguage,
      uploadFile,
    }
  },
});
</script>
<style src="@vueform/slider/themes/default.css"></style>
