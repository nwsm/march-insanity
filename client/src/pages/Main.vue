<template>
  <div>
    <router-link to="/Groups"><b-btn size="lg" variant="outline-primary">Your Groups</b-btn></router-link>
    <router-link to="/BracketCollections"><b-btn size="lg" variant="outline-primary">Your Bracket Collections</b-btn></router-link>
    <div id="updateScores" v-if="this.appAdmin">
      <b-btn @click="updateScores" size="lg" variant="outline-primary">Update Scores</b-btn>
    </div>
  </div>
</template>

<script>
import api from '../services/Api' //this file is where we define functions to call the API. Add functions to the file as needed

export default {
  name: 'Main',
  data () {
    return {
      appAdmin: false
    }
  },

  mounted : function() {
    this.getAppAdmins();
  },

  methods: {
    getAppAdmins : async function() {
      var vm = this
      var admin = false
      await api.getAppAdmins().then(function(r) {
        for(var i = 0; i < r.data.length; i++) {
          if (r.data[i].settingValue == vm.$store.state.user.userID) {
            admin = true
          }
        }
      })

      this.appAdmin = admin
    },

    updateScores : function() {
      console.log("updateScores Clicked")
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#updateScores {
  padding-top: 8px;
}
</style>
