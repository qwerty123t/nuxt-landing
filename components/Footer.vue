<template>
    <div>
        <img :src="hands" alt="" />
    </div>
</template>

<script setup>
    import hands from '@/assets/images/hands.png';
</script>

<style scoped lang="scss">

    div {
        overflow: hidden;
        display: flex;
        flex-direction: column;

        img {
            width: 100vw;
            margin-top: calc(40px * 100vw / 375px);
            margin-left: calc(-20px * 100vw / 375px);
        }

    }

</style>