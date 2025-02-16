module.exports = {
    css: {
      loaderOptions: {
        postcss: {
          // Enable Tailwind CSS for Vue CLI
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    },
  };