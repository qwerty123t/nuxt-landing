<template>
    <section id="resume">
        <div class="text">
          <h1 contenteditable @input="updateBigText">{{ bigText }}</h1>
          <p contenteditable @input="updateSmallText">{{ smallText }}</p>
        </div>

        <address>
          <a href="mailto:mail@gmail.com" class="first">mail@gmail.com</a>
          <a href="tel:+79990000000">+7 (999) 000-00-00</a>
          <p>г. Иннополис</p>

          <div class="icons">
            <a href="#" target="_blank" id="fb"><img :src="fb" alt="Facebook" /></a>
            <a :href="shareVKLink" target="_blank" id="vk"><img :src="vk" alt="VK" /></a>
            <a :href="shareTelegramLink" target="_blank" id="tg"><img :src="tg" alt="Telegram" /></a>
          </div>
        </address>

        <img :src="lineSmall" class="line-small" alt="" />
        <img :src="lineBig" class="line-big" alt="" />

    </section>
</template>

<script setup>
  import { ref } from 'vue';
  import fb from '@/assets/images/bb.svg';
  import vk from '@/assets/images/vk.svg';
  import tg from '@/assets/images/tg.svg';
  import lineSmall from '@/assets/images/lineHeroBottom.svg';
  import lineBig from '@/assets/images/lineHeroBottomBig.svg';

  const url = 'https://nuxt-landing-three.vercel.app/'
  let bigText = ref("Имя кандидата, Желаемая позиция");
  let smallText = ref("Как разработчик, я высоко ценю способность воплотить видение дизайнера в жизнь, что считаю очень полезным для бизнеса. Я получаю огромное удовлетворение, наблюдая за работой от идеи до дизайна, особенно когда она появляется в руках пользователя. Я считаю, что ориентированные на пользователя решения являются наиболее ценными цифровыми ресурсами будущего.");
  let shareTelegramLink = ref(`https://t.me/share/url?url=${url}&text=${bigText.value}`);
  let shareVKLink = ref(`https://vk.com/share.php?url=${url}&title=${bigText.value}`);

  const updateBigText = (e) => {
    bigText = e.target.innerText;
    console.log(bigText);
  };

  const updateSmallText = (e) => {
    smallText = e.target.innerText;
    console.log(smallText);
  };

// export default {
//   data() {
//     return {
//       bigText: "",
//       smallText: ""
//     }
//   },
//   methods : {
//     updateText(e){
//       this.text = e.target.innerText;
//       console.log(this.text );
//       console.log(this.text );
//     }
//   }
// }
</script>



<style scoped lang="scss">
  section {
    display: flex;
    flex-direction: column;

    .text {
      margin-top: calc(30px * 100vw / 375px);
      h1 {
        font-size: calc(28px * 100vw / 375px);
        font-weight: 700;
        line-height: 140%;
      }
      p {
        margin-top: calc(20px * 100vw / 375px);
        font-size: calc(14px * 100vw / 375px);
        font-weight: 400;
        line-height: 143%;
      }
    }

    address {
      display: flex;
      flex-direction: column;
      margin-top: calc(10px * 100vw / 375px);
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
        margin-top: calc(5.5px * 100vw / 375px);

        img {
          width: calc(25px * 100vw / 375px);
          margin-right: calc(20px * 100vw / 375px);
          cursor: pointer;
        }
      }
    }

    .line-small {
      width: calc(370px * 100vw / 375px);
      margin-top: calc(-62px * 100vw / 375px);
      margin-left: calc(-16px * 100vw / 375px);
      z-index: -1;
    }
    .line-big {
      z-index: -1;
      display: none;
    }
  }

  @container  (width > 810px) {
    section {
      flex-wrap: wrap;
      flex-direction: row;
      justify-self: unset;
      margin-top: calc(0px * 100cqw / 1140px);

      .text {
        display: flex;
        flex-direction: column;
        width: calc(560px * 100cqw / 1140px);
        margin-top: calc(40px * 100cqw / 1140px);


        h1 {
          font-size: calc(36px * 100cqw / 1140px);
          text-wrap: balance;
        }

        p {
          //text-wrap: balance; - Не по дизайн-макету
          font-size: calc(14px * 100cqw / 1140px);
          margin-top: calc(30px * 100cqw / 1140px);
        }
      }

      address {
        display: flex;
        flex-direction: column;
        width: calc(270px * 100cqw / 1140px);
        margin-top: calc(30px * 100cqw / 1140px);
        margin-left: calc(310px * 100cqw / 1140px);


        a, p {
          font-size: calc(14px * 100cqw / 1140px);
          font-weight: 400;
          line-height: 140%;
          margin-top: calc(10.5px * 100cqw / 1140px);

          .first {
            margin-top: 0;
          }
        }

        .icons {
          display: flex;       
          margin-top: calc(4px * 100cqw / 1140px);
          
          img {
            width: calc(25px * 100cqw / 1140px);
            aspect-ratio: 1;
            margin-right: calc(20px * 100cqw / 1140px);
          }
        }
      }

      .line-big {
        display: block;
        width: calc(1160px * 100cqw / 1140px);
        margin-top: calc(-97px * 100cqw / 1140px);
        margin-left: calc(-5px * 100cqw / 1140px);
      }
      .line-small {
        display: none;
      }
    }
  }
</style>