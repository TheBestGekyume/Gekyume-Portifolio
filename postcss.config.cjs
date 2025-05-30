const purgecss = require('@fullhuman/postcss-purgecss').default;
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
      safelist: [
          /^collapse/,
          /^collapsing/,
          /^show/
        
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
