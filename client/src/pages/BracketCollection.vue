<template>
  <div>
      <div v-for="onebracket in brackets">
        <router-link :to="{ name: 'Bracket', params: { bracket: onebracket } }"><b-btn>Bracket {{onebracket.bracketType}}</b-btn></router-link>
      </div>
      <router-link to="/">Main</router-link>
  </div>
</template>

<script>
import api from '../services/Api' //this file is where we define functions to call the API. Add functions to the file as needed

export default {
  name: 'BracketCollection',
  data () {
    return {
      bracketCollection: null,
      brackets: [],
      bracketCollectionId: 0
    }
  },
  created() {
    this.bracketCollectionId = this.$route.params.bracketCollectionId
  },
  mounted : function () { //mounted happens when this page is loaded, so we grab the brackets here
    this.updateCollectionAndBrackets();
  },
  methods : { //put functions here
    updateCollectionAndBrackets : function() {
      this.brackets = []

      var vm = this
      api.getBracketCollection(vm.bracketCollectionId).then(function(r){
        vm.bracketCollection = r.data[0]
        api.getBracket(vm.bracketCollection.Bracket1ID).then(function (br) {
          vm.brackets.push(br.data[0])
        })

        api.getBracket(vm.bracketCollection.Bracket2ID).then(function (br) {
          vm.brackets.push(br.data[0])
        })

        api.getBracket(vm.bracketCollection.Bracket3ID).then(function (br) {
          vm.brackets.push(br.data[0])
        })

        api.getBracket(vm.bracketCollection.Bracket4ID).then(function (br) {
          vm.brackets.push(br.data[0])
        })

        api.getBracket(vm.bracketCollection.Bracket5ID).then(function (br) {
          vm.brackets.push(br.data[0])
        })

        api.getBracket(vm.bracketCollection.Bracket6ID).then(function (br) {
          vm.brackets.push(br.data[0])
        })

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
