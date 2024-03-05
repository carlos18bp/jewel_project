<template>
    <Header></Header>

    <section class="bg-cover bg-about-us flex flex-col h-full">
        <div class="flex flex-col text-white p-16 py-48 w-1/2">
            <h1 class="text-6xl font-bold relative pb-16">About Us
                <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300 opacity-50"></span>
            </h1>
            <p class="text-2xl font-regular mt-16">
                This is an About Us page for this conceptual jewelry website, helping viewers become accustomed to Apollonian and its purpose, if it were real.<br><br>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br>

                Vel eros donec ac odio tempor orci dapibus ultrices. Mauris vitae ultricies leo integer. Placerat duis ultricies lacus sed turpis tincidunt id.<br><br>
                
                Augue mauris augue neque gravida in fermentum et.
            </p>
       </div>
    </section>

    <Footer></Footer>
</template>

<script setup>
    import Header from "@/components/layouts/Header.vue";
    import Footer from "@/components/layouts/Footer.vue";
</script>