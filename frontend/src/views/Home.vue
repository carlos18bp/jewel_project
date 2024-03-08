<template>
    <Header></Header>

    <div class="flex flex-col">
        <section class="bg-cover bg-home-1 h-screen pt-80 px-24 space-y-16">
            <h1 class="text-8xl text-white font-bold">the autumn equinox</h1>
            <h2 class="text-white text-4xl font-regular"> 
                Fall has arrived<br>
                Shop for our new releases starting today.
            </h2>
            <button class="uppercase border-2 w-32 p-2 text-white font-regular">
                <RouterLink :to="{ name: 'products' }">
                    Shop now
                </RouterLink>
            </button>
        </section>

        <section class=" py-16">
            <ProductCarousel
            :top="4"
            ></ProductCarousel>
        </section>

        <section class="flex">
            <img class="basis-2/5 object-cover" src="@/assets/images/home/home_2.png" alt="logo image">
            <div class="bg-black space-y-8 text-white p-52 basis-3/5 flex align-middle">
                <div class="grid gap-6">
                    <h2 class="text-6xl font-bold">During the golden hour</h2>
                    <p class="text-3xl font-regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis.<br>
    
                        Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac.
                    </p>
                </div>
            </div>
        </section>

        <section class="flex py-32">
            <div class="bg-cream space-y-8 text-black p-32 basis-3/5">
                <h2 class="text-6xl font-bold">Gifts of the season</h2>
                <p class="text-3xl font-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. 
                </p>
                <button class="uppercase border-2 w-32 border-black p-2 font-regular">
                    <RouterLink :to="{ name: 'products' }">
                        Shop now
                    </RouterLink>
                </button>
            </div>
            <img class="basis-2/5 object-cover" src="@/assets/images/home/home_3.png" alt="logo image">

        </section>

        <section class="flex bg-black">
            <img class="basis-1/2 object-cover" src="@/assets/images/home/home_4.png" alt="logo image">
            <div class="flex items-center basis-1/2">
                <div class=" space-y-8 text-white p-20 inline-block">
                    <h2 class="text-6xl font-bold">What were we made for?</h2>
                    <p class="text-3xl font-regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. 
    
                        Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac. 
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
    </div>
    
</template>

<script setup>
    import Header from "@/components/layouts/Header.vue";
    import Footer from "@/components/layouts/Footer.vue";
    import ProductCarousel from "@/components/product/ProductCarousel.vue";
</script>