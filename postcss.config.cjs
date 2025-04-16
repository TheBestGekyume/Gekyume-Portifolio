const purgecss = require('@fullhuman/postcss-purgecss').default;
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
      safelist: [
        // /^d-/,
        // /^flex-/,
        // /^gap-/,
        // /^col-/,
        // /^row/,
        // /^w-/,
        // /^text-/,
        // /^border-/,
        // /^ps-/,
        // /^pe-/,   
        // /^mx-/,
        // /^btn/,
        // /^position-/,
        // /^float-/,
        // /^top-/,
        // /^end-/,
        // /^bottom-/,
        // /^start-/,
        // /^bi/
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
