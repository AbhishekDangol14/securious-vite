<template>
    <h1>{{ count }}</h1>
    <a :href="url">google</a>
    <h2>{{ name }}</h2>
    <h1>{{ counter }}</h1>
    <h1>{{ user }}</h1>
    <input type="text" @input="keypress('hello',$event)" />
    <button @click="inc">Button</button>
</template>

<script lang="ts">
    import { defineComponent,ref } from 'vue'
    import { useStore } from 'vuex'
    export default defineComponent({
        setup() {
            const store = useStore()

            const url = 'https://www.google.com'

            const count = store.state.count

            let counter = ref(0)

            let name = ref('abc')

            const user = store.state.a

            function inc()
            {
                counter.value++
            }

            function abc()
            {
                console.log('abc was called')
            }

            function keypress(msg,event): void{
                console.log(msg)
                name.value = event.target.value
            }

            return {
                count,
                url,
                name,
                keypress,
                counter,
                abc,
                inc,
                user
            }
        }
    })
</script>