

import Vue from "nativescript-vue";

import RadListView from "nativescript-ui-listview/vue";
import Home from './components/Home.vue'
Vue.use(RadListView);
Vue.config.silent = true;

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
      Home
    },
    created() {
    }
}).$start();
