<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-02-03 18:31:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-04 09:37:04
-->
<template>
  <div class="donation-records-wrapper">
    <img src='' class="donation-records_img"/>
    <div class="donation-records_list">
      <p class="donation-records_list_title">捐赠记录</p>
      <ul class="donation-records_list_main">
        <li>
         <p>捐赠人</p>
         <p>捐赠金额</p>
         <p>捐赠对象</p>
         <p>捐赠时间</p>
        </li>
        <li>
          <p>李*亮</p>
          <p>0.01</p>
          <p>园区红十字</p>
          <p>2021-02-12 21:12:12</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            detail: {}
        };
    },
    mounted () {
      
    },
    methods: {
        getDetail() {
            this.$api.getDetail().then(res=>{
                this.detail = res.value;
            });
        }
    },
};
</script>

<style lang="scss" scoped>
  .donation-records-wrapper{
    text-align: center;
  }
  .donation-records_img{
    width: 100vw;
    height: 300px;
  }
  .donation-records_list{
    .donation-records_list_title{
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .donation-records_list_main{
      li{
        display: flex;
        justify-content: space-between;
      }
      p{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25%;
        height: 60px;
      }
    }
  }
</style>