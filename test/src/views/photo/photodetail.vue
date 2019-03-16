<template>
    <div @click="goBack">
        <v-touch v-on:swipeleft="onSwipeLeft"  v-on:swiperight="onSwipeRight" class="content" :style="styleobj"></v-touch>
    </div>
</template>

<script>
/*老师的代码是用vuex传值  在整个photo页面  仔细看看琢磨*/
import Vue from "vue"
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
export default {
     data(){
         return{
             imgid:this.$route.params.id+1
         }
     },
     created(){
        this.$emit('routerChange','photo');
        if(!this.imgid){
            this.$router.push("./photo")
        }
     },
     computed:{
      styleobj(){
      return {background:`#000 url('./img/a${this.imgid}.jpg') no-repeat center/contain`}
    }
  },
  methods:{
      onSwipeLeft(){
          this.imgid++;
          if(this.imgid>15){
              this.imgid=1
          }
      },
      onSwipeRight(){
          this.imgid--;
          if(this.imgid<1){
              this.imgid=15
          }
      },
      goBack(){
          this.$router.push("./photo")
      }
  }
}
</script>
<style scoped>
.content{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
  }
</style>

