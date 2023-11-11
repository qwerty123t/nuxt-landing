<template>
    <div>
      <!-- ваш код компонента -->
      <h1>{{ message }}</h1>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Привет, мир!"
      };
    }
  };
  </script>
  
  <style scoped>
  /* ваши стили компонента */
  h1 {
    color: red;
    font-family: sans-serif;
  }
  </style>