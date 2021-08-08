<template>
  <HelloWorld
   v-bind="$props"
   v-on="$listeners"
   
  />

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import HelloWorld from './HelloWorld.vue';

@Component(
  {components:{HelloWorld}}
)

export default class Temp extends Vue {
  @Prop() private msg!: string;
  // pClick(){
  //   alert('temp')
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
