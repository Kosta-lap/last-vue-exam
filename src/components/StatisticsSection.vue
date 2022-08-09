<template>
  <div class="container component">
    <h1 class="title" @click="getMostBiggestPurchases">Статистика</h1>
    <div class="stat">
      <div class="stat-general">
        <div class="stat-general-item">
          <h3>Траты по категориям:</h3>
          <div class="desc-box">
            <div class="desc" v-for="(item, index) in getPurchaseOptions" :key="index">
              <p>{{item.text}}: {{getSum(item.value, getPurchase)}} ₽</p>
            </div>
          </div>
        </div>
        <div class="stat-general-item">
          <h3>Доходы по категориям:</h3>
          <div class="desc-box">
            <div class="desc" v-for="(item, index) in getIncomeOptions" :key="index">
              <p>{{item.text}}: {{getSum(item.value, getIncome)}} ₽</p>
            </div>
          </div>
        </div>
      </div>
      <div class="stat-general">
        <div class="stat-general-item">
          <h3>Общее значение расходов:</h3>
          <div class="desc-box">
            <p>{{getCommonResult(getPurchase)}} ₽</p>
          </div>
        </div>
        <div class="stat-general-item">
          <h3>Общее значение доходов:</h3>
          <div class="desc-box">
            <p>{{getCommonResult(getIncome)}} ₽</p>
          </div>
        </div>
      </div>
      <div class="stat-general">
        <div class="stat-general-item">
          <h3>Разница между доходами и расходами:</h3>
          <div class="desc-box difference">
            <p>{{getCommonResult(getIncome) - getCommonResult(getPurchase)}} ₽</p>
          </div>
        </div>
      </div>
      <div class="stat-general-wrap">
        <h3>Наибольшие расходы за месяц:</h3>
        <div class="stat-general">
          <div class="stat-general-box" v-for="(item, index) in getMostBiggestPurchases()" :key="index">
            <p>Стоимость: {{item.cost}} ₽</p>
            <p>Дата: {{item.date}}</p>
            <p>Категория: {{item.category}}</p>
            <p>Комментарий: {{item.comm}}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "StatisticsSection",
  computed: mapGetters(['getIncomeOptions', 'getPurchaseOptions', 'getPurchase', 'getIncome']),
  methods:{
    getSum(category, arr){
      let sum = 0;
      arr.forEach((item)=>{
        if(item.category === category){
          sum += item.cost
        }
      })
      return sum;
    },
    getCommonResult(arr){
      let sum = 0;
      arr.forEach((item)=>{
          sum += item.cost
      })
      return sum;
    },
    getMostBiggestPurchases(){
      let dateNow = new Date().toLocaleDateString().split(".");
      dateNow.shift();
      dateNow.reverse()

      return this.getPurchase.filter(item=>{
        let dateArr = item.date.split("-");
        dateArr.pop();
        if(dateArr[0] === dateNow[0] && dateArr[1] === dateNow[1]){
          return item
        }
      }).sort( (a, b) =>  b.cost - a.cost ).slice(0, 3)
    }
  }
}
</script>

<style scoped>
.stat-general{
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 55px;
}
.stat-general-wrap h3{
  text-align: center;
}
h3{
  font-size: 24px;
  margin-bottom: 20px;
}
.desc-box{
  margin-left: 25px;
}
.desc-box.difference{
  margin-left: 0px;
  text-align: center;
}
.desc p{
  font-size: 17px;
  margin-bottom: 10px;
}

.stat-general-box{
  max-width: 250px;
  word-break: break-all;
  padding: 10px;
  border: 2px solid black;
}

.stat-general-box p{
  font-size: 17px;
  margin-bottom: 15px;
}

.stat-general-box p:last-child{
  margin-bottom: 0px;
}

</style>