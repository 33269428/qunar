// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入 reset.css   修改build/webpack.base.conf  的第30行
import "style/reset.css"
import "style/border.css"
import "style/iconfont.css"

import App from './App'
import router from './router'
import store from "./store"
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
// 使用轮播图插件
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {App},
	template: '<App/>'
})
