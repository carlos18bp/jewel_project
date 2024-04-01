<template>
    <Header></Header>

            <div class="relative h-screen">
                <div class="absolute inset-0">
                    <img
                    class="w-full h-full object-cover"
                    src="@/assets/images/home/home_1.png"
                    alt="Jewel MARIA MEXICAN DESIGN JEWELRY"
                    />
                </div>
                <div class="absolute p-16 inset-0 flex items-center">
                    <div>
                        <h1 class="text-6xl text-white font-bold w-3/4">THIS IS A GOD'S COMPANY<br>MARIA MEXICAN DESIGN JEWELRY</h1>
                        <h2 class="text-white text-4xl font-regular mt-8 w-1/2"> 
                            Whit your purchase you are helping the UNRefugee Agency UNrefugees.org
                        </h2>
                        <button class="uppercase border-2 w-32 p-2 text-white font-regular mt-6 hover:text-black hover:bg-white">
                            <RouterLink :to="{ name: 'catalog' }">
                                Shop now
                            </RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        <section class="py-16">
            <ProductCarousel
            :top="4"
            ></ProductCarousel>
        </section>

        <section class="flex">
            <img class="object-cover" src="@/assets/images/home/home_2.png" alt="logo image">
            <div class="bg-black text-white p-16 flex align-middle">
                <div class="grid">
                    <h2 class="text-6xl font-bold">During the golden hour</h2>
                    <p class="text-3xl font-regular">
                        We are a Mexican Family Company founded in 2002, all our designs are handmade woth hight quality materials, like .925 Mexican Silver, River Pearl, Authentic Leather, Natural Stones, Crystals, 18K Gold Plated Accesories and Wire, Every design are made with the heart.
                    </p>
                </div>
            </div>
        </section>

        <section class="flex py-32">
            <div class="bg-cream space-y-8 text-black p-16">
                <h2 class="text-6xl font-bold">Gifts of the season</h2>
                <p class="text-3xl font-regular">
                    Most of our handmade Jewelry are unique pieces, if you are looking for something original, to you or your friends come on and check out, we have Jewel for any ocassion. 
                </p>
                <button class="uppercase border-2 w-32 border-black p-2 font-regular hover:bg-black hover:text-white">
                    <RouterLink :to="{ name: 'catalog' }">
                        Shop now
                    </RouterLink>
                </button>
            </div>
            <img class=" object-cover" src="@/assets/images/home/home_3.png" alt="logo image">
        </section>

        <section class="flex bg-black">
            <img class="object-cover" src="@/assets/images/home/home_4.png" alt="logo image">
            <div class="flex items-center">
                <div class="text-white p-16 space-y-16">
                    <h2 class="text-6xl font-bold">What were we made for?</h2>
                    <p class="text-3xl font-regular">
                        We are excited to think that different people around the world can acquire our designs and bring us with them, because each design carries a piece or our culture.
                    </p>
                    <button class="uppercase border-2 w-32 border-white p-2 font-regular">
                        <RouterLink :to="{ name: 'about_us' }">
                            About Us
                        </RouterLink>
                    </button>
                </div>
            </div>
        </section>

        <Footer></Footer>
    
</template>

<script setup>
    import Header from "@/components/layouts/Header.vue";
    import Footer from "@/components/layouts/Footer.vue";
    import ProductCarousel from "@/components/product/ProductCarousel.vue";
</script>