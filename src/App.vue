<template>
  <div id="app">
  
 <app-header v-bind:headerTitle="headerTitle" v-bind:sharedState="sharedState"></app-header>
    <!-- <img src="./assets/logo.png"> -->
 <router-view></router-view>
    <!-- <add-blog></add-blog> -->
  </div>
</template>
<script>


import HelloWorld from './components/HelloWorld'
import addBlog from './components/addBlog'
import header from './components/header'


export default {
  name: 'app',
  components: {
    'add-blog':addBlog,
    'app-header':header
  },

  data () {
    return {
      headerTitle:"fdsafsa",
        
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
