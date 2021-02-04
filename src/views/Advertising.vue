<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-02-03 18:31:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-03 18:56:31
-->
<template>
  <div class="advertising-wrapper">
    <img src='' class="advertising-wrapper_img"/>
    <div class="advertising-wrapper_content">活动内容：</div>
    <p class="advertising-wrapper_btn">立即捐献1分钱</p>
  </div>
</template>

<script>
export default {
    
};
</script>

<style lang="scss" scoped>
  .advertising-wrapper{
    text-align: center;
  }
  .advertising-wrapper_img{
    width: 100vw;
    height: 300px;
  }
  .advertising-wrapper_content{
    padding: 40px;
    
  }
  .advertising-wrapper_btn{
    display: inline-block;
    background: red;
    color: #fff;
    width: 80%;
    height: 80px;
    line-height: 80px;
  }
</style>