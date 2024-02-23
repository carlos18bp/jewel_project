<template>
  <div>
    <RouterView/>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { RouterView } from "vue-router";
  import { useProductStore } from '@/stores/product';
  
  const productStore = useProductStore();

  onMounted(async () => await productStore.init());
</script>
