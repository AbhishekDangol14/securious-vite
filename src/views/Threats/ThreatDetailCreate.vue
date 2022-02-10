<template>
  <div class="grid grid-cols-2 mx-5 space-x-8 p-5">
    <div class="basis-1/2">
      <div class="flex">
        <div class="w-2/5">
          <Input
            id="title"
            name="Title"
            placeholder="Please write title of threat"
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
        <span class="text-base font-semibold text-grey-grey">Category</span>
        <VSelect
          class="mb-3 style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
          multiple
          :options="categories"
          :reduce="(category) => category.id"
          label="category"
        />
      </div>
      <Input
        name="Estimated time (in minutes)"
        type="number"
        placeholder="Please put estimated time in minutes here."
      />
      <div class="mb-5">
        <b class="text-grey-grey text-base"
          >Time to analysis by Users (In minutes):
          <span class="text-blue-blue"> N/A</span>
        </b>
      </div>
      <CKEditor name="Description" />
      <Input
        class="mt-3"
        id="video_link"
        name="Video Link (Optional)"
        placeholder="Please put here video link"
      />
    </div>
    <div class="basis-1/2">
      <div>
        <h class="text-medium font-semibold -ml-2 text-blue-blue"
          >Define Importance</h
        >
      </div>
      <Switch class="mt-2" name="Mark always as important" />
      <Switch :alternate="true" name="Mark as important if industry is:" />
      <VSelect
        class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
        multiple
        :options="industries"
        :reduce="(industry) => industry.id"
        label="name"
      />
      <Switch
        :alternate="true"
        name="Mark as if company size is:"
        class="my-4"
      />
      <Slider v-model="valueOfSlider" :max="500" :min="0" :step="1" />
    </div>
  </div>
  <div class="px-2 mb-2">
    <hr class="opacity-10" />
  </div>
  <DisplayOption />
</template>

<script>
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import FileUpload from "@/components/FileUpload.vue";
import CKEditor from "@/components/CKEditor.vue";
import Slider from "@vueform/slider";
import DisplayOption from "@/views/Threats/DisplayOption.vue";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  data() {
    return {
      valueOfSlider: [0, 500],
      categories: [
        { id: 1, category: "Category 1" },
        { id: 2, category: "Category 2" },
      ],
      industries: [
        { id: 1, name: "Industry 1" },
        { id: 2, name: "Industry 2" },
      ],
      assets: [
        { id: 1, name: "Asset 1" },
        { id: 2, name: "Asset 2" },
      ],
    };
  },
  components: {
    Button,
    Input,
    Switch,
    FileUpload,
    CKEditor,
    Slider,
    DisplayOption,
    VSelect,
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
<style>
.style-chooser .vs__dropdown-toggle {
  height: auto;
  min-height: 45px;
}
</style>
