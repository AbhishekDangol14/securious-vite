<template>
  <div class="flex w-100 h-100 items-center justify-center">
    <div
      class="news-card flex flex-col p-4 justify-between shadow-primary rounded bg-white"
    >
      <div class="flex">
        <div class="border-2 border-dashed border-blue-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
            alt="icon"
          />
        </div>
        <Switch />
      </div>
      <div class="flex flex-col">
        <span>News News</span>
        <span>News News</span>
      </div>
      <div class="flex gap-2 justify-center items-center">
        <Button
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          title="Save"
        />
        <Button
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
  height: 450px;
}
</style>
