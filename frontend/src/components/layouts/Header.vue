<template>
    <header class="bg-white grid grid-cols-3 gap-4 place-items-center">
        <div class="uppercase text-black space-x-12">
            <a>
                <RouterLink :to="{ name: 'about_us' }">
                    Jewelry
                </RouterLink>
            </a>
            <a>
                <RouterLink :to="{ name: 'about_us' }">
                    About Us
                </RouterLink>
            </a>
        </div>
        <img class="w-16" src="@/assets/images/minimal_logo.png" alt="logo image">
    </header>
</template>

<script setup>
</script>