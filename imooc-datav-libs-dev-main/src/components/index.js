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