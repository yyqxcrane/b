<template>
 <div>
  <!-- <h2>电影</h2> -->
  <ul>
      <li @click="$router.push({name:'photodetail',params:{id:index}})" v-for="(items,index) in dataList" :key='index+"dl"'>
              <img :src="items.images.small"/>
               <div>
                  <h4>{{items.title}} </h4>
                  <span>主演：</span>
                  <span v-for="(items,index) in items.casts" :key="index+'mc'">
                      {{items.name}}</span>
                  <p>{{items.collect_count}}人已观看</p>
                  <span>类型:</span>
                    <span v-for="(items,index) in items.genres" :key="index+'hc'">
                        {{items}}</span>
                    <p>评分：{{items.rating.average}}</p>
                    <p>年份：{{items.year}} </p>
               </div><hr>
      </li>
      <hr>
  </ul>
  <div class="loading" v-show="!isFinish">
         <div class="loading-content">
             <img src="@/assets/loading.gif" alt="">
         </div>
  </div>
 </div>
</template>

<script>
export default {
    created(){
          this.getData()
    },
    data(){
    return{
        dataList:[],
        startIndex:0,
        isFinish:true
      }
    },
    methods:{
        getData(){
            this.isFinish=false;
            axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters'+'?start='+this.startIndex+'&count=10')
            // axios.get('https://api.myjson.com/bins/nsb9g'+'?start='+this.startIndex+'&count=5')
            .then((respone)=>{
                this.dataList=this.dataList.concat(respone.data.subjects)
            this.isFinish=true;
            })
            .catch((error)=>{
                console.log(error);   
            })
        }
    },
    mounted(){
        window.onscroll=()=>{
            let cHeight=document.documentElement.clientHeight;//可视高度
            let sHeight=document.documentElement.scrollHeight;//滚动高度
            let sTop=document.documentElement.scrollTop;//可滚动高度
            if(cHeight+sTop==sHeight){
                this.startIndex+=10
                this.getData()
            }
        }
    }
}
</script>
<style scoped>
    .loading{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    }
    .loading-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 1rem;
    border-radius: .1rem;
    background: rgba(255,255,255,.5);
    }
    /* .movie a{
        position: fixed;
        top:0;
        right: 40%;
        color: white;
        font-size: 0.6rem;
    } */
    li{
      width: 100%;
      height: 220px;
    }
    li img{
        width:45%;
        height: 200px;
    }
    li div{
        float: right;
        width: 55%;
    }
</style>

