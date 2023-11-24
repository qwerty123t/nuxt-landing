<template>
    <img :src="hands" alt="" class="hands"/>
</template>

<script setup>
    import hands from '@/assets/images/hands.png';
</script>

<style lang="scss">
    .hands {
        display: flex;
        width: 100vw;
        margin-top: calc(45px * 100% / 375px);
        margin-bottom: calc(40px * 100% / 375px);
        margin-left: calc(-23px * 100% / 375px);
    }
    
    @container (min-width: 810px) {
        .hands {
            width: calc(512px * 100cqw / 1140px);
            margin-top: calc(192px * 100cqw / 1140px);
            margin-bottom: calc(50px * 100cqw / 1140px);
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>