<template>
  <div>
    <div v-if="games.length==15">
      <main>
        <ul>
            <template v-for="n in 8">
              <li>&nbsp;</li>

              <li class="game game-top"     @click="setNext(games[n-1].gameID,games[n-1].team1,games[n-1].gameID,games[n-1].team1)" >{{teams[games[n-1].team1] ? teams[games[n-1].team1].teamName : "Team"}}</li>
              <li>&nbsp;</li>
              <li class="game game-bottom " @click="setNext(games[n-1].gameID,games[n-1].team2,games[n-1].gameID,games[n-1].team2)" >{{teams[games[n-1].team2] ? teams[games[n-1].team2].teamName : "Team"}}</li>

            </template>
            <li>&nbsp;</li>
        </ul>
        <ul>

            <template v-for="n in 4">
              <li>&nbsp;</li>

              <li  class="game game-top"    @click="setNext(games[n + 7].gameID,games[n + 7].team1,$store.state.bracket['Winner'+games[n*2-2].gameID])">{{ games[n + 7].team1 ? teams[games[n + 7].team1].teamName : teams[$store.state.bracket['Winner'+games[n*2-2].gameID]] ? teams[$store.state.bracket['Winner'+games[n*2-2].gameID]].teamName : ""}}<span v-html=invis()></span></li>
              <li>&nbsp;</li>
              <li  class="game game-bottom" @click="setNext(games[n +7].gameID,games[n + 7].team2,$store.state.bracket['Winner'+games[n*2-1].gameID])">{{ games[n + 7].team2 ? teams[games[n + 7].team2].teamName : teams[$store.state.bracket['Winner'+games[n*2-1].gameID]] ? teams[$store.state.bracket['Winner'+games[n*2-1].gameID]].teamName : "" }}<span v-html=invis()></span></li>

            </template>

            <template>
              <li>&nbsp;</li>
            </template>

        </ul>
        <ul>
            <template v-for="n in 2">
              <li>&nbsp;</li>

              <li class="game game-top "    @click="setNext(games[n + 11].gameID,games[n + 11].team1,$store.state.bracket['Winner'+games[n*2+6].gameID])">{{ games[n + 11].team1 ? teams[games[n + 11].team1].teamName : teams[$store.state.bracket['Winner'+games[n*2+6].gameID]] ? teams[$store.state.bracket['Winner'+games[n*2+6].gameID]].teamName : ""}}<span v-html=invis()></span></li>
              <li>&nbsp;</li>
              <li  class="game game-bottom" @click="setNext(games[n + 11].gameID,games[n + 11].team2,$store.state.bracket['Winner'+games[n*2+7].gameID])">{{ games[n + 11].team2 ? teams[games[n + 11].team2].teamName : teams[$store.state.bracket['Winner'+games[n*2+7].gameID]] ? teams[$store.state.bracket['Winner'+games[n*2+7].gameID]].teamName : "" }}<span v-html=invis()></span></li>
            </template>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>

            <li class="game game-top "   @click="setNext(games[14].gameID,games[14].team1,$store.state.bracket['Winner'+games[12].gameID])">   {{ games[14].team1 ? teams[games[14].team1].teamName : teams[$store.state.bracket['Winner'+games[12].gameID]] ? teams[$store.state.bracket['Winner'+games[12].gameID]].teamName : ""}}<span v-html=invis()></span></li>
            <li>&nbsp;</li>
            <li class="game game-bottom" @click="setNext(games[14].gameID,games[14].team1,$store.state.bracket['Winner'+games[13].gameID])">{{ games[14].team1 ? teams[games[14].team2].teamName : teams[$store.state.bracket['Winner'+games[13].gameID]] ? teams[$store.state.bracket['Winner'+games[13].gameID]].teamName : ""}}<span v-html=invis()></span></li>

            <li>&nbsp;</li>
        </ul>
        <ul>
            <li>&nbsp;</li>
            <div class="game game-top ">   {{ teams[$store.state.bracket['Winner'+games[14].gameID]] ? teams[$store.state.bracket['Winner'+games[14].gameID]].teamName : "" }}<span v-html=invis()></span></div>
            <li>&nbsp;</li>
        </ul>
      </main>
    </div>
    <div v-if="games.length==3">

    </div>
  </div>
</template>

<script>
import api from '../services/Api'
export default {
  name: 'RegionalBracket',
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
</style>
