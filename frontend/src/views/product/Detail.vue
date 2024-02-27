<template>
    <Header></Header>

    <h1>PRODUCT DETAIL VIEW</h1>

    <Footer></Footer>
</template>

<script setup>
    import Header from "@/components/layouts/Header.vue";
    import Footer from "@/components/layouts/Footer.vue";
    import { onMounted, ref, reactive, watchEffect } from 'vue';
    import { useProductStore } from '@/stores/product';
    import { useRoute } from "vue-router";
    
    const route = useRoute();
    const productStore = useProductStore();
    const productId = ref(0);
    const product = reactive({});

    onMounted(async () => await productStore.fetchProductsData());

    watchEffect(async () => {
      productId.value = parseInt(route.params.product_id);
      if (productId.value) Object.assign(product, productStore.productById(productId.value));
    });

    const selectedImage = ref(null);
    const mouseX = ref(0);
    const mouseY = ref(0);
    const zoom = ref(1);

    /**
     * 
     * @param {*} image 
     */
    const handleMouseEnter = (image) => {
        selectedImage.value = image;
    };

    /**
     * 
     */
    const handleMouseLeave = () => {
        selectedImage.value = null;
        resetZoom();
    };

    /**
     * 
     * @param {*} event 
     */
    const handleMouseMove = (event) => {
        if (!selectedImage.value) return;

        const img = event.target.getBoundingClientRect();
        mouseX.value = (event.clientX - img.left - (img.width/2)) * -1;
        mouseY.value = (event.clientY - img.top - (img.height/2)) * -1;
        zoom.value = 4;
    };

    /**
     * 
     */
    const resetZoom = () => {
        mouseX.value = 0;
        mouseY.value = 0;
        zoom.value = 1;
    };
</script>