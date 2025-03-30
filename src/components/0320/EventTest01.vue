<template>
    <main class="info-container">
        <h3>获取事件对象</h3>
        方式一：<button @click="greet">Greet</button><br>
        方式二：<button @click="change($event)">change</button>
    </main>
</template>

<script setup>
    const greet = event => console.log(event)
    const change = event => console.log(event)
</script>