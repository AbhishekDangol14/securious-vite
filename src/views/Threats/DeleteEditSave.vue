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
      <Button name="primary-button" title="Save" :faIcon="'fa fa-save'" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style></style>
