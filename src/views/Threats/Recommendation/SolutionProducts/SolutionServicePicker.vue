<template>
  <div
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
  >
    <div class="relative w-auto my-6 mx-auto max-w-6xl min-h-full h-full">
      <!--content-->
      <div
        class="border-0 shadow-lg py-10 px-8 relative flex flex-col w-full bg-modal outline-none mb-0 focus:outline-none"
      >
        <!--header-->
        <div>
          <div class="flex flex-row items-start pb-12">
            <div>
              <h class="text-medium font-semibold text-blue-blue">
                Please select solution service
              </h>
            </div>
            <div class="ml-auto relative">
              <div class="w-64">
                <div>
                  <Input placeholder="Search" />
                  <a
                    @click="closeModalBox"
                    class="absolute p-1 ml-auto bg-transparent border-0 -top-8 -right-10 text-black text-medium opacity-5 float-right leading-none font-semibold outline-none focus:outline-none cursor-pointer"
                  >
                    <span
                      class="bg-transparent text-black opacity-5 h-7 w-7 block outline-none focus:outline-none"
                    >
                      <i class="fa fa-close"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--body-->
        <div class="relative flex-auto">
          <div class="grid grid-cols-4 gap-4">
            <div
              v-for="(product, index) in products"
              :key="index"
              v-on:click="selectThisProduct(product)"
              class="shadow-ternary relative px-8 bg-white rounded cursor-pointer hover:shadow-secondary"
            >
              <div class="flex flex-col p-4" style="height: 100%">
                <i
                  v-if="isSelected(product)"
                  class="status-icon fa fa-circle-check absolute right-2 top-2 text-blue-blue"
                ></i>
                <div class="text-center relative m-auto w-full py-8">
                  <img
                    class="h-20 m-auto"
                    alt="Antivirus - G DATA"
                    src="https://dev.securious.de/media/uploads/solutions_partners_products/aTeyOdQMTyu3TuMjqAPln4wePToSvmZA8FGSDXeb.png"
                  />
                </div>
                <div class="my-4 text-center">
                  <h class="text-blue-blue text-medium font-semibold">{{
                    product.name
                  }}</h>
                  <p class="my-4">
                    Company: <b class="text-blue-blue text-base">G DATA</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script>
import Input from "@/components/Input.vue";

export default {
  data() {
    return {};
  },
  components: {
    Input,
  },
  props: {
    products: {
      type: Object,
      required: true,
    },
    closeModalBox: Function,
    selectThisProduct: Function,
    isSelected: Function,
  },
};
</script>
