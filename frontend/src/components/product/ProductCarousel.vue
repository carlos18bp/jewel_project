<template>
    <h1>PRODUCT CAROUSEL COMPONENT</h1>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import { useProductStore } from '@/stores/product';

    const props = defineProps({
        top: Number,
    });

    const productStore = useProductStore();
    const topProducts = ref([]); 

    onMounted(async () => {
        await productStore.fetchProductsData();
        topProducts.value = productStore.products.slice(0, props.top);
    });
</script>