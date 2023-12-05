<template>
    <Head lang="ru">
        <Title>Тестовое</Title>
        <Meta
            name="description"
            property="og:description"
            content="разработчик"
        />
        <Meta property="og:title" content="Резюме" />
        <Meta property="og:image" content="../images/share.jpg" />
        <Meta
            property="og:url"
            content="https://nuxt-landing-three.vercel.app"
        />
    </Head>

    <Preloader />
    <Menu />

    <ButtonTop />
    <div id="container" class="container">
        <Header />
        <Hero />
        <ExperienceAndEducation />
        <LineAfterEducation />
        <Skills />
        <Hands />
    </div>
</template>

<script setup>
import Preloader from '~/components/Preloader.vue';
import Menu from '~/components/Menu.vue';
import ButtonTop from '~/components/ButtonTop.vue';
import Header from '~/components/Header.vue';
import Hero from '~/components/Hero.vue';
import ExperienceAndEducation from '~/components/ExperienceAndEducation.vue';
import LineAfterEducation from '~/components/LineAfterEducation.vue';
import Skills from '~/components/Skills.vue';
import Hands from '~/components/Hands.vue';
import Lenis from '@studio-freight/lenis';

onMounted(() => {
    animateOnScroll();
});

const animateOnScroll = () => {
    const lenis = new Lenis({});

    // lenis.on('scroll', (e) => {
    //     console.log(e);
    // });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const skills = document.getElementById('skills');
    const resume = document.getElementById('resume');
    const aboutMe = document.getElementById('aboutMe');
    const skills2 = document.getElementById('skills2');
    const resume2 = document.getElementById('resume2');
    const aboutMe2 = document.getElementById('aboutMe2');
    const buttonTop = document.getElementById('buttonTop');

    skills.onclick = scrollToSkills;
    resume.onclick = scrollToResume;
    aboutMe.onclick = scrollToAboutMe;
    skills2.onclick = scrollToSkills;
    resume2.onclick = scrollToResume;
    aboutMe2.onclick = scrollToAboutMe;
    buttonTop.onclick = scrollToTop;

    const height = document.body.scrollHeight;

    function scrollToSkills() {
        lenis.scrollTo(height * 0.9);
    }

    function scrollToResume() {
        lenis.scrollTo(height * 0.1);
    }

    function scrollToAboutMe() {
        lenis.scrollTo(height * 0.5);
    }

    function scrollToTop() {
        lenis.scrollTo(0);
    }
};
</script>

<style lang="scss">
// reset
*:where(
        :not(html, iframe, canvas, img, svg, video, audio):not(
                svg *,
                symbol *,
                [contenteditable]
            )
    ) {
    all: unset;
    display: revert;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

// defaults

@font-face {
    font-family: 'SF-Pro-Display';
    src:
        local('SF Pro Display'),
        url('../assets/fonts/SF-Pro-Display/SFProDisplay-Regular.woff2')
            format('woff2');
    font-weight: 400;
}

@font-face {
    font-family: 'SF-Pro-Display';
    src:
        local('SF Pro Display'),
        url('../assets/fonts/SF-Pro-Display/SFProDisplay-Bold.woff2')
            format('woff2');
    font-weight: 700;
}

html {
    //scroll-behavior: smooth;
    scroll-padding-top: 100px;
    overflow-x: hidden;
    width: 100%;
    min-height: 100%;
}

body {
    overflow-x: hidden;
    background-color: #fafafa;
    color: #282a33;
    font-family:
        'SF-Pro-Display',
        'SF Pro Display',
        system-ui,
        -apple-system,
        sans-serif;
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    min-height: 100%;
}

// В макете контейнер обладает шириной 1140px. А весь макет шириной 1440px
// 810 px это 79.16% от брейкпоинта 1025px
.container {
    container-type: inline-size;
    width: calc(335px * 100% / 375px); // = 89.33%
    max-width: 810px; // 79.16% от 1024px
    margin: 0 auto;
    //overflow-x: hidden;
}

@media (width >= 1025px) {
    .container {
        width: calc(1140px * 100% / 1440px); // = 79.16%
        max-width: 1800px;
    }
}
</style>
