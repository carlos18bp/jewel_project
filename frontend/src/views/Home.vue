<template>
    <Header></Header>
            <section class="py-16">
                <h1 class="text-center text-3xl md:text-4xl xl:text-5xl font-mayan">THIS IS A GOD'S COMPANY<br>
                    <span class="text-red">M</span><span class="text-green">A</span><span class="text-purple">R</span><span class="text-blue">I</span><span class="text-yellow">A</span>
                    <span class="text-pink"> M</span><span class="text-blue">E</span><span class="text-red">X</span><span class="text-yellow">I</span><span class="text-purple">A</span><span class="text-pink">N</span> 
                    <span class="text-green"> D</span><span class="text-red">E</span><span class="text-purple">S</span><span class="text-blue">I</span><span class="text-green">G</span><span class="text-yellow">N</span> 
                    <span class="text-pink"> J</span><span class="text-yellow">E</span class="text-pink"><span class="text-purple">W</span><span class="text-blue">L</span><span class="text-green">R</span><span class="text-red">Y</span>
                </h1>
                <h2 class="text-center text-3xl md:text-4xl xl:text-5xl font-medium mt-8">Whit your purchase you are helping the<br>UNRefugee Agency UNrefugees.org</h2>
            </section>

            <section>
                <div class="relative xl:h-screen grid grid-cols-3">
                    <div class="flex items-end">
                        <img src="@/assets/images/home/collage/1.jpeg" alt="Earrings">
                    </div>
                    <div class="flex items-center">
                        <img src="@/assets/images/home/collage/2.jpeg" alt="Earrings">
                    </div>
                    <div class="flex items-start">
                        <img src="@/assets/images/home/collage/3.jpeg" alt="Earrings">
                    </div>
                </div>
            </section>
        <section class="py-16">
            <ProductCarousel
            :top="4"
            ></ProductCarousel>
        </section>

        <section class="grid xl:flex">
            <img class="object-cover w-full xl:w-2/5" src="@/assets/images/home/home_2.png" alt="logo image">
            <div class="bg-black text-white p-4 md:p-16 py-16 xl:p-16 flex align-middle">
                <div class="grid">
                    <h2 class="text-4xl md:text-5xl xl:text-6xl font-mayan text-pink">During the golden hour</h2>
                    <p class="text-2xl md:text-2xl xl:text-3xl mt-8 font-medium">
                        We are a Mexican Family Company founded in 2002, all our designs are handmade woth hight quality materials, like .925 Mexican Silver, River Pearl, Authentic Leather, Natural Stones, Crystals, 18K Gold Plated Accesories and Wire, Every design are made with the heart.
                    </p>
                </div>
            </div>
        </section>

        <section class="grid xl:flex py-32">
            <div class=" space-y-8 text-black p-4 md:p-8 xl:p-16">
                <h2 class="text-4xl md:text-5xl xl:text-6xl font-mayan text-yellow">Gifts of the season</h2>
                <p class="text-xl md:text-2xl xl:text-3xl font-medium">
                    Most of our handmade Jewelry are unique pieces, if you are looking for something original, to you or your friends come on and check out, we have Jewel for any ocassion. 
                </p>
                <button class="uppercase border-2 w-32 border-black p-2 font-mayan tracking-widest hover:bg-black hover:text-white">
                    <RouterLink :to="{ name: 'catalog' }">
                        Shop now
                    </RouterLink>
                </button>
            </div>
            <img class="w-full object-cover" src="@/assets/images/home/home_3.png" alt="logo image">
        </section>

        <section class="grid xl:flex bg-black">
            <img class="object-cover" src="@/assets/images/home/home_4.png" alt="logo image">
            <div class="flex items-center">
                <div class="text-white p-4 md:p-8 xl:p-16 space-y-16">
                    <h2 class="text-4xl md:text-5xl xl:text-6xl font-mayan text-green">What were we made for?</h2>
                    <p class="text-xl md:text-2xl xl:text-3xl font-medium">
                        We are excited to think that different people around the world can acquire our designs and bring us with them, because each design carries a piece or our culture.
                    </p>
                    <button class="uppercase border-2 w-32 border-white p-2 font-mayan tracking-widest hover:bg-white hover:text-black">
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