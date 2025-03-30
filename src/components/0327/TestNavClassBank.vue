<template>
  <main class="info-container">
    <ul>
        <li class="li" v-for="(item,index) in list" :key="item.id" @click="activeIndex=index">
            <a :class="{active:index === activeIndex}" href="#">{{ item.name }}</a>
        </li>
    </ul>
  </main>
</template>

<script setup>
    import {reactive,ref} from "vue"
    
    let list=reactive([
        {id:1,name:'Home'},
        {id:2,name:'Blog'},
        {id:3,name:'About'}
    ])
    let activeIndex=ref(2)
</script>

<style>
    .ul {
      display: flex;
      border-bottom: 2px solid #e01222;
      padding: 0 10px;
    }
    .li {
      width: 100px;
      height: 50px;
      line-height: 50px;
      list-style: none;
      text-align: center;
    }
    .li a {
      display: block;
      text-decoration: none;
      font-weight: bold;
      color: #333333;
    }
    .li a.active {
      background-color: #e01222;
      color: #fff;
    }
  </style>