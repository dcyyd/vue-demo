<template>
    <div class="info-container" v-bind:style="{ 'background-color': pink, width: width, height: height + 'px' }">
        <div v-bind:style="{ backgroundColor: isBlue ? blue : 'black', width: '50px', height: '20px' }"></div>
        <div v-bind:style="myDiv"></div>
    </div>
</template>

<script setup>
    import { ref, reactive } from 'vue'
    const isBlue = ref(false)
    const blue = ref('blue')
    const pink = ref('pink')
    const width = ref('100%')
    const height = ref(40)
    const myDiv = reactive({
    backgroundColor: 'red',  width: '50px',  height: '20px'
    })
</script>
