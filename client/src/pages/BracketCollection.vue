<template>
  <div>
      <br>
      <div v-for="onebracket in brackets">
        <router-link v-if="$store.state.currentRound==onebracket.bracketType-1" :to="{ name: 'Bracket', params: { bracket: onebracket } }"><b-btn>Bracket {{onebracket.bracketType}}</b-btn></router-link>
      </div>
      <br>
      <div>
        <h5>Come back when this round is over but the next hasn't started to set your next bracket!</h5>
      </div>
  </div>
</template>

<script>
import api from '../services/Api'
import services from '../services/Services'
export default {
  name: 'BracketCollection',
  data () {
    return {
      bracketCollection: null,
      brackets: [],
      bracketCollectionId: 0
    }
  },
  created () {
    this.bracketCollectionId = this.$route.params.bracketCollectionId
    services.updateCurrentRound()
  },
  mounted: function () {
    this.updateCollectionAndBrackets()
  },
  methods: {
    updateCollectionAndBrackets: function () {
      this.brackets = []

      var vm = this
      api.getBracketCollection(vm.bracketCollectionId).then(function (r) {
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
