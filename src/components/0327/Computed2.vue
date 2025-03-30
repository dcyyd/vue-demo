<template>
    <div class="info-container">
        <h3>小黑的物品清单</h3>
        <table>
            <tr>
                <th>名字</th>
                <th>单价</th>
                <th>数量</th>
                <th>价格</th>
            </tr>
            <tr v-for="item in list" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td><input type="text" v-model="item.num"></td>
                <td>{{ item.price*item.num }}</td>
            </tr>
        </table>
        <p>总价格为：{{ totalPrice }}元</p>
    </div>
</template>
<script setup>
    import {reactive,computed} from "vue"
    let list = reactive([
          { id: 1, name: '篮球', price:20,num: 10 },
          { id: 2, name: '玩具', price:50,num: 3 },
          { id: 3, name: '铅笔', price:2,num: 5 },
        ])
    let totalPrice= computed(()=>{
        return list.reduce((total,item)=>{
             return total+item.price*item.num
        },0)
    })
</script>
<style scoped>
    table {
      border: 1px solid #000;
      border-collapse: collapse;
      text-align: center;
      width: 240px;
    }
    tr{
        width: 500px;
    }
    th,td {
        border: 1px solid #000;
    }
    input{
        width: 50px;
        text-align: center;
    }
  </style>