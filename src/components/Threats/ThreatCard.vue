<template>
    <div v-if="threat" class="news-card h-full p-4 justify-between shadow-primary rounded bg-white">
      <div class="relative bg-secondary">
        <img
          class="p-8"
          src="@/assets/threats.png"
          alt="icon"
        />
        <div class="absolute top-0 right-0"><Switch v-model="threat.is_display_active_always" /></div> 
      </div>
      <div class="mt-2">
        <span class="text-md text-justify leading-4 text-blue-blue font-semibold">{{ threat.friendlyTranslations[language+'.title'].value }}</span>
      </div>
      <div class="flex pt-4 gap-2 justify-center items-center">
        <Button
          name="ternary-button"
          :faIcon="'fa fa-pencil'"
          title="Edit"
          @my-event="editNews(threat.id)"
        />
        <Button
          name="ternary-button"
          :faIcon="'fa fa-trash'"
          title="Delete"
          @my-event="deleteNews(threat.id)"
        />
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from 'vue';
import Switch from '@/components/Switch.vue';
import Button from '@/components/Button.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { DELETE_THREAT, GET_THREATS } from '@/store/modules/actions.type';

export default defineComponent({
  props: {
    item: Object
  },
  components: {
    Switch,
    Button,
  },
  setup(props) {

    let language = ref()

    const store = useStore()

    const router = useRouter()

    const threat = toRef(props,'item')

    if(localStorage.getItem('LANGUAGE'))
      language.value = localStorage.getItem('LANGUAGE')

    function editNews(id){
      router.push({ name: 'threatUpdate', params: {id: id} })
    }

    async function deleteNews(id){
      await store.dispatch(DELETE_THREAT,id)
      store.dispatch(GET_THREATS)
    }
     
    return {
      editNews,
      deleteNews,
      language,
      threat
    }
  },
});
</script>

