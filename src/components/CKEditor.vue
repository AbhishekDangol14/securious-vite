<template>
  <div class="text-editor">
    <span class="text-md font-bold text-grey-grey">{{ name }}</span>
    <ckeditor :editor="editor" v-model="value"> white </ckeditor>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";

export default defineComponent({
  props: {
    name: String,
    modelValue: String,
  },
  components: {
    ckeditor: CKEditor.component,
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    return {
      editor: ClassicEditor,
      value: computed({
        get() {
          return props.modelValue;
        },
        set(value) {
          context.emit("update:modelValue", value);
        },
      }),
    };
  },
});
</script>

<style>
.ck-editor__editable {
  min-height: 12rem;
  background-color: red;
}
.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
  background-color: #055ca80d;
}
</style>
