<template>
  <div>
    <button @click="increment">increment--state.count：{{ state.count }}</button><br />
    <button @click="increment">increment---count：{{ state.count }}</button><br />
    doubleCount：{{ doubleCount }} <br />doubleCount52222：{{ doubleCount2 }}<br />
    <button @click="gotoAbout">go to about</button><br />
    Vuex number：{{ number }}<br />
    <button @click="updataNumber">updata number</button><br />
    Vuex a.aa：{{ aa }}<br />
    Vuex b.bb：{{ bb }}<br />
    <button @click="updataAA">updata aa</button><br />
    <button @click="updataBB">updata bb</button><br />
  </div>
</template>
<script>
import useTest from "./useTest";
export default {
  setup() {
    return useTest();
  },
};
</script>
