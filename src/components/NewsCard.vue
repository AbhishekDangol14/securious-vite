<template>
  <div class="flex items-center justify-center">
    <div
      class="news-card flex h-full flex-col p-4 justify-between shadow-primary rounded bg-white"
    >
      <div class="flex">
        <div class="border-2 border-dashed rounded border-blue-100">
          <img
          class="rounded"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
            alt="icon"
          />
        </div>
        <Switch />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-lg text-blue-blue font-semibold">News News</span>
        <span class="text-md font-semibold text-grey-grey">News News</span>
      </div>
      <div class="flex pt-4 gap-2 justify-center items-center">
        <Button
          name="ternary-button"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          title="Save"
        />
        <Button
          name="ternary-button"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          title="Save"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Switch from '../components/Switch.vue';
import Button from '../components/Button.vue';
export default defineComponent({
  props: {},
  components: {
    Switch,
    Button,
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped>
.news-card {
  width: 530px;
}
</style>
