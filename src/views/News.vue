<template>
  <div>
    <div class="news-header flex h-20 bg-white">
      <h1 class="text-blue-blue pl-10 self-center">CREATE NEWS</h1>
    </div>
    <div class="flex justify-center pt-10">
      <form class="news-create self-center align-middle">
        <div class="news-create-nav pb-4">
          <div class="flex justify-between">
            <a class="text-blue-100 pl-8 self-center" href="#"
              >Back to news library</a
            >
            <div class="flex gap-2">
              <Button name="ternary-button" :icon="Img" title="Delete" />
              <Button :icon="Img" title="Save" />
            </div>
          </div>
        </div>
        <div class="news-body border-2 border-grey-100 shadow-primary p-6">
          <div class="flex">
            <div class="w-2/3">
              <Input id="title" name="Title" placeholder="News Title" />
            </div>
            <div
              class="pl-8 flex gap-4 justify-center align-middle items-center"
            >
              <span>
                <FileUpload />
              </span>
              <div class="gap-2 flex flex-col">
                <Button name="ternary-button" :icon="Img" title="Upload" />
                <Button name="ternary-button" :icon="Img" title="Select" />
              </div>
            </div>
          </div>
          <Input id="excerpt" name="Excerpt" placeholder="Excerpt" />
          <Input id="category" name="Category" placeholder="Category" />
          <Switch name="Active" />
          <CKEditor name="Description" />
        </div>
        <div class="flex gap-2 pt-4 justify-end">
          <Button name="ternary-button" :icon="Img" title="Delete" />
          <Button :icon="Img" title="Save" />
        </div>
      </form>
    </div>
  </div>

  <!-- <NewsCard /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';
import Switch from '../components/Switch.vue';
import FileUpload from '../components/FileUpload.vue';
import CKEditor from '../components/CKEditor.vue';
// import NewsCard from '../components/NewsCard.vue';

export default defineComponent({
  components: {
    Button,
    Input,
    Switch,
    FileUpload,
    CKEditor,
    // NewsCard,
  },
  setup() {
    return {
      Img: require('../assets/icons/img.svg'),
    };
  },
});
</script>

<style scoped>
.news-body {
  width: 85rem;
  min-height: 38.5rem;
}
</style>
