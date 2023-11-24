<template>
    <div>
      <img :src="rocket" alt="Rocket preloader" @load="handleImageLoad" ref="rocketImg"/>
    </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import rocket from '@/assets/images/preloader.png';
  let startTime;
  const rocketImg = ref(null);

  onMounted(() => {
    loadImage();
  });

  const loadImage = () => {
    startTime = performance.now();
    const img = new Image();
    img.src = rocket;

    // Событие decode вместо load. 
    // Потому что браузеру ещё нужно декодировать картинку после загрузки
    img.decode().then(() => handleImageDecode());
  };

  const handleImageDecode = () => {
    const endTime = performance.now();
    const decodeTime = (endTime - startTime).toFixed(0);
    console.log(`Изображение декодировано за ${decodeTime} миллисекунд`);
    
    animateRocket(decodeTime);
  };

  const animateRocket = (decodeTime) => {
    const rocketElement = rocketImg.value;

    const animationDuration = clamp(330, decodeTime * 10, 2000);
    rocketElement.style.transition = `transform ${animationDuration}ms ease-in`;
    
    rocketElement.style.transform = 'translateX(70vw)';
    console.log(`transform ${rocketElement.style.transition}ms ease-in`);
  };
  
  function clamp(min, value, max) {
    return Math.min(Math.max(value, min), max);
  }
</script>

<style scoped lang="scss">
  div {
    img {
      width: 10vw;
    }
  }
</style>

