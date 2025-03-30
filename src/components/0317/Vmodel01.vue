<template>
    <main class="info-container">
        <div>
            <input type="text" v-model="username">
            <p>Name:{{username}}</p>

            <div>
                <input class="num" type="text" v-model.number="n1">+ 
                <input class="num" type="text" v-model.number="n2">= 
                {{n1+n2}}
            </div>
        </div>
        </main>
</template>

<script setup>
    import {ref} from 'vue'
    const username = ref('ChenYuHao')
    const n1 = ref()
    const n2 = ref()
</script>

<style scoped>
    .info-container{
        text-align: center;
    }
    .num{
        width: 60px;
    }
</style>