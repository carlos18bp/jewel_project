/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-1': "url('@/assets/images/home/home_1.png')",
        'product-1': "url('@/assets/images/product/product_1.png')",
        'about-us': "url('@/assets/images/aboutUs/about_us_1.png')",
      },
      colors: {
        cream: '#F4F0EB'
      },
      fontFamily: {
        'regular': ['Karla-Regular', 'sans-serif'],
        'bold': ['Cormorant-Garmont-Bold', 'sans-serif'],
        'special-regular': ['Cormorant-Garamont-Regular', 'sans-serif'],
        'italic': ['Cormorant-Garamont-Italic', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

