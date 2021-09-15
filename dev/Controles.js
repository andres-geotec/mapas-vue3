import Vue from 'vue'
import App from './Controles.vue'
import "../src/styles/main.scss"

import  DaiMaps from "../src/index.js"
Vue.use(DaiMaps)

let div = document.createElement("div")
div.setAttribute("id","app")
document.body.appendChild(div)




new Vue({
  render: h => h(App),
}).$mount('#app')