import { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Todos from "@/views/Todos.vue";

export const publicRoutes: RouteRecordRaw[] = [
  { path: "/", component: () => Home },
  { path: "/todos", component: () => Todos },
];
