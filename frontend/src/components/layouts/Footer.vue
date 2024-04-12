<template>
    <footer class="flex flex-col bg-black w-full items-center pb-16">
        <img class="w-72" src="@/assets/images/logo.png" alt="logo image">
        <div class="flex p-6 space-x-2 uppercase text-white font-mayan tracking-widest">
            <a>
                <RouterLink :to="{ name: 'home' }">
                    Home
                </RouterLink>
            </a>
            <a>
                |
            </a>
            <a>
                <RouterLink :to="{ name: 'about_us' }">
                    About Us
                </RouterLink>
            </a>
            <a>
                |
            </a>
            <a>
                <RouterLink :to="{ name: 'catalog' }">
                    Catalog
                </RouterLink>
            </a>
        </div>       
    </footer>
</template>

<script setup>
</script>