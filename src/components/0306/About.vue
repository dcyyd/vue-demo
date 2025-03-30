<template>
  <div class="profile-container">
    <div class="profile-card">
      <div class="glow"></div>
      <div class="content">
        <h1 class="greeting">
          Hello👋，我是
          <span class="name-highlight">{{ name }}</span>
        </h1>

        <div class="info-item">
          <i class="fas fa-map-marker-alt icon"></i>
          <span class="info-text">📍<b>来自</b>：{{ location }}</span>
        </div>

        <div class="info-item">
          <i class="fas fa-heart icon"></i>
          <span class="info-text">✨<b>热爱</b>： {{ hobbies.join(' | ') }}</span>
        </div>

        <div class="info-item">
          <i class="fas fa-globe icon"></i>
          <span class="info-text">🔗<b>我的主页</b>：</span>
          <a :href="website" class="link" target="_blank">
            {{ website }}
          </a>
        </div>

        <div class="social-links">
          <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank" class="social-icon">
            <i :class="`fab ${link.icon}`"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="../../assets/css/about-styles.css"></style>
<script src="../../assets/js/about-js.js"></script>