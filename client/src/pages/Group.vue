<template>
  <div>
    <h1>Group Name: {{ groupName }}</h1>
    <div v-if="this.groupAdmin === this.userID">
      <router-link :to="{ name: 'Invite', params: { groupName: this.groupName, groupAdmin: this.groupAdmin } }"><b-btn>Invite new members</b-btn> </router-link>
      
      <!--<router-link :to="'/Invite'"><b-btn>Invite new members</b-btn> </router-link>-->
    </div>
    <div v-if="notInGroup">
      <b-btn @click="joinGroup">Join</b-btn>
      
      <!--<router-link :to="'/Invite'"><b-btn>Invite new members</b-btn> </router-link>-->
    </div>  
    <router-link to="/Groups">Back to your groups</router-link>
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
      notInGroup: false
    }
  },
  
  created() {
    this.userID = this.$store.state.user.userID
    this.groupName = this.$route.params.id
  },
  mounted() {
    this.getGroupNameAndAdmin();
    this.checkMembership();
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

   joinGroup: function() {
       api.createUserGroup(this.groupName, this.userID).then(
           this.checkMembership())
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>