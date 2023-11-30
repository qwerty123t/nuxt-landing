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
          <a :href="shareFBLink" target="_blank" id="fb"><img :src="fb" alt="Facebook" /></a>
          <a :href="shareVKLink" target="_blank" id="vk"><img :src="vk" alt="VK" /></a>
          <a :href="shareTGLink" target="_blank" id="tg"><img :src="tg" alt="Telegram" /></a>
        </div>
      </address>

      <img :src="lineSmall" class="line-small" alt="" />
      <img :src="lineBig" class="line-big" alt="" />


      <article id="capture">
        <div class="text">
              <p class="name">Имя кандидата, Желаемая позиция</p>
              <p class="description">Как разработчик, я высоко ценю способность воплотить видение дизайнера в жизнь, что считаю очень полезным для бизнеса. Я получаю огромное удовлетворение, наблюдая за работой от идеи до дизайна, особенно когда она появляется в руках пользователя. Я считаю, что ориентированные на пользователя решения являются наиболее ценными цифровыми ресурсами будущего.</p>
        </div>
          <img :src="shareImg" class="share-img" alt="" />
      </article>
  </section>
</template>

<script setup>
  import html2canvas from 'html2canvas';
  import { ref, onMounted } from 'vue';
  import fb from '@/assets/images/bb.svg';
  import vk from '@/assets/images/vk.svg';
  import tg from '@/assets/images/tg.svg';
  import lineSmall from '@/assets/images/lineHeroBottom.svg';
  import lineBig from '@/assets/images/lineHeroBottomBig.svg';
  import shareImg from '@/assets/images/share.png';

  const url = 'https://nuxt-landing-three.vercel.app/'
  let bigText = ref("Романов Кирилл, Фронтенд-разработчик");
  let smallText = ref("Как разработчик, я высоко ценю способность воплотить видение дизайнера в жизнь, что считаю очень полезным для бизнеса. Я получаю огромное удовлетворение, наблюдая за работой от идеи до дизайна, особенно когда она появляется в руках пользователя. Я считаю, что ориентированные на пользователя решения являются наиболее ценными цифровыми ресурсами будущего.");
  let shareTGLink = ref(`https://t.me/share/url?url=${url}&text=${bigText.value}`);
  let shareVKLink = ref(`https://vk.com/share.php?url=${url}&title=${bigText.value}`);
  let shareFBLink = ref(`http://www.facebook.com/share.php?u=${url}&title=${bigText.value}`);
  let imageLinkInMetaTag = ref(`https://jghfk.com`);

  const updateBigText = (e) => {
    bigText = e.target.innerText;
    console.log(bigText);
  };

  const updateSmallText = (e) => {
    smallText = e.target.innerText;
    console.log(smallText);
  };


onMounted(() => {
  const resume = document.getElementById("resume");
  const capture = document.getElementById("capture");

  const head = document.head;
  let twitterCardMetaTag = document.querySelector('meta[name="twitter:card"]');
  let twitterTitleMetaTag = document.querySelector('meta[name="twitter:title"]');
  let twitterDescriptionMetaTag = document.querySelector('meta[name="twitter:description"]');
  let twitterImageMetaTag = document.querySelector('meta[name="twitter:image"]');

  html2canvas(capture, {
    width: 700,
    height: 500,
    scale: 1
  }).then(canvas => {
    const image = new Image();
    
    image.src = canvas.toDataURL();

    if (!twitterCardMetaTag) {
      // If the meta tag doesn't exist, create a new one
      twitterCardMetaTag = document.createElement('meta');
      twitterCardMetaTag.setAttribute('name', 'twitter:card');
      head.appendChild(twitterCardMetaTag);
    }
    twitterCardMetaTag.setAttribute('content', 'summary_large_image');

    if (!twitterTitleMetaTag) {
      twitterTitleMetaTag = document.createElement('meta');
      twitterTitleMetaTag.setAttribute('name', 'twitter:title');
      head.appendChild(twitterTitleMetaTag);
    }
    twitterTitleMetaTag.setAttribute('content', bigText.value);

    if (!twitterDescriptionMetaTag) {
      twitterDescriptionMetaTag = document.createElement('meta');
      twitterDescriptionMetaTag.setAttribute('name', 'twitter:description');
      head.appendChild(twitterDescriptionMetaTag);
    }
    twitterDescriptionMetaTag.setAttribute('content', smallText.value);

    if (!twitterImageMetaTag) {
      twitterImageMetaTag = document.createElement('meta');
      twitterImageMetaTag.setAttribute('name', 'twitter:image');
      head.appendChild(twitterImageMetaTag);
    }
    twitterImageMetaTag.setAttribute('content', image.src);

    console.log('Twitter card tags added successfully.');
  });
});
</script>



<style scoped lang="scss">
  section {
    display: flex;
    flex-direction: column;
    position: relative;

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

  article {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 100vw;

        .text {
            margin-top: calc(30px * 100vw / 375px);
            display: flex;
            flex-direction: column;

            .name {
                font-size: calc(28px * 100vw / 375px);
                font-weight: 700;
                line-height: 140%;
            }
            .description {
                margin-top: calc(20px * 100vw / 375px);
                font-size: calc(14px * 100vw / 375px);
                font-weight: 400;
                line-height: 143%;
            }
        }

        img {
            margin: auto;
            max-width: 800px;
        }
    }

    @container  (width > 810px) {

article {
    margin-top: calc(0px * 100cqw / 968px);
    min-height: calc(504px * 100cqw / 968px);
    flex-direction: row;

    .text {
        .name {
            font-size: calc(36px * 100cqw / 968px);
            max-width: calc(350px * 100cqw / 968px);
        }

        .description {
            margin-top: calc(30px * 100cqw / 968px);
            font-size: calc(14px * 100cqw / 968px);
            max-width: calc(560px * 100cqw / 968px);
        }
    }
    img {
        margin: auto 0 0 0;
        width: calc(400px * 100cqw / 968px);
        max-width: 600px;
    }
}

}
</style>