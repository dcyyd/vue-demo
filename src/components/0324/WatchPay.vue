<template>
      <main class="info-container">
        <input type="number" v-model="itemQuantity" placeholder="请输入商品数量">
        <p>
          <b>商品单价：</b>
          {{ itemPrice }}&nbsp;&nbsp;&nbsp;&nbsp;
          <b>待付款金额：</b>{{ totalPrice }}元
        </p>
      </main>
</template>
  
<script setup>
  import { watch, ref } from 'vue'
  
  const itemPrice = 10
  const itemQuantity = ref(0)
  const totalPrice = ref(0)
  
  // 监听商品数量的变化
  watch(itemQuantity, (newQuantity, oldQuantity) => {
    // 根据新的商品数量计算付款总金额
    totalPrice.value = newQuantity * itemPrice
  })
</script>