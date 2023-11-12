<template>
    <section>
      <div class="inside">
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
      </div>
    </section>
</template>

<script setup>
  import fb from '@/assets/images/bb.svg';
  import vk from '@/assets/images/vk.svg';
  import tg from '@/assets/images/tg.svg';
</script>

<style scoped lang="scss">
  .section {
    container-type: inline-size;
  }
  .inside {
    display: flex;
    flex-direction: column;
    width: calc(335px * 100% / 375px);
    margin: calc(30px * 100% / 375px) auto 0;

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

  @container  (width > 810px) {
    .inside {
      flex-direction: row;
      width: calc(1140px * 100% / 1440px);
      max-width: 1800px;
      margin-top: calc(40px * 100cqw / 1140px);

      .text {
        display: flex;
        flex-direction: column;
        width: calc(560px * 100cqw / 1140px);

        h1 {
          font-size: calc(36px * 100cqw / 1140px);
          font-weight: 700;
          line-height: 140%;
        }

        p {
          font-size: calc(14px * 100cqw / 1140px);
          font-weight: 400;
          line-height: 140%;
          margin-top: calc(30px * 100cqw / 1140px);
        }
      }

      address {
        display: flex;
        flex-direction: column;
        width: calc(270px * 100cqw / 1140px);

        a, p {
          font-size: calc(14px * 100cqw / 1140px);
          font-weight: 400;
          line-height: 140%;
          margin-top: calc(10px * 100cqw / 1140px);

          .first {
            margin-top: 0;
          }
        }

        .icons {
          display: flex;
          
          img {
            width: calc(25px * 100cqw / 1140px);
            aspect-ratio: 1;
            margin-right: calc(20px * 100cqw / 1140px);
          }
        }
      }
    }
  }
</style>