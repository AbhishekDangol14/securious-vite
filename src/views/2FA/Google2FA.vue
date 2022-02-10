<template>
    <TwoFactor>
        <template v-slot:image>
            <img class="" src="@/assets/components/google2fa.svg">
        </template>
        <template v-slot:content>
            <div class="heading text-lg font-semibold text-blue-blue">
                Google -Authenticator
            </div>
            <div class="sub-heading text-md text-grey-grey mt-4 leading-5">
                Bitte geben Sie den 6-stelligen Code ein, den Sie bei Ihrer Google-Authenticator App sehen:
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
            <div class="bottom-text text-grey-grey text-base mt-16">
                Falls Sie keinen Zugriff mehr auf diese Codes haben, kontaktieren Sie uns unter <router-link class="text-blue-blue" to="/verify">@securious.de</router-link>
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
