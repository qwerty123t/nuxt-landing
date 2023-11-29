<template>
    <Preloader />
    <div class="container">
        <ButtonTop />
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
    import ButtonTop from '~/components/ButtonTop.vue';
    import Header from '~/components/Header.vue';
    import Hero from '~/components/Hero.vue';
    import ExperienceAndEducation from '~/components/ExperienceAndEducation.vue';
    import LineAfterEducation from '~/components/LineAfterEducation.vue';
    import Skills from '~/components/Skills.vue';
    import Hands from '~/components/Hands.vue';
</script>




<style lang="scss">

    // reset
    *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *, [contenteditable])) {
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
        font-family: "SF-Pro-Display";
        src: local("SF Pro Display"),
            url("../assets/fonts/SF-Pro-Display/SFProDisplay-Regular.woff2") format("woff2");
        font-weight: 400;
    }

    @font-face {
        font-family: "SF-Pro-Display";
        src: local("SF Pro Display"),
            url("../assets/fonts/SF-Pro-Display/SFProDisplay-Bold.woff2") format("woff2");
        font-weight: 700;
    }
    
    html {
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
    }

    body {
        background-color: #FAFAFA;
        color: #282A33;
        font-family: 'SF-Pro-Display', 'SF Pro Display', system-ui, -apple-system, sans-serif;
    }
    
    // В макете контейнер обладает шириной 1140px. А весь макет шириной 1440px
    // 810 px это 79.16% от брейкпоинта 1025px 
    .container {
        container-type: inline-size;
        width: calc(335px * 100% / 375px); // = 89.33%
        max-width: 810px; // 79.16% от 1024px
        margin: 0 auto;
    }


    @media (width >= 1025px) {
        .container {
            width: calc(1140px * 100% / 1440px); // = 79.16%
            max-width: 1800px;
        }
    }

</style>