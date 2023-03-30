

<template>
<div>

 <h1>{{ title }}</h1>

 <div v-if="showModal">

 <Modal  @close="toggleModal">

 <h1>this is the normal slot</h1>

<template v-slot:links>
  <a href="#">shop here</a>
</template>

</Modal>
</div>


<div v-if="showModaltwo">
 

 <Modal  @close="toggleModaltwo">

  <h1>econd modal here</h1>

<template v-slot:links>
  <a href="#">shop here</a>
</template>

</Modal>
</div>

<button @click="toggleModaltwo">show Modal 2</button>
 <button @click="toggleModal">open modal</button>
 <input type="text" ref="name">
 <button @click="handleClick">click</button>
</div>

</template>

<script>
import Modal from './components/Modal-comp.vue'

export default {
  name: 'App',
  components: {Modal},
 data () {
  return{
  title:'my first vue app', 

 
  showModal:false,


  showModaltwo:false,
}
  },
  methods:
// {handleClick(){this.$refs.name.classList.add("active")}},
{
  toggleModal(){this.showModal = !this.showModal},
  toggleModaltwo(){this.showModaltwo=!this.showModaltwo}
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
