<template>
  <div id="app">
       <router-view></router-view>
  </div>
</template>
<script>
export default {
    mounted () {
        // let userInfo = this.$store.getters.userInfo;
    },
    watch: {
        data() {
            return {
                currRoute:''
            };
        },
        $route() {
        },
    },
    methods: {
       
    },
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
