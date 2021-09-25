(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@/components/Test/index'), require('@/components/TestComp/index'), require('@/components/Icon/index'), require('@/components/SvgAnimation/index'), require('@/components/Loading/index'), require('@/components/flyBox/index'), require('@/components/ContainerComp/index'), require('@/components/VueEcharts/index')) :
    typeof define === 'function' && define.amd ? define(['@/components/Test/index', '@/components/TestComp/index', '@/components/Icon/index', '@/components/SvgAnimation/index', '@/components/Loading/index', '@/components/flyBox/index', '@/components/ContainerComp/index', '@/components/VueEcharts/index'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datav = factory(global.Test, global.TestComp, global.Icon, global.SvgAnimation, global.LoadingComp, global.FlyBoxComp, global.ContainerComp, global.VueEcharts));
}(this, (function (Test, TestComp, Icon, SvgAnimation, LoadingComp, FlyBoxComp, ContainerComp, VueEcharts) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Test__default = /*#__PURE__*/_interopDefaultLegacy(Test);
    var TestComp__default = /*#__PURE__*/_interopDefaultLegacy(TestComp);
    var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon);
    var SvgAnimation__default = /*#__PURE__*/_interopDefaultLegacy(SvgAnimation);
    var LoadingComp__default = /*#__PURE__*/_interopDefaultLegacy(LoadingComp);
    var FlyBoxComp__default = /*#__PURE__*/_interopDefaultLegacy(FlyBoxComp);
    var ContainerComp__default = /*#__PURE__*/_interopDefaultLegacy(ContainerComp);
    var VueEcharts__default = /*#__PURE__*/_interopDefaultLegacy(VueEcharts);

    /* ----------------------------------------------------------------------*/
    function index (Vue) {
      Vue.use(Test__default['default']);
      Vue.use(TestComp__default['default']);
      Vue.use(Icon__default['default']);
      Vue.use(SvgAnimation__default['default']);
      Vue.use(LoadingComp__default['default']);
      Vue.use(FlyBoxComp__default['default']);
      Vue.use(ContainerComp__default['default']);
      Vue.use(VueEcharts__default['default']);
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

    return index;

})));
