import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './hook'
import appInterface from './appInterface'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

export default appInterface
