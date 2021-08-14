import Icon from "@/components/Icon/index";
import SvgAnimation from "@/components/SvgAnimation/index";
import LoadingComp from "@/components/Loading/index";
import FlyBoxComp from "@/components/flyBox/index";

export default function (Vue) {
    Vue.use(Icon)
    Vue.use(SvgAnimation)
    Vue.use(LoadingComp)
    Vue.use(FlyBoxComp)
}