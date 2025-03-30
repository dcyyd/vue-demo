<template>
    <main class="info-container">
        <div v-bind:class="{ inner: isInner }">春夏</div>
        <div v-bind:class="classObject">秋冬</div>
        <div v-bind:class="classMeal">三餐四季</div>
        <div class="text" v-bind:class="{ box: isBox, border: isBorder }"></div>
    </main>
</template>

<script setup>
    import { ref, reactive, computed } from 'vue'
    const isBox = ref(true)
    const isBorder = ref(true)
    const isInner = ref(true)
    const isMeal = ref(true)
    const classObject = reactive({ inner: true })
    const classMeal = computed(() => ({meal: isMeal.value}))
</script>

