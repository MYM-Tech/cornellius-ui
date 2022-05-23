const {
  mergeConfig
} = require('vite');

const vue = require('@vitejs/plugin-vue');

const vueJsx = require('@vitejs/plugin-vue-jsx');

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  modules: {
    rules: [{
      test: /\.(js|ts)x/,
      loader: "ts-loader"
    }, {
      test: /\.vue$/,
      loader: "vue-loader"
    }]
  },
  webpackFinal: async (config, {
    configType
  }) => {
    config.resolve.alias = { ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src")
    };
    return config;
  },

  async viteFinal(config, {
    configType
  }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      plugins: [vue({
        customElement: true
      }), vueJsx()]
    });
  }

};