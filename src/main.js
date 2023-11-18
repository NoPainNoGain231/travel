import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from './request'
// ElementUI依赖
import ElementUI from 'element-ui';
// ElementUI样式依赖
import 'element-ui/lib/theme-chalk/index.css';
// 全局使用ElementUI
Vue.use(ElementUI);
// Vue.use(components);
// Vue.use(views);
Vue.use(router)
Vue.use(request);
Vue.config.productionTip = false
Vue.prototype.request = request
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

