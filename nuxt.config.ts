export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/boxicons/css/boxicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
        },
      ],
    },
  },
  css: [
    "@/assets/scss/base/common.scss",
    "@/assets/scss/base/reset.scss",
    "@/assets/scss/base/layout.scss",
    "@/assets/scss/base/variables.scss"
  ],
});