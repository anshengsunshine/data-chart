<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Icon">Icon</router-link> |
    <router-link to="/test1">Test1</router-link> |
    <router-link to="/test_Animation">Test_Animation</router-link> |
    <router-link to="/loading">Loading</router-link> | 
    <router-link to="/FlyCom">FlyCom</router-link> | 
    <router-link to="/CompsUse">CompsUse</router-link> | 
  </div>
  <router-view />
  <!-- <test-component /> -->
  <!-- <container-comp :options="{ width: 3840, height: 2160 }">
    <div class="test">777777</div>
  </container-comp> -->
</template>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.test {
  font-size: 140px;
  color: #f00;
  transform: scale(0.5);
}
</style>
