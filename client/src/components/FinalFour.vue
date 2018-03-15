<template>
  <div>
    <div v-if="games.length==7">
      <main style="justify-content: center;">
        <ul>
            <li>&nbsp;</li>

            <li class="game game-top teamHover"   @click="setNext(games[4].gameID,games[4].team1,$store.state.bracket['Winner'+games[0].gameID])"> {{ games[4].team1 ? teams[games[4].team1].teamName : teams[$store.state.bracket['Winner'+games[0].gameID]] ? teams[$store.state.bracket['Winner'+games[0].gameID]].teamName : ""}}<span v-html=invis()></span></li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="setNext(games[4].gameID,games[4].team1,$store.state.bracket['Winner'+games[1].gameID])">{{ games[4].team1 ? teams[games[4].team2].teamName : teams[$store.state.bracket['Winner'+games[1].gameID]] ? teams[$store.state.bracket['Winner'+games[1].gameID]].teamName : ""}}<span v-html=invis()></span></li>

            <li>&nbsp;</li>

            <li class="game game-top teamHover"   @click="setNext(games[5].gameID,games[5].team2,$store.state.bracket['Winner'+games[2].gameID])">{{ games[5].team1 ? teams[games[5].team1].teamName : teams[$store.state.bracket['Winner'+games[2].gameID]] ? teams[$store.state.bracket['Winner'+games[2].gameID]].teamName : ""}}<span v-html=invis()></span></li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="setNext(games[5].gameID,games[5].team2,$store.state.bracket['Winner'+games[3].gameID])">{{ games[5].team1 ? teams[games[5].team2].teamName : teams[$store.state.bracket['Winner'+games[3].gameID]] ? teams[$store.state.bracket['Winner'+games[3].gameID]].teamName : ""}}<span v-html=invis()></span></li>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>

            <li class="game game-top teamHover"   @click="setNext(games[6].gameID,games[4].team1,$store.state.bracket['Winner'+games[4].gameID])"> {{ games[6].team1 ? teams[games[6].team1].teamName : teams[$store.state.bracket['Winner'+games[4].gameID]] ? teams[$store.state.bracket['Winner'+games[4].gameID]].teamName : ""}}<span v-html=invis()></span></li>
            <li>&nbsp;</li>
            <li class="game game-bottom teamHover" @click="setNext(games[6].gameID,games[4].team2,$store.state.bracket['Winner'+games[5].gameID])">{{ games[6].team2 ? teams[games[6].team2].teamName : teams[$store.state.bracket['Winner'+games[5].gameID]] ? teams[$store.state.bracket['Winner'+games[5].gameID]].teamName : ""}}<span v-html=invis()></span></li>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>

            <li class="game game-bottom teamHover" >{{ teams[games[6].winner] ? teams[games[6].winner].teamName : teams[$store.state.bracket['Winner'+games[6].gameID]] ? teams[$store.state.bracket['Winner'+games[6].gameID]].teamName : ""}}<span v-html=invis()></span></li>

            <li>&nbsp;</li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
import api from '../services/Api'
import services from '../services/Services'

export default {
  name: 'FinalFour',
  data () {
    return {
      teams: []
    }
  },
  props : {
    games : null
  },
  mounted : function () {
    this.getTeams()
    services.updateCurrentRound()
  },
  created : function () {
  },
  methods : { //put functions here
    getTeams : async function () {
      var t = await api.getTeams()
      this.teams = t.data
    },
    setNext : function (gameID, gteam, bteam) {
      var vm = this
      if(vm.games.find(function(e){return e.gameID==gameID}).round<=vm.$store.state.currentRound)
        return

      if(!gteam){
        vm.$store.state.bracket['Winner'+gameID] = bteam
      }else{
        vm.$store.state.bracket['Winner'+gameID] = gteam
      }
    },
    invis : function () {
      return "<div style='visibility:hidden'>.</div>"
    }
  }
}
</script>

<style scoped>
  main, ul {
    display:flex;
  }

  ul {
    flex-direction:column;
    width: 200px;
    list-style:none;
    padding:0;
  }

  .game + li {
    flex-grow:1;
  }

  li:first-child,li:last-child {
    flex-grow:.5;
  }

  .game {
    padding-left:20px;
  }

  .winner {
    font-weight:bold;
  }

  .game span {
    float:right;
    margin-right:5px;
  }

  .game-top {
    border-bottom:1px solid #aaa;
  }

  .game-top + li {
    border-right:1px solid #aaa; min-height:40px;
  }

  .game-bottom {
    border-top:1px solid #aaa;
  }

  .teamHover {
    cursor: pointer;
  }
</style>
