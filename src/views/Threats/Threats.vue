<template>
  <Layout Title="Threat Library">
    <div class="m-10">
      <div>
        <div class="grid grid-cols-6 gap-4">
          <div>
            <Input name="Search" placeholder="Search..." />
          </div>
          <div>
            <span class="text-base font-semibold text-grey-grey"
              >Industries</span
            >
            <VSelect
              multiple
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="industries"
              label="name"
            />
          </div>
          <div>
            <span class="text-base font-semibold text-grey-grey">Services</span>
            <VSelect
              multiple
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="services"
              label="name"
            />
          </div>
          <div>
            <span class="text-base text-grey-grey">Status</span>
            <VSelect
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="statuses"
            />
          </div>
          <div>
            <span class="text-base font-semibold text-grey-grey"
              >Company Size</span
            >
            <Slider
              :valueOfSlider="valueOfSlider"
              :max="500"
              :min="0"
              :step="1"
            />
          </div>
          <div>
            <span class="text-base text-grey-grey">Sort By</span>
            <VSelect
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="sorts"
            />
          </div>
        </div>
      </div>
      <div>
        <div class="my-10">
          <div class="flex gap-4">
            <span class="mr-auto text-base"
              ><b class="text-grey-grey">Show:</b>&nbsp;<b
                class="text-blue-blue"
                >12</b
              >
              <b class="text-grey-grey">&nbsp;out of 82</b></span
            >

            <Button
              name="ternary-button"
              title="Import/Export Data"
              :faIcon="'fa fa-plus'"
              >Add new threat</Button
            >
            <Button
              path_name="createThreats"
              name="primary-button"
              title="Add new threat"
              :faIcon="'fa fa-plus'"
              >Add new threat</Button
            >
            <LanguageSelector />
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-row gap-4 flex-wrap">
          <div class="shadow-secondary rounded bg-white w-4/12">
            <div
              class="flex p-10 mt-8 mx-3 justify-center relative bg-secondary-blue"
            >
              <div>
                <div class="bg-contain">
                  <img
                    class="align-middle w-44"
                    src="@/assets/hacker.svg"
                    alt=""
                  />
                </div>
                <div class="absolute top-2 right-3">
                  <div class="mb-1">
                    <b
                      class="text-blue-blue text-base font-bold cursor-pointer"
                    >
                      EN
                    </b>
                    |
                    <b class="text-blue-blue text-base font-bold cursor-pointer"
                      >DE</b
                    >
                  </div>
                  <div class="-ml-1">
                    <Switch />
                  </div>
                  <div>
                    <div>
                      <p class="text-base text-grey-grey">Points</p>
                    </div>
                    <div class="ml-1">
                      <b class="text-blue-blue text-lg">60</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-3 mb-10">
              <div class="flex-fill">
                <div class="text-med text-blue-blue font-semibold mt-2">
                  <h
                    >Eine unbefugte Person verschafft sich Zugang zu einem der
                    Unternehmensgeräte</h
                  >
                </div>
              </div>

              <div class="flex flex-row justify-center gap-4 my-10">
                <Button
                  :faIcon="'fa fa-pencil'"
                  class="primary-button px-6"
                  title="Edit"
                  name="edit-button"
                />
                <Button
                  :faIcon="'fa fa-files-o'"
                  class="ternary-button px-6"
                  title="Duplicate"
                  name="edit-button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Input from "@/components/Input.vue";
import { defineComponent } from "vue";
import Layout from "@/components/Main.vue";
import Button from "@/components/Button.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Slider from "@/components/Slider.vue";
import Switch from "@/components/Switch.vue";

export default defineComponent({
  components: {
    Layout,
    Input,
    Button,
    LanguageSelector,
    VSelect,
    Slider,
    Switch,
  },
  setup() {
    const industries = [
      { id: 1, name: "Industry 1" },
      { id: 2, name: "Industry 2" },
      { id: 3, name: "Industry 3" },
    ];
    const services = [
      { id: 1, name: "Service 1" },
      {
        id: 2,
        name: "Antivirus",
      },
    ];
    const statuses = ["All", "Published", "Drafted", "Deleted"];
    const sorts = ["Name", "Importance", "Recently Added"];
    const valueOfSlider = [20, 500];
    return {
      industries,
      services,
      statuses,
      valueOfSlider,
      sorts,
    };
  },
});
</script>
<style>
.style-chooser .vs__dropdown-toggle {
  height: auto;
  min-height: 45px;
}
</style>
