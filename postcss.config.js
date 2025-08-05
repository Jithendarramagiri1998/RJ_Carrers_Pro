module.exports = {
  plugins: {
    'postcss-import': {}, // Adds support for @import rules
    'tailwindcss/nesting': {}, // Adds support for CSS nesting
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          'cssnano': { // Minifies CSS in production
            preset: ['default', {
              discardComments: {
                removeAll: true,
              },
            }]
          }
        }
      : {})
  }
}