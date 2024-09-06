/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 
    "./src/pages/main/jsx",
  ],
  theme: {
    extend: {
      margin: {
        50: "50px",
      },
      borderWidth: {
        one: "1px",
        3: "3px",
      },
      outlineWidth: {
        one: "1px",
      },
      colors: {
        "new-gray": "#465663",
        "color-green": "#63ce51",
        "color-red": "#e62a2a",
        "color-grey": "#5a6975",
        "button-border": "#ECECEC",
        "button-background": "#FAFAFA",
        "color-purple-meeting": "#9354E2",
        "color-blue-email": "#3078CD",
        "color-red-mail": "#E2547E",
        "color-green-call": "#32C57F",
        "color-brown-task": "#796862",
        "color-summary-gray": "#404040",
        "color-grey-button": "#f3f3f3",
        "tab-color": "#EBEBEB",
        "current-event-color": "#DDEDFF",
        "current-day-color": "#367DD1",
        "date-box-color": "#89BFFF",
        "other-event-color": "#1870B8",
        "disabled-date-color": "#F9F9F9",
        "month-day-color": "#F3F3F3",
        "date-border-color": "#E4E4E4",
        "input-label": "#595959",
        "add-organization-button": "#7680B4",
        'black-50': 'rgba(0, 0, 0, 0.5)',
        "bluish": "#1a77b0"
      },

      keyframes: {
        mymove: {
          // 'from': { bottom: '0px' },
          // 'to': { bottom: '210px' },
          '0%': { bottom: '0px' },
          '100%': { bottom: '210px' },
        },
      },
      animation: {
        mymove: 'mymove 5s forwards ease',
      },
    },
    backgroundImage: {
      "background-gradient":
        "linear-gradient(135deg, #FDFEFF, #F3F8FE, #FAF5FC)",
      "background-gradient2":
        "linear-gradient(177deg, rgba(0, 0, 0, 1) 0%, rgba(251, 254, 255, 1) 2%, rgba(254, 248, 250, 1) 100%)",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    cursor: {
      text: "text",
      pointer: "pointer",
    },
  },
  plugins: [],
};
