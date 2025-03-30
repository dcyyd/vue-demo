<template>
    <main class="container">
        <ul>
            <li v-for="item in arrs" :key="item.id">
                水果编号：{{ item.id }} ===> 水果名称：{{item.name}} ===> 详细信息：{{ item.message }}
            </li>
        </ul>
    </main>
</template>

<script setup>
    import { reactive } from 'vue'
    const arrs = reactive([
        { id: 1, name:"苹果",message: "苹果汁水丰富，可以生津止渴。" },
        { id: 2, name:"柠檬",message: "柠檬具有生津止渴、化痰止咳的功效。" },
    ])
</script>

<style scoped>
    .container {
        padding: 2rem;
        background-color: #f4f4f4;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        max-width: 800px;
        margin: 2rem auto;
        text-align: center;
    }

    li{
        max-width: 800px;
        text-align: left;
    }
</style>