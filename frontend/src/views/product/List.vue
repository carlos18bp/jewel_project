<template>
  <Header></Header>

  <div class="flex flex-col space-y-8">
    <section
      class="flex flex-col bg-cover bg-product-1 p-32 text-white justify-center items-center"
    >
      <div class="text-center">
        <h2 class="text-lg uppercase font-regular">Fall Release</h2>
        <h1 class="text-6xl font-regular">the autumn equinox</h1>
        <p class="p-12 text-3xl font-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod<br />
          tempor incididunt ut labore et dolore magna aliqua.<br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>

    <div class="col-span-4 md:col-span-3">
      <div class="mx-auto pt-8 pb-16 max-w-7xl">
        <div class="mt-6 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            class="group relative"
          >
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 aspect-none group-hover:opacity-75 h-80 mb-4"
            >
              <img
                :src="`/api/${product.images[0].image_url}`"
                class="object-cover object-center h-full w-full"
              />
            </div>
            <div class="grid">
              <div>
                <h3 class="text-2xl font-regular text-gray-700">
                  <RouterLink
                    v-if="product.id"
                    :to="{
                      name: 'product',
                      params: { product_id: product.id },
                    }"
                  >
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.title }}
                  </RouterLink>
                </h3>
              </div>
              <p class="text-xl font-regular text-gray-900">
                $ {{ product.price }}
              </p>
            </div>
          </div>
        </div>

        <nav
          class="flex items-center justify-between border-t border-gray-200 px-4"
        >
          <!-- Previous page button -->
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-terciary_p hover:text-terciary_p"
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
          >
            <ArrowLongLeftIcon
              class="mr-3 h-5 w-5 text-primary_p"
              aria-hidden="true"
            />
            Previous
          </a>

          <!-- Show page numbers -->
          <div>
            <template v-for="page in totalPages" :key="page">
              <a
                href="#"
                class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium"
                :class="{
                  'border-primary_p text-primary_p': currentPage === page,
                  'text-gray-500 hover:text-terciary_p hover:border-terciary_p':
                    currentPage !== page,
                }"
                @click="goToPage(page)"
              >
                {{ page }}
              </a>
            </template>
          </div>

          <!-- Next page button -->
          <a
            href="#"
            class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-terciary_p hover:text-terciary_p"
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
          >
            Next
            <ArrowLongRightIcon
              class="ml-3 h-5 w-5 text-primary_p"
              aria-hidden="true"
            />
          </a>
        </nav>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import { computed, onMounted, ref } from "vue";
import { useProductStore } from "@/stores/product";

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
