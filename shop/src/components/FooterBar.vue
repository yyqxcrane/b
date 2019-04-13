<template>
<<<<<<< HEAD
     <van-tabbar v-model="active" @change="change">
=======
     <van-tabbar v-model="active">
>>>>>>> d93c51217efaa84e1ef1e2eee7958be4ab0cbcf6
        <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="coupon-o" to="/classify">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/myhome">我的</van-tabbar-item>
      </van-tabbar>
</template>

 <script>
 export default {
     data(){
        return{
           active:0
        }
<<<<<<< HEAD
     },
     created(){
        this.active=parseInt(localStorage.getItem('active'));
     },
     methods:{
         change(active){
             localStorage.setItem('active',active);
         }
=======
>>>>>>> d93c51217efaa84e1ef1e2eee7958be4ab0cbcf6
     }
 }
 </script>

 <style scoped>
 
 </style>
 
 
 