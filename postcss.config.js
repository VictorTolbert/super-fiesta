const postcssPurgecss = require('@fullhuman/postcss-purgecss')

const purgecss = postcssPurgecss({
  // Specify the paths to all of the template files in your project.
  content: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  // Include any special characters you're using in this regular expression.
  // See: https://tailwindcss.com/docs/controlling-file-size/#understanding-the-regex
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],
  ],
}
