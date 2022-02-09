<template>
  <Layout Title="Threat - Edit:">
    <div class="m-12">
      <div class="grid grid-cols-2">
        <div class="">
          <a href="#" class="text-blue-blue"
            ><i class="fa fa-angle-left"></i> Back to analysis</a
          >
        </div>
        <DeleteEditSave />
        <div class="col-end-9 text-grey-grey ml-1">
          <!-- language dropdown -->
        </div>
      </div>
      <div class="container my-10">
        <div class="pl-7 w-full bg-secondary-blue py-3">
          <span class="text-xxxl font-bold text-blue-blue">
            Recommendations
          </span>
        </div>
        <div class="px-8 bg-white py-4">
          <div
            class="border border-grey-grey border-opacity-20 py-6 px-4 -ml-3 mb-2 rounded"
          >
            <div
              class="border-l-2 border-blue-blue border-opacity-20 py-6 ml-1"
            >
              <span class="font-bold text-lg pl-5 text-blue-blue">
                Possible Recommendation
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2 space-x-8 py-10">
            <div
              class="basis-1/2 border-r-2 border-blue-blue border-opacity-20 pr-4"
            >
              <span class="text-base font-bold text-grey-grey">Title</span>
              <Input id="title" placeholder="New Title" />
              <Switch :alternate="true" class="mt-2" name="Is Automated" />
              <span class="text-base font-bold text-grey-grey">Title</span>
              <Input id="category" placeholder="Category" />
              <Input placeholder="Please put estimated time in minutes here." />
              <div class="mb-5">
                <b class="text-grey-grey text-base"
                  >Time to analysis by Users (In minutes):
                </b>
              </div>
              <Input
                class="mt-3"
                id="video_link"
                name="Video Link (Optional)"
                placeholder="Please put here video link"
              />
            </div>
            <div class="basis-1/2">
              <span class="text-base font-bold text-grey-grey"
                >Description</span
              >
              <CKEditor />
              <Switch
                :alternate="true"
                name="Mark as if company size is:"
                class="my-4"
              />
              <Slider v-model="valueOfSlider" :max="500" :min="0" :step="1" />
            </div>
          </div>
          <div>
            <SolutionProducts />
          </div>
        </div>
      </div>
      <div class="mt-8 mb-8">
        <DeleteEditSave />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Main.vue";
import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import CKEditor from "@/components/CKEditor.vue";
import Slider from "@vueform/slider";
import DeleteEditSave from "@/views/Threats/DeleteEditSave.vue";
import SolutionProducts from "@/views/Threats/Recommendation/SolutionProducts/Index.vue";

export default defineComponent({
  data() {
    return {
      valueOfSlider: [0, 500],
    };
  },
  components: {
    Input,
    Switch,
    CKEditor,
    Slider,
    Layout,
    DeleteEditSave,
    SolutionProducts,
  },
  setup() {
    return {};
  },
});
</script>
<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
.nav-link.active {
  color: #055ca8;
  font-weight: bold;
  border: 0;
  border-bottom: #055ca8 solid 2px;
  background-color: #fff;
}
</style>
