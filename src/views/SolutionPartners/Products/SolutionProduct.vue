<template>
  <div class="border relative border-grey-grey border-opacity-20 py-4 px-4 mb-2 rounded-sm my-5" v-if="product[index].friendlyTranslations" >
    <a
      @click="removeItem(index)"
      class="absolute -top-3 -right-2 cursor-pointer"
    >
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
            v-on:keyup.enter="toggleActiveProductTitle"
            v-model="product[index].friendlyTranslations[language].title"
            placeholder="Solution Products 147: please provide your product title here..."
          />
        </div>

        <h
          class="box-content text-medium font-semibold min-w-min"
          v-if="productActive === false"
        >
          {{ product[index].friendlyTranslations[language].title }}
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
        <Switch v-model="product[index].is_active" />
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
      <div class="grid grid-cols-3 mx-2 space-x-8 p-5 pb-10">
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
            <input type="checkbox" id="checkbox" v-model="product[index].is_solution_partner" />
            <label class="ml-2" for="checkbox">Is Solution Partner</label>
          </div>
          <div class="my-2">
            <input type="checkbox" id="checkbox" v-model="product[index].is_company_asset" />
            <label class="ml-2" for="checkbox">Is Company Asset</label>
          </div>

          <Input
            name="Product Link"
            type="text"
            placeholder="Please put link"
            v-model="product[index].product_link"
          />
          <span class="text-base font-semibold text-grey-grey"
            >Asset Mapping</span
          >

          <VSelect
            class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
            :options="options"
            :reduce="(item) => item.id"
            label="name"
            v-model="product[index].asset"
          />
        </div>
        <div class="col-span-2">
          <div class="ml-10">
            <CKEditor name="Description" v-model="product[index].friendlyTranslations[language].description" />
            <!-- <Switch class="mt-2" name="Mark always as important" /> -->

            <Switch
              :alternate="true"
              name="Show if company size is:"
              class="my-4"
              v-model="product[index].show_if_company_size"
            />
            <div class="my-8">
              <Slider v-model="product[index].company_size" :max="500" :min="0" :step="1" />
            </div>
            <Switch
              :alternate="true"
              name="Show if industry is:"
              class="my-4"
              v-model="product[index].show_if_industry"
            />
            <VSelect
              multiple
              class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
              :options="options"
              :reduce="(item) => item.id"
              label="name"
              v-model="product[index].industries"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          class="relative m-0 p-1 px-4"
          v-for="(asset, ind) in product[index].asset_alert"
          v-bind:key="asset"
        >
          <a
            @click="deleteAssetAlert(ind)"
            class="absolute -top-3 -right-2 cursor-pointer"
          >
            <img src="@/assets/icons/close-box.svg" alt="" />
          </a>
          <div class="flex gap-6">
            <div class="flex-auto">
              <span class="text-base font-semibold">Risk Level</span>
              <Input
                v-model="product[index].asset_alert[ind].risk_level"
                type="text"
                placeholder="Please write the risk level"
              />
            </div>
            <div class="flex-auto">
              <span class="text-base font-semibold">Date</span>
              <Datepicker v-model="product[index].asset_alert[ind].date" />
            </div>
            <div class="flex-auto">
              <span class="text-base font-semibold">Link</span>
              <Input
                v-model="product[index].asset_alert[ind].link"
                type="text"
                placeholder="Please write the asset link"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <a
          @click="addAssetAlert(index)"
          id="add-asset-alert"
          class="text-blue-blue text-base cursor-pointer"
        >
          Add Asset Alert&nbsp;+
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from "@/components/Switch.vue";
import FileUpload from "@/components/FileUpload.vue";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Slider from "@vueform/slider";
import CKEditor from "@/components/CKEditor.vue";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Datepicker from "@/components/Datepicker.vue";
import { defineComponent, onBeforeMount } from "@vue/runtime-core";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { ADD_ASSET_ALERT, DELETE_ASSET_ALERT } from "@/store/modules/mutations.type";
export default defineComponent({
  props: {
    index: {
      type: Number,
      required: true
    },
    removeItem: Function,
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
  setup(props) {
    const store = useStore()

    let productActive = ref(false)
    let showDetail = ref(false)
    const asset = ref([])
    const language = localStorage.getItem('LANGUAGE')
    
    function toggleActiveProductTitle() {
      productActive.value = true;
    }

    function setTitle() {
      productActive.value = false;
    }

    function toggleThisDetail() {
      showDetail.value = true;
    }

    function addAssetAlert(index) {
      let asset = {
        id:'',
        risk_level:'',
        date:'',
        link:''
      }
      store.commit({
        type: ADD_ASSET_ALERT,
        asset,
        index})
    }

    function deleteAssetAlert(index) {
      store.commit(DELETE_ASSET_ALERT,index)
    }

    return {
      product: computed(() => store.state.solutionPartner.state.solutionPartner.solution_partner_products),
      productActive,
      showDetail,
      asset,
      language,
      options: [
        { id: 1, name: "Asset 1" },
        { id: 2, name: "Asset2" },
      ],
      toggleActiveProductTitle,
      setTitle,
      toggleThisDetail,
      addAssetAlert,
      deleteAssetAlert
    }
  }  
});
</script>
<style>
.style-chooser .vs__dropdown-toggle {
  height: auto;
  min-height: 45px;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
