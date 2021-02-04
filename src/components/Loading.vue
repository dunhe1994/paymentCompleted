<template>
  <div v-show="show" class="loading">
    <svg viewBox="25 25 50 50" class="van-loading__circular">
      <circle cx="50" cy="50" r="20" fill="none"></circle>
    </svg>
  </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            msg:''
        };
    },
};
</script>
<style lang="scss" scoped>
.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  .van-loading__circular {
    width: 50px;
    height: 50px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -25px;
    margin-top: -25px;
  }
}
</style>