<template>
  <div>
      <div v-for="collection in bracketCollections">
        <router-link :to="{ name: 'BracketCollection', params: { bracketId: collection.CollectionID } }"><b-btn>Bracket {{collection.CollectionID}}</b-btn></router-link>
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
    this.updateUserAndBrackets();
  },
  methods : { //put functions here
    updateUserAndBrackets : function() {
      this.bracketCollections = []

      var vm = this
      api.getUser(vm.$store.state.user.userID).then(function(r){
        vm.$store.state.user = r.data[0]

        if(vm.$store.state.user.bracketCollection1){
          api.getBracketCollection(vm.$store.state.user.bracketCollection1).then(function (bcr) {
            vm.bracketCollections.push(bcr.data[0])
          })
        }

        if(vm.$store.state.user.bracketCollection2){
          api.getBracketCollection(vm.$store.state.user.bracketCollection2).then(function (bcr) {
            vm.bracketCollections.push(bcr.data[0])
          })
        }

        if(vm.$store.state.user.bracketCollection3){
          api.getBracketCollection(vm.$store.state.user.bracketCollection3).then(function (bcr) {
            vm.bracketCollections.push(bcr.data[0])
          })
        }
      })
    },
    createBC : async function () {
      var vm = this
      var newBCID = this.$store.state.user.userID + '--' + (this.bracketCollections.length+1)
      await api.createBracketCollection(this.bracketCollections.length+1, this.$store.state.user.userID, newBCID)
      vm.updateUserAndBrackets()
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
