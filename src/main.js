import { createApp } from "@vue/runtime-dom";
import App from "./App.vue";
import store from "./store";
import "./index.css";

createApp(App).use(store).mount("#app");
