<template>
  <div
    class="border border-grey-grey border-opacity-20 rounded p-5 font-weight-bold h-full flex flex-col relative"
  >
    <a class="absolute -top-3 -right-2 cursor-pointer">
      <img src="@/assets/icons/close-box.svg" alt="" />
    </a>
    <div
      class="justify-center pb-3 border-b border-blue-blue border-opacity-30"
    >
      <a class="draggable-handler sortable-handle handle cursor-move">
        <img src="@/assets/icons/drag-handler-2.svg" class="mx-auto my-auto" />
      </a>
    </div>
    <div class="flex pt-2">
      <div
        class="border border-opacity-10 border-grey-grey rounded mr-10"
        style="overflow: hidden; height: 100px; width: 100px"
      >
        <img
          class="align-middle"
          src="https://dev.securious.de/media/uploads/solutions_partners_products/HGdQnbAxGnGcRvJim8j1TTgUu5DmXHrc8tj63K3S.png"
          alt=""
        />
      </div>
      <div class="flex-fill">
        <div class="text-md text-blue-blue font-bold mb-5">
          {{ item.name }}
        </div>
        <div class="text-sm">
          <span class="text-grey-grey font-bold">Company: </span>
          <span class="text-blue-blue font-bold">Bitdefender</span>
        </div>
      </div>
    </div>
    <div class="mt-20">
      <a href="#" target="__blank" class="btn font-light text-base"
        ><i class="fa fa-link mr-2"></i>
        Product page
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
