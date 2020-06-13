import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Ranking from "@/views/Ranking.vue";
import Post from "@/views/Post.vue";
import Login from "@/views/Login.vue";
import Article from "@/views/Article.vue";
import Profile from "@/views/Profile.vue";
import Others from "@/views/Others.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: Ranking
  },
  {
    path: "/post",
    name: "Post",
    component: Post
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Article/:id",
    name: "Article",
    component: Article
  },
  {
    path: "/Others/:id",
    name: "Others",
    component: Others
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
