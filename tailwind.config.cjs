const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        serif: ['Open Sans', 'sans-serif']
      }
    }
  },

  plugins: [require("daisyui")],
};

module.exports = config;
