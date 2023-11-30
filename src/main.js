import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
