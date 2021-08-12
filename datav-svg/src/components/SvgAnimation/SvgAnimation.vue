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
  <div class="container">
    <svg viewBox="0 0 1024 1024" width="200" height="200">
      <path
        class="logo"
        d="M752.4 621.7c18.1 0 32.8-39.3 32.8-87.7 0-48.5-14.7-87.7-32.8-87.7s-32.8 39.3-32.8 87.7c0 48.4 14.7 87.7 32.8 87.7z m-284.1 43.8c18.1 0 32.8-34.4 32.8-76.8s-14.7-76.8-32.8-76.8c-18.1 0-32.8 34.4-32.8 76.8 0 42.5 14.7 76.8 32.8 76.8zM64 555.9c0 218.8 201.2 394.8 448 394.8s448-176 448-394.8-201.2-394.8-448-394.8c3.2 0 4.3 0.5 4.3 0.5-1.9-1.4-4-3.2-9.7-8.4-15.9-14.5-25.8-22.6-41.1-32.4-47.1-30.1-109-47.3-193.9-47.3-12.1 0-21.9 9.8-21.9 21.9s9.8 21.9 21.9 21.9c76.8 0 130.4 14.9 170.4 40.4 10.6 6.8 54.9 47.3 70 47.3 223.9 0 404.3 157.8 404.3 350.9S735.9 906.8 512 906.8 107.7 749 107.7 555.9c0-127.5 79.3-243.5 205.4-305.6 10.8-5.3 15.3-18.5 10-29.3-5.3-10.9-18.4-15.4-29.2-10C153.4 280 64 410.8 64 555.9z"
        p-id="5518"
      ></path>
    </svg>
  </div>
  <div class="container">
    <svg class="line-container" viewBox="0 0 400 400" width="400" height="400">
      <line
        class="line"
        x1="0"
        y1="50"
        x2="400"
        y2="50"
        fill="none"
        stroke-width="20"
        stroke="red"
      ></line>
    </svg>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
export default {
  name: "SvgAnimation",
  setup(){
    onMounted(()=>{
      const logo = document.getElementsByClassName("logo")[0]
      console.log(logo.getTotalLength())
    })
  }
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

.logo {
  fill: none;
  stroke: #333;
  stroke-width: 5;
  animation: logo 10s linear forwards;
}

@keyframes logo {
  0% {
    fill:white;
    stroke:#333;
    stroke-dasharray: 6024;
    stroke-dashoffset: 6024;
  }
  50% {
    fill:white;
    stroke:#333;
    stroke-dasharray: 6024;
    stroke-dashoffset: 0;
  }
  75%{
    fill:red;
  }
  100%{
    fill:blue
  }
}

.line {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 0.5s ease;
}
.line-container {
  &:hover {
    .line {
      stroke-dashoffset: 0;
    }
  }
}
</style>
