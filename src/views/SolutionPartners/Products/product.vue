<template>
  <div
    v-for="(item, index) in products"
    :key="'product' + index"
    class="border relative border-grey-grey border-opacity-20 py-4 px-4 mb-2 rounded-sm my-5"
  >
    <a class="absolute -top-3 -right-2 cursor-pointer">
      <img src="@/assets/icons/close-box.svg" alt="" />
    </a>
    <div class="flex">
      <div class="flex justify-start grow">
        <div class="box-border block min-w-min m-0 p-1">
          <input
            class="text-medium font-semibold outline-none"
            ref="edit_question_label"
            type="text"
            v-if="productActive"
            v-model="productTitle"
            v-on:keyup.enter="toggleActiveProductTitle"
          />
        </div>

        <h
          class="box-content text-medium font-semibold text-blue-blue min-w-min"
          v-if="productActive === false"
        >
          {{ productTitle }}
        </h>
        <a
          v-if="!productActive"
          @click="toggleActiveProductTitle"
          class="w-5 ml-2"
        >
          <i class="cursor-pointer fa fa-pencil"></i>
        </a>

        <a v-if="productActive" @click="setTitle" class="w-5 ml-2">
          <i class="cursor-pointer fa fa-folder"></i>
        </a>
      </div>
      <div class="flex flex-row gap-4 pr-5">
        <Switch />
        <div>
          <div class="mb-1">
            <b class="text-blue-blue font-light cursor-pointer"> EN </b>
            |
            <b class="text-blue-blue font-light cursor-pointer">DE</b>
          </div>
        </div>
        <div class="mt-2">
          <a @click="toggleThisDetail()" class="cursor-pointer">
            <img class="w-3" src="@/assets/icons/arrow-down.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div v-if="showDetail">
      <div class="grid grid-cols-3 mx-2 space-x-8 p-5">
        <div>
          <div class="flex">
            <div
              class="flex gap-4 justify-center align-middle items-center flex-wrap"
            >
              <span class="flex-fill">
                <FileUpload @my-file="uploadFile" />
              </span>

              <div>
                <div class="gap-2 flex flex-row">
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
                <div class="mt-1 flex-fill">
                  <Button
                    name="terniary-button"
                    :faIcon="'fa fa-building'"
                    title="Use Company Image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <input type="checkbox" id="checkbox" />
            <label class="ml-2" for="checkbox">Is Solution Partner</label>
          </div>
          <div class="my-2">
            <input type="checkbox" id="checkbox" />
            <label class="ml-2" for="checkbox">Is Company Asset</label>
          </div>

          <Input
            name="Product Link"
            type="text"
            placeholder="Please put estimated time in minutes here."
          />
          <span class="text-base font-semibold text-grey-grey"
            >Asset Mapping</span
          >

          <VSelect
            class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
            :options="options"
            :reduce="(item) => item.id"
            label="name"
          />
        </div>
        <div class="col-span-2">
          <div class="ml-10">
            <CKEditor name="Description" />
            <!-- <Switch class="mt-2" name="Mark always as important" /> -->

            <Switch
              :alternate="true"
              name="Show if company size is:"
              class="my-4"
            />
            <div class="my-8">
              <Slider v-model="valueOfSlider" :max="500" :min="0" :step="1" />
            </div>
            <Switch
              :alternate="true"
              name="Show if industry is:"
              class="my-4"
            />
            <VSelect
              multiple
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="options"
              :reduce="(item) => item.id"
              label="name"
            />
          </div>
        </div>
      </div>
      <div class="pt-8">
        <div class="relative m-0 p-1 px-4">
          <a class="absolute -top-3 -right-2 cursor-pointer">
            <img src="@/assets/icons/close-box.svg" alt="" />
          </a>
          <div class="flex gap-6">
            <div class="flex-auto">
              <span class="text-base font-semibold">Risk Level</span>
              <Input type="text" placeholder="Please write the risk level" />
            </div>
            <div class="flex-auto">
              <span class="text-base font-semibold">Date</span>
              <Datepicker />
            </div>
            <div class="flex-auto">
              <span class="text-base font-semibold">Link</span>
              <Input type="text" placeholder="Please write the asset link" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <a id="add-asset-alert" class="text-blue-blue text-base cursor-pointer">
          Add Asset Alert&nbsp;+
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "@/components/Switch.vue";
import FileUpload from "@/components/FileUpload.vue";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Slider from "@vueform/slider";
import CKEditor from "@/components/CKEditor.vue";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Datepicker from "@/components/Datepicker.vue";
export default {
  props: {
    products: Object,
  },
  data() {
    return {
      productActive: false,
      productTitle: "hello",
      showDetail: false,
      options: [
        { id: 1, name: "Asset 1" },
        { id: 2, name: "Asset2" },
      ],
      valueOfSlider: [20, 500],
    };
  },
  components: {
    Switch,
    Button,
    FileUpload,
    CKEditor,
    Input,
    VSelect,
    Slider,
    Datepicker,
  },

  methods: {
    toggleActiveProductTitle() {
      this.productActive = true;
    },
    setTitle() {
      this.productActive = false;
    },
    toggleThisDetail() {
      this.showDetail = !this.showDetail;
    },
  },
};
</script>
<style>
.style-chooser .vs__dropdown-toggle {
  height: auto;
  min-height: 45px;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
