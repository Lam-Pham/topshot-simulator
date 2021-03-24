module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      translate: ['active'],
      borderWidth: ['active']
    },
  },
  plugins: [
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn', 'animate__flip', 'animate__delay', 'animate__headShake', 'animate__slower', 'animate__flipInY'],
      settings: {
        animatedSpeed: 1000,
        animationDelaySpeed: 500
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
}
