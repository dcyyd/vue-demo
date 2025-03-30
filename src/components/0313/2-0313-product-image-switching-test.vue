<template>
    <main>
        <div class="info-container">
            <img :src="list[index]" alt="">
            <div class="button-container">
                <button class="btn" @click="forward">forward</button>
                <button class="btn" @click="next">next</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main {
        text-align: center;
        font-weight: 900;
    }
    /* 使用 flexbox 布局 */
   .info-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
   .button-container {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
    }
   .btn {
        margin: 5px 0;
    }
</style>

<script setup>
    import { ref } from "vue";
    let list = [
        new URL("../../assets/images/01.jpg", import.meta.url).href,
        new URL("../../assets/images/02.jpg", import.meta.url).href,
        new URL("../../assets/images/03.jpg", import.meta.url).href,
        new URL("../../assets/images/04.jpg", import.meta.url).href,
    ];
    let index = ref(0);

    function forward() {
        if (index.value == 0) {
            index.value = list.length - 1;
        } else {
            index.value--;
        }
    }

    function next() {
        if (index.value == list.length - 1) {
            index.value = 0;
        } else {
            index.value++;
        }
    }
</script>

