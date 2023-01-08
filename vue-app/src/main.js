import { createApp, h } from "vue";
import App from "./App.vue";
import singleSpaVue from "single-spa-vue";

const app = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        testProps: this.testProps,
      });
    },
  },
});

export const { bootstrap, mount, unmount, update } = app;
