import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import toast from "./plugins/toast";
import vuetify from "./plugins/vuetify";

createApp(App).use(toast).use(vuetify).use(store).mount("#app");
