import { createApp } from 'vue'
import './style.css'
import './assets/css/common.css'; // 引入公共 CSS 文件
// 引入 App.vue 组件
import App from './App.vue'

// 创建应用实例并挂载到 #app 元素
createApp(App).mount('#app')