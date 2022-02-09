<template>
  <div class="flex flex-col gap-y-10 my-5">
    <div class="text-blue-blue ml-1">
      <h class="text-lg font-bold ml-2 text-blue-blue cursor-pointer">
        Possible Solution Products
      </h>
    </div>
    <div class="grid grid-cols-4 grid-flow-col gap-4">
      <SolutionProduct />
      <SolutionProduct />
    </div>
    <div class="text-blue-blue mr-0 flex justify-end">
      <Button
        name="ternary-button"
        title="Select existing service"
        :faIcon="'fa fa-check'"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import SolutionProduct from "@/views/Threats/Recommendation/SolutionProducts/SolutionProduct.vue";
export default {
  components: {
    Button,
    SolutionProduct,
  },
};
</script>

<style></style>
