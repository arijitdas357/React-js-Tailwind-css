module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend:
    { 
      colors: 
      {
  
     blue: '#BADFE7',

   },
   width:{
   wmax:'96%'
   },
   height: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    ml: '93.5vh'
   },
   right: {
   '21':'0.25rem'  
   },
   top: {
    '0': 0,
    // ...
   '64': '14rem',
   '1/5': '20%',  
   }
  },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
