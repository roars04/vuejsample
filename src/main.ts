import "@/assets/css/custom.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { routes } from "@/appRoutes";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import i18n from "./i18n";

// Import Bootstrap and BootstrapVue CSS files (order is important)
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(i18n).use(router).mount("#app");
