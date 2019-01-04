<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/Hi">Hi页面</router-link>
      <router-link :to="{name:'Hi1',params:{username:'jspang',id:'201620180221',id:201620180221}}">Hi页面1</router-link>
      <router-link to="/Hi/Hi2">Hi页面2</router-link>
    </div>
    <p>{{$route.name}}</p>
    <router-view/>
    <router-view name="left"/>
    <router-view name="right"/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
