<template>
    <main class="info-container">
        <div v-for="item in arrs" :key="item.id">
            ID：{{item.id}} ===> Value：{{item.message}}
        </div>
    </main>
</template>

<script setup>
    import {reactive} from 'vue'
    const arrs = reactive([
        {id:1,message:"梅"},
        {id:2,message:"兰"},
        {id:3,message:"竹"},
        {id:4,message:"菊"},
    ])
</script>