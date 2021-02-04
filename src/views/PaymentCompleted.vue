<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-02-03 18:31:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-04 09:31:24
-->
<template>
  <div class="payment-completed">
    <img src='' class="payment-completed_img"/>
    <div class="payment-completed_content">活动内容：</div>
    <p class="payment-completed_btn">立即捐献1分钱</p>
  </div>
</template>

<script>
export default {
    
};
</script>

<style lang="scss" scoped>
  .payment-completed{
    text-align: center;
  }
  .payment-completed_img{
    width: 100vw;
    height: 300px;
  }
  .payment-completed_content{
    padding: 40px;
    
  }
  .payment-completed_btn{
    display: inline-block;
    background: red;
    color: #fff;
    width: 80%;
    height: 80px;
    line-height: 80px;
  }
</style>