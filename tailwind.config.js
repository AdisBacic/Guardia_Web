/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins-thin': ['Poppins-Thin'],
        'poppins-thinitalic': ['Poppins-ThinItalic'],
        'poppins-extralight': ['Poppins-ExtraLight'],
        'poppins-extralightitalic': ['Poppins-ExtraLightItalic'],
        'poppins-light': ['Poppins-Light'],
        'poppins-lightitalic': ['Poppins-LightItalic'],
        'poppins-regular': ['Poppins-Regular'],
        'poppins-italic': ['Poppins-Italic'],
        'poppins-medium': ['Poppins-Medium'],
        'poppins-mediumitalic': ['Poppins-MediumItalic'],
        'poppins-semibold': ['Poppins-SemiBold'],
        'poppins-semibolditalic': ['Poppins-SemiBoldItalic'],
        'poppins-bold': ['Poppins-Bold'],
        'poppins-bolditalic': ['Poppins-BoldItalic'],
        'poppins-extrabold': ['Poppins-ExtraBold'],
        'poppins-extrabolditalic': ['Poppins-ExtraBoldItalic'],
        'poppins-black': ['Poppins-Black'],
        'poppins-blackitalic': ['Poppins-BlackItalic'],
      },
    },
  },
  variants: {},
  plugins: [],
};
