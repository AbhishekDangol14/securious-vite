<template>
    <Layout Title="Kunden">
        <div class="Customer bg-white m-10 shadow-primary">
            <div class="heading p-4">
                <span class="text-xl text-blue-blue font-bold">
                    Eingeladene Kunden
                </span>
            </div>
            <table class="table data-table">
                <thead>
                    <tr class="bg-ternary-blue text-blue-blue text-center uppercase">
                        <th>
                            Geschlecht
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Letzter Login
                        </th>
                        <th>
                            Punkte
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td>
                            Herr
                        </td>
                        <td>
                            Bipin Dhimal
                        </td>
                        <td>
                            bipin@securious.de
                        </td>
                        <td>
                            02.02.2022 06:00:29
                        </td>
                        <td>
                             0/0
                        </td>
                        <td>
                            <Button name="tertiary-button" title="View" />
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td>
                            Herr
                        </td>
                        <td>
                            Bipin Dhimal
                        </td>
                        <td>
                            bipin@securious.de
                        </td>
                        <td>
                            02.02.2022 06:00:29
                        </td>
                        <td>
                             0/0
                        </td>
                        <td>
                            <Button name="tertiary-button" title="View" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="Invite Customer ml-10 mr-10 mt-5 shadow-primary">
            <div class="invite-title bg-ternary-blue p-4">
                <span class="text-lg text-blue-blue font-bold">
                    Invite Customer
                </span>
            </div>
            <div class="invite-body bg-white">
                <div class="salutaion flex p-8 space-x-3">
                    <Input id="Mr" type="radio" /> 
                    <div>Herr</div>
                    <input class="mt-1" id="Mr" type="radio" /> 
                    <div>Frau</div>
                </div>
                <div class="invite-form flex space-x-24 p-8">
                    <Input id="first_name" name="Vorname" type="text" />
                    <Input id="first_name" name="Nachname" type="text" />
                    <Input id="first_name" name="E-Mail" type="text" />
                    <div class="pt-4"><Button name="primary-button" title="Einladen" /></div>
                </div>
                <div class="share-link w-fit p-8">
                    <Input id="link" name="Alternativ können Sie Ihren Kunden folgenden Link zuschicken:" type="text" placeholder="http://127.0.0.1:8001/register?ref=eyJpdiI6IjJhc2c3T3BoMlZkU1hOM1Mza2tNQ2c9PSIsInZhbHVlIjoiUFlpaFh4TXkyMFBscTNyMjIwVXV6UT09IiwibWFjIjoiNjY5NjFiOTllMGFmMzJjOTljNTkyNWQxODcyNWMxNjYwMDczMDgzYmFkZWU4YjZjNjk0NDYxYWNjNDhkMDVmZSJ9" />
                </div>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/components/Main.vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'

export default defineComponent({
    components:{
        Layout,
        Button,
        Input
    },
    setup() {
        return {

        }
    },
})
</script>

