<template>
    <img :src="line" alt="" class="line-experience"/>
</template>

<script setup>
    import line from '@/assets/images/lineExperienceBig.svg';
</script>

<style lang="scss">
    .line-experience {
        display: none;
    }
    
    @container (min-width: 810px) {
        .line-experience {
            display: flex;
            width: 100%;
            margin-top: calc(8px * 100cqw / 1140px);
            margin-left: calc(-10px * 100cqw / 1140px);
        }
    }
</style>