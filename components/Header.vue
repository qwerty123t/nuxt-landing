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
    margin: 5.33% auto 0; // 20px
    display: flex;
    justify-content: space-between;
    //container-type: inline-size; sad
    //container: header / inline-size;


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

        li {
          margin-right: calc(30px * 100cqw / 1140px); // 30px
          z-index: 1;
        }

        .last {
            margin-right: 0;
          }
        
        .line {
          position: absolute;
          width: calc(155px * 100cqw / 1140px);
          top: calc(-125px * 100cqw / 1140px);
          left: calc(-70px * 100cqw / 1140px);
          z-index: 0;
        }
      }

    }
  }

</style>