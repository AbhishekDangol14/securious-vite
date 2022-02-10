<template>
    <TwoFactor>
        <template v-slot:image>
            <img class="" src="@/assets/components/email2fa.svg">
        </template>
        <template v-slot:content>
            <div class="heading text-lg font-semibold">
                Überprüfen Sie Ihre E-Mails!
            </div>
            <div class="sub-heading text-base text-grey-grey mt-4 leading-5">
                Wir haben einen 6-stelligen Bestätigungscode an bipin@securoius.de gesendet. Tragen Sie diesen bitte hier ein:
            </div>
            <div class="pincode mt-10 mb-10">
                <Code
                ref="otpInput"
                input-classes="otp-input"
                separator=" "
                :num-inputs="6"
                :should-auto-focus="true"
                :is-input-num="true"
                @on-complete="handleOnComplete"
                />
            </div>
            <div class="bottom-text text-grey-grey text-base">
                Lassen Sie dieses Fenster geöffnet, während Sie nach dem Code suchen. Denken Sie daran, auch in Ihrem Spam-Ordner nachzuschauen.
            </div>
            <div class="footer-text text-base text-center text-grey-grey mt-8">
                Keine E-Mail erhalten?<router-link class="text-blue-blue" to="/verify">klicken Sie hier, um eine weitere anzufordern</router-link>
            </div>
        </template>
    </TwoFactor>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TwoFactor from '@/components/TwoFactor.vue'
import Code from 'vue3-otp-input/src/vue3-otp-input.vue'

export default defineComponent({
    components: {
        TwoFactor,
        Code
    },
    setup() {
        function handleOnComplete(value) {
            alert(value)
        }
        return {
            handleOnComplete
        }
    },
})
</script>
