import { createRouter, createWebHashHistory } from "vue-router";
import { publicRoutes } from "@/routing/routes";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes],
});
