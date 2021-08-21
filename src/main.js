import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.use(VueProgressBar, {
  color: '#F2B807',
  failedColor: 'red',
  height: '3px'
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
