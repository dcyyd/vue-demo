<template>
    <div class="info-container">
        <p>姓名: {{ obj.name }}</p>
        <p>年龄: {{ obj.age }}</p>
        <!-- 添加一个用于显示手机号的 div，根据 showPhone 状态决定是否显示 -->
        <div v-if="showPhone">
            <p>电话号码: {{ obj.tel }}</p>
        </div>
        <div class="button-group">
            <button class="btn" @click="changeName">修改姓名</button>
            <button class="btn" @click="changeAge">年龄+1</button>
            <button class="btn" @click="showTel">phone</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

// 使用 reactive 创建响应式对象
const obj = reactive({
    name: 'dcy',
    age: 18,
    tel: '11111111111'
});

// 使用 ref 创建一个响应式变量来控制手机号的显示与隐藏
const showPhone = ref(false);

// 定义修改姓名的函数
const changeName = () => {
    obj.name = 'hahaha';
};

// 定义增加年龄的函数
const changeAge = () => {
    obj.age++;
};

// 定义显示电话号码的函数
const showTel = () => {
    // 切换 showPhone 的值来显示或隐藏手机号
    showPhone.value = !showPhone.value;
};
</script>

<style scoped>
/* 段落样式 */
.info-container p {
    margin: 10px 0;
    color: #333;
}

/* 按钮组样式 */
.button-group {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
</style>