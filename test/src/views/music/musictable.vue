
<template>
 <div>
     <!-- <ul>
         <li v-for="(items,index) in dataList" :key='index+"mtl"'>
           <aplayer autoplay v-if="isShow" :list='dataList'
               :music='dataList[index]'
            />
         </li>
     </ul> -->
     <aplayer autoplay v-if="isShow" 
               :list='dataList'
               :music="dataList[0]"
               :showLrc="true"
               
            />
    
 </div>
</template>

<script>

import axios from 'axios'
import aplayer from 'vue-aplayer'
export default {
       created(){
           this.getData();
        //    this.$emit('routerChange','music')
       },
       data(){
          return{
              dataList:[],
              isShow:false 
          }
       },
       components:{
          aplayer
       },
       methods:{
           getData(){
             axios.get('./data/musicdata.json')
                 .then((res)=>{
                 this.dataList=res.data.musicData;
                 this.isShow=true;
                 for(var i=0;i<res.data.musicData.length;i++){
                     this.dataList[i].lrc=location.origin+location.pathname+res.data.musicData[i].lrc;
                 }
             })
             .catch((error)=>{
                 console.log(error);
             })
           },
       }
}
</script>
