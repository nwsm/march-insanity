<template>
  <div>
    <h1><b-badge variant="success">{{viewNames[currentView]}}</b-badge></h1>
    <b-btn v-if="currentView>0" @click="incrementView(-1)"> &lt; </b-btn>
    <div v-if="bracket.bracketType>$store.state.currentRound"><b-btn @click="saveBracket">Save</b-btn></div>
    <div v-else><b-badge variant="warning">Too late to edit this bracket!</b-badge></div>

    <b-btn v-if="currentView<4" @click="incrementView(1)"> &gt; </b-btn>
    <regionalBracket v-if="currentView==0" :games="midwest"></regionalBracket>
    <regionalBracket v-if="currentView==1" :games="west"></regionalBracket>
    <regionalBracket v-if="currentView==2" :games="east"></regionalBracket>
    <regionalBracket v-if="currentView==3" :games="south"></regionalBracket>
    <finalFour v-if="currentView==4" :games="finalFour"></finalFour>

    <router-link to="/">Main</router-link>
  </div>
</template>

<script>
import api from '../services/Api' //this file is where we define functions to call the API. Add functions to the file as needed
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
  created() {
    this.bracket = this.$route.params.bracket
    this.$store.state.bracket = this.bracket
  },
  mounted : function () {
    var vm = this
    vm.getGames().then(function (r) {
      vm.splitGames(vm)
    }),
    this.updateCurrentRound()
  },
  methods : { //put functions here
    updateCurrentRound(){
      var vm = this
      api.getCurrentRound().then(function (r) {
        vm.$store.state.currentRound = r.data[0].settingValue
      })
    },
    incrementView : function (x) {
      this.currentView += x
    },
    getGames : async function () {
      var x = await api.getGames()
      this.games = x.data
      return
    },
    saveBracket : function () {
      api.saveBracket()
    },
    splitGames : function (vm) {
      for(var i = 0; i < vm.games.length; i++){
        if(vm.games[i].gameID<9) //round of 64
          vm.midwest.push(vm.games[i])
        else if(vm.games[i].gameID<17)
          vm.west.push(vm.games[i])
        else if(vm.games[i].gameID<25)
          vm.east.push(vm.games[i])
        else if(vm.games[i].gameID<33)
          vm.south.push(vm.games[i])
        else if(vm.games[i].gameID<37) //round of 32
          vm.midwest.push(vm.games[i])
        else if(vm.games[i].gameID<41)
          vm.west.push(vm.games[i])
        else if(vm.games[i].gameID<45)
          vm.east.push(vm.games[i])
        else if(vm.games[i].gameID<49)
          vm.south.push(vm.games[i])
        else if(vm.games[i].gameID<51) //sweet sixteen
          vm.midwest.push(vm.games[i])
        else if(vm.games[i].gameID<53)
          vm.west.push(vm.games[i])
        else if(vm.games[i].gameID<55)
          vm.east.push(vm.games[i])
        else if(vm.games[i].gameID<57)
          vm.south.push(vm.games[i])
        else if(vm.games[i].gameID==57){ //elite eight
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
        else if(vm.games[i].gameID==61) //final four
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
