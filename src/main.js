import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/scss/common.scss'

import {initAV} from '@/api/av';
initAV()

createApp(App).use(store).use(router).mount('#app')
