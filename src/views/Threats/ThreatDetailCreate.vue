<template>
  <div class="grid grid-cols-2 mx-5 space-x-8 p-5">
    <div class="basis-1/2">
      <div class="flex">
        <div class="w-2/3">
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
            <Button name="ternary-button" :icon="Img" title="Upload" />
            <Button name="ternary-button" :icon="Img" title="Select" />
          </div>
        </div>
      </div>
      <div>
        <b class="text-grey-grey">Max Points:</b>
      </div>
      <Input id="category" name="Category" placeholder="Category" />
      <Input
        name="Estimated time (in minutes)"
        placeholder="Please put estimated time in minutes here."
      />
      <div>
        <b class="text-grey-grey">Time to analysis by Users (In minutes): </b>
      </div>
      <CKEditor name="Description" />
      <Input
        id="video_link"
        name="Video Link (Optional)"
        placeholder="Please put here video link"
      />
      <Switch name="Active" />
      <Switch name="Show if industry is:" />
      <Input placeholder="Multi select" />
    </div>
    <div class="basis-1/2 grow">
      <div>
        <h class="text-lg font-semibold -ml-2">Define Importance</h>
      </div>
      <Switch name="Mark always as important" />
      <Switch name="Mark as important if industry is:" />
      <Input placeholder="Multi select" />
      <Switch name="Mark as if company size is:" class="my-4" />
      <Slider v-model="valueOfSlider" :max="500" :min="0" :step="1" />
    </div>
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
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
