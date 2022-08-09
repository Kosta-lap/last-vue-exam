<template>
<div class="container component">
  <div class="greetings">
    <h1>Добро пожаловать в web-приложения для учета ваших расходов/доходов!</h1>
    <p>Выберете, что вы хотите сделать:</p>
  </div>
  <ul>
    <li><router-link :to="{name: 'addPurchase'}">Внести покупки</router-link></li>
    <li><router-link :to="{name: 'addIncome'}">Внести доходы</router-link></li>
    <li><router-link :to="{name: 'showStatistics'}">Показать статистику</router-link></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "MainSection"
}
</script>

<style scoped>
.greetings{
  text-align: center;
}
.greetings p{
  font-size: 20px;
}
h1{
  font-size: 33px;
  margin-bottom: 25px;
}

a{
  text-decoration: none;
  color: #3F3F3F;
  transition: all 0.3s linear;
  font-size: 19px;
  font-weight: bold;
}
a:hover{
  color: #FF9900;
}

ul{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
ul li{
  padding: 5px 13px;
}
</style>