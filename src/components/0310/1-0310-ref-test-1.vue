<template>
	<div class="container">
		<p class="number">{{ num }}</p>
		<button class="btn" @click="change">button</button>
		<p class="number">{{ num }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义初始值为 100 的响应式变量 num
const num = ref<number>(100);

// 定义 change 方法用于增加 num 的值
const change = () => {
	num.value++;
	console.log(num.value);
};
</script>

<style scoped>
/* 容器样式 */
.container {
	padding: 2rem;
	background-color: #f4f4f4;
	border-radius: 0.5rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	max-width: 300px;
	margin: 2rem auto;
	text-align: center;
}

/* 数字段落样式 */
.number {
	font-size: 2rem;
	font-weight: bold;
	margin: 1rem 0;
	color: #2d8809;
}

/* 按钮样式 */
.btn {
	font-size: 1rem;
	font-weight: bold;
	padding: 0.8rem 1.5rem;
	background-color: #007BFF;
	color: white;
	border: none;
	border-radius: 0.3rem;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

/* 按钮悬停效果 */
.btn:hover {
	background-color: #0056b3;
}
</style>