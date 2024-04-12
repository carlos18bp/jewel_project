<template>
    <header>
      <!-- Navbar para pantallas grandes -->
      <nav class="mx-auto flex items-center justify-between lg:px-8 h-16 pl-6 lg:h-16" aria-label="Global">
        <div class="flex flex-1 items-center">
          <div class="hidden lg:flex lg:gap-x-12">
            <!-- Tus enlaces para escritorio -->
            <a class="text-xl uppercase font-light leading-6 text-black_p">
              <RouterLink :to="{ name: 'catalog' }" class="btn btn-primary btn-lg">
                Catalog
              </RouterLink>
            </a>
            <a class="text-xl uppercase font-light leading-6 text-black_p">
              <RouterLink :to="{ name: 'about_us' }" class="btn btn-primary btn-lg">
                About Us
              </RouterLink>
            </a>
          </div>
          <div class="flex lg:hidden">
            <!-- Botón para abrir menú en dispositivos móviles -->
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black_p" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div class="flex justify-center items-center lg:absolute lg:inset-x-0 lg:left-1/2 transform lg:-translate-x-1/2">
          <!-- Logo -->
          <RouterLink :to="{ name: 'home' }" class="lg:inline-block">
            <img src="@/assets/images/minimal_logo.png" class="w-16" alt="Logo">
          </RouterLink>
        </div>
      </nav>


  
      <!-- Navbar para dispositivos móviles -->
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <Transition enter-active-class="transition ease-out duration-300" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <DialogPanel class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Maria Mexican Jewelry</span>
                <img class="h-8 w-auto" src="@/assets/images/logo.png" alt="" />
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <!-- Tus enlaces para dispositivos móviles -->
                <a v-for="item in mobileLinks" :key="item.name" :href="item.href" :class="{ 'bg-gray-100 text-black_p': isActive(item.name), 'text-gray-900': !isActive(item.name) }" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              
            </div>
          </DialogPanel>
        </Transition>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref} from 'vue'
  import { RouterLink } from 'vue-router';
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
  
  
  const mobileMenuOpen = ref(false)
  
  // Enlaces para dispositivos móviles
  const mobileLinks = [
    { name: 'Home', href: '/'},
    { name: 'Catalog', href: '/catalog' },
    { name: 'About Us', href: '/about_us' },
  ]
  
  // Función para determinar si un enlace está activo
  const isActive = (name) => {
    return false 
  }
  
  </script>