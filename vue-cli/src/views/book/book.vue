<template>
 <div>
  <!-- <h2>欢迎来到阅览区</h2> -->
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
 </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem,
    },
    created(){
        this.$emit('routerChange','book')
    }
}
</script>
<style scoped>
  /* @import url('xx.css');  
  @import 'xxx.css';可以引用css，但是不推荐使用 */
    .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    }

    .slide1 {
    background:url('../../../public/img/005.jpg') repeat center/cover;
    color: #fff;
    }

    .slide2 {
    background:url('../../../public/img/006.jpg') repeat center/cover;
    color: #000;
    }

    .slide3 {
    background:url('../../../public/img/007.jpg') repeat center/cover;
    color: #fff;
    }
</style>
