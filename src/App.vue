<template>
  <header class="cover">
    <div class="container">
      <div class="header-box">
        <router-link :to="{name: 'main'}"><img class="logo" src="./assets/Logo.svg" alt=""></router-link>
        <ul>
          <li><router-link :to="{name: 'addPurchase'}">Внести покупки</router-link></li>
          <li><router-link :to="{name: 'addIncome'}">Внести доходы</router-link></li>
          <li><router-link :to="{name: 'showStatistics'}">Показать статистику</router-link></li>
        </ul>
      </div>
    </div>
  </header>
  <div class="wrapp cover">
    <router-view></router-view>
  </div>
  <footer class="cover">
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Просто заглушка для футера</a>
  </footer>
</template>

<script>


export default {
  name: 'App',
  beforeCreate() {
    this.$store.commit('initialiseStore');
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
ul{
  list-style-type: none;
}
a{
  text-decoration: none;
  color: #EDEDED;
  transition: all 0.3s linear;
}
a:hover{
  color: #FF9900;
}

body{
  font-family: Bender;
}

.container{
  width: 1200px;
  margin: 0 auto;
}

.cover{
  display: flex;
  align-items: center;
}

header{
  flex: 0 0 8%;
  background-color: #3F3F3F;
  padding: 20px 0px;
}
.wrapp{
  flex: 0 0 84%;
  padding: 50px 0;
}
button{
  padding: 15px 50px;
  background-color: transparent;
  border-radius: 5px;
  transition: all 0.3s linear;
}
button:hover{
  background-color: #FF9900;
}
.header-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-box ul{
  display: flex;
}
.header-box ul li{
  padding: 5px 13px;
}
.logo{
  width: 50px;
}
.component .title{
  text-align: center;
  font-size: 45px;
  margin-bottom: 40px;
}
input,select,textarea{
  font-family: inherit;
  font-size: 17px;
}
textarea{
  line-height: 27px;
}
footer{
  flex: 0 0 8%;
  height: 100px;
  background-color: #3F3F3F;
}
.form-item{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.form-item {
  margin-bottom: 45px;
}
.form-item label{
  font-size: 21px;
  margin-bottom: 15px;
}
.form-item input,select{
  text-align: center;
  padding: 10px;
}

footer{
  justify-content: center;
}

@font-face {
  font-family: "Bender";
  src: url("./assets/Fonts/bender/Jovanny Lemonad - Bender.otf");
  font-weight: 400;
}

@font-face {
  font-family: "Bender";
  src: url("./assets/Fonts/bender/Jovanny Lemonad - Bender-Italic.otf");
  font-style: italic;
  font-weight: 400;
}
@font-face {
  font-family: "Bender";
  src: url("./assets/Fonts/bender/Jovanny Lemonad - Bender-Bold.otf");
  font-weight: 700;
}
</style>
