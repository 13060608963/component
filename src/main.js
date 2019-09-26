import Vue from 'vue'
import App from './App.vue'
import Component from './components/common/components'

Vue.config.productionTip = false

Vue.use(Component)

new Vue({
  render: h => h(App),
}).$mount('#app')
