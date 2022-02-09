<template>
  <div class="grid grid-cols-2 space-x-8 py-10">
    <div class="basis-1/2">
      <Input id="title" name="Question Title" placeholder="New Question" />
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
</template>

<script lang="ts">
// import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import CKEditor from "@/components/CKEditor.vue";
import Slider from "@vueform/slider";

export default {
  data() {
    return {
      valueOfSlider: [0, 500],
    };
  },
  components: {
    // Button,
    Input,
    Switch,
    CKEditor,
    Slider,
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>

<style scoped></style>
