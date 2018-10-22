// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-ployfill'
import Vue from 'vue'
import fastclick from 'fastclick'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import Vuex from 'vuex'
import store from './store'
import moment from 'moment'
import  { AlertPlugin, ConfirmPlugin, ToastPlugin  } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin )

Vue.use(Vuex)
fastclick.attach(document.body)
Vue.config.productionTip = false

// 定义全局过滤器--时间格式化
Vue.filter('format',function(val,arg){
	if(!val) return;
	val = val.toString()
	return moment(val).format(arg)
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  render: h=>h(App)
}).$mount('#app')
