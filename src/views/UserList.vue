<template>
    <Layout Title="User View">
        <div class="user-list shadow-primary m-4">
            <table class="table-auto w-full">
                <thead class="bg-ternary">
                    <tr class="text-base font-semibold text-blue-blue">
                    <th class="p-4">Name</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>User Type</th>
                    <th>Status</th>
                    <th>Last Login</th>
                    <th>Registration</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody v-if="users">
                    <tr v-for="item in users" v-bind:key="item.id">
                        <td class="p-4"> 
                            {{ item.name ?? 'n/a' }}
                        </td>
                        <td>
                            {{ item.company ?? 'n/a'}}
                        </td>
                        <td>
                            {{ item.email }}
                        </td>
                        <td>
                            {{ item.role[0].role }}
                        </td>
                        <td>
                            {{ item.status ?? 'n/a' }}
                        </td>
                        <td>
                            {{ item.last_login ?? 'n/a' }}
                        </td>
                        <td>
                            {{ item.registration ?? 'n/a' }}
                        </td>
                        <td class="w-1">
                            <div class="button">
                                <Button name="tertiary-button" :icon="Img" title="View" @my-event="impersonate(item.id)" />
                                <Button name="tertiary-button" title="Change Password" @my-event="impersonate" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </div>
    </Layout>
    
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import Layout from '@/components/Main.vue'
import userService from '@/service/user.service'
import Button from '@/components/Button.vue'
import impersonateService from '@/service/impersonate.service'

export default defineComponent({
    components: {
        Layout,
        Button
    },
    setup() {
        const { users,getUsers } = userService()

        const { getUser } = impersonateService()

        function impersonate(id) {
            getUser(id)
        }

        onBeforeMount(() => {
            getUsers()
        })
        return {
            impersonate,
            Img: require('@/assets/icons/img.svg'),
            users
        }
    },
})
</script>
