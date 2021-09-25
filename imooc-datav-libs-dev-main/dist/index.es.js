import Test from '@/components/Test/index';
import TestComp from '@/components/TestComp/index';
import Icon from '@/components/Icon/index';
import SvgAnimation from '@/components/SvgAnimation/index';
import LoadingComp from '@/components/Loading/index';
import FlyBoxComp from '@/components/FlyBox/index';
import ContainerComp from '@/components/ContainerComp/index';
import VueEcharts from '@/components/VueEcharts/index';

/* ----------------------------------------------------------------------*/
function index (Vue) {
  Vue.use(Test);
  Vue.use(TestComp);
  Vue.use(Icon);
  Vue.use(SvgAnimation);
  Vue.use(LoadingComp);
  Vue.use(FlyBoxComp);
  Vue.use(ContainerComp);
  Vue.use(VueEcharts);
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

export default index;
