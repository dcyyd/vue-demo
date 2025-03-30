<div align="center">
  <h1>vue code demo</h1>
  <p>
    <a href="https://gitee.com/fy_group/vue-code-demo">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License">
    </a>
    <a href="https://gitee.com/fy_group/vue-code-demo/releases">
      <img src="https://img.shields.io/badge/version-1.0.0-green" alt="版本">
    </a>
    <a href="https://gitee.com/fy_group/vue-code-demo/issues">
      <img src="https://img.shields.io/badge/accessibility-AA-success" alt="无障碍等级">
    </a>
    <a href="https://gitee.com/fy_group/vue-code-demo/stargazers">
      <img src="https://img.shields.io/github/stars/dcyyd/class-roll-call-system?style=social" alt="GitHub Repo stars">
    </a>
  </p>
</div>


## 一、项目概述🚀

`vue code demo` 含多种示例组件和页面，演示 Vue 3 组合式 API 及 `<script setup>` 语法糖，提升代码简洁性、可维护性与可扩展性，帮助开发者掌握组件化开发，提高效率。

## 二、技术架构 🏗️

### 1. 前端框架

- **Vue 3**：运用组合式 API 及 `<script setup>` 语法糖，代码更简洁易读、便于维护，组件化开发提升代码复用性与可扩展性。 🧩
- **Vite**：新一代前端构建工具，利用原生 ES 模块支持，具备快速冷启动和热模块替换（HMR）功能，大幅提高开发效率。 ⚡

### 2. 包管理工具

- **pnpm**：相比 npm 和 yarn，安装速度更快、磁盘占用更小，通过硬链接和符号链接管理依赖，避免依赖重复安装。 📦

## 三、运行环境 🖥️

### 1. [Node.js](https://nodejs.cn/download/)

建议使用 Node.js 版本 `>=18`，以保证项目正常运行，部分依赖（如 `esbuild`）有明确的 Node.js 版本要求。 💻

### 2. 代码编辑器

#### 2.1 **[Trae - AI 原生 IDE](https://www.trae.com.cn/download)**

- **特点**：国产开发，主打中文支持，内置多语言环境（Python/Java/C++等）
- **优势**：中文界面+本地化文档，适合编程初学者快速上手
- **场景**：中小项目开发、教学场景

#### 2.2 **[HBuilderX](https://dcloud.io/hbuilderx.html)**

- **特点**：DCloud出品，专注前端开发（HTML5/uni-app）
- **优势**：uni-app框架深度集成，支持可视化布局和真机调试
- **场景**：跨平台App开发、Web前端工程

#### 2.3 [Visual Studio Code](https://code.visualstudio.com/)

- **特点**：微软旗舰产品，支持全语言开发（插件生态超丰富）
- **优势**：轻量高效，支持远程开发/调试，企业级开发工具链
- **场景**：全栈开发、大型项目协作、DevOps流程

### 3. 浏览器支持

项目基于现代浏览器特性开发，建议使用最新版 Chrome、Firefox、Safari 等主流浏览器。 🌐

## 四、项目结构树 🌳

```markdown
vue-code-demo/           # 项目根目录
├── .vscode/               # VS Code 开发工具配置目录
│   └── extensions.json    # 编辑器扩展配置文件
├── dist/                  # 项目构建输出目录
│   ├── assets/         
│   │   ├── index.html   
│   │   └── vite.svg     
│   └── index.html       
├── node_modules/          # 项目依赖包目录
├── public/                # 静态资源公共目录
│   └── vite.svg         
├── src/                   # 项目源代码目录
│   ├── assets/            # 项目资源目录
│   │   ├── css/           # 样式文件目录
│   │   ├── font/          # 字体文件目录
│   │   ├── images/        # 图片资源目录
│   │   └── js/            # 自定义 JS 脚本目录
│   ├── components/        # Vue 组件目录
│   │   ├── About.vue
│   │   └── HelloWorld.vue
│   ├── App.vue            # 根组件文件，项目入口组件
│   ├── main.js            # 项目入口 JS 文件，初始化 Vue 应用
│   └── style.css          # 全局样式文件
├── .gitignore             # Git 版本控制忽略配置文件
├── index.html             # 项目入口 HTML 文件
├── LICENSE                # 项目开源许可证文件
├── package-lock.json      # npm 依赖版本锁定文件
├── package.json           # 项目包配置文件
├── README.md              # 项目说明文档
└── vite.config.js         # Vite 构建工具配置文件
```

## 五、本地开发 🛠️

### 1. 克隆项目

使用 Git 克隆项目到本地：

```sh
git clone https://gitee.com/fy_group/vue-code-demo.git
```

### 2. 安装依赖

确保已安装 pnpm，未安装可执行：

```sh
npm install -g pnpm
```

在项目根目录下安装依赖：

```sh
pnpm install
```

### 3. 启动开发服务器

依赖安装完成后，启动 Vite 开发服务器：

```sh
pnpm run dev
```

服务器启动后自动打开浏览器访问 `http://localhost:3000`（默认端口），可实时查看开发效果。 👀

### 4. 构建生产环境

开发完成后，构建生产环境代码：

```sh
pnpm run build
```

构建完成后，生成文件存于 `dist` 目录，可部署到生产服务器。 🚢

### 5. 预览生产环境

构建完成后，本地预览生产环境效果：

```sh
pnpm run preview
```

## 六、联系我 📞

使用过程中如有问题或建议，欢迎通过以下方式联系：

- **GitHub**：[https://github.com/dcyyd](https://github.com/dcyyd) 🐙
- **邮箱**：[dcyyd_kcug@yeah.net](mailto:dcyyd_kcug@yeah.net) 📧
- **电话**：[17633963626](tel:17633963626) 📞
- **QQ**：[3136218340](https://qm.qq.com/cgi-bin/qm/qr) 📱

## 七、版权说明 📜

本项目采用 **[MIT](./LICENSE)** 许可证，可自由使用、修改和分发代码，但需保留原版权声明，使用时遵守相关法律法规和开源协议。
