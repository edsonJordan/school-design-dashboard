const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: [
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1': '5.5rem',
      '2': '7.5rem',
      '3': '9.5rem',
      '4': '12rem'
     },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
     '50%': '50%',
     '16': '4rem',
     '2': '.2rem',
    },
    scale: {
      '0': '0',
      '5': '.05',
      '10': '.10',
     '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '100': '1',
      '125': '1.25',
      '150': '1.5',
     '200': '2',
    },
    lineHeight: {
      'min-line': '.2',
     },
    fontFamily:{
      rubick : ['Rubik'],      
    },
    borderRadius: {
      'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     DEFAULT: '4px',
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'large': '12px',
    },
    colors: {
      blue: colors.blue,
      gray: colors.gray,
      green: {
        light: '#BBD9C4',
        medium: '#A3DCAA',
        hight: '#1AAD49',
      },
      white: {
        pure : '#FFFFFF',
        light: '#FEFDFF',
        medium: '#F0F5F4',
      },
      green: {
        light: '#BBD9C4',
        medium: '#A3DCAA',
        hight: '#1AAD49',
        gradient_start: '#54E294',
        gradient_end: '#43CA81',
      },
      gray_theme:{
        light: '#FEFDFF',
        medium: '#B7B8C4'
      },
      pink:{
        medium: '#EA4C89'
      },
      brown:{
        light: '#908070',
        dark:  '#474345'
      }
    },
    extend: {
      
    },
  },
  variants: {
    
    extend: {
      scale: ['focus-within'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
