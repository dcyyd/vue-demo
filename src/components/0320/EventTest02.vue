<template>
    <main class="info-container">
        <div>count的值为：{{ count }}</div><br>
        <button @click="addCount">count+1</button>&nbsp;
        <button @click="addCountN(3, $event)">count+3</button>
    </main>
</template>

<script setup>
    import { ref } from 'vue'
    const count = ref(1)
    const addCount = event => {
        count.value++
        if (count.value % 2 === 0) { 
            event.target.style.border = '3px dotted' 
        } else { 
            event.target.style.border = '3px solid' 
        }
    }

    const addCountN = (n, event) => {
        count.value += n
        if (count.value % 2 === 0) {
            event.target.style.border = '3px dotted'
        } else {
            event.target.style.border = '3px solid'
        }
    }
</script>

<style scoped>
    main{
        text-align: center;
    }
</style>