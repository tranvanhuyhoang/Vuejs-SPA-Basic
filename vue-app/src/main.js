import { createApp, h } from "vue";
import App from "./App.vue";
import singleSpaVue from "single-spa-vue";
import { registerApplication, start } from "single-spa";

const app = singleSpaVue({
  createApp,
  appOptions: {
    el: "#app",
    render() {
      return h(App, {
        testProps: this.testProps,
      });
    },
  },
});

registerApplication({
  name: "vue-app",
  app,
  activeWhen: ["/"],
  customProps: {
    testProps: "This is props",
  },
});

start();
