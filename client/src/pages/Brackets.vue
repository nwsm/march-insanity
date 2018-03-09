<template>
  <div>
      <div v-for="collection in bracketCollections">
        <b-btn>Bracket</b-btn>
      </div>

      <div v-if="bracketCollections.length<3">
        <b-btn @click="createBC">Make a Bracket Collection</b-btn>
      </div>
      <router-link to="/">Main</router-link>
  </div>
</template>

<script>
import api from '../services/Api' //this file is where we define functions to call the API. Add functions to the file as needed

export default {
  name: 'Brackets',
  data () {
    return {
      bracketCollections : []
    }
  },
  mounted : function () { //mounted happens when this page is loaded, so we grab the brackets here
    this.getBCs();
  },
  methods : { //put functions here
    getBCs(){
      var store = this.$store
      var vm = this;
      if(this.$store.state.user.bracketCollection1){
        api.getBracketCollection(store.state.user.bracketCollection1).then(function (r) {
          vm.bracketCollections.push(r.data)
        })
      }

      if(this.$store.state.user.bracketCollection2){
        api.getBracketCollection(store.state.user.bracketCollection2).then(function (r) {
          vm.bracketCollections.push(r.data)
        })
      }

      if(this.$store.state.user.bracketCollection3){
        api.getBracketCollection(store.state.user.bracketCollection3).then(function (r) {
          vm.bracketCollections.push(r.data)
        })
      }
    },
    async createBC () {
      await api.insertBracketCollection(this.bracketCollections.length+1)
      this.getBCs()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
