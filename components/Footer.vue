<template>
    <div>
        <img :src="heart" alt="Rocket preloader" />
        <button>Top</button>
    </div>
</template>

<script setup>
    import heart from '@/assets/images/heart.png';
</script>

<style scoped>
    img {
        width: 10vw;
    }
</style>