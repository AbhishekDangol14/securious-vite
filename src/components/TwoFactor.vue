<template>
    <div class="2fa grid grid-cols-2">
        <div class="left-content bg-secondary h-screen">
            <div class="logo grid grid-cols-3 mt-20 ml-20">
                <img class="h-4/5" src="@/assets/views/securious-logo.svg">
            </div>
            <div class="center-image pb-28 pl-28 pr-28 pt-20">
                <slot name="image"></slot>
            </div>
        </div>
        <div class="right-content-2fa bg-center grid grid-rows-4">
            <div class="verify-box row-start-2 row-span-2 bg-white ml-24 mr-24">
                <div class="verify-box-content ml-12 mr-12 mt-4 mb-4">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
        return {
            
        }
    },
})
</script>

<style>
    .otp-input {
        width: 50px;
        height: 50px;
        padding: 5px;
        margin: 10px !important;
        font-size: 28px !important;
        font-weight: 600 !important;
        border-radius: 4px;
        border: 1px solid #707070 !important;
        text-align: center;
        max-width: 66px !important;
    }
      
    .otp-input:focus-visible {
        box-shadow: 0 0 3px rgba(0,0,0,.5);
        outline: 0;
    }
    .right-content-2fa {
        background-image: url('~@/assets/views/background.svg');
    }
</style>

