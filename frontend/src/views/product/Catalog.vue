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
        <div class="mt-6 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-2">

          <div class="group relative cursor-pointer" @click="redirectToCategory(1)">
            <div class=" w-full overflow-hidden rounded-md relative mb-4">
              <img
                src="@/assets/images/product/Bracelet/Bracelet.jpg"
                class="object-cover object-center h-full w-full"
                alt="Bracelet Image"
              />
              <!-- Overlay oscuro -->
              <div class="absolute inset-0 bg-black opacity-50"></div>
              <!-- Texto centrado -->
              <div class="absolute inset-0 flex items-center justify-center">
                <h2 class="text-white text-6xl font-bold">Bracelet</h2>
              </div>
            </div>
          </div>

          <div class="group relative cursor-pointer"  @click="redirectToCategory(2)">
            <div class=" w-full overflow-hidden rounded-md relative mb-4">
              <img
                src="@/assets/images/product/Neckles/Neckles.jpg"
                class="object-cover object-center h-full w-full"
                alt="Bracelet Image"
              />
              <!-- Overlay oscuro -->
              <div class="absolute inset-0 bg-black opacity-50"></div>
              <!-- Texto centrado -->
              <div class="absolute inset-0 flex items-center justify-center">
                <h2 class="text-white text-6xl font-bold">Neckles</h2>
              </div>
            </div>
          </div>

          <div class="group relative cursor-pointer" @click="redirectToCategory(3)">
            <div class=" w-full overflow-hidden rounded-md relative mb-4">
              <img
                src="@/assets/images/product/Earring/Earring.jpg"
                class="object-cover object-center h-full w-full"
                alt="Bracelet Image"
              />
              <!-- Overlay oscuro -->
              <div class="absolute inset-0 bg-black opacity-50"></div>
              <!-- Texto centrado -->
              <div class="absolute inset-0 flex items-center justify-center">
                <h2 class="text-white text-6xl font-bold">Earring</h2>
              </div>
            </div>
          </div>

          <div class="group relative cursor-pointer" @click="redirectToCategory(4)">
            <div class=" w-full overflow-hidden rounded-md relative mb-4">
              <img
                src="@/assets/images/product/Jewel/Jewel.jpg"
                class="object-cover object-center h-full w-full"
                alt="Bracelet Image"
              />
              <!-- Overlay oscuro -->
              <div class="absolute inset-0 bg-black opacity-50"></div>
              <!-- Texto centrado -->
              <div class="absolute inset-0 flex items-center justify-center">
                <h2 class="text-white text-6xl font-bold">Jewel</h2>
              </div>
            </div>
          </div>

        </div>

       
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import { useRouter } from "vue-router";

const router  = useRouter();

const redirectToCategory = (categoryId) => {
  router.push({ name: 'list_products', params: { categoryId: categoryId }});
}
</script>
