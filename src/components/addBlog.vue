<template>
<div class="container">
    <div class="row">
        <div class="col-sm-8">
  <div class="panel panel-default">
      <div class="panel-heading">Add Blog</div>
      <div class="panel-body">

          <div class="row form-group">
          <label class="col-sm-3">Blog Title</label>
      <div class="col-sm-9"><input type="text" class="form-control" v-model="blog.title" v-validate="'required'" name="blogTitle">
       <span v-show="errors.has('blogTitle')">The blog Title field is required.</span>
      </div>

     
          </div>

          <div class="row form-group">
          <label class="col-sm-3">Blog Content</label>
      <div class="col-sm-9"><textarea  class="form-control" v-model="blog.body"></textarea></div>
          </div>

          <div class="row form-group">
          <label class="col-sm-3">Blog Type</label>
            <div class="col-sm-9">
             <input type="radio" value="Personal Blogs" v-model="blog.type"> Personal Blogs
             <input type="radio"  value="Business Blogs" v-model="blog.type"> Business Blogs
             <input type="radio"  value="Media Blogs" v-model="blog.type">  Media blogs
             <input type="radio"  value="Freelance Blogs" v-model="blog.type">  Freelance bloggers
            </div>
          </div>

           <div class="row form-group">
          <label class="col-sm-3">Author</label>
             <div class="col-sm-9">
                 <select v-model="blog.author">
                     <option v-for="author in authors">{{author}}</option>
                 </select>
             </div>
          </div>

            <div class="row form-group">
             <div class="col-sm-12 text-right">
                <button v-on:click.prevent="addBlog" class="btn btn-default">Add Blog</button>
             </div>
          </div>

  </div>

  </div>
        </div>


         <div class="col-sm-4">
             <div class="panel panel-default">
            <div class="panel-heading">Preview</div>

                <div class="panel-body">

                    <div class="row form-group">
                        <div class="col-sm-12">
                    <label>Blog Title</label>: {{blog.title}}</div>
                    </div>

                    <div class="row form-group">
                       <div class="col-sm-12">
                    <label>Blog Content</label>: {{blog.body}}</div>
                    </div>
                    <div class="row form-group">
                       <div class="col-sm-12">
                    <label>Blog Type</label>: {{blog.type}}</div>
                    </div>
                    <div class="row form-group">
                       <div class="col-sm-12">
                    <label>Blog Author</label>: {{blog.author}}</div>
                    </div>
                </div>


             </div>
         </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);




// import Vue from 'vue'
//   var SimpleVueValidation = require('simple-vue-validator');
//   var Validator = SimpleVueValidation.Validator;

//   Vue.use(SimpleVueValidation);

export default {
 
    data () {
        return {
    //     	settings: {
    // 	password: '',
    //   password_confirmation: ''
    // },
     email:"",
            blog:{
                title:"",
                body:"",
                type:"",
                author:""
            },

            authors : ["Fredrik Backman", "Yaba Badoe","Anne Baker","Paul Bailey"]
        }
    },


    methods:{
        addBlog:function() {
             this.$http.post("https://jsonplaceholder.typicode.com/posts", this.blog).then(function(data){
                 console.log(data)
                 this.$router.push("viewBlog")
             }) 
        },

  onSubmit() {
      this.$validator.validateAll()
      
      if (!this.errors.any()) {
        alert('submit')
      }
    }

    }
}
</script>
