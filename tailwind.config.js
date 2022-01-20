module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { max: '375px' },
      md: { max: '768px' },
      lg: { max: '1920px' },
      xl: { max: '2262px' },
    },
    colors: {
      white: {
        white: '#ffffff',
        100: '#ffffff80',
      },
      grey: {
        grey: '#707070',
        100: '#7070700d',
        200: '#7070701a',
        300: '#70707066',
        400: '#70707080',
      },
      blue: {
        blue: '#055ca8',
        100: '#7fabd4',
        200: '#055ca80d',
        300: '#055ca833',
        400: '#e5eef6',
        500: '#055ca81a',
        600: '#055ca880',
      },
      green: {
        green: '#61b756',
        100: '#78ca00',
        200: '#61b7561a',
      },
      orange: {
        orange: '#ffa62a',
        100: '#ffa62a1a',
      },
      red: {
        red: '#bd1f2e',
        100: '#e958581a',
        200: '#bd1f2e33',
        300: '#e95858',
      },
      yellow: {
        yellow: '#ffc101',
        100: '#ffc1011a',
      },
      black: '#000000',
    },
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif'],
    },
    fontSize: {
      sm: '12px',
      base: '14px',
      md: '16px',
      lg: '26px',
      xl: '28px',
    },
    borderRadius: {
      none: '0',
      sm: '0.5px',
      DEFAULT: '5px',
      md: '22px',
      lg: '50px',
      full: '50%',
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    boxShadow: {
      primary: '0px 3px 6px rgba(5, 92, 168, 0.102)',
      secondary: '0px 10px 40px rgba(5, 92, 168, 0.1)',
    },
    backgroundColor: () => ({
      primary: '#055ca8',
      secondary: '#e5eef6',
      'secondary-blue': '#055ca80d',
      ternary: '#7070701a',
      white: '#ffffff',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
