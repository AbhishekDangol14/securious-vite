<template>
  <Layout Title="CREATE NEWS">
    <div class="mt-12">
      <div class="grid grid-cols-2 mx-12">
        <div class="text-base my-auto">
          <router-link :to="{ name: 'news' }" href="#" class="text-blue-blue"
            ><i class="fa fa-angle-left"></i> Back to News Library</router-link
          >
        </div>
        <div class="flex justify-end mb-4">
          <div class="flex gap-2">
            <Button
              name="ternary-button"
              title="Delete"
              :faIcon="'fa fa-close'"
            />
            <Button :faIcon="'fa fa-save'" title="Save" @my-event="save" />
          </div>
        </div>
      </div>
      <div class="mx-6">
        <form class="news-create self-center align-middle">
          <div
            class="news-body border-2 border-grey-100 shadow-primary py-4 px-8 bg-white"
          >
            <div class="flex">
              <div class="w-2/3">
                <Input
                  type="text"
                  id="title"
                  name="Title"
                  placeholder="News Title"
                  v-model="news.friendlyTranslations[selectedLanguage].title"
                />
              </div>
              <div
                class="pl-8 flex gap-4 justify-center align-middle items-center"
              >
                <span>
                  <FileUpload @my-file="uploadFile" />
                </span>
                <div class="gap-2 flex flex-col">
                  <Button name="ternary-button" :icon="Img" title="Upload" />
                  <Button name="ternary-button" :icon="Img" title="Select" />
                </div>
              </div>
            </div>
            <Input
              type="text"
              id="excerpt"
              name="Excerpt"
              placeholder="Excerpt"
              v-model="news.friendlyTranslations[selectedLanguage].excerpt"
            />
            <Input
              type="text"
              id="category"
              name="Category"
              placeholder="Category"
              v-model="news.news_category_id"
            />
            <Switch name="Active" v-model="news.is_active" />
            <CKEditor
              name="Description"
              v-model="news.friendlyTranslations[selectedLanguage].description"
            />
          </div>
          <div class="flex gap-2 pt-4 justify-end">
            <Button name="ternary-button" :icon="Img" title="Delete" />
            <Button :icon="Img" title="Save" @my-event="save" />
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Switch from "@/components/Switch.vue";
import FileUpload from "@/components/FileUpload.vue";
import CKEditor from "@/components/CKEditor.vue";
import Layout from "@/components/Main.vue";
import { STORE_NEWS } from "@/store/modules/actions.type";
import router from "@/router";
import { news_module } from "@/store/modules/news.module";
// import NewsCard from '../components/NewsCard.vue';
export default defineComponent({
  components: {
    Button,
    Input,
    Switch,
    FileUpload,
    CKEditor,
    Layout,
    // NewsCard,
  },
  setup() {
    const store = useStore();

    const news = computed(() => store.state.news.state.news)

    const selectedLanguage = ref(localStorage.getItem('LANGUAGE'))
    
    function uploadFile(image) {
      news.value.image = image
    }
    
    function save() {
      store.dispatch(STORE_NEWS);
    }
    return {
      Img: require("@/assets/icons/img.svg"),
      news,
      save,
      selectedLanguage,
      uploadFile,
    };
  },
});
</script>
