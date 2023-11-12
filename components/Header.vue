<template>
  <header>
    <img :src="logo" class="logo" alt="Rocket preloader" />
    <button>
      <div></div>
      <div></div>
      <div></div>
    </button>
    <ul>
      <img :src="line" class="line" alt="" />
      <li>Резюме</li>
      <li>О себе</li>
      <li>Навыки</li>
    </ul>
  </header>
</template>
  
<script setup>
  import logo from '@/assets/images/logo.png';
  import line from '@/assets/images/lineHeader.svg';
</script>
  
<style scoped lang="scss">
@media (width <= 1024px) {
  
  header {
    width: 89.33%; // 335px из 375px
    margin: 5.33% auto 0; // 20px
    display: flex;
    justify-content: space-between;

    .logo {
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
    width: 79.16%; // 1140px из 1440px
    margin: 6.94% auto 0; // 100px
    display: flex;
    justify-content: space-between;

    .logo {
      width: 10.42vw; // 150px
      aspect-ratio: 1;
    }

    button {
      display: none;
    }

    ul {
      display: flex;
      list-style-type: none;
      font-size: 1.25vw; // 18px 
      font-weight: 700;
      position: relative;

      li {
        font-size: 2vw;
        margin-right: 2.08vw; // 30px
        z-index: 1;
      }
      
      .line {
        position: absolute;
        width: 10.76vw; // 155px
        top: -10vw;
        left: -4vw;
        z-index: 0;
      }
    }
  }
}

</style>