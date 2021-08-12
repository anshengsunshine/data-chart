<template>
  <div class="container">
    <!-- svg transform -->
    <!-- <svg width="200" height="200" viewBox="0 0 500 200">
      <rect
        x="0"
        y="0"
        width="100"
        height="50"
        fill="red"
        transform="translate(10,10) rotate(30) skewX(30) skewY(30) scale(0.5)"
      ></rect>
    </svg> -->
    <svg width="500" height="200" viewBox="0 0 500 200">
      <!-- matrix:  _x/_y:旧的x/y   
       [2,1,50] ==> 2*_x+(-1)*_y+50 = x
       [1,2,0] ==> 1*_x+2*_y+0 = y

       顶点坐标：
       [0,0]  => [50,0]
       [100,0] =>[250,100]
       [100,50] =>[200,200]
       [0,50] =>[0,100]
       -->
      <rect
        x="0"
        y="0"
        width="100"
        height="50"
        fill="red"
        transform="matrix(2 1 -1 2 50 0)"
      ></rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: "SvgAnimation",
};
</script>
<style lang="less" scoped>
.container {
  svg {
    border: 1px solid #333;
  }
}
</style>
