<template>
    <a href="#">
        <span id="number">0</span>
        <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" class="bg" />
            <circle cx="50" cy="50" r="30" pathLength="1" class="progress" />
        </svg>
    </a>
</template>


<style scoped lang="scss">
    a {
        position: sticky;
        margin-left: auto;
        top: calc(100lvh - calc(50px * 100vw / 375px));
        right: 0;
        width: calc(50px * 100vw / 375px);
        height: calc(50px * 100vw / 375px);  
        align-self: end;
        background-color: transparent;
        border-radius: 50%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        justify-items: center;
        z-index: 5;

        span {
            z-index: 6;
            grid-column: 1 / -1;
            grid-row: 1 / -1;
            color: #282A33;
            font-size: calc(14px * 100vw / 375px);  
        }

        svg {
            position: fixed;
            position: sticky;
            top: 20px;
            left: 20px;
            transform: rotate(-90deg);
            z-index: 5;
            grid-column: 1 / -1;
            grid-row: 1 / -1;
        }

        circle {
            stroke-dashoffset: 0;
            stroke-width: calc(1px * 100vw / 375px);
            fill: none;
            r: calc(30px * 100vw / 375px);
        }

        .bg {
            stroke: #282A33;
        }

        .progress {
            stroke: #D2233C;
            stroke-dasharray: 0, 1;
        }

    }

    
    @container  (width > 810px) {
        a {
            top: calc(100vh - calc(75px * 100cqw / 1140px));
            top: calc(100lvh - calc(75px * 100cqw / 1140px));
            width: calc(60px * 100cqw / 1140px);
            height: calc(60px * 100cqw / 1140px);

            span {
                font-size: calc(14px * 100cqw / 1140px);
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


<script setup>
    import { onMounted } from 'vue';
    import { animate, scroll } from "motion";

    onMounted(() => {
        animateOnScroll();
    });

    const animateOnScroll = () => {
        const number = document.getElementById("number")

        scroll(
            animate(
                (progress) => number.innerText = Math.round(progress * 100) + '%',
                { duration: 2, easing: "ease-out" }
            )
        );
        scroll(
            animate(
                ".progress", 
                { strokeDasharray: ["0,1", "1,1"] }
            )
        );

    }  
</script>
