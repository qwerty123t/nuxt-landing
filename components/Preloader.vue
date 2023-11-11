<template>
    <div>
      <img :src="rocket" alt="Rocket preloader" />
    </div>
  </template>
  
  <script setup>
    import rocket from '@/assets/images/preloader.png';
  </script>
  
  <style scoped>
  /* ваши стили компонента */
  h1 {
    color: red;
    font-family: sans-serif;
  }
  </style>