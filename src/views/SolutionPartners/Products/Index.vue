<template>
  <div class="container shadow-secondary">
    <div class="pl-7 w-full py-6">
      <span class="text-medium font-semibold text-blue-blue">
        Products {{ msg }}</span
      >
    </div>
    <div class="px-8 bg-white pt-4">
      <div class="my-5">
        <div v-for="(product, index) in products" :key="'produc_' + index">
          <Product
            :product="product"
            :index="index"
            :removeItem="removeProduct"
          />
        </div>
      </div>
      <div class="flex flex-row-reverse m-4 pb-8">
        <div class="text-right">
          <Button
            @click="addProducts()"
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
import { defineComponent, reactive } from "vue";
import Button from "@/components/Button.vue";
import Product from "@/views/SolutionPartners/Products/product.vue";

export default defineComponent({
  components: {
    Button,
    Product,
  },

  setup() {
    let products = reactive([{ id: null, name: "First", asset_alert: [{}] }]);
    function addProducts() {
      products.push({
        id: null,
        name: "",
        asset_alert: [{}],
      });
    }
    function removeProduct(ind) {
      products.splice(ind, 1);
    }
    return {
      products,
      addProducts,
      removeProduct,
    };
  },
});
</script>
<style></style>
