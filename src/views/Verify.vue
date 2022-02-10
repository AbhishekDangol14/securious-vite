<template>
    <div class="verify bg-secondary grid grid-cols-4">
        <div class="verify-box col-start-2 col-span-2 shadow-secondary bg-white pb-2">
            <div class="ml-12 mr-12">
                <div class="verify-content mt-4 ml-10 mr-10">
                    <div class="verify-logo grid grid-cols-4 mt-4">
                        <img class="col-start-2 col-span-2" src="@/assets/views/securious-logo.svg">
                    </div>
                    <div class="verify-title text-3xl font-bold text-blue-blue mt-8">
                        Überprüfen Sie Ihre E-Mails!
                    </div>
                    <div class="sub-title text-md text-grey-grey pt-8 pb-8">
                        Wir haben einen 6-stelligen Bestätigungscode an bipin@securious.de gesendet.
                    </div>
                    <div class="pincode flex justify-center">
                        <OtpInput
                        ref="otpInput"
                        input-classes="otp-input"
                        separator=" "
                        :num-inputs="6"
                        :should-auto-focus="true"
                        :is-input-num="true"
                        @on-complete="handleOnComplete"
                        />
                    </div>
                    <div class="body-text text-grey-grey">
                        <div class="verify-error invisible font-semibold text-sm text-red-300 pt-10">
                            Beim erneuten Senden der E-Mail ist ein Fehler aufgetreten.
                        </div>
                        <div class="question">
                            Keine E-Mail erhalten? <router-link class="text-blue-blue" to="/verify">E-Mail beantragen</router-link> 
                        </div>
                        <div class="description text-grey-grey pt-1">
                            Lassen Sie dieses Fenster geöffnet, während Sie nach dem Code suchen. Denken Sie daran, auch in Ihrem Spam-Ordner nachzuschauen. 
                        </div>
                    </div>
                </div>
            </div>
            <img class="h-fit" src="@/assets/plane.svg">
            <div class="footer-link flex justify-end space-x-6 font-medium text-blue-blue text-sm">
                <router-link to="/verify">Impressum</router-link>
                <router-link to="/verify">Datenschutzerklärung</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { VERIFY } from '@/store/modules/actions.type';
import { computed, defineComponent, ref } from 'vue'
import OtpInput from "vue3-otp-input/src/vue3-otp-input.vue";
import { useStore } from 'vuex';


export default defineComponent({
    components: {
        OtpInput
    },
    setup() {
        const store = useStore()
        function handleOnComplete(code) {
            store.dispatch(VERIFY,code)
        }
        return {
            handleOnComplete
        }
    },
})
</script>

<style>
    .otp-input {
        width: 60px;
        height: 60px;
        padding: 5px;
        margin: 10px !important;
        font-size: 28px !important;
        font-weight: 600 !important;
        border-radius: 4px;
        border: 1px solid #707070 !important;
        text-align: center;
    }
      
    .otp-input:focus-visible {
        box-shadow: 0 0 3px rgba(0,0,0,.5);
        outline: 0;
    }
</style>
