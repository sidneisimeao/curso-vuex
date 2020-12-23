import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../components/home/HomeComponent";
import TaskComponent from "../components/tasks/TaskComponent";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/about",
    name: "About",
    component: TaskComponent,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
