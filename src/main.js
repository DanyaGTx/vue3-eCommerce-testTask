import "./style.css";
import { createApp } from "vue";
import { toast } from "./plugins/toast";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";

const app = createApp(App);

app.use(toast);
app.use(vuetify);
app.use(store);

app.mount("#app");
