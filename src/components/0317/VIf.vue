<template>
    <main class="info-container">
        <div>
            陈宇浩的学习评定等级为：
            <p v-if="type==='a'">优</p>
            <p v-else-if="type==='b'">良</p>
            <p v-else>差</p>
        </div>
        <br>
        <button @click="type='a'">切换成优</button>
        <button @click="type='b'">切换成良</button>
        <button @click="type='c'">切换成差</button>
    </main>
</template>

<script setup>
    import { ref } from 'vue'
    const type = ref('a')
</script>

<style scoped>
    div{
        font-weight: 900;
    }
    p{
        display: inline;
    }
</style>
