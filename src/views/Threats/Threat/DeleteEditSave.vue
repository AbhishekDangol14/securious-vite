<template>
  <div class="grid grid-cols-4">
    <div class="col-end-6 text-grey-grey">
      <Button name="deletion-button" title="Delete" :faIcon="'fa fa-close'" />
    </div>
    <div class="col-end-7 text-blue-blue ml-1">
      <Button
        name="ternary-button"
        title="Save as draft"
        :faIcon="'fa fa-pencil'"
      />
    </div>
    <div class="col-end-8 text-grey-grey ml-1">
      <Button name="primary-button" title="Save" :faIcon="'fa fa-save'" @my-event="save" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import { useStore } from 'vuex'
import { STORE_THREAT,STORE_QUESTION } from '@/store/modules/actions.type'
import { useRoute } from 'vue-router'
import { string } from 'yup'

export default defineComponent({
  props: {
    name: {
      type: string,
      required: true
    }
  },
  components: {
    Button
  },
  setup(props){
    const route = useRoute()
    const store = useStore()

    function save() {
      store.dispatch(props.name)
    }
    return {
      save
    }
  }
})
</script>


<style></style>
