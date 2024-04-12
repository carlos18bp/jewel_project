<template>
    <div class="relative h-screen">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          :src="props.data.background_image.url.value"
          :alt="props.data.background_image.alt"
        />
      </div>
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <h1
          class="text-6xl md:text-7xl xl:text-8xl text-center font-mayan leading-normal"
          :class="props.data.classes"
          v-html="props.data.title.value"></h1>
      </div>
      <a 
        @click.prevent="scrollToTarget"
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <img src="@/assets/images/vectors/arrow.png" alt="Arrow to down" />
      </a>
    </div>
  </template>
  
  <script setup>
    const props = defineProps(["data"]);
    console.log(props.data.background_image.url.value)
    const scrollToTarget = () => {
      const targetId = props.data.goToId;
      
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  </script>