import { createStore } from 'vuex'

const store =  createStore({
    state () {
        return {
            arrPurchase: [],
            arrIncome: [],
            arrPurchaseOptions: [
                {text: "Еда", value: "еда"},
                {text: "Одежда", value: "одежда"},
                {text: "Развлечения", value: "развлечения"},
                {text: "Техника", value: "техника"}
            ],
            arrIncomeOptions: [
                {text: "Работа", value: "работа"},
                {text: "Пассивный доход", value: "пассив"},
                {text: "Карманные расходы", value: "карманн"},
                {text: "Стипендия", value: "стип"}
            ]
        }
    },
    getters: {
        getPurchase (state) {
            return state.arrPurchase;
        },
        getIncome (state) {
            return state.arrIncome;
        },
        getPurchaseOptions (state) {
            return state.arrPurchaseOptions;
        },
        getIncomeOptions (state) {
            return state.arrIncomeOptions;
        },
    },
    mutations: {
        addPurchase(state, payload){
            state.arrPurchase.push(payload);
        },
        addIncome(state, payload){
            state.arrIncome.push(payload);
        },
        initialiseStore(state) {
            if(localStorage.getItem('store')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        }
    }
})

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});

export default store;