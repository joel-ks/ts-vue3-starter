import * as Vue from "vue";

Vue.createApp({
    template: "<p>Working...</p>",
    created() {
        console.log("Mounted root component");
    }
})
    .mount("#app");
