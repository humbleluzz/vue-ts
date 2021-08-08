<template>
  <div id="app">
    <Temp
    @pClick="pClick"
    :msg="msg"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Temp from './components/Temp.vue';
@Component({
  components: {
    Temp,
  },
})
export default class App extends Vue {
  msg:string ="hello"
  pClick(){
    alert("111")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
