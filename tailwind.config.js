/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'deep-dark-blue': '#191927',
        'deep-blue': '#11112D',
        aqua: '#69EACB',
      },
      textColor: {
        aqua: '#69EACB',
        'bold-grey': '#1E1E1E',
        'dark-grey': '#393939',
        'light-white': '#FEFCFC',
        'light-grey': '#5F65C3',
      },
      backgroundImage: {
        gradient: 'linear-gradient(90deg, #504B7C -6.46%, #489EA4 102.65%)',
        gradientAnimate: 'linear-gradient(90deg,  #489EA4 -6.46%,#504B7C 102.65%)',
        aquaGraditent: 'linear-gradient(180deg, rgba(105, 234, 203, 0.99) 42.71%, #FFFFFF 90.1%)',
        bubble:
          "url('../src/assets/images/leftBubble.png'),url('../src/assets/images/rightBubble.png')",
        boldBlueLight: 'linear-gradient(85.18deg, #21213B 0.29%, #1D203A 100.15%)',
        parallelogram:
          'url(../src/assets/images/parallelogram.png),url(../src/assets/images/parallelogramBig.png)',
        toWhite:
          'linear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
        bigBubble: "url('../src/assets/images/bigBubble.png')",
      },
      fontSize: {
        100: [
          '100px',
          {
            lineHeight: '121px',
          },
        ],
        44: [
          '44px',
          {
            lineHeight: '54.46px',
          },
        ],
      },
      padding: {
        278: '278px',
        290: '290px',
      },
      fontFamily: {
        inter: ['Inter'],
        poppins: ['Poppins'],
        nunito: ['Nunito'],
        raleway: ['Raleway'],
      },
      minHeight: {
        3111: '3111px',
        1358: '1358px',
      },
      maxWidth: {
        1000: '1000px',
        170: '170px',
        1600: '1600px',
        493: '493px',
        270: '270px',
        547: '547px',
        487: '487px',
        350: '350px',
      },
      minWidth: {
        35: '35px',
      },
      height: {
        200: '200px',
        max: 'max-content',
      },
      width: {
        487: '487px',
        600: '600px',
        '87%': '87%',
        289: '289px',
      },
      backgroundSize: {
        1544: '1000.51px 1600.51px',
        coverContain: 'auto,contain',
        centerRight: '134px,contain',
      },
      backgroundPosition: {
        leftRight: 'right bottom, left top',
        bigBottom: 'right bottom,left center',
      },
      zIndex: {
        100: 100,
      },
      borderColor: {
        'dark-blue': '#30324B',
        aqua: '#69EACB',
        'light-grey': '#D0CFCF',
        'light-purple': '#5F65C3',
      },
      spacing: {
        68: '-68px',
        74: '-74px',
        97: '-97px',
        19: '-19px',
        '36%': '36%',
        '28%': '28%',
        '51px': '-51px',
      },
      margin: {
        '8%': '8%',
      },
    },
  },
  plugins: [],
}
