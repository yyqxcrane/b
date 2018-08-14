<template>
 <div>
  <!-- <h2>欢迎来到音乐厅</h2> -->
        <!-- <router-link to="/musictable"> -->
  <ul>
      <li @click='$router.push("/musictable")' v-for="(items,index) in dataList" :key='index+"ml"'>
            <img :src="items.bg">
      </li>
  </ul>
        <!-- </router-link> -->

 </div>
</template>

<script>
import axios from 'axios'
export default {
       created(){
           this.getData();
           this.$emit('routerChange','music')
       },
       data(){
          return{
              dataList:[]
          }
       },
       methods:{
           getData(){
              axios.get('./data/musiclist.json') 
             .then((res)=>{
                 this.dataList=res.data.albums
             })
             .catch((error)=>{
                 console.log(error);
             })
           },
       }   
}
</script>
<style scoped>
   ul li{
       float: left;
       width: 50%;
   }
   img{
       width: 100%;
   }
</style>
