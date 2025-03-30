<template>
  <main class="info-container">
    <p>初始message： {{ message }}</p>
    <p>反转之后的message： {{ reversedMessage }}</p>
    <button @click="updateMessage">更改</button>
  </main>
</template>

<script setup>
  import { ref, computed } from 'vue'
  const message = ref('Dou Chang You')
  const reversedMessage = computed(() =>
    message.value.split('').reverse().join('')
  )
  const updateMessage = () => {
    message.value = 'Dou'
  }
</script>