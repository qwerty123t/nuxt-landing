<template>
    <div>
      <img :src="rocket" alt="Rocket preloader" />
    </div>
</template>

<script setup>
  import rocket from '@/assets/images/preloader.png';
</script>

<style scoped lang="scss">

  div {

    img {

      width: 10vw;
    }
  }

</style>