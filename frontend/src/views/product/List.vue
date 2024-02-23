<template>
    <header></header>

    <h1>PRODUCT LIST VIEW</h1>

    <Footer></Footer>
</template>

<script setup>
    import Header from "@/components/layouts/Header.vue";
    import Footer from "@/components/layouts/Footer.vue";
    import { computed, onMounted, ref } from "vue";
    import { useProductStore } from '@/stores/product';

    const productStore = useProductStore();
    const products = ref([]);
    const currentPage = ref(1);
    const productsPerPage = 6;
    const isProductsLoaded = ref(false);

    onMounted(async () => {
        await productStore.fetchProductsData();
        products.value = productStore.products;

        isProductsLoaded.value = true;
    });

     // Calculate the total number of pages
     const totalPages = computed(() => {
        if (isProductsLoaded.value) {
            return Math.ceil(products.value.length / productsPerPage);
        }
        return 0;
    });

    // Calculate the Products to display on the current page
    const paginatedProducts = computed(() => {
        if (isProductsLoaded.value) {
        const start = (currentPage.value - 1) * productsPerPage;
        const end = start + productsPerPage;
        return products.value.slice(start, end);
        }
        return [];
    });

    // Property to store the scroll position
    const scrollPosition = ref(0);

    // Function to go to a specific page
    const goToPage = (page) => {
        if (isProductsLoaded.value && page >= 1 && page <= totalPages.value) {
            // Save current scroll position
            scrollPosition.value = window.scrollY;
            currentPage.value = page;

            setTimeout(() => {
                window.scrollTo(0, scrollPosition.value);
            }, 0);
        }
    };
</script>