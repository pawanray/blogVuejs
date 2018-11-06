import Vue from 'vue'
import Router from 'vue-router'
import addBlog from "@/components/addBlog.vue";
import viewBlog from "@/components/viewBlog.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
        path:"/",
        component:addBlog
        },

    {
       path:"/viewBlog",
       component:viewBlog
    }

]
    
})