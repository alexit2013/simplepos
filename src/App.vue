<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="main">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav';
export default {
  name: 'App',
  components: {
    leftNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  float: left;
  width: 95%;
  background-color: #eff2f7;
  height: 100%;
}
.router-link-exact-active{
  background-color: #a8cde8;
  color: #1d8ce0;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .1.5s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
