<template>
    <Header></Header>

    <div v-if="product" class="relative isolate px-6 lg:px-8">
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                <!-- Image gallery -->
                <TabGroup as="div" class="flex flex-col-reverse">
                    <!-- Image selector -->
                    <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                        <TabList class="grid grid-cols-4 gap-6">
                            <Tab v-for="image in product.images" :key="image.id" class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-black_p hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 transition-transform duration-300 transform hover:scale-110">
                                <span class="sr-only"> ----- </span>
                                <span class="absolute inset-0 overflow-hidden rounded-md">
                                    <img :src="`${image.image_url}`" alt="" class="h-full w-full object-cover object-center" />
                                </span>
                                <span :class="[selected ? 'ring-primary_p' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']" aria-hidden="true" />
                            </Tab>
                        </TabList>
                    </div>

                    <TabPanels class="aspect-h-1 aspect-w-1 w-full">
                        <TabPanel v-for="image in product.images" :key="image.id">
                            <img :src="`${image.image_url}`" alt=" ----- " class="h-full w-full object-cover object-center sm:rounded-lg" @mousemove="handleMouseMove" @mouseenter="handleMouseEnter(image)" @mouseleave="handleMouseLeave"/>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>


                <!-- Product info -->

                <div v-if="selectedImage" class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
                    <img
                              :src="`${selectedImage ? selectedImage.image_url : image.image_url}`"
                              alt=" ---- "
                              class="h-full w-full object-cover"
                              :style="{ transform: `scale(${4}) translate(${mouseX}px, ${mouseY}px)` }"
                    />
                  </div>
                </div>

                <div v-if="!selectedImage" class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">

                  <div class="mt-3 grid justify-between">
                      <h1 class="inline-block text-4xl font-special-regular">{{ product.title }}</h1>
                      <h2 class="sr-only">Product information</h2>
                      <p class="inline-block text-4xl tracking-tight font-bold text-gray-500">$ {{ product.price }}</p>
                  </div>

                <!-- Reviews -->
                <div class="mt-3">
                    <div class="mt-3">
                      <p class="font-regular text-lg">{{ product.description }}</p>
                    </div>
                    <div class="mt-3">
                        <div class="w-1/2 flex items-center justify-center bg-amber-400 p-4 rounded-full cursor-pointer">
                            <img src="@/assets/images/product/payPalLogo.png" alt="PayPal Logo">
                        </div>
                    </div>
                </div>


                <form class="mt-6">
                    <div class="mt-5 flex">
                    <button type="submit" class="flex justify-center max-w-xs flex-1 items-center rounded-md border border-transparent bg-primary_p px-2 py-3 text-base font-medium text-white hover:bg-terciary_p focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terciary_p sm:w-full">
                      <div>
                        <i class="bi bi-whatsapp text-2xl me-2.5"></i>
                        <a class="text-2xl ms-2.5">Get In Touch</a>
                      </div>
                    </button>
                    </div>
                </form>
                <!--

                  <section aria-labelledby="details-heading" class="mt-12">
                      <h2 id="details-heading" class="sr-only">Additional details</h2>
  
                      <div class="divide-y divide-primary_p border-b border-primary_p">
                      <Disclosure class="" as="div" v-for="detail in product.details" :key="detail.name" v-slot="{ open }">
                          <h3>
                          <DisclosureButton class="group relative flex w-full items-center justify-between py-6 text-left">
                              <span :class="[open ? 'text-primary_p' : 'text-black_p', 'text-sm font-semibol']">{{ detail.name }}</span>
                              <span class="ml-6 flex items-center">
                              <PlusIcon v-if="!open" class="block h-6 w-6 text-primary_p group-hover:text-primary_p" aria-hidden="true" />
                              <MinusIcon v-else class="block h-6 w-6 text-primary_p group-hover:text-primary_p" aria-hidden="true" />
                              </span>
                          </DisclosureButton>
                          </h3>
                          <DisclosurePanel as="div" class="prose prose-sm pb-6">
                          <ul role="list">
                              <li v-for="item in detail.items" :key="item">{{ item }}</li>
                          </ul>
                          </DisclosurePanel>
                      </Disclosure>
                      </div>
                  </section>

                -->
                </div>
            </div>
            </div>
        </div>
    </div>
    <section class=" py-16">
            <ProductCarousel
            :top="4"
            ></ProductCarousel>
    </section>
    
    <Footer></Footer>
</template>

<script setup>
    import Header from "@/components/layouts/Header.vue";
    import Footer from "@/components/layouts/Footer.vue";
    import { onMounted, ref, reactive, watchEffect } from 'vue';
    import { useProductStore } from '@/stores/product';
    import { useRoute } from "vue-router";
    import ProductCarousel from "@/components/product/ProductCarousel.vue";
    import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    } from '@headlessui/vue'
    
    const selected = '';
    const route = useRoute();
    const productId = ref(0);
    const productStore = useProductStore();
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