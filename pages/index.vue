<template>
    <div class="container">
        <!-- <Preloader /> -->
        <Header />
        <Hero />
        <Experience />
        <Education />
    </div>
</template>

<script>
// import Preloader from '~/components/Preloader.vue';
import Header from '~/components/Header.vue';
import Hero from '~/components/Hero.vue';
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';
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
    body {
        background-color: #FAFAFA;
        color: #282A33;
        font-family: 'SF Pro Display', system-ui, -apple-system, sans-serif;
    }
    .container {
        container-type: inline-size;
    }

</style>