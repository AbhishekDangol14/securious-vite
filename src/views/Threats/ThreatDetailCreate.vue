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
      <div class="mt-10">
        <b class="text-grey-grey font-bold text-base">Max Points:</b>
      </div>
      <Input
        class="mt-3"
        id="category"
        name="Category"
        placeholder="Category"
      />
      <Input
        name="Estimated time (in minutes)"
        placeholder="Please put estimated time in minutes here."
      />
      <div class="mb-5">
        <b class="text-grey-grey text-base"
          >Time to analysis by Users (In minutes):
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
      <Input placeholder="Multi select" />
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

export default {
  data() {
    return {
      valueOfSlider: [0, 500],
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
    VOtpInput,
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
