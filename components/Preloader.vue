<template>
    <div id="bg">
        <img id="rocket" :src="rocket" alt="Rocket preloader" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { animate } from 'motion';
import rocket from '@/assets/images/preloader.png';

let startTime;
const minimalAnimationTime = 1000; // в миллисекундах
const maximumAnimationTime = 2000;
const multiplier = 25;

onMounted(() => {
    loadImage();
});

const loadImage = () => {
    startTime = performance.now();
    const img = new Image();
    img.src = rocket;

    // Событие decode вместо load.
    // Потому что браузеру ещё нужно декодировать картинку после загрузки
    img.decode()
        .then(() => handleImageDecode())
        .catch((error) => {
            console.error('Error decoding image:', error);
            animatePreloader(500);
        });
};

const handleImageDecode = () => {
    const endTime = performance.now();
    const decodeTime = (endTime - startTime).toFixed(0);
    animatePreloader(decodeTime);
};

const animatePreloader = (decodeTime) => {
    const animationDuration = clamp(
        minimalAnimationTime,
        decodeTime * multiplier,
        maximumAnimationTime,
    );
    const durationInSeconds = fromMillisecondsToSeconds(animationDuration);
    const itsASmartphone = window.matchMedia(
        '(max-width: 700px) and (orientation: portrait)',
    ).matches;

    if (itsASmartphone) {
        animate(
            '#rocket',
            { transform: 'translate(calc(120vw + 100%), calc(-200%))' },
            {
                duration: durationInSeconds,
                easing: 'ease-in-out',
            },
        );
    } else {
        animate(
            '#rocket',
            { transform: 'translate(calc(110vw + 100%), calc(-100vh - 100%))' },
            {
                duration: durationInSeconds,
                easing: 'ease-in-out',
            },
        );
    }

    animate(
        '#bg',
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 0.3,
            delay: durationInSeconds,
            easing: 'ease-in-out',
        },
    );
};

function clamp(min, value, max) {
    return Math.min(Math.max(value, min), max);
}
function fromMillisecondsToSeconds(ms) {
    return (ms / 1000).toFixed(3);
}
</script>

<style scoped lang="scss">
div {
    position: absolute;
    position: fixed;
    opacity: 1;
    z-index: 6;
    width: 100%;
    height: 100vh;
    height: 100lvh;
    background-color: #fafafa;
    display: flex;
    align-items: flex-end;
    overflow: hidden;

    img {
        width: calc(591px * 100% / 1440px);
        aspect-ratio: 1;
        margin-left: calc(-591px * 100% / 1440px);
        margin-bottom: calc(200px * 100% / 1440px);
        rotate: -5deg;
    }
}

@media (width > 1024px) {
    div {
        img {
            rotate: unset;
            margin-bottom: calc(-591px * 100% / 1440px);
        }
    }
}
</style>
