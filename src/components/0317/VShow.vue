<template>
    <main class="info-container">
        <div>
            Tom的学习评定等级为：
            <p v-show="selectedLevel === '优'">优</p>
            <p v-show="selectedLevel === '良'">良</p>
            <p v-show="selectedLevel === '差'">差</p>
        </div>
        <br>
        <button @click="selectedLevel = '优'">切换成优</button>
        <button @click="selectedLevel = '良'">切换成良</button>
        <button @click="selectedLevel = '差'">切换成差</button>
    </main>
</template>

<script setup>
    import { ref } from 'vue'
    const selectedLevel = ref('优')
</script>

<style scoped>
    div{
        font-weight: 900;
    }
    p{
        display: inline;
    }
</style>
