<template>
    <Header></Header>

    <div class="flex flex-col space-y-8">
        <section class="bg-cover bg-home-1 h-screen pt-80 px-24 space-y-4">
            <p class="text-4xl">the autumn equinox</p>
            <p> 
                Fall has arrived<br>
                Shop for our new releases starting today.
            </p>
            <button class="uppercase border-2 w-32 p-2">
                <RouterLink :to="{ name: 'products' }">
                    Shop now
                </RouterLink>
            </button>
        </section>

        <section class="h-60">
            <ProductCarousel
            :top="4"
            ></ProductCarousel>
        </section>

        <section class="flex h-96">
            <img class="basis-2/5 object-cover" src="@/assets/images/home/home_2.png" alt="logo image">
            <div class="bg-black space-y-8 text-white p-32 basis-3/5">
                <p class="text-xl">During the golden hour</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis.<br>

                    Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac.
                </p>
            </div>
        </section>

        <section class="flex h-96">
            <div class="bg-cream space-y-8 text-black p-32 basis-3/5">
                <p class="text-3xl">Gifts of the season</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. 
                </p>
                <button class="uppercase border-2 w-32 border-black p-2">
                    <RouterLink :to="{ name: 'products' }">
                        Shop now
                    </RouterLink>
                </button>
            </div>
            <img class="basis-2/5 object-cover" src="@/assets/images/home/home_3.png" alt="logo image">

        </section>

        <section class="flex h-96">
            <img class="basis-1/2 object-cover" src="@/assets/images/home/home_4.jpg" alt="logo image">
            <div class="bg-black space-y-8 text-white p-20 basis-1/2">
                <p class="text-xl">What were we made for?</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. 

                    Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac. 
                </p>
                <button class="uppercase border-2 w-32 border-white p-2">
                    <RouterLink :to="{ name: 'about_us' }">
                        About Us
                    </RouterLink>
                </button>
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