<template>
    <Header></Header>

            <div class="relative h-screen">
                <div class="absolute inset-0">
                    <img
                    class="w-full h-full object-cover"
                    src="@/assets/images/aboutUs/about_us_1.png"
                    alt="MARIA MEXICAN DESIGN JEWELRY About Us"
                    />
                </div>
                <div class="absolute p-4 md:p-8 xl:p-16 inset-0 flex items-center">
                    <div>
                        <h1 class="text-6xl text-white font-mayan w-full xl:w-1/2 border-2 border-transparent border-b-white/50 pb-6">About Us</h1>
                        <p class="text-white text-xl font-medium mt-8 w-full xl:w-1/2"> 
                            We are a Mother and Daughter Designers, our love for designing Jewelry begins because we have always liked creativity and art, and we realized that by mixing wire with other materials we can create a work of art that can be worn on the body, we decided (realized) that this was our thing.<br><br> We were accepted by National Geographic as Mexican Artisans to sell our handmade Jewelry on the Novica website, and we have invited to several fairs to show our work.<br><br>Thank you for reading a little piece of our history, we hope you like our designs and your experience on the page is enyoing.
                        </p>
                        <button class="uppercase border-2 w-32 p-2 text-white font-mayan tracking-widest mt-6 hover:text-black hover:bg-white">
                            <RouterLink :to="{ name: 'catalog' }">
                                Catalog
                            </RouterLink>
                        </button>
                    </div>
                </div>
            </div>

    <Footer></Footer>
</template>

<script setup>
    import Header from "@/components/layouts/Header.vue";
    import Footer from "@/components/layouts/Footer.vue";
</script>