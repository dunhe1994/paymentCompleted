## 网点端

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

# 项目开发规约

#### 一、开发工具

> vscode
>
> node 版本 ：12.20.0
>
> node 版本管理： nvm
>
> nvm 安装地址： https://github.com/coreybutler/nvm-windows/releases

#### 二、安装插件

> ESlint、Vetur、JS-CSS-HTML Formatter、Easy LESS、Prettier - Code formatter
>
> 全局 js 采用 ESlint 进行格式化校验
>
> html 页面采用 JS-CSS-HTML Formatter 格式化
>
> js 文件采用 JS-CSS-HTML Formatter 格式化
>
> css 文件采用 JS-CSS-HTML Formatter 格式化
>
> vue 页面采用 Prettier - Code formatter 格式化
>
> less 文件采用 EASY LESS 格式化
>
> SCSS   文件采用 JS-CSS-HTML Formatter 格式化
>
> tab 必须为 4 个空格

#### 三、项目命令

> 初始化项目
>
> npm install
>
> 项目打包
>
> npm run build 生产包
>
> npm run test 测试包

> npm run dev 本地测试包
>
> 项目手动校验
>
> npm run lint

#### 四、项目设计

##### 4.1、目录结构

> src/view 静态页面.vue 存放目录
>
> public/static 静态 js images 目录对应打包后项目中 static 目录
>
> public/assets 项目中使用的静态 js css images 目录
>
> src/components 公共 vue 组件
>
> src/router vue 路由
>
> src/service 基于 axios 的 http.js 和常用公共 api
>
> src/store vuex
>
> src/util 常用工具类
>
> src 项目源码，主要是项目配置、开发接口、页面组件、页面脚本目录

##### 4.2、开发规范 参考 vue.js [风格规范](https://cn.vuejs.org/v2/style-guide/)

> 1、src/view .vue 文件 页面大驼峰命名
>
> 2、src/components .vue 组件文件全部大驼峰命名,组件必须有 name 属性
>
> 3、组件使用必须使用
>
> 4、公共组件须以 div 包裹，class 名称须以“组件名”命名；

#### 五、模板代码

#### 5.1、vue 页面

```html
<template>
  <div class="ui-commponet">
    <div class="hello">hello!</div>
  </div>
</template>
<script>
  export default {
    name: "ui-commponet",
    props: {
      userId: {
        required: true, //是否必传
        default() {
          return "";
        },
      },
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
<style lang="scss" scoped>
  .ui-commponet {
    height: 35px;
    font-size: 35px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 54px;
    color: #000000;
    opacity: 1;
    text-align: center;
    .hello {
      font-size: 20px;
    }
  }
</style>
```
