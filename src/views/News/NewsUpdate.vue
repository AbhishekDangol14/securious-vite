<template>
    <Layout Title="EDIT NEWS">
    <div v-if="news">
      <div class="flex justify-center pt-10">
        <form class="news-create self-center align-middle">
          <div class="news-create-nav pb-4">
            <div class="flex justify-between">
              <a class="text-blue-100 pl-8 self-center" href="#"
                >Back to news library</a
              >
              <div class="flex gap-2">
                <Button name="ternary-button" :icon="Img" title="Delete" />
                <Button :icon="Img" title="Save" @my-event="update" />
              </div>
            </div>
          </div>

          <div class="news-body border-2 border-grey-100 shadow-primary">
            <div class="flex">
              <div class="w-2/3">
                <Input type="text" id="title" name="Title" placeholder="News Title" v-model="news.friendlyTranslations.EN_title.value" />
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
            <Input type="text" id="excerpt" name="Excerpt" placeholder="Excerpt" v-model="news.friendlyTranslations.EN_excerpt.value" />
            <Input type="text" id="category" name="Category" placeholder="Category" v-model="news.news_category_id" />
            <Switch name="Active" v-model="news.is_active" />
            <CKEditor name="Description" v-model="news.friendlyTranslations.EN_description.value" />
          </div>


          <div class="flex gap-2 pt-4 justify-end">
            <Button name="ternary-button" :icon="Img" title="Delete" />
            <Button :icon="Img" title="Save" @my-event="update" />
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { EDIT_NEWS, UPDATE_NEWS } from '@/store/modules/actions.type'

import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import Switch from '@/components/Switch.vue';
import FileUpload from '@/components/FileUpload.vue';
import CKEditor from '@/components/CKEditor.vue';
import Layout from '@/components/Main.vue';
import router from '@/router';

export default defineComponent({
  components: {
    Button,
    Input,
    Switch,
    FileUpload,
    CKEditor,
    Layout
  },
  props: {
    id: String
  },
  setup(props) {
    const store = useStore()

    const user = localStorage.getItem('USER')

    const selectedLanguage = user ? JSON.parse(user).selected_language : 'EN'

    const news = ref(computed(() => store.state.news.state.item))  

    const item = ref(news.value)


    function update(){
      store.dispatch(UPDATE_NEWS, news.value)
      router.push({ name:'news' })
    }

    function uploadFile(image){
      news.value.image = image
    }

    onBeforeMount (async () => {
      await store.dispatch(EDIT_NEWS, props.id) 
    })


    return {
      Img: require('@/assets/icons/img.svg'),
      news,
      update,
      uploadFile,
      selectedLanguage,
      item
    }
  },
})
</script>
