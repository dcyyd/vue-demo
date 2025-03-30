<template>
    <main class="info-container">
        <div v-for="(item,index) in arr" :key="index">
            Index：{{ index }} ===> Value：{{ item }}
        </div>
    </main>
</template>

<script setup>
    import {reactive} from "vue"
    const arr = reactive(
        ['HTML','CSS','JavaScript','JAVA','Python','C++','C#']
    )
</script>