<template>
  <div class="input-box bg-white h-fit shadow-lg rounded">
    <div class="form px-6 mx-2">
      <div class="input-title">
        <div class="text-base font-semibold pt-3 text-grey-grey">Title</div>
        <div class="input-field pt-2 flex space-x-5">
          <Input
            type="text"
            placeholder="Enter Industry"
            id="industry"
            v-model="title"
          />
          <Switch v-model="is_active" />
        </div>
      </div>
      <div class="input-details">
        <div class="text-base font-semibold text-grey-grey">Details Level</div>
        <VSelect
          v-model="details"
          class="style-chooser text-base text-black focus:bg-white bg-secondary-blue border-blue-100 leading-tight"
          :options="['Low', 'Mid', 'High']"
        />
      </div>
      <div class="buttons grid space-y-1 pt-4 pb-4 justify-items-center mx-3">
        <button
          @click="deleteIndustry()"
          class="border rounded-lg p-2 w-1/2"
        >
          Delete&nbsp;&nbsp;<i class="fa fa-trash ml-1"></i>
        </button>
        <button
          @click="saveIndustry()"
          class="text-white-white py-3 border rounded-lg bg-primary p-2 w-4/6 y text-base"
        >
          Save&nbsp;&nbsp;<i class="fa fa-save ml-1"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, reactive, ref } from "vue";
import { useStore } from "vuex";
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { STORE_INDUSTRY, NEW_INDUSTRY, DELETE_INDUSTRY } from "@/store/modules/actions.type";
import Switch from "@/components/Switch.vue";
import Input from "@/components/Input.vue";
export default defineComponent({
  components: {
    Switch,
    Input,
    VSelect,
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
  },
  setup(props) {
    const store = useStore();
    
    const data = toRef(props, 'item')
    
    const user = localStorage.getItem("USER");
    
    let selectedLanguage = user ? JSON.parse(user).selected_language : "EN";
    
    let title = ref("");
    
    if (data.value) {
      title.value = data.value.id
        ? data.value.friendlyTranslations[selectedLanguage + ".title"].value
        : "";
    }
    const is_active = ref(
      data.value ? (data.value.is_active ? true : false) : false
    );
    
    const details = ref(data.value ? data.value.details_level : "");
    
    function saveIndustry() {
      if (data.value) {
        data.value.id
          ? (data.value.friendlyTranslations[selectedLanguage + ".title"].value =
              title.value)
          : (data.value.friendlyTranslations[selectedLanguage].title =
              title.value);
        data.value.details_level = details.value;
        data.value.is_active = is_active.value;
      }
      store.dispatch(STORE_INDUSTRY, data.value);
    }
    
    function deleteIndustry() {
      const id = data.value.id
      const index = props.index
      store.dispatch(DELETE_INDUSTRY,{ id,index })
    }
    return {
      saveIndustry,
      deleteIndustry,
      title,
      data,
      details,
      is_active,
      selectedLanguage,
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
