import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import print from 'vue3-print-nb'
import  axios  from 'axios'
const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(Antd);
app.use(print)
installElementPlus(app)
app
    .use(store)
    .use(router)
    .mount('#app')