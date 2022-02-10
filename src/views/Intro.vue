<template>
    <Layout Title="Kennenlernen ">
        <div class="intro">
            <Card>
                <template v-slot:title>
                    Zuerst möchten wir Sie besser kennenlernen. 
                </template>
                <template v-slot:content>
                    <div class="salutation flex">
                        <Input type="radio" id="Herr" name="Herr" />
                        <Input type="radio" id="Frau" name="Frau" />
                        <Input type="radio" id="Anders" name="Anders" /> 
                    </div>
                    <div class="grid grid-cols-4 space-x-6">
                        <div class="col-span-1">
                            <Input type="text" id="first_name" name="Vorname*" />
                        </div>
                        <div class="col-span-1">
                            <Input type="text" id="last_name" name="Nachname*" />
                        </div>
                        <div class="col-span-2">
                            <Input type="text" id="total_members" name="Wie viele Angestellte hat Ihr Unternehmen?*" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 space-x-6">
                        <Input type="text" name="Wie heißt Ihr Unternehmen?*" id="company_name" />
                        <Input type="text" name="Wo befindet sich Ihr Unternehmen?*" id="address" />
                    </div>
                    <div class="grid grid-cols-2 space-x-6">
                        <Input type="text" name="Welche Rechtsform hat Ihr Unternehmen?* " id="type" />
                        <Input type="text" name="Wie lautet die Website Ihres Unternehmens?" id="website" />
                    </div>
                    <div class="grid grid-cols-2 space-x-6">
                        <Input type="text" name="Welche Rolle haben Sie im Unternehmen?*" id="role" />
                    </div>
                    <div class="grid grid-cols-2 space-x-6">
                        <Input type="text" name="In welcher Branche ist Ihr Unternehmen tätig?*" id="industry" />
                    </div>
                </template>
            </Card>
        </div>
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue'
import Layout from '@/components/Main.vue'
import Input from '@/components/Input.vue'

export default defineComponent({
    components: {
        Card,
        Layout,
        Input
    },
    setup() {
        return {

        }
    },
})
</script>
