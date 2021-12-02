<template>
  <div class="hello">
    <h1>{{ $store.getters.message }}</h1>
    <h4> {{ $store.getters.complete }} </h4>
    <h2>Mis amigos</h2>
    <input type="text" v-model="amigo"><br><br>
    <button @click="addFriend">Agregar</button>
    <ul>
      <li v-for="(amigo, index) in $store.state.friends"
        :key="index">
        {{ amigo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      amigo:''
    }
  },
  methods: {
    addFriend(){
      this.$store.state.amigo = this.amigo;
      this.$store.dispatch('addFriendAction');
      this.amigo = '';
    }
  }
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
