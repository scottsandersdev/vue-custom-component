<template>
  <div id="my-app">
    <p>{{msg}}</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function() {
    return {
      msg: 'vue custom component working'
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
