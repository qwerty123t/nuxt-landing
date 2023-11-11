<template>
  <header>
    <img :src="logo" alt="Rocket preloader" />
    <button></button>
    <ul>
      <li>Резюме</li>
      <li>О себе</li>
      <li>Навыки</li>
    </ul>
  </header>
</template>
  
<script setup>
  import logo from '@/assets/images/logo.png';
</script>
  
  <style scoped>
  img {
    width: 10vw;
  }
  </style>