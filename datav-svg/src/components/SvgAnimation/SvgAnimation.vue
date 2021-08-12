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
    <!-- <svg width="500" height="200" viewBox="0 0 500 200">
      !-- matrix:  _x/_y:旧的x/y   
       [2,-1,50] ==> 2*_x+(-1)*_y+50 = x
       [1,2,0] ==> 1*_x+2*_y+0 = y

       顶点坐标：
       [0,0]  => [50,0]
       [100,0] =>[250,100]
       [100,50] =>[200,200]
       [0,50] =>[0,100]
       --
      <rect
        x="0"
        y="0"
        width="100"
        height="50"
        fill="red"
        transform="matrix(2 1 -1 2 50 0)"
      ></rect>
    </svg> -->
    <!-- 边框矩形-无填充 -->
    <svg width="500" height="200" viewBox="0 0 500 200">
      <rect
        class="rect"
        x="5"
        y="5"
        width="100"
        height="50"
        fill="none"
        stroke-width="5"
        stroke="blue"
      ></rect>
    </svg>
  </div>
  <div class="container">
    <svg width="440" height="440" viewBox="0 0 440 440">
      <circle
        cx="220"
        cy="220"
        r="180"
        stroke-width="20"
        stroke="#d1d3d7"
        fill="none"
      ></circle>
      <!-- 2πr：2*3.1415926*200 = 1257 -->
      <circle
        class="circle"
        cx="220"
        cy="220"
        r="180"
        stroke-width="20"
        stroke="#00a5e0"
        fill="none"
        transform="matrix(0 -1 1 0 0 440)"
      ></circle>
    </svg>
  </div>
  <div class="container">
    <svg width="200" height="200" viewBox="0 0 200 200">
      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        fill="none"
        stroke="grey"
        stroke-width="8"
      ></rect>
      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        fill="none"
        stroke="blue"
        stroke-width="8"
        class="rect-process"
        transform=""
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
.rect {
  stroke-dasharray: 10 20 30;
}
.circle {
  animation: circle 5s linear infinite;
}
@keyframes circle {
  from {
    stroke-dasharray: 0 1257;
  }
  to {
    stroke-dasharray: 1257 1257;
  }
}
.rect-process {
  animation: rect-process 5s linear infinite;
}
@keyframes rect-process {
  from {
    stroke-dasharray: 0 800;
  }
  to {
    stroke-dasharray: 800 800;
  }
}
</style>
