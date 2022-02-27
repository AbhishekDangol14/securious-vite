<template>
  <div class="container shadow-secondary">
    <div class="pl-7 w-full py-6">
      <span class="text-medium font-semibold text-blue-blue">
        Products {{ msg }}</span
      >
    </div>
    <div class="px-8 bg-white pt-4" v-if="products">
      <div class="my-5">
        <div v-for="(product, index) in products" v-bind:key="product">
          <Product
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
import { computed, defineComponent, onMounted } from "vue";
import Button from "@/components/Button.vue";
import Product from "@/views/SolutionPartners/Products/EditSolutionProduct.vue";
import { useStore } from "vuex";
import { ADD_EDIT_SOLUTION_PARTNER, ADD_PRODUCT_LIST, DELETE_PRODUCT_LIST } from "@/store/modules/mutations.type";

export default defineComponent({
  components: {
    Button,
    Product,
  },

  setup() {
    // let products = reactive([{ id: null, name: "First", asset_alert: [] }]);
    const store = useStore()
    
    function addProducts() {
      store.commit(ADD_EDIT_SOLUTION_PARTNER,{
        id: '',
        is_solution_partner: true,
        is_company_asset: true,
        product_link:"",
        asset:"",
        show_if_industry: true,
        show_if_company_size: true,
        is_active: true,
        company_size: [0,0],
        industries: [],
        asset_alert: [],
        friendlyTranslations: {
          "EN.title" : {
            value: 'Solution Products 147: please provide your product title here...',
          },
          "EN.description" : {
            value: ''
          },
          "DE.title" : {
            value: 'Solution Products 147: please provide your product title here...',
          },
          "DE.description" : {
            value: ''
          }
        }
      })
    }
    function removeProduct(index) {
      store.commit(DELETE_PRODUCT_LIST,index)
    }
    
    return {
      products: computed(() => store.state.solutionPartner.state.editSolutionPartner.solutionPartnersProducts),
      addProducts,
      removeProduct,
    };
  },
});
</script>
<style></style>
