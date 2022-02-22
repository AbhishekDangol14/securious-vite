<template>
    <Layout Title="Settings">
        <div>
            <div class="settings ml-8 ml-8 mt-2 shadow-primary">
                <div class="setting-title bg-secondary p-5 text-xl text-blue-blue font-semibold"> 
                    Zwei-Faktor-Authentisierung
                </div>
                <div class="setting-body p-5">
                    <div class="text-blue-blue text-md font-bold">
                        Schützen Sie Ihr securious-Konto noch effektiver
                    </div>
                    <div class="text-base text-grey-grey font-medium pt-6">
                        Nutzen Sie eines der unteren Möglichkeiten, um Ihr Konto mit einer Zwei-Faktor-Authentifizierung zu schützen:
                    </div>
                    <div class="two-factor pl-6 pt-8">
                        <div class="google-auth">
                            <div class="auth flex">
                                <div class="auth-title text-blue-blue text-base font-semibold">
                                    Google Authenticator (empfohlen)
                                </div>
                                <div class="toggle-google">
                                    <Switch @btn-click="googleAuth" />
                                </div>
                            </div>
                            <div class="auth-description text-base text-grey-grey font-medium w-1/2">
                                Diese App können Sie auf Ihrem Handy installieren. Beim Einloggen wird dann nach dem 6-stelliger Code gefragt, den Ihnen die App anzeigen wird.
                            </div>
                        </div>
                        <div class="email-auth pt-6 pb-6">
                            <div class="auth flex">
                                <div class="auth-title text-blue-blue text-base font-semibold">
                                    E-Mail
                                </div>
                                <div class="toggle-email">
                                   <Switch @btn-click="emailAuth" v-model="email2faSwitch" />
                                </div>
                            </div>
                            <div class="auth-description text-base text-grey-grey font-medium w-1/2">
                                Beim Einloggen erhalten Sie per E-Mail einen 6-stelligen Code, den Sie eingeben müssen.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showModal" class="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0" x-transition:enter="transition ease duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
            <!-- Modal -->
            <div v-if="data" class="bg-white rounded-xl shadow-2xl p-6 sm:w-10/12 mx-10" x-transition:enter="transition ease duration-100 transform" x-transition:enter-start="opacity-0 scale-90 translate-y-1" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:leave="transition ease duration-100 transform" x-transition:leave-start="opacity-100 scale-100 translate-y-0" x-transition:leave-end="opacity-0 scale-90 translate-y-1">
                <div v-html="data.QR_Image"></div>
                <div>{{ data.secret }}</div>
                <div class="text-right space-x-5 mt-5">
                    <button @click="showModal = !showModal" class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">Cancel</button>
                    <button @click="setCode" class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">Send</button>
                </div>
            </div>
        </div>
        <div v-show="sendModal" class="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0" x-transition:enter="transition ease duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
            <!-- Modal -->
            <div v-if="data" class="bg-white rounded-xl shadow-2xl p-6 sm:w-10/12 mx-10" x-transition:enter="transition ease duration-100 transform" x-transition:enter-start="opacity-0 scale-90 translate-y-1" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:leave="transition ease duration-100 transform" x-transition:leave-start="opacity-100 scale-100 translate-y-0" x-transition:leave-end="opacity-0 scale-90 translate-y-1">
                <Input id="verificationCode" name="verificationCode" v-model="googleVerificationCode.verification_code" />
                <div class="text-right space-x-5 mt-5">
                    <button @click="sendModal = !sendModal" class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">Cancel</button>
                    <button @click="sendCode" class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">Send2</button>
                </div>
            </div>
        </div>
        <div v-show="emailModal" class="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0" x-transition:enter="transition ease duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
            <!-- Modal -->
            <div v-if="data" class="bg-white rounded-xl shadow-2xl p-6 sm:w-10/12 mx-10" x-transition:enter="transition ease duration-100 transform" x-transition:enter-start="opacity-0 scale-90 translate-y-1" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:leave="transition ease duration-100 transform" x-transition:leave-start="opacity-100 scale-100 translate-y-0" x-transition:leave-end="opacity-0 scale-90 translate-y-1">
                <Input id="emailCode" name="emailCode" v-model="emailCode.emailVerification_code" />
                <div class="text-right space-x-5 mt-5">
                    <button @click="emailModal = !emailModal" class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">Cancel</button>
                    <button @click="sendEmailCode" class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">Send2</button>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import Layout from '@/components/Main.vue'
import Switch from '@/components/Switch.vue'
import Input from '@/components/Input.vue'
import { useStore } from 'vuex'
import { ENABLE_EMAIL_2FA, GET_GOOGLE_CODE, VERIFY_EMAIL_CODE, VERIFY_GOOGLE_CODE } from '@/store/modules/actions.type'

export default defineComponent({
    components: {
        Layout,
        Switch,
        Input
    },
    setup() {
        let showModal = ref(false)

        let sendModal = ref(false)

        let emailModal = ref(false)

        const user = localStorage.getItem('USER')

        const email2faSwitch = user ? (JSON.parse(user).email_2fa_enabled ? true : false) : false

        const google2faSwitch = user ? (JSON.parse(user).google_2fa_enabled ? true : false) : false

        const store = useStore()

        const googleVerificationCode = reactive({
            verification_code: ''
        })

        const emailCode = reactive({
            emailVerification_code: ''
        })

        function setCode() {
            showModal.value = false
            sendModal.value = true
        }

        async function sendCode() {
            await store.dispatch(VERIFY_GOOGLE_CODE, googleVerificationCode)
            sendModal.value = false
        }

        async function googleAuth(event){
            await store.dispatch(GET_GOOGLE_CODE)
            showModal.value = true
        }
        
        async function emailAuth() {
            await store.dispatch(ENABLE_EMAIL_2FA)
            emailModal.value = true
        }
        
        async function sendEmailCode() {
            await store.dispatch(VERIFY_EMAIL_CODE, emailCode)
            emailModal.value = false
        }

        return {
            data: computed(() => store.state.settings.state.code),
            googleAuth,
            emailAuth,
            setCode,
            sendCode,
            sendEmailCode,
            showModal,
            sendModal,
            emailModal,
            emailCode,
            googleVerificationCode,
            email2faSwitch

        }
    },
})
</script>
