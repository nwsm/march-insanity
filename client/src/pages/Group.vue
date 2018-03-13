<template>
  <div>
    <h1>Group Name: {{ groupName }}</h1>
    <div v-if="this.groupAdmin === this.userID">
      <router-link :to="{ name: 'Invite', params: { groupName: this.groupName, groupAdmin: this.groupAdmin } }"><b-btn>Invite new members</b-btn> </router-link>
    </div>
    <div v-if="notInGroup">
      <b-btn @click="joinGroup">Join</b-btn>
    </div>
    <div v-else>
      <h2>Choose your bracket collection for the group:</h2>
      <form>
        <div v-for="bc in this.BracketCollections">
          <input type="radio" name="BracketCollection" :value="bc.bcID"> {{bc.bcID}}<br>
        </div>
      </form>
      <b-btn @click="submitBCChoice">Submit Choice</b-btn>
    </div>  
    <router-link to="/Groups">Back to your groups</router-link>
    <div v-if="!notInGroup">
      <h2>Group Standings</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Bracket Collection</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in entries">
            <td>{{entry.userID}}</td>
            <td>{{entry.bracketCollection}}</td>
            <td>{{entry.Score}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from '../services/Api' //this file is where we define functions to call the API. Add functions to the file as needed

export default {
  name: 'Group',
  data () {
    return {
      groupName: 0,
      userID: 0,
      groupAdmin: 0,
      notInGroup: false,
      entries: [],
      BracketCollections: []
    }
  },
  
  created() {
    this.userID = this.$store.state.user.userID
    this.groupName = this.$route.params.id
  },
  mounted() {
    this.getGroupNameAndAdmin();
    this.checkMembership();
    this.getEntries();
    this.getUserBCs();
  },
  methods : { //put functions here
    getGroupNameAndAdmin: async function() {
        var admin = 0
        await api.getGroup(this.groupName).then(function(r){
            admin = r.data[0].groupAdmin
        })
        this.groupAdmin = admin
    },

    checkMembership: async function() {
        var notInGroup = true
        var groupName = this.groupName
        await api.getUserGroups(this.userID).then(function(r){
           for (var i = 0; i < r.data.length; i++){
               if (r.data[i].groupName == groupName) {
                   notInGroup = false
                   break
               }
           }
        })

        if (notInGroup) {
            this.notInGroup = true
        }
        else {
            this.notInGroup = false
        }
    },

   joinGroup: async function() {
       await api.createUserGroup(this.groupName, this.userID).then(
           this.checkMembership())
       this.getEntries() 
   },

   getEntries: async function() {
      this.entries = []
      var groupName = this.groupName
      var vm = this
      await api.getMembers(groupName).then(function(r){
        for (var i = 0; i < r.data.length; i++){
            vm.entries.push({userID: r.data[i].userID, bracketCollection: r.data[i].bracketCollection, Score: 0})
        }
      })
      for (var i = 0; i < vm.entries.length; i++) {
        await api.getUser(vm.entries[i].userID).then(function(r) {
           vm.entries[i].userID = r.data[0].name
        })
      }
   },

   getUserBCs: async function() {
     var vm = this
     await api.getUser(this.userID).then(function(r) {
       if (r.data[0].bracketCollection1 != null){
         vm.BracketCollections.push({bcID: r.data[0].bracketCollection1})
       }
       if (r.data[0].bracketCollection2 != null){
         vm.BracketCollections.push({bcID: r.data[0].bracketCollection2})
       }
       if (r.data[0].bracketCollection3 != null){
         vm.BracketCollections.push({bcID: r.data[0].bracketCollection3})
       }
     }) 
   },

   submitBCChoice: function() {
      var bcs = document.getElementsByName('BracketCollection');
      var bcID = null;
      for(var i = 0; i < bcs.length; i++){
          if(bcs[i].checked){
              bcID = bcs[i].value;
          }
      }
      
      if (bcID != null) {
        api.updateUserGroup(this.userID, this.groupName, bcID)
      }

      this.getEntries();
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    font-family: 'Open Sans', sans-serif;
    width: 750px;
    border-collapse: collapse;
    border: 3px solid #007bff;
    margin: auto;
  }

  table th {
    text-transform: uppercase;
    text-align: left;
    background: #007bff;
    color: #FFF;
    padding: 8px;
    min-width: 30px;
  }

  table td {
    text-align: left;
    padding: 8px;
    border-right: 2px solid rgb(166, 175, 243);
  }
  table td:last-child {
    border-right: none;
  }
  table tbody tr:nth-child(2n) td {
    background: #D4D8F9;
  }
</style>