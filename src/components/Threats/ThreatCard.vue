<template>
  <div class="shadow-secondary rounded bg-white">
    <div class="flex p-10 mt-8 mx-3 justify-center relative bg-secondary-blue">
      <div>
        <div class="bg-contain">
          <img
            class="align-middle w-44"
            src="@/assets/hacker.svg"
            alt=""
          />
        </div>
        <div class="absolute top-2 right-3">
          <div class="mb-1">
            <b @click="switchLang('EN')" class="text-blue-blue text-base font-bold cursor-pointer">EN</b>
            |
            <b @click="switchLang('DE')" class="text-blue-blue text-base font-bold cursor-pointer">DE</b
            >
          </div>
          <div class="-ml-1">
            <Switch v-model="item.is_display_active_always" />
          </div>
          <div>
            <div>
              <p class="text-base text-grey-grey">Points</p>
            </div>
            <div class="ml-1">
              <b class="text-blue-blue text-lg">60</b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-3 mb-10">
      <div class="flex-fill">
        <div class="text-med text-blue-blue font-semibold mt-2">
          <h>{{ item.friendlyTranslations[lang+'.title'].value }}</h
          >
        </div>
      </div>

      <div class="flex flex-row justify-center gap-4 my-10">
        <Button
          :faIcon="'fa fa-pencil'"
          class="primary-button px-6"
          title="Edit"
          name="edit-button"
          @click="edit(threat.id)"
        />
        <Button
          :faIcon="'fa fa-files-o'"
          class="ternary-button px-6"
          title="Duplicate"
          name="edit-button"
          @click="deleteThreat(threat.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRef, watch } from 'vue';
import Switch from '@/components/Switch.vue';
import Button from '@/components/Button.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { DELETE_THREAT, GET_THREATS } from '@/store/modules/actions.type';

export default defineComponent({
  props: {
    threat: {
      type: Object,
      required: true
    },
    language: {
      type: String,
      required: true
    }
  },
  components: {
    Switch,
    Button,
  },
  setup(props) {

    const store = useStore()

    const router = useRouter()

    const lang = ref(props.language)

    const item = toRef(props,'threat')

    function edit(id){
      router.push({ name: 'threatUpdate', params: {id: id} })
    }

    async function deleteThreat(id){
      await store.dispatch(DELETE_THREAT,id)
      store.dispatch(GET_THREATS)
    }

    function switchLang(value){
      lang.value = value
    }

    watch(() => props.language, (first, second) => {
      lang.value = first
    });
     
    return {
      edit,
      deleteThreat,
      switchLang,
      lang,
      item
    }
  },
});
</script>

