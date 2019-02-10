import Vue from 'vue'
import App from './App'
import fly from './utils/fly'

import '../static/fonts/iconfont.css'
import '../static/weui/weui.css'

Vue.prototype.$fly = fly
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
