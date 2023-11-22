<template>
    <div class="container" id="container">
        <!-- <Preloader /> -->
        <ButtonTop />
        <Header />
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Footer />
    </div>
</template>

<script>
// import Preloader from '~/components/Preloader.vue';
import ButtonTop from '~/components/ButtonTop.vue';
import Header from '~/components/Header.vue';
import Hero from '~/components/Hero.vue';
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';
import Skills from '~/components/Skills.vue';
import Footer from '~/components/Footer.vue';
</script>

<style lang="scss">

    // reset
    *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
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
        width: calc(335px * 100% / 375px);
        max-width: 1800px;
        margin: 0 auto;
    }

    @media (min-width: 1025px) {
        .container {
            width: calc(1140px * 100% / 1440px);
        }
    }

</style>