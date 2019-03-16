<template>
 <div>
        <!-- <v-touch v-on:swipeleft="onSwipeLeft">Swipe me!</v-touch> -->
        <ul class="clearfix">
            <li @click="$router.push({name:'photodetail',params:{id:index}})" v-for="(items,index) in imgList" :key="index+'pl'">
                     <img :src="'img/'+items+'.jpg'" alt="">
            </li>
        </ul>
 </div>
</template>

<script>
export default {
    created(){
        this.$emit('routerChange','photo')
    },
    data(){
        return{
            imgList:[
                'a1','a2','a3','a4','a5','a6','a7','a8',
                'a9','a10','a11','a12','a13','a14','a15'
            ]
        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.clearfix::after{
    content: "";
    clear: both;
    display: block;
}
ul li{
    float: left;
    width: 50%;
    height: 100px;
}
img{
    width: 100%;
    height: 100%;
}
</style>
