<template>
<div class="container component">
  <h1 class="title">Внесение покупок</h1>
  <div class="form">
    <div class="form-item">
      <label for="cost">Сумма покупки:</label>
      <input type="number" id="cost" v-model="dataPurchase.cost">
    </div>
    <div class="form-item">
      <label for="date">Дата покупки:</label>
      <input type="date" id="date"  v-model="dataPurchase.date">
    </div>
    <div class="form-item">
      <label for="opt">Категория покупки:</label>
      <select id="opt"  v-model="dataPurchase.category">
        <option v-for="(option, index) in selectOpt" :value="option.value" :key="index">{{ option.text }}</option>
      </select>
    </div>
    <div class="form-item">
      <label for="comm">Комментарий к покупке:</label>
      <textarea  id="comm"  v-model="dataPurchase.comm"></textarea>
    </div>
    <button @click="sendPurchase">Подтвердить</button>
  </div>
</div>
</template>

<script>

export default {
  name: "AddPurchaseSection",
  data(){
    return{
      dataPurchase:{
        cost: 0,
        date: "",
        category: "еда",
        comm: ""
      }
    }
  },
  computed:{
    selectOpt(){
      return this.$store.getters.getPurchaseOptions
    }
  },
  methods:{
    sendPurchase(){
      if(this.dataPurchase.cost && this.dataPurchase.date) {
        this.$store.commit("addPurchase", {...this.dataPurchase})
        this.dataPurchase = {cost: 0, date: "", category: "еда", comm: ""}
      }else{
        alert("Введите все необходимые данные!")
      }
    }
  }
}

</script>

<style scoped>
textarea{
  resize: none;
  padding: 15px;
  height: 200px;
}
button{
  display: block;
  margin: 0 auto;
}
</style>