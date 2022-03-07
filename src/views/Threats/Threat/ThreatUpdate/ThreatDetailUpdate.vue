<template>
    <div v-if="threatDetail.friendlyTranslations">
        <div class="grid grid-cols-2 mx-5 space-x-8 p-5">
            <div class="basis-1/2">
                <div class="flex">
                    <div class="w-2/5">
                        <Input
                        type="text"
                        id="title"
                        name="Title"
                        placeholder="Please write title of threat"
                        v-model="threatDetail.friendlyTranslations[selectedLanguage+'.title'].value"
                        />
                    </div>
                    <div class="pl-8 flex gap-4 justify-center align-middle items-center">
                        <span>
                        <FileUpload image="@/assets/threats.png" @my-file="uploadFile" />
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
                        v-model="threatDetail.category_id"
                    />
                    </div>
                    <Input
                    type="text"
                    name="Estimated time (in minutes)"
                    placeholder="Please put estimated time in minutes here."
                    v-model="threatDetail.estimated_time_in_minutes"
                    />
                    <div class="mb-5">
                    <b class="text-grey-grey text-base"
                        >Time to analysis by Users (In minutes):
                        <span class="text-blue-blue"> N/A</span>
                    </b>
                </div>
                <CKEditor name="Description" v-model="threatDetail.friendlyTranslations[selectedLanguage+'.description'].value" />
                    <Input
                    type="text"
                    class="mt-3"
                    id="video_link"
                    name="Video Link (Optional)"
                    placeholder="Please put here video link"
                    v-model="threatDetail.video_link"
                    />
            </div>
        <div class="basis-1/2">
            <div>
            <h class="text-medium font-semibold -ml-2 text-blue-blue"
                >Define Importance</h
            >
            </div>
            <Switch class="mt-2" name="Mark always as important" v-model="threatDetail.is_always_important" />
            <Switch :alternate="true" name="Mark as important if industry is:" v-model="threatDetail.important_if_industry_id" />

            <Vselect 
            :options="getIndustries"
            :reduce="(item) => item.id"
            label="name"
            v-model="threatDetail.important_industry_id"
            multiple
            />      

            <Switch
            :alternate="true"
            name="Mark as if company size is:"
            class="my-4"
            />
          </div>
          <div class="pl-8 flex gap-4 justify-center align-middle items-center">
            <span>
              <FileUpload image="@/assets/threats.png" @my-file="uploadFile" />
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
            v-model="threatDetail.category_id"
          />
        </div>
        <Input
          type="text"
          name="Estimated time (in minutes)"
          placeholder="Please put estimated time in minutes here."
          v-model="threatDetail.estimated_time_in_minutes"
        />
        <div class="mb-5">
          <b class="text-grey-grey text-base"
            >Time to analysis by Users (In minutes):
            <span class="text-blue-blue"> N/A</span>
          </b>
        </div>
        <CKEditor
          name="Description"
          v-model="
            threatDetail.friendlyTranslations[selectedLanguage + '.description']
              .value
          "
        />
        <Input
          type="text"
          class="mt-3"
          id="video_link"
          name="Video Link (Optional)"
          placeholder="Please put here video link"
          v-model="threatDetail.video_link"
        />
      </div>
      <div class="basis-1/2">
        <div>
            <div>
            <Switch name="Active" v-model="threatDetail.is_display_active_always" />
            </div>
            <div class="mt-2">
            <Switch :alternate="true" name="Show if industry is:" v-model="threatDetail.show_if_industry" />
            </div>
            <div class="mt-3">
            <Vselect 
                :options="getIndustries"
                :reduce="(item) => item.id"
                label="name" 
                v-model="threatDetail.industry_id" 
                multiple
            />
            </div>
        </div>
        <div>
            <div>
            <Switch :alternate="true" name="Show if company size is:" v-model="threatDetail.show_if_company_size" />
            <div class="my-10">
            <Slider v-model="threatDetail.company_size" :max="500" :min="0" :step="1" />
            </div>
            <Switch :alternate="true" name="Show if using the following asset(s):" />
            <div class="mt-3">
                <VueSelect
                name="Assets"
                :options="getAssets"
                label="name"
                :data="threatDetail.assets"
                :multiple="true"
                />
            </div>
            </div>
        </div>
      </div>
      <div>
        <div>
          <Switch
            :alternate="true"
            name="Show if company size is:"
            v-model="threatDetail.show_if_company_size"
          />
          <div class="my-10">
            <Slider
              v-model="threatDetail.company_size"
              :max="500"
              :min="0"
              :step="1"
            />
          </div>
          <Switch
            :alternate="true"
            name="Show if using the following asset(s):"
          />
          <div class="mt-3">
            <VueSelect
              name="Assets"
              :options="assets"
              label="name"
              :data="threatDetail.assets"
              :multiple="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import FileUpload from "@/components/FileUpload.vue";
import CKEditor from "@/components/CKEditor.vue";
import Slider from "@vueform/slider";
import Vselect from "vue-select";
import VueSelect from "@/components/Select.vue";
import { computed, defineComponent, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Button,
    Input,
    Switch,
    FileUpload,
    CKEditor,
    Slider,
    Vselect,
    VueSelect,
  },
  setup() {
    const store = useStore();

    let selectedLanguage = localStorage.getItem("LANGUAGE");

    let selectedLanguage = ref(localStorage.getItem('LANGUAGE'))
    const getIndustries = computed(() => store.state.threat.state.getIndustries)
    const getAssets = computed(() => store.state.threat.state.getAssets)
    
    const categories = ref([
      { id: 1, category: "Category 1" },
      { id: 2, category: "Category 2" },
    ]);

    function uploadFile(image) {
      store.state.threat.state.threat.image = image;
    }

    return {
      threatDetail: computed(() => store.state.threat.state.editThreat),  
      getIndustries,
      categories,
      selectedLanguage,
      getAssets,
      uploadFile,
    };
  },
});
</script>
<style src="@vueform/slider/themes/default.css"></style>
<style>
.slider-base {
  height: 12px;
}
.slider-horizontal .slider-handle {
  top: -2px;
}
</style>
