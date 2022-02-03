<template>
  <div class="flex" v-if="item">
    <div
      class="news-card flex h-full flex-col p-4 justify-between shadow-primary rounded bg-white"
    >
      <div class="flex">
        <div class="border-2 border-dashed rounded border-blue-100">
          <img
          class="rounded"
            :src="item.image"
            alt="icon"
          />
        </div>
        <Switch v-model="is_active" />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-lg text-blue-blue font-semibold">{{ item.friendlyTranslations[selectedLanguage+'.title'].value }}</span>
        <span class="text-md font-semibold text-grey-grey">{{ item.friendlyTranslations[selectedLanguage+'.excerpt'].value }}</span>
      </div>
      <div class="flex pt-4 gap-2 justify-center items-center">
        <Button
          name="ternary-button"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          title="Edit"
          @my-event="editNews"
        />
        <Button
          name="ternary-button"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          title="Delete"
          @my-event="deleteNews(item.id, index)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef } from 'vue';
import Switch from '../components/Switch.vue';
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { DELETE_NEWS } from '@/store/modules/actions.type';

export default defineComponent({
  props: {
    item: Object,
    selectedLanguage: String,
    index: Number
  },
  components: {
    Switch,
    Button,
  },
  setup(props) {
    
    const is_active = props.item ? (props.item.is_active ? true : false) : false

    const router = useRouter()

    const store = useStore()

    function editNews(){
      router.push({ name: 'newsUpdate', params: {id: props.item ? props.item.id : ''} })
    }

    function deleteNews(id, index){
        store.dispatch({
          type: DELETE_NEWS,
          id,
          index
        })
    }
     
    return {
      is_active,
      editNews,
      deleteNews
    }
  },
});
</script>

