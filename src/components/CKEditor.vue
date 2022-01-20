<template>
  <div class="text-editor">
    <span class="text-md font-bold text-grey-grey">{{ name }}</span>
    <ckeditor :editor="editor"> white </ckeditor>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';

export default defineComponent({
  props: {
    name: String,
  },
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      editor: ClassicEditor,
    };
  },
});
</script>

<style>
.ck-editor__editable {
  min-height: 12rem;
  background-color: red;
}
</style>
