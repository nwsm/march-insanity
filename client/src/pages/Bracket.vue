<template>
  <div>
    <h1><b-badge variant="success">{{viewNames[currentView]}}</b-badge></h1>
    <div>
      <b-btn @click="incrementView(-1)"> &lt; </b-btn>
      <b-btn v-if="bracket.bracketType>$store.state.currentRound" variant="success" @click="saveBracket">Save</b-btn>
      <b-btn @click="incrementView(1)"> &gt; </b-btn>
    </div>

    <regionalBracket v-if="currentView==0" :games="midwest"></regionalBracket>
    <regionalBracket v-if="currentView==1" :games="west"></regionalBracket>
    <regionalBracket v-if="currentView==2" :games="east"></regionalBracket>
    <regionalBracket v-if="currentView==3" :games="south"></regionalBracket>
    <finalFour v-if="currentView==4" :games="finalFour"></finalFour>
  </div>
</template>

<script>
import api from '../services/Api'
import services from '../services/Services'
import regionalBracket from '../components/RegionalBracket'
import finalFour from '../components/FinalFour'

export default {
  name: 'Bracket',
  data () {
    return {
      bracket: null,
      currentView: 0,
      games : 6,
      midwest: [],
      east: [],
      west: [],
      south: [],
      finalFour: [],
      viewNames: ['Midwest','West','East','South','Final Four']
    }
  },
  created () {
    this.bracket = this.$route.params.bracket
    this.$store.state.bracket = this.bracket
  },
  mounted: function () {
    var vm = this
    vm.getGames().then(function (r) {
      vm.splitGames(vm)
    }),
    services.updateCurrentRound()
  },
  methods: { //put functions here
    incrementView : function (x) {
      this.currentView += x

      if(this.currentView<0)
        this.currentView=0
      if(this.currentView>4)
        this.currentView=4
    },
    getGames: async function () {
      var x = await api.getGames()
      this.games = x.data
      return
    },
    saveBracket: function () {
      api.saveBracket()
    },
    splitGames : function (vm) {
      for(var i = 0; i < vm.games.length; i++){
        if(vm.games[i].gameID<9)
          vm.midwest.push(vm.games[i])
        else if(vm.games[i].gameID<17)
          vm.west.push(vm.games[i])
        else if(vm.games[i].gameID<25)
          vm.east.push(vm.games[i])
        else if(vm.games[i].gameID<33)
          vm.south.push(vm.games[i])
        else if(vm.games[i].gameID<37)
          vm.midwest.push(vm.games[i])
        else if(vm.games[i].gameID<41)
          vm.west.push(vm.games[i])
        else if(vm.games[i].gameID<45)
          vm.east.push(vm.games[i])
        else if(vm.games[i].gameID<49)
          vm.south.push(vm.games[i])
        else if(vm.games[i].gameID<51)
          vm.midwest.push(vm.games[i])
        else if(vm.games[i].gameID<53)
          vm.west.push(vm.games[i])
        else if(vm.games[i].gameID<55)
          vm.east.push(vm.games[i])
        else if(vm.games[i].gameID<57)
          vm.south.push(vm.games[i])
        else if(vm.games[i].gameID==57){
          vm.midwest.push(vm.games[i])
          vm.finalFour.push(vm.games[i])
        }
        else if(vm.games[i].gameID==58){
          vm.west.push(vm.games[i])
          vm.finalFour.push(vm.games[i])
        }
        else if(vm.games[i].gameID==59){
          vm.east.push(vm.games[i])
          vm.finalFour.push(vm.games[i])
        }
        else if(vm.games[i].gameID==60){
          vm.south.push(vm.games[i])
          vm.finalFour.push(vm.games[i])
        }
        else if(vm.games[i].gameID==61)
          vm.finalFour.push(vm.games[i])
        else if(vm.games[i].gameID==62)
          vm.finalFour.push(vm.games[i])
        else if(vm.games[i].gameID==63)
          vm.finalFour.push(vm.games[i])

      }
    }
  },
  components: {
    regionalBracket,
    finalFour
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
