<template>
  <Layout Title="Threat - Edit:">
    <div class="m-12">
      <div class="grid grid-cols-2">
        <div></div>
        <DeleteEditSave />
        <div class="col-end-9 text-grey-grey ml-1"></div>
      </div>
      <div class="container my-6 shadow-secondary">
        <div class="pl-7 w-full py-6">
          <span class="text-medium font-semibold text-blue-blue">
            Company
          </span>
        </div>
        <div class="px-4 bg-white py-8">
          <div class="flex flex-row gap-4">
            <div
              class="pl-2 flex gap-4 justify-center align-middle items-center"
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
            <div class="grow">
              <Input
                type="text"
                name="Company"
                placeholder="Please write name of the company"
              />
            </div>
            <div class="border-l border-black border-opacity-20 ml-1 w-3/6">
              <div class="pl-4">
                <CKEditor name="Description" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
      <div class="mt-8 mb-8">
        <DeleteEditSave />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Main.vue";
import DeleteEditSave from "@/views/Threats/DeleteEditSave.vue";
import Products from "@/views/SolutionPartners/Products/Index.vue";
import FileUpload from "@/components/FileUpload.vue";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import CKEditor from "@/components/CKEditor.vue";

export default defineComponent({
  components: {
    Layout,
    Products,
    FileUpload,
    Button,
    Input,
    DeleteEditSave,
    CKEditor,
  },
  setup() {
    return {};
  },
});
</script>
<style>
.ck-editor__editable {
  min-height: 50px;
}
</style>
