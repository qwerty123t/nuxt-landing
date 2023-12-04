<template>
    <section id="resume">
        <div class="text">
            <h1 contenteditable @input="updateBigText" id="bigText">{{ bigText }}</h1>
            <p contenteditable @input="updateSmallText" id="smallText">{{ smallText }}</p>
        </div>

        <address id="address">
            <a href="mailto:mail@gmail.com" class="first">mail@gmail.com</a>
            <a href="tel:+79990000000">+7 (999) 000-00-00</a>
            <p>г. Иннополис</p>

            <div class="icons">
                <button id="fb" @click="shareFacebook">
                    <img :src="fb" alt="Facebook" />
                </button>
                <button id="vk" @click="shareVK">
                    <img :src="vk" alt="VK" />
                </button>
                <button id="tg" @click="shareTelegram">
                    <img :src="tg" alt="Telegram" />
                </button>
            </div>
        </address>

        <img :src="lineSmall" class="line-small" alt="" />
        <img id="lineBig" :src="lineBig" class="line-big" alt="" />

        <article id="capture">
            <div class="text">
                <h3 class="name">Романов Кирилл, Фронтенд-разработчик</h3>
                <p class="description">
                    Как разработчик, я высоко ценю способность воплотить видение
                    дизайнера в жизнь, что считаю очень полезным для бизнеса. Я
                    получаю огромное удовлетворение, наблюдая за работой от идеи
                    до дизайна, особенно когда она появляется в руках
                    пользователя. Я считаю, что ориентированные на пользователя
                    решения являются наиболее ценными цифровыми ресурсами
                    будущего.
                </p>
            </div>
            <img :src="shareImg" class="share-img" alt="" />
        </article>
    </section>
</template>

<script setup>
import html2canvas from 'html2canvas';
import { ref } from 'vue';
import { animate, scroll } from 'motion';
import fb from '@/assets/images/bb.svg';
import vk from '@/assets/images/vk.svg';
import tg from '@/assets/images/tg.svg';
import lineSmall from '@/assets/images/lineHeroBottom.svg';
import lineBig from '@/assets/images/lineHeroBottomBig.svg';
import shareImg from '@/assets/images/share.png';

const url = 'https://nuxt-landing-three.vercel.app/';
const bigText = ref('Романов Кирилл, Фронтенд-разработчик');
const smallText = ref(
    'Как разработчик, я высоко ценю способность воплотить видение дизайнера в жизнь, что считаю очень полезным для бизнеса. Я получаю огромное удовлетворение, наблюдая за работой от идеи до дизайна, особенно когда она появляется в руках пользователя. Я считаю, что ориентированные на пользователя решения являются наиболее ценными цифровыми ресурсами будущего.',
);

const updateBigText = (e) => {
    bigText.value = e.target.innerText;
};

const updateSmallText = (e) => {
    smallText.value = e.target.innerText;
};

const shareFacebook = () => {
    takeScreenshotAndShare(
        `http://www.facebook.com/share.php?u=${url}&title=${bigText.value}`,
    );
};

const shareVK = () => {
    takeScreenshotAndShare(
        `https://vk.com/share.php?url=${url}&title=${bigText.value}`,
    );
};

const shareTelegram = () => {
    takeScreenshotAndShare(
        `https://t.me/share/url?url=${url}&text=${bigText.value}`,
    );
};

const takeScreenshotAndShare = (shareLink) => {
    const capture = document.getElementById('capture');

    let twitterImageMetaTag = document.querySelector(
        'meta[name="twitter:image"]',
    );

    html2canvas(capture, {
        width: 700,
        height: 500,
        scale: 1,
    }).then((canvas) => {
        const image = new Image();
        image.src = canvas.toDataURL();

        if (!twitterImageMetaTag) {
            twitterImageMetaTag = document.createElement('meta');
            twitterImageMetaTag.setAttribute('name', 'twitter:image');
            document.head.appendChild(twitterImageMetaTag);
        }
        twitterImageMetaTag.setAttribute('content', image.src);

        window.open(shareLink, '_blank');
    });
};

onMounted(() => {
    animateOnScroll();
});

const animateOnScroll = () => {
    const lineBig = document.getElementById('lineBig');
    const bigText = document.getElementById('bigText');
    const smallText = document.getElementById('smallText');
    const address = document.getElementById('address');

    scroll(
        animate(bigText, {
            transform: ['translateY(0)', 'translateY(-30vmax)'],
        }),
    );
        
    scroll(
        animate(smallText, {
            transform: ['translateY(0)', 'translateY(-20vmax)'],
        }),
    );

    scroll(
        animate(address, {
            transform: ['translateY(0)', 'translateY(-10vmax)'],
        }),
    );

    scroll(
        animate(lineBig, {
            transform: ['translateY(0)', 'translateY(-30vmax)'],
        }),
    );
};
</script>

<style scoped lang="scss">
section {
    display: flex;
    flex-direction: column;
    position: relative;

    .text {
        margin-top: calc(30px * 100vw / 375px);
        text-wrap: balance;

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

        a,
        p {
            margin-top: calc(10px * 100vw / 375px);

            .first {
                margin-top: 0;
            }
        }

        .icons {
            display: flex;
            margin-top: calc(15px * 100vw / 375px);

            button {
                display: flex;
                width: calc(25px * 100vw / 375px);
                height: calc(25px * 100vw / 375px);
                margin-right: calc(20px * 100vw / 375px);
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                }
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

@container (width > 810px) {
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

            a,
            p {
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
                margin-top: calc(14px * 100cqw / 1140px);

                button {
                    width: calc(25px * 100cqw / 1140px);
                    height: calc(25px * 100cqw / 1140px);
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
    background-color: #fafafa;

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

@container (width > 810px) {
    article {
        margin-top: calc(0px * 100cqw / 968px);
        min-height: calc(504px * 100cqw / 968px);
        flex-direction: row;

        .text {
            .name {
                font-size: calc(36px * 100cqw / 968px);
                max-width: 100%;
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
