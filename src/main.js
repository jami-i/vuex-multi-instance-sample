// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

window.store = new Vuex.Store({
  state: {
    msg: 'Hello World'
  },
  mutations: {
    updateMessage (state, newMessage) {
      state.msg = newMessage
    }
  }
})

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app1',
  store: window.store,
  template: `<App v-bind:value="'App 1'"/>`,
  components: { App }
})
new Vue({
  el: '#app2',
  store: window.store,
  template: `<App v-bind:value="'App 2'"/>`,
  components: { App }
})

