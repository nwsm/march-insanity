<template>
  <div>
    <div v-for="group in Groups">
       <b-btn> {{group.groupName}}</b-btn>
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
      api.getGroups().then(function(r){
        for (var i = 0; i < r.data.length; i++) {
          console.log(r.data[0])
          if(vm.$store.state.user.userID == r.data[i].groupAdmin){
            api.getGroup(r.data[i].groupName).then(function(R) {
              vm.Groups.push(R.data[0])
            })
          }
        }
      })
      
    },

    createGroup : async function() {
      var vm = this
      var numGroups = 0
      var newNumGroups = 0
      await api.getGroups().then(function(r){
        numGroups = r.data.length
      })
      await api.createGroup(this.newGroupName, vm.$store.state.user.userID)
      await api.getGroups().then(function(r){
          newNumGroups = r.data.length
      })
      if (newNumGroups == numGroups) {
        this.groupExistsError = "Group already exists!"
      }
      else {
        this.groupExistsError = ""
        api.createUserGroup(this.newGroupName,vm.$store.state.user.userID)
      }
      this.updateUserGroups();
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
