import Vue from 'vue'
import App from './App.vue'
import AutoText from '../src/index'
import EasyGithubPages from 'easy-github-pages'

Vue.config.productionTip = false
Vue.component(EasyGithubPages.name, EasyGithubPages)
Vue.component(AutoText.name, AutoText)

new Vue({
  render: h => h(App)
}).$mount('#app')
