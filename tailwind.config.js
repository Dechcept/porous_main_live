/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Poppins200: ['Poppins200', 'sans-serif'],
        Poppins300: ['Poppins300', 'sans-serif'],
        Poppins400: ['Poppins400', 'sans-serif'],
        Poppins500: ['Poppins500', 'sans-serif'],
        Poppins600: ['Poppins600', 'sans-serif'],
        Poppins700: ['Poppins700', 'sans-serif'],
        Poppins800: ['Poppins800', 'sans-serif'],
        Poppins900: ['Poppins900', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
