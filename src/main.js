import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Notifications)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
