<template>
  <div>
    <h1>Your Groups:</h1>
    <div v-for="group in Groups">
       <router-link :to="{ name: 'Group', params: { id: group.groupName, groupAdmin: group.groupAdmin } }"><b-btn> {{group.groupName}}</b-btn></router-link>
    </div>
    <input v-model="newGroupName" placeholder="New Group Name">
      <p>{{ groupExistsError}}</p>
    <div>
      <b-btn @click="createGroup">Create Group</b-btn>
    </div>
    <h1>{{ msg }}</h1>
      <router-link to="/">Main</router-link>
  </div>
</template>

<script>
import api from '../services/Api' //this file is where we define functions to call the API. Add functions to the file as needed

export default {
  name: 'Groups',
  data () {
    return {
      Groups: [],
      newGroupName: '',
      groupExistsError: ''
    }
  },
  mounted : function () { //mounted happens when this page is loaded, so we grab the brackets here
    this.updateUserGroups();
  },
  methods : { //put functions here
    updateUserGroups : function() {
      this.Groups = []

      var vm = this
      api.getUserGroups(vm.$store.state.user.userID).then(function(r){
        for (var i = 0; i < r.data.length; i++){
          api.getGroup(r.data[i].groupName).then(function(R) {
            vm.Groups.push(R.data[0])
          })
        }
      })
    },

    createGroup : async function() {
      var vm = this
      var numGroups = 0
      var newNumGroups = 0
      await api.getGroup(vm.newGroupName).then(async function(r){
        console.log(r)
        if (r.data.length == 0){
          await api.createGroup(vm.newGroupName, vm.$store.state.user.userID)
          vm.groupExistsError = ""
          api.createUserGroup(vm.newGroupName,vm.$store.state.user.userID)
        }
        else {
           vm.groupExistsError = "Group already exists!"
        }
      })
      vm.updateUserGroups();
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
