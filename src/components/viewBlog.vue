<template>
  <div class="container">
      <div class="row">
          <!-- <div class="blog-list" v-for="blog in blogData">
      <h3>{{blog.title}}</h3>
      <p>{{blog.body}}</p>
      </div> -->
      </div>
        <fb-signin-button :params="fbSignInParams" @success="onSignInSuccess"  @error="onSignInError">Sign in with Facebook</fb-signin-button>
  </div>

</template>

<script>
// import Vue from 'vue'
// import FBSignInButton from 'vue-facebook-signin-button'
// Vue.use(FBSignInButton)


  // (function(d, s, id) {
  //   var js, fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   js = d.createElement(s); js.id = id;
  //   js.src = "//connect.facebook.net/en_US/sdk.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  // }(document, 'script', 'facebook-jssdk'));



// export default {
//  //props:["sharedState"],
//   data () {
//         return {
//             blogData:[],
//              fbSignInParams: {
//         scope: 'email,user_likes',
//         return_scopes: true
//       }
//         }
//   },

// methods:{
// onSignInSuccess (response) {
//       FB.api('/me', dude => {
//         console.log(`Good to see you, ${dude.name}.`)
//       });
     
//   },
// onSignInError (error) {
//       console.log('OH NOES', error)
//     },

// created(){
//        this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
//            this.blogData =data.body
//     })
//   }
// }

export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      },
blogData:[
  {
  name:"viajy",
  age:"20"
},
  {
  name:"Amit",
  age:"Vikas"
}

]

    }
  },
  methods: {
    onSignInSuccess (response) {
      FB.api('/me', dude => {
        console.log(`Good to see you, ${dude.name}.`)
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}

</script>

<style>
    .blog-list{
        background: #f2f2f2;
        border: 1px solid #e2e2e2;
        margin-bottom: 10px;
        padding:10px 20px;
    }
</style>
