/* ----------------------------------------------------------------------*/
// 由于在package.json中已删除sam-test-data依赖，因此以下代码均不可执行
//全局导入方法获取data中的内容
// import * as data from 'sam-test-data'
// console.log(data.random(100), data.a, data.b)
// export default {}

// 解构方法获取data中的内容
// import {random,a,b} from 'sam-test-data'
// console.log(random(100), a, b)
/*------------------------------------------------------------------------*/

/* -----------------------------------------------------------------------*/
// tree-shaking机制
// vue3中通过api方式进行引入，这样打包的内容比较小，只打包需要的内容；
// 而在vue2中则是会将所有代码都进行打包
// import { random } from 'sam-test-data'
// console.log(random(100));
// export default random
/* -----------------------------------------------------------------------*/
/* ----------------------------------------------*/
// 可以使用babel-node来输出运行，但无法bulid，
// 因此需要装插件rollup-plugin-commonjs
// import {a} from './cjs'
// console.log(a)
// export default data
/*----------------------------------------------------------*/ 

/*----------------------------------------------------------*/
// bulid时不会将es6代码转换为es5及以下，低版本浏览器可支持 
// import {a,b} from './cjs'
// const c=()=>{
//   return 3
// }
// export default c
/*----------------------------------------------------------*/ 

/*----------------------------------------------------------*/ 
// 打包json，在默认情况下不支持json的打包，需要安装插件rollup-plugin-json
// import pkg from '../package.json'
// console.log(pkg)
/*----------------------------------------------------------*/ 

/*----------------------------------------------------------*/ 
// vue文件bulid
// import Test from './Test.vue';
// import ContainerComp from './components/ContainerComp/ContainerComp.vue';
// import VueEcharts from './components/VueEcharts/VueEcharts.vue';
// export default function(Vue){
//   Vue.component(Test.name,Test)
//   Vue.component(ContainerComp.name,ContainerComp)
//   Vue.component(VueEcharts.name,VueEcharts)
// }

import Test from "./components/Test/index";
import TestComp from "./components/TestComp/index";
import Icon from "./components/Icon/index";
import SvgAnimation from "./components/SvgAnimation/index";
import LoadingComp from "./components/Loading/index";
import FlyBoxComp from "./components/FlyBoxComp/index";
import ContainerComp from "./components/ContainerComp/index";
import VueEcharts from "./components/VueEcharts/index";

export default function (Vue) {
    Vue.use(Test)
    Vue.use(TestComp)
    Vue.use(Icon)
    Vue.use(SvgAnimation)
    Vue.use(LoadingComp)
    Vue.use(FlyBoxComp)
    Vue.use(ContainerComp)
    Vue.use(VueEcharts)
}

/*------------------------------------------*/
//commonjs文件
/*该方法不论有没有用到全部，bulid时均会被打包*/
// const a = 1
// const b = 2
// module.exports = { a, b }

// 局部打包的方法
// exports.a=1;
// exports.b=2;
/*------------------------------------------*/