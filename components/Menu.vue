<template>
    <ul id="menu">
        <img :src="line" class="line" alt="" />
        <li class="first" @click="closeMenu"><a href="#resume">Резюме</a></li>
        <li @click="closeMenu"><a href="#aboutMe">О себе</a></li>
        <li class="last" @click="closeMenu"><a href="#skills">Навыки</a></li>

        <button @click="closeMenu">
            <img :src="close" class="close" alt="" />
        </button>

        <img :src="hourglass" class="hourglass" alt="" />
    </ul>
</template>

<script setup>
import line from '@/assets/images/lineHeader.svg';
import close from '@/assets/images/close.svg';
import hourglass from '@/assets/images/hourglass.png';
import { animate } from 'motion';

const closeMenu = () => {
    const menu = document.getElementById('menu');
    document.body.style.overflowY = 'visible';

    animate(
        menu,
        { transform: ['translateY(0)', 'translateY(-100%)'] },
        { duration: 0.3, easing: 'ease-out' },
    );
};
</script>

<style scoped lang="scss">
// nav 
ul {
    //overflow-x: hidden; 
    overflow: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    width: 100%;
    height: 130vh;
    //height: 100lvh;
    z-index: 7;
    top: 0;
    left: 0;
    font-size: calc(26px * 100vw / 375px);
    font-weight: 700;
    list-style-type: none;
    padding-top: calc(20px * 100vw / 375px);
    padding-left: calc(40px * 100vw / 375px);
    transform: translateY(-100%);

    li {
        margin-top: calc(40px * 100vw / 375px);
        cursor: pointer;
    }
    .first {
        margin-top: calc(41px * 100vw / 375px);
    }

    .line {
        width: 10%;
        position: absolute;
        top: calc(40px * 100vw / 375px);
        left: calc(70px * 100vw / 375px);
        z-index: -1;
    }

    .close {
        position: absolute;
        top: calc(30px * 100vw / 375px);
        right: calc(20px * 100vw / 375px);
        width: calc(21px * 100vw / 375px);
    }

    .hourglass {
        z-index: -1;
        width: calc(463.67px * 100vw / 375px);
        margin-top: calc(-33px * 100vw / 375px);
        margin-left: calc(-93px * 100vw / 375px);
        pointer-events: none;
    }
}
</style>
