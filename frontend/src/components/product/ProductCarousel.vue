<template>

  <div class=" xl:mx-auto w-full px-4 lg:max-w-7xl lg:px-8">
        <h2 class="text-center text-6xl font-special-regular">Popular</h2>
        <p class="text-center text-3xl font-italic mt-4">Indulge in what we offer.</p>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in topProducts" :key="product.id" class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="`/api/${product.images[0].image_url}`" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 grid justify-between">
            <div>
              <h3 class="text-2xl font-regular text-black">
                <RouterLink
                    v-if="product.id"       
                    :to="{ name: 'product', 
                    params: { product_id: product.id } }">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.title }}
                </RouterLink>
              </h3>
            </div>
            <p class="text-xl font-regular text-gray-400">$ {{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>

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