/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            main: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            bg: 'var(--color-bg)',
            text: 'var(--color-text)',
            textHover: 'var(--color-hovtext)',
            bgHover: 'var(--color-bgHov)',
         },
         animation: {
            slideup: 'slideup 1s ease-in-out',
            slidedown: 'slidedown 1s ease-in-out',
            slideleft: 'slideleft 1s ease-in-out',
            slideright: 'slideright 1s ease-in-out',
            wave: 'wave 1.2s linear infinite',
            slowfade: 'slowfade 2.2s ease-in-out',
         },
         keyframes: {
            slowfade: {
               from: { opacity: 0 },
               to: { opacity: 1 },
            },
            slideup: {
               from: { opacity: 0, transform: 'translateY(25%)' },
               to: { opacity: 1, transform: 'none' },
            },
            slidedown: {
               from: { opacity: 0, transform: 'translateY(-25%)' },
               to: { opacity: 1, transform: 'none' },
            },
            slideleft: {
               from: { opacity: 0, transform: 'translateX(-20px)' },
               to: { opacity: 1, transform: 'translateX(0)' },
            },
            slideright: {
               from: { opacity: 0, transform: 'translateX(20px)' },
               to: { opacity: 1, transform: 'translateX(0)' },
            },
            wave: {
               '0%': { transform: 'scale(0)' },
               '50%': { transform: 'scale(1)' },
               '100%': { transform: 'scale(0)' },
            },
         },
      },
   },
   plugins: [
      function ({ addUtilities }) {
         addUtilities({
            '.text-shadow-sm': {
               textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            },
            '.text-shadow': {
               textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            },
            '.text-shadow-lg': {
               textShadow: '4px 4px 6px rgba(0, 0, 0, 0.7)',
            },
            '.text-shadow-none': {
               textShadow: 'none',
            },
         });
      }
   ],
};
