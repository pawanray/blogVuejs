<template>
  <div class="container">
      <div class="row">
   
          <div class="header col-sm-12">
                 {{$store.state.name}}

                      {{doneTodosCount}}

                 <button @click="changeName">Chanage Name</button>
          <div class="col-sm-2"><img src="../assets/logo.png"></div>
          <div class="col-sm-10">
              <ul class="menu">
                  <li> <router-link to="/">Add Blog</router-link></li>
                   <li> <router-link to="viewBlog">View Blog</router-link></li>
              </ul>

          </div>

          </div>
      </div>
  </div>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
       props:["headerTitle"],

       computed: mapGetters([
           'doneTodosCount'
       ]),

       methods: mapActions([
            'changeName'

       ])

}
</script>

<style>
.header{
    background: #f2f2f2;
    border:1px solid #e2e2e2;
    margin-bottom: 30px;
}
.menu{
    list-style: none;
    float: right;
}

.menu li{
    padding: 25px 20px;
    float: left;
}

</style>
