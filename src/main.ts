/*
 * @Author: 周楠
 * @Description:
 * @Date: 2022-12-27 10:33:58
 * @LastEditTime: 2022-12-29 09:00:09
 * @LastEditors: 周楠
 */
import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
let app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
