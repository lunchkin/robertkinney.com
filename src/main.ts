import { createApp, defineProps } from "vue";
import App from "./App.vue";
import router from "./router";
import "bulma/css/bulma.css";

createApp(App).use(router).mount("#app");
