<template>
  <section>

    <div class="text">
      <h1>Имя кандидата, желаемая позиция</h1>
      <p>Как разработчик, я высоко ценю способность воплотить видение дизайнера в жизнь, что считаю очень полезным для бизнеса. Я получаю огромное удовлетворение, наблюдая за работой от идеи до дизайна, особенно когда она появляется в руках пользователя. Я считаю, что ориентированные на пользователя решения являются наиболее ценными цифровыми ресурсами будущего.</p>
    </div>

    <address>
      <a href="mailto:mail@gmail.com" class="first">mail@gmail.com</a>
      <a href="tel:+79990000000">+7 (999) 000-00-00</a>
      <p>г. Иннополис</p>

      <div class="icons">
        <a href="#"><img :src="fb" alt="Facebook" /></a>
        <a href="#"><img :src="vk" alt="VK" /></a>
        <a href="#"><img :src="tg" alt="Telegram" /></a>
      </div>
    </address>

  </section>
</template>

<script setup>
  import fb from '@/assets/images/bb.svg';
  import vk from '@/assets/images/vk.svg';
  import tg from '@/assets/images/tg.svg';
</script>

<style scoped lang="scss">
  section {
    display: flex;
    flex-direction: column;
    width: calc(335px * 100vw / 375px);
    margin: calc(30px * 100vw / 375px) auto 0;

    .text {
      h1 {
        font-size: calc(28px * 100vw / 375px);
        font-weight: 700;
        line-height: 140%;
      }
      p {
        margin-top: calc(20px * 100vw / 375px);
        font-size: calc(14px * 100vw / 375px);
        font-weight: 400;
        line-height: 140%;
      }
    }

    address {
      display: flex;
      flex-direction: column;
      margin-top: calc(20px * 100vw / 375px);
      font-size: calc(14px * 100vw / 375px);
      font-weight: 400;
      line-height: 140%;

      a, p {
        margin-top: calc(10px * 100vw / 375px);

        .first {
          margin-top: 0;
        }
      }

      .icons {
        display: flex;

        img {
          width: calc(25px * 100vw / 375px);
          margin-right: calc(20px * 100vw / 375px);
        }
      }
    }
  }
  
</style>