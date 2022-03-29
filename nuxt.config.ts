import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  modules: [
    // https://github.com/nuxt-community/supabase-module
    '@nuxtjs/supabase',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});