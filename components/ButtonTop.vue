<template>
    <a href="#">
        <img id="arrow" :src="arrow" alt="" class="arrow" />
        <span id="span"><span id="number" class="number">0</span>%</span>
        <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" class="bg" />
            <circle
                id="stroke"
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                class="stroke"
            />
        </svg>
    </a>
</template>

<script setup>
import { onMounted } from 'vue';
import { animate, scroll } from 'motion';
import arrow from '@/assets/images/arrow.svg';

onMounted(() => {
    animateOnScroll();
});

const animateOnScroll = () => {
    const span = document.getElementById('span');
    const number = document.getElementById('number');
    const arrow = document.getElementById('arrow');

    scroll(
        animate(
            (progress) => {
                number.innerText = Math.round(progress * 100);

                if (progress > 0.99) {
                    span.style.opacity = 0;
                    arrow.style.opacity = 1;
                } else {
                    span.style.opacity = 1;
                    arrow.style.opacity = 0;
                }
            },
            { duration: 2, easing: 'ease-out' },
        ),
    );
    scroll(animate(stroke, { strokeDasharray: ['0,1', '1,1'] }));
};
</script>

<style scoped lang="scss">
a {
    position: sticky;
    margin-left: auto;
    top: calc(100vh - calc(80px * 100vw / 375px));
    top: calc(100lvh - calc(80px * 100vw / 375px));
    top: calc(100dvh - calc(80px * 100vw / 375px));
    right: 0;
    margin-right: calc(-18px * 100vw / 375px);
    width: calc(65px * 100vw / 375px);
    height: calc(65px * 100vw / 375px);
    align-self: end;
    background-color: transparent;
    border-radius: 50%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    z-index: 5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    .arrow {
        z-index: 6;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        opacity: 1;
        width: calc(12px * 100vw / 375px);
        transition: opacity 0.3s ease-in-out;
    }

    span {
        z-index: 6;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        color: #282a33;
        font-size: calc(14px * 100vw / 375px);
        transition: opacity 0.3s ease-in-out;
    }

    @media (width < 374px) {
        span {
            font-size: calc(10px * 100vw / 375px);
        }
    }

    svg {
        position: fixed;
        position: sticky;
        width: calc(65px * 100vw / 375px);
        height: calc(65px * 100vw / 375px);
        transform: rotate(-90deg);
        z-index: 5;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        overflow: visible;
        pointer-events: none;
    }

    circle {
        stroke-dashoffset: 0;
        stroke-width: calc(1px * 100vw / 375px);
        fill: none;
        r: min(49px, calc(22px * 100vw / 375px));
    }

    .bg {
        fill: #fafafa;
        stroke: #282a33;
    }

    .stroke {
        stroke: #d2233c;
        stroke-dasharray: 0, 1;
    }
}

@container (width > 810px) {
    a {
        top: calc(100vh - calc(140px * 100cqw / 1140px));
        top: calc(100lvh - calc(140px * 100cqw / 1140px));
        width: calc(60px * 100cqw / 1140px);
        height: calc(60px * 100cqw / 1140px);
        right: 0;
        margin-right: calc(-132px * 100cqw / 1140px);

        .arrow {
            width: calc(20px * 100cqw / 1140px);
        }
        span {
            font-size: calc(14px * 100cqw / 1140px);

            .number {
                // чтобы символ процента не прыгал при изменении ширины числа
                display: inline-block;
                width: calc(17px * 100cqw / 1140px);
                text-align: center;
            }
        }

        svg {
            width: calc(60px * 100cqw / 1140px);
            height: calc(60px * 100cqw / 1140px);
        }

        circle {
            stroke-dashoffset: 0;
            stroke-width: calc(1px * 100cqw / 1140px);
            r: calc(40px * 100cqw / 1140px);
            fill: none;
        }
    }
}
</style>
