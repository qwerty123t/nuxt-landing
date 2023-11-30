<template>
    <div>
        <img :src="line" alt="" class="line-experience" />
    </div>
</template>

<script setup>
import line from '@/assets/images/lineExperienceBig.svg';
</script>

<style lang="scss" scoped>
div {
    display: none;
}

@container (min-width: 810px) {
    div {
        display: flex;
        width: 100%;

        .line-experience {
            display: flex;
            width: 100%;
            margin-top: calc(8px * 100cqw / 1140px);
            margin-left: calc(-10px * 100cqw / 1140px);
        }
    }
}
</style>
