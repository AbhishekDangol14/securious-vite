<template>
  <Layout Title="Company Assets & Solution Partners">
    <div class="m-10">
      <div>
        <div class="grid grid-cols-6 gap-4">
          <div>
            <Search type="text" name="Search" placeholder="Search..." />
          </div>
          <div>
            <span class="text-base text-grey-grey">Status</span>
            <VSelect
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="options"
              :reduce="(item) => item.id"
              label="name"
            />
          </div>
          <div>
            <span class="text-base text-grey-grey">Category</span>
            <VSelect
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="options"
              :reduce="(item) => item.id"
              label="name"
            />
          </div>
          <div></div>
          <div></div>
          <div class="col-span-1 m-auto">
            <Button
              path_name="createSolutionpartners"
              name="primary-button"
              title="Add new partner"
              :faIcon="'fa fa-plus'"
            />
            <!-- <AddButton path="solution-partners/create"
              >Add new partner</AddButton
            > -->
          </div>
        </div>
      </div>
      <div class="my-4">
        <div>
          <span class="mr-auto text-base"
            ><b class="text-grey-grey">Show:</b>&nbsp;<b class="text-blue-blue"
              >12</b
            >
            <b class="text-grey-grey">&nbsp;out of 82</b></span
          >
        </div>
      </div>
      <div>
        <div class="flex flex-row gap-4 flex-wrap">
          <div class="shadow-secondary rounded bg-white basis-1/3">
            <div class="flex pt-2 mt-8 mx-8">
              <div class="mr-10 bg-contain w-32 grow">
                <img
                  class="align-middle"
                  src="https://dev.securious.de/media/uploads/solutions_partners_products/HGdQnbAxGnGcRvJim8j1TTgUu5DmXHrc8tj63K3S.png"
                  alt=""
                />
              </div>
              <div class="text-base text-blue-blue font-bold mb-5">
                <div class="mb-1">
                  <b class="text-blue-blue font-semibold cursor-pointer">
                    EN
                  </b>
                  |
                  <b class="text-blue-blue font-semibold cursor-pointer">DE</b>
                </div>
                <div>
                  <Switch :alternate="true" class="my-2" />
                </div>
              </div>
            </div>
            <div class="mx-8 mb-10">
              <div class="flex-fill">
                <div class="text-medium text-blue-blue font-semibold mt-4">
                  Bitdefender
                </div>
                <div class="text-base mt-2">
                  <span class="text-grey-grey font-bold">Products: </span>
                </div>
                <div class="text-sm text-blue-blue">
                  <a><b>Antivirus - G DATA</b></a
                  ><span>,</span>
                </div>
              </div>
              <div class="flex mt-2 gap-4">
                <div class="flex flex-col relative">
                  <i class="fa fa-tag fa-rotate-90 absolute -top-3 left-1"></i>
                  <Tag name="tag-button" title="Solution Partner" />
                </div>
                <div class="flex flex-col relative">
                  <i class="fa fa-tag fa-rotate-90 absolute -top-3 left-1"></i>
                  <Tag name="tag-button" title="Solution Partner" />
                </div>
              </div>
              <div class="my-4">
                <Button
                  :faIcon="'fa fa-pencil'"
                  class="primary-button px-6"
                  title="Edit"
                  name="edit-button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid place-items-center my-10">
        <Button
          title="Show More"
          class="ternary-button"
          :faIcon="'fa fa-plus'"
        />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Main.vue";
import Button from "@/components/Button.vue";
import Switch from "@/components/Switch.vue";
import Tag from "@/components/Tag.vue";
import Search from "@/components/Search.vue";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default defineComponent({
  components: {
    Layout,
    Button,
    VSelect,
    Switch,
    Tag,
    Search,
  },
  setup() {
    var options = [
      { id: 1, name: "Example 1" },
      { id: 2, name: "Example 2" },
    ];
    return {
      options,
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
<style src="@vueform/slider/themes/default.css"></style>
