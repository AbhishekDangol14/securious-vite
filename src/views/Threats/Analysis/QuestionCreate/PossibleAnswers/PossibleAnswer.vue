<template>
  <div class="border border-grey-grey border-opacity-20 relative shadow-sm">
    <a
      @click="removePossibleAnswer(item)"
      class="absolute -top-3 -right-2 cursor-pointer"
    >
      <img src="@/assets/icons/close-box.svg" alt="" />
    </a>
    <div class="flex flex-row items-stretch mt-auto">
      <div class="mt-auto mb-auto table-cell p-2 ml-3">
        <a
          class="draggable-handler sortable-handle handle align-middle m-0 p-0"
        >
          <img src="@/assets/icons/drag-handler.svg" alt="" />
        </a>
      </div>
      <div class="grow">
        <div class="flex space-x-6">
          <div
            class="flex my-4 border-l-2 border-blue-blue border-opacity-40 py-6"
          >
            <div class="h-full">
              <div class="m-0">
                <div>
                  <div
                    class="pl-8 flex gap-4 justify-center align-middle items-center"
                  >
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
              </div>
            </div>
          </div>
          <div
            class="flex-auto w-64 border-r-2 my-4 border-l-2 border-blue-blue border-opacity-40"
          >
            <div class="mx-6 font-bold text-medium text-left">
              <span class="text-base font-bold text-grey-grey">Answer</span>
              <Input id="title" placeholder="Please Write the Answer" v-model="question.answers[index].friendlyTranslations[language].title" type="text" />
              <span class="text-base font-bold text-grey-grey">Associate answer with a company asset</span>
              <Input id="category" placeholder="Select" type="text" />
            </div>
          </div>
          <div class="w-20 mx-auto my-auto">
            <div>
              <div>
                <b class="text-blue-blue"> DE </b>
                |
                <b class="text-blue-blue">EN</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import FileUpload from "@/components/FileUpload.vue";
import Input from "@/components/Input.vue";
import { defineComponent } from "@vue/runtime-core";
import { computed } from "vue";
import { useStore } from "vuex";
// import Switch from "@/components/Switch.vue";

export default defineComponent({
  components: {
    Button,
    FileUpload,
    Input,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number
    },
    removePossibleAnswer: Function
  },
  setup(props){
    const store = useStore()

    const language = localStorage.getItem('LANGUAGE')

    function uploadFile(image) {
      console.log(image)
    }
    return {
      uploadFile,
      question: computed(() => store.state.question.state.question),
      language
    }
  }
});
</script>

<style></style>
