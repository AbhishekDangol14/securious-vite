<template>
    <Layout Title="Data Leaks">
        <div class="mt-20 ml-8 mr-8">
            <Card>
                <template v-slot:title>
                    Stolen data
                </template>
                <template v-slot:content>
                    <label class="text-base text-grey-grey font-semibold">Überwachte E-mails:</label>
                    <div class="emails flex space-x-4 mt-2">
                        <div v-show="showInput" class="input-box">
                            <input class="rounded border border-grey-400 h-10 bg-ternary-blue p-3" type="text" id="email" v-model="email" name="email" />
                            <span>{{ errors.email }}</span>
                        </div>
                        <div class="add-button">
                            <button @click="addEmail"><i class="fas fa-plus pt-3"></i></button>
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
                    <div class="websites grid grid-cols-4 mt-12 mb-6 space-x-4 place-items-end">
                        <img src="@/assets/views/no-data-leak-detected.svg" class="col-start-2">
                        <div class="text-sm font-medium text-grey-grey cols-start-3 text-justify mb-16">
                            Wir haben noch kein Datenleck für Ihre E-Mail gefunden. Sobald wir ein Leck entdecken, informieren wir Sie. Gerne können Sie noch weitere E-Mails zur Analyse hinzufügen.
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </Layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useForm, useField } from 'vee-validate';
import Layout from '@/components/Main.vue'
import Card from '@/components/Card.vue'
import * as yup from 'yup'

export default defineComponent({
    components: {
        Layout,
        Card
    },
    setup() {
        const schema = yup.object({
            email: yup.string().required().email(),
        });

        const { errors } = useForm({
            validationSchema: schema,
        });

        const { value: email } = useField('email');

        const showInput = ref(false)

        function addEmail() {
            if (!showInput.value)
                showInput.value = true;
            else {
                alert('hello')
            }
        }

        return {
            email,
            errors,
            showInput,
            addEmail
        };
    },
})
</script>
