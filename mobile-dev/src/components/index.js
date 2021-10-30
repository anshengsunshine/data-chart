import BarComp from "@/components/barComp/index";
import TopHeader from "@/components/topHeader/index";
import SalesBar from "@/components/salesBar/index";
import SalesLine from "@/components/salesLine/index";

export default function (Vue) {
    Vue.use(BarComp)
    Vue.use(TopHeader)
    Vue.use(SalesBar)
    Vue.use(SalesLine)
}