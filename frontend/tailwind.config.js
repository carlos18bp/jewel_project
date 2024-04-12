/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'product-1': "url('@/assets/images/product/product_1.png')",
      },
      colors: {
        cream: '#F4F0EB',
        red: '#EE2743',
        pink: '#EC2286',
        yellow: '#EEB627',
        purple: '#AC2484',
        green: '#85C441',
        blue: '#00ABBE',
        golden: '#FFD700',
      },
      fontFamily: {
        'light': ['Zilla-Slab-Light', 'sans-serif'],
        'italic': ['Zilla-Slab-Italic', 'sans-serif'],
        'regular': ['Zilla-Slab-Regular', 'sans-serif'],
        'medium': ['Zilla-Slab-Medium', 'sans-serif'],
        'semi-bold': ['Zilla-Slab-Semibold', 'sans-serif'],
        'bold': ['Zilla-Slab-Bold', 'sans-serif'],
        'mayan': ['Mayan', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

