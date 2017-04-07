<template>
  <div class='my-app' :class='{ active: btnTriggered }' @click.prevent='onClick'>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'vue custom component working',
      btnTriggered: false
    }
  },
  methods: {
    onClick() {
      this.btnTriggered = !this.btnTriggered;
    }
  }
}
</script>

<style>
.my-app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  cursor: pointer;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
  text-align: center;
}

.active {
  color: red;
}
</style>
