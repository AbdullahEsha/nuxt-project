export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "fr", name: "Français", iso: "fr-FR", file: "fr.json" },
      { code: "en", name: "English", iso: "en-US", file: "en.json" },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "/locales/",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  css: [
    "@/assets/css/global.css", // Path to your global CSS file
  ],
});
