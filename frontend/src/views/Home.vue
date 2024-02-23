<template>
    <header></header>

    <h1>HOME VIEW</h1>

    <ProductCarousel
            :top="4"
    ></ProductCarousel>

    <Footer></Footer>
</template>

<script setup>
    import Header from "@/components/layouts/Header.vue";
    import Footer from "@/components/layouts/Footer.vue";
    import ProductCarousel from "@/components/product/ProductCarousel.vue";
</script>