<template>
<Header></Header>
<InitialPic :data="initialBannerData"></InitialPic>
<section id="catalog">
  <div class="p-8">
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
          class="flex items-center justify-between border-t border-gray-200 px-4 mt-8"
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

  </div>
</section>
<Footer></Footer>
</template>
<script setup>
import Header from "@/components/layouts/Header.vue";
import InitialPic from "@/components/layouts/InitialPic.vue";
import Footer  from '@/components/layouts/Footer.vue'
import { computed, onMounted, ref } from "vue";
import { useProductStore } from "@/stores/product";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";
import BraceletImage from '@/assets/images/product/Bracelet/BraceletP.jpg';
import NecklacesImage from '@/assets/images/product/Neckles/NecklaceP.jpg';
import EarringImage from '@/assets/images/product/Earring/EarringP.jpg';
import RingImage from '@/assets/images/product/Ring/RingsP.jpg';
import JewelImage from '@/assets/images/product/Jewel/Jewel.jpg';

const url = ref()
const title = ref()
const router = useRouter();
const category_id = router.currentRoute.value.params.categoryId;
const productStore = useProductStore();
const products = ref([]);
const currentPage = ref(1);
const productsPerPage = 6;
const isProductsLoaded = ref(false);
const filteredProducts = ref()


onMounted(async () => {
  window.scrollTo({ top: 0 });
  await productStore.fetchProductsData();
  products.value = productStore.products;
  if (category_id != '5'){
    filteredProducts.value = products.value.filter(product => product.category === category_id)
  } else {
    filteredProducts.value = products.value
  }
  isProductsLoaded.value = true;
});

// Calculate the total number of pages
const totalPages = computed(() => {
  if (isProductsLoaded.value) {
    return Math.ceil(filteredProducts.value.length / productsPerPage);
  }
  return 0;
});

// Calculate the Products to display on the current page
const paginatedProducts = computed(() => {
  if (isProductsLoaded.value) {
    const start = (currentPage.value - 1) * productsPerPage;
    const end = start + productsPerPage;
    return filteredProducts.value.slice(start, end);
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

switch (category_id) {
      case '1':
        url.value = BraceletImage;
        title.value = 'Bracelet';
        break;
      case '2':
        url.value = NecklacesImage;
        title.value = 'Necklaces';
        break;
      case '3':
        url.value = EarringImage;
        title.value = 'Earrings';
        break;
      case '4':
        url.value = RingImage;
        title.value = 'Rings';
        break;
      case '5':
        url.value = JewelImage;
        title.value = 'Jewel';
        break;
    }

const initialBannerData = {
    background_image: {
      url: url,
      alt: "Initial Banner",
    },
    title: title,
    classes: "text-white",
    goToId: 'catalog'
  };
</script>