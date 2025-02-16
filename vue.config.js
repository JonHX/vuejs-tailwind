const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/your-repo-name/', // Your GitHub repo name
  transpileDependencies: true, // Add this if necessary for transpiling dependencies
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
  },
});
