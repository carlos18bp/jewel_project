<template>
    <footer class="flex flex-col bg-black w-full items-center">
        <img class="w-52" src="@/assets/images/logo.png" alt="logo image">
        <div class="flex p-6 pt-0 space-x-2 uppercase text-white">
            <a>
                <RouterLink :to="{ name: 'home' }">
                    Home |
                </RouterLink>
            </a>
            <a>
                <RouterLink :to="{ name: 'about_us' }">
                    About Us |
                </RouterLink>
            </a>
            <a>
                <RouterLink :to="{ name: 'products' }">
                    Shop
                </RouterLink>
            </a>
        </div>       
    </footer>
</template>

<script setup>
</script>