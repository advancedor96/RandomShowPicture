

import Vue from "nativescript-vue";

import RadListView from "nativescript-ui-listview/vue";
import Home from './components/Home.vue'
import Test from './components/Test.vue'
Vue.use(RadListView);
Vue.config.silent = true;

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
      Home, Test
    },
    created() {
    }
}).$start();
