import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import router from './router'
import axios from 'axios';//importamos axios
import {BootstrapVue,BootstrapVueIcons} from'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/js/all'

//base urls
axios.defaults.baseURL="http://localhost/api"
export default axios;







Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
