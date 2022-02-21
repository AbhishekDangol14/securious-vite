<template>
    <Layout Title="Data Leaks">
            <Card>
                <template v-slot:title>
                    Stolen data
                </template>
                <template v-slot:content>
                    <label class="text-base text-grey-grey font-semibold">Überwachte E-mails:</label>
                    <div class="emails flex space-x-2 mt-2">
                        <div class="email-list flex justify-items-center space-x-2 mt-1" v-if="emails">
                            <div class="flex text-sm space-x-1" v-for="email in emails" v-bind:key="email">
                                <div class="text-blue-700" >{{ email.email }}</div> 
                                <div class="cursor-pointer" @click="del(email.id)"><i class="fa-regular fa-trash-can"></i></div>
                            </div>
                        </div>
                        <div v-show="showInput" class="input-box flex space-x-1">
                            <input class="rounded border border-grey-400 h-8 bg-ternary-blue p-3" type="text" id="email" v-model="email" name="email" />
                            <span class="text-base">{{ errors.email }}</span>
                        </div>
                        <div class="add-button mt-1">
                            <button @click="add(email)"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div class="description text-sm text-grey-grey text-justify leading-6 mt-8 mb-6">
                        Es kommt vor, dass Drittanbieter, bei denen Sie ein Geschäftskonto erstellt haben, erfolgreich angegriffen werden und dessen Kundeninformationen durch böswillige Akteure veröffentlicht werden. In der oberen Ansicht können Sie sehen, ob und welche Ihrer Geschäfts-E-Mails in einem solchen Datenklau involviert waren und welche Informationen gestohlen wurden. Potenzielle Angreifer haben jetzt Zugang zu diesen Informationen. Außerdem können Angreifer diese Informationen auch bei anderen Drittanbietern verwenden, wenn Sie dieselben Informationen, zum Beispiel das gleiche Password, verwenden.
                    </div>
                    <div class="list">
                        <label class="text-sm font-bold text-grey-grey">Es wird daher empfohlen:</label>
                        <ul class="list-disc text-sm text-grey-grey ml-8 leading-6">
                            <li>Die oben genannten Informationen als öffentlich zugänglich zu betrachten.</li>
                            <li>Änderbare Daten, wie Passwörter umgehen zu ändern.</li>
                            <li>Passwörter, die Sie gestohlen wurden und auch bei anderen Anbietern eingesetzt werden schnellstmöglich zu ändern.</li>
                        </ul>
                    </div>
                    <div class="source-link text-sm text-grey-grey mt-3">
                        Quelle der Informationen: <a href="https://haveibeenpwned.com/" class="text-blue-blue" target="_blank">haveibeenpwned.com</a>
                    </div>
                    <hr class="mt-6 mb-4 border-grey-300">
                    <div v-if="isBreached">
                        <div v-for="email in emails" v-bind:key="email">
                           <div v-for="breach in email.breaches" v-bind:key="breach" class="mb-4">
                                <div class="breach-email flex space-x-2">
                                    <img class="h-2 mt-2" src="@/assets/components/mail-icon.png"/> 
                                    <div class="text-base text-blue-blue">{{ email.email }}</div>
                                </div>
                                <div class="breach-website flex space-x-2">
                                    <img class="h-8" :src="breach.logo" />
                                    <div class="text-base text-blue-blue font-semibold">{{ breach.name }}</div>
                                </div>
                                <div class="breach-date flex space-x-2 text-sm font-semibold">
                                    <div class="date-title text-grey-grey">Datum:</div>
                                    <div class="date text-blue-blue">{{ breach.date }}</div>
                                </div>
                                <div class="title text-grey-grey text-sm font-semibold">Gestohlene Daten:</div>
                                <div class="flex text-sm text-grey-grey">{{ getClasses(breach.classes) }}</div>
                                <hr class="mt-6 mb-4 border-grey-300">
                           </div>
                        </div>
                    </div>
                    <div v-else class="websites grid grid-cols-4 mt-12 mb-6 space-x-4 place-items-end">
                        <img src="@/assets/views/no-data-leak-detected.svg" class="col-start-2">
                        <div class="text-sm font-medium text-grey-grey cols-start-3 text-justify mb-16">
                            Wir haben noch kein Datenleck für Ihre E-Mail gefunden. Sobald wir ein Leck entdecken, informieren wir Sie. Gerne können Sie noch weitere E-Mails zur Analyse hinzufügen.
                        </div>
                    </div>
                </template>
            </Card>

    </Layout>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'
import { useForm, useField } from 'vee-validate';
import Layout from '@/components/Main.vue'
import Card from '@/components/Card.vue'
import * as yup from 'yup'
import dataleakService from '@/service/dataleak.service.js'

export default defineComponent({
    components: {
        Layout,
        Card
    },
    setup() {
        const { emails,isBreached,getEmails,addEmail,deleteEmail } = dataleakService()

        const schema = yup.object({
            email: yup.string().required().email(),
        });

        const { errors } = useForm({
            validationSchema: schema,
        });

        const { value: email } = useField('email');

        const showInput = ref(false)

        async function add(email) {
            if (!showInput.value)
                showInput.value = true;
            else {
                addEmail(email)
                await getEmails()
            }
        }

        async function del(id){
            deleteEmail(id)
            await getEmails()
        }

        function getClasses(arr) {
            let classes = [] as any;

            arr.map(function(value) { 
                classes.push(value['name']);
            });

            return classes.join(', ');
        }

        onBeforeMount(async () => {
            await getEmails()
        })

        return {
            email,
            errors,
            showInput,
            emails,
            isBreached,
            add,
            getClasses,
            del
        };
    },
})
</script>
