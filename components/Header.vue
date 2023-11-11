<template>
  <header>
    <img :src="logo" alt="Rocket preloader" />
    <button>
      <div></div>
      <div></div>
      <div></div>
    </button>
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
  
<style scoped lang="scss">
@media (width <= 1024px) {
  
  header {
    width: 89.33%; // 335px из 375px
    margin: 5.33% auto 0; // 20px
    display: flex;
    justify-content: space-between;

    img {
      width: 21.33vw; // 80px
      aspect-ratio: 1;
    }

    button {
      width: 16vw; // 60px
      height: 16vw;
      aspect-ratio: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      background-color: transparent;
      margin-top: 2.66vw;

      div {
        width: 6.93vw;
        height: 0.6vw;
        margin-bottom: 1.6vw; // 6px
        background-color: #282A33;
      }
    }

    ul {
      display: none;
    }
  }
}
@media (width > 1024px) {
  
  header {
    width: 89.33%; // 335px из 375px
    margin: 5.33% auto 0; // 20px
    display: flex;
    justify-content: space-between;

    img {
      width: 21.33vw; // 80px
      aspect-ratio: 1;
    }

    button {
      width: 16vw; // 60px
      height: 16vw;
      aspect-ratio: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      background-color: transparent;
      margin-top: 2.66vw;

      div {
        width: 6.93vw;
        height: 0.6vw;
        margin-bottom: 1.6vw; // 6px
        background-color: #282A33;
      }
    }

    ul {
      display: none;
    }
  }
}

</style>