import {createRouter, createWebHashHistory} from 'vue-router'
import MainSection from "@/components/MainSection";
import AddPurchaseSection from "@/components/AddPurchaseSection";
import AddIncomeSection from "@/components/AddIncomeSection";
import StatisticsSection from "@/components/StatisticsSection";


let routes = [
    {path: "/", name: "main", component: MainSection},
    {path: "/add-purchase", name: "addPurchase", component: AddPurchaseSection},
    {path: "/add-income", name: "addIncome", component: AddIncomeSection},
    {path: "/statistics", name: "showStatistics", component: StatisticsSection}
]

let router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router