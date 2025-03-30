<template>
    <main class="info-container progress">
        <div class="progress-bar">
            <div class="inner" :style="{ width: percent + '%' }">
                <span>{{ percent }}%</span>
            </div>
        </div>
        <button @click="setPercent(25)">25%</button>
        <button @click="setPercent(50)">50%</button>
        <button @click="setPercent(75)">75%</button>
        <button @click="setPercent(100)">100%</button>
    </main>
</template>

<script setup>
import { ref } from 'vue';
let percent = ref(30);

const setPercent = (newPercent) => {
    percent.value = newPercent;
};
</script>

<style scoped>
.info-container {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.progress-bar {
    background-color: #f3f3f3;
    border: 2px solid #007BFF; 
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
    height: 30px;
}

.inner {
    background-color: #007BFF;
    color: white;
    text-align: center;
    line-height: 30px;
    transition: width 0.3s ease;
}

button {
    background-color: #007BFF;
    border: none;
    padding: 10px 20px;
    margin-right: 5px;
    color: white;
}

button:hover {
    background-color: #0056b3;
}
</style>