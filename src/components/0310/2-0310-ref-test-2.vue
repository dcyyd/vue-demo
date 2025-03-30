<template>
	<!-- 信息容器 -->
	<div class="info-container">
	  <!-- 显示姓名 -->
	  <p><b>姓名: </b>{{ name }}</p>
	  <!-- 显示年龄 -->
	  <p><b>年龄: </b>{{ age }}</p>
	  <!-- 根据 isTelVisible 的值决定是否显示电话号码 -->
	  <p v-if="isTelVisible"><b>电话: </b>{{ tel }}</p>
	  <!-- 按钮容器 -->
	  <div class="button-container">
		<!-- 修改姓名按钮 -->
		<button class="action-button" @click="changeName">修改姓名</button>
		<!-- 年龄加 1 按钮 -->
		<button class="action-button" @click="changeAge">年龄+1</button>
		<!-- 显示/隐藏电话按钮 -->
		<button class="action-button" @click="toggleTelVisibility">显示/隐藏电话</button>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // 定义响应式变量并添加类型注解
  // 姓名，初始值为 'dcy'
  const name = ref<string>('dcy');
  // 年龄，初始值为 18
  const age = ref<number>(18);
  // 定义常量电话号码
  const tel: string = '11111111111';
  // 定义响应式变量来控制手机号的显示与隐藏，初始值为 false
  const isTelVisible = ref<boolean>(false);
  
  // 修改姓名的函数
  const changeName = () => {
	name.value = 'hahaha';
  };
  
  // 年龄加 1 的函数
  const changeAge = () => {
	age.value++;
  };
  
  // 切换电话号码显示状态的函数
  const toggleTelVisibility = () => {
	isTelVisible.value = !isTelVisible.value;
  };
  </script>
  
  <style scoped>
  /* 信息容器样式 */
  .info-container {
	font-family: Arial, sans-serif;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 300px;
	margin: 20px auto;
  }
  
  /* 段落样式 */
  .info-container p {
	margin: 10px 0;
	color: #333;
  }
  
  /* 按钮容器样式 */
  .button-container {
	margin-top: 20px;
	display: flex;
	justify-content: space-around;
  }
  
  /* 按钮样式 */
  .action-button {
	padding: 8px 16px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
  }
  
  /* 按钮悬停样式 */
  .action-button:hover {
	background-color: #0056b3;
  }
  </style>