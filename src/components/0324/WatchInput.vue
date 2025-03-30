<template>
  <main class="info-container">
    <input type="text" v-model="cityName" />
    <p><b>新内容：</b>{{ currentCity }}---<b>旧内容：</b>{{ previousCity }}</p>
  </main>
</template>

<script setup>
  import { watch, ref } from 'vue'

  const cityName = ref('beijing')
  const currentCity = ref('')
  const previousCity = ref('')

  watch(cityName, (newCity, oldCity) => {
    currentCity.value = newCity
    previousCity.value = oldCity
  }, { immediate: true })
</script>
