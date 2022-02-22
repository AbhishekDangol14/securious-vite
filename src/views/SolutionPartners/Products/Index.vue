<template>
  <div class="container shadow-secondary">
    <div class="pl-7 w-full py-6">
      <span class="text-medium font-semibold text-blue-blue">
        Products {{ msg }}</span
      >
    </div>
    <div class="px-8 bg-white pt-4">
      <div class="my-5">
        <Product :products="products" />
      </div>
      <div class="flex flex-row-reverse m-4 pb-8">
        <div class="text-right">
          <Button
            class="primary-button"
            :faIcon="'fa fa-plus'"
            title="Add another product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
import Product from "@/views/SolutionPartners/Products/product.vue";

export default defineComponent({
  components: {
    Button,
    Product,
  },
  setup() {
    var products = [{ id: 1, name: "Product 1" }];
    return {
      products,
    };
  },
});
</script>
<style></style>
