<template>
    <Header></Header>

    <div class="flex flex-col space-y-8">
        <section class="flex flex-col bg-cover bg-product-1 h-96 text-white justify-center items-center">
            <div class="text-center backdrop-opacity-30 backdrop-invert bg-white/30">
                <p class="text-lg uppercase">Fall Release</p>
                <p class="text-3xl">the autumn equinox</p>
                <p class="p-12"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>
                    tempor incididunt ut labore et dolore magna aliqua.<br>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>

        <section class="flex pl-8">
            <p class="text-lg pr-12">Necklaces</p>
            <p>With new beginnings come more pendants.</p>
        </section>

        <section class="flex pl-8">
            <p class="text-lg pr-12">Earrings</p>
            <p>Adorn your ears with the new atmosphere.</p>
        </section>

        <Footer></Footer>
    </div>
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