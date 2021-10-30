import BarComp from "@/components/barComp/index";
import TopHeader from "@/components/topHeader/index";
import SalesBar from "@/components/salesBar/index";
import SalesLine from "@/components/salesLine/index";
import SalesPie from "@/components/salesPie/index";
import SalesMap from "@/components/salesMap/index";
import SalesSun from "@/components/salesSun/index";

export default function (Vue) {
    Vue.use(BarComp)
    Vue.use(TopHeader)
    Vue.use(SalesBar)
    Vue.use(SalesLine)
    Vue.use(SalesPie)
    Vue.use(SalesMap)
    Vue.use(SalesSun)
}