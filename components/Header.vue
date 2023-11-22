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
      <li class="first">Резюме</li>
      <li>О себе</li>
      <li class="last">Навыки</li>
    </ul>
  </header>
</template>
  
<script setup>
  import logo from '@/assets/images/logo.png';
  import line from '@/assets/images/lineHeader.svg';
</script>
  
<style scoped lang="scss">
  header {
    margin: calc(-12px * 100% / 375px) auto 0; // 20px
    display: flex;
    justify-content: space-between;

    .logo {
      width: calc(80px * 100vw / 375px); // 80px
      aspect-ratio: 1;
    }

    button {
      width: calc(60px * 100vw / 375px); // 60px
      height: calc(60px * 100vw / 375px); // 60px
      aspect-ratio: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      background-color: transparent;
      margin-top: calc(10px * 100vw / 375px); // 10px

      div {
        width: calc(26px * 100vw / 375px);
        height: calc(2.25px * 100vw / 375px);
        margin-bottom: calc(6px * 100vw / 375px);
        background-color: #282A33;
      }
    }

    ul {
      display: none;
    }
  }
  
  @container (min-width: 810px) {

    header {
      margin-top: calc(100px * 100cqw / 1140px); // 100px
      display: flex;
      justify-content: space-between;


      .logo {
        width: calc(150px * 100cqw / 1140px);
        aspect-ratio: 1;
      }

      button {
        display: none;
      }

      ul {
        display: flex;
        list-style-type: none;
        font-size: calc(18px * 100cqw / 1140px);
        font-weight: 700;
        position: relative;
        margin-top: calc(0px * 100cqw / 1140px);

        li {
          margin-right: calc(30px * 100cqw / 1140px); // 30px
          z-index: 1;
        }

        .first {
          margin-right: calc(34px * 100cqw / 1140px);
        }

        .last {
          margin-right: calc(3px * 100cqw / 1140px);
        }
        
        .line {
          position: absolute;
          width: calc(105px * 100cqw / 1140px);
          top: calc(-96px * 100cqw / 1140px);
          left: calc(-25px * 100cqw / 1140px);
          z-index: 0;
        }
      }

    }
  }

</style>