const purgecss = require('@fullhuman/postcss-purgecss').default;
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
      safelist: [
        /^d-/,         // exemplo: d-flex, d-grid, d-lg-flex
        /^flex-/,      // exemplo: flex-row, flex-column, flex-lg-row
        /^gap-/,       // exemplo: gap-3, gap-4
        /^col-/,       // exemplo: col-6, col-lg-4, col-12
        /^w-/,         // exemplo: w-100, w-lg-auto
        /^text-/,      // exemplo: text-center, text-white
        /^btn/,        // exemplo: btn, btn-primary, btn-custom
        /^position-/, 
        /^float-/,
        /^top-/,
        /^end-/,
        /^bottom-/,
        /^start-/,
        /^bi/
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
