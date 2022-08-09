<template>
  <div class="container component">
    <h1 class="title">Внесение дохода</h1>
    <div class="form">
      <div class="form-item">
        <label for="cost" >Сумма дохода:</label>
        <input type="number" id="cost" v-model="dataIncome.cost">
      </div>
      <div class="form-item">
        <label for="date">Дата получения дохода:</label>
        <input type="date" id="date"  v-model="dataIncome.date">
      </div>
      <div class="form-item">
        <label for="opt">Источник покупки:</label>
        <select id="opt"  v-model="dataIncome.category">
          <option v-for="(option, index) in selectOpt" :value="option.value" :key="index">{{ option.text }}</option>
        </select>
      </div>
      <button @click="sendIncome">Подтвердить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddIncomeSection",
  data(){
    return{
      dataIncome:{
        cost: 0,
        date: "",
        category: "работа",
      }
    }
  },
  computed:{
    selectOpt(){
      return this.$store.getters.getIncomeOptions
    }
  },
  methods:{
    sendIncome(){
      if(this.dataIncome.cost && this.dataIncome.date){
        this.$store.commit("addIncome", { ...this.dataIncome })
        this.dataIncome = {cost: 0, date: "", category: "работа"};
      }else{
        alert("Введите все необходимые данные!")
      }
    }
  }
}
</script>

<style scoped>
button{
  display: block;
  margin: 0 auto;
}
</style>