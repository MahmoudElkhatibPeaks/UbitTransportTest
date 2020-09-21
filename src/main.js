import Vue from 'vue'

import App from './App.vue'
import VCalendar from 'v-calendar'



Vue.use(VCalendar, {
  formats: {
    title: 'MMMM YYYY',
    weekdays: 'W',
    navMonths: 'MMM',
    input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
    dayPopover: 'L',
    data: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD']
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
