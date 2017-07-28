<template>
  <div id="app">
    <h2>Props['value']: "{{ value }}"</h2>
    <label>Store</label>: <input type="text" v-model="message"/>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  props: ['value'],
  computed: {
    message: {
      get () {
        return this.$store.state.msg
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
