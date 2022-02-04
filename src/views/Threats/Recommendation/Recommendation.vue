<template>
  <div>
    <div class="flex">
      <div class="align-middle p-0 my-auto">
        <a
          class="draggable-handler sortable-handle handle align-middle m-0 p-0"
        >
          <img src="@/assets/icons/drag-handler.svg" alt="" />
        </a>
      </div>
      <div class="ml-5">
        <h class="text-lg font-semibold">Can be edited directly {{ title }}</h>
      </div>
      <div class="ml-auto">
        <Button name="Edit" />
      </div>
    </div>
    <div class="flex">
      <div class="px-4">
        <Switch name="" />
      </div>
      <div class="px-4">
        <p>Points</p>
      </div>
      <div class="px-4">
        <p>Display Options:</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Switch from "@/components/Switch.vue";

export default {
  components: {
    Button,
    Switch,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
