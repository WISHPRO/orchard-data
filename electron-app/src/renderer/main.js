import Vue from 'vue'
import axios from 'axios'
import VModal from 'vue-js-modal'
import VueAnalytics from 'vue-analytics'

import App from './App'
import router from './router'
import store from './store'
import ReportSummaryHeader from '@/components/sections/ReportSummaryHeader'
import EmptyState from '@/components/sections/EmptyState'

Vue.use(VModal, { dynamic: true })
Vue.use(VueAnalytics, {
  id: 'UA-8437411-21',
  router
})
// Vue.use(VModal, { dialog: true })

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

export const eventHub = new Vue()

// Register global components
Vue.component('report-summary-header', ReportSummaryHeader)
Vue.component('empty-state', EmptyState)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
