<template>
  <div>
    <h1>Your Groups:</h1>
    <template v-for="group in Groups">
       <router-link :to="{ name: 'Group', params: { id: group.groupName, groupAdmin: group.groupAdmin } }"><b-btn variant="outline-primary"> {{group.groupName}}</b-btn></router-link>
    </template>
    <div>
      <br>
      <b-row>
        <b-col></b-col>
        <b-col >
          <b-form-input v-model="newGroupName" placeholder="New Group Name"></b-form-input>
          <p>{{ groupExistsError}}</p>
        </b-col>
        <b-col></b-col>
      </b-row>
    </div>
    <div>
      <b-btn variant="primary" @click="createGroup">Create Group</b-btn>
    </div>
  </div>
</template>

<script>
import api from '../services/Api'

export default {
  name: 'Groups',
  data () {
    return {
      Groups: [],
      newGroupName: '',
      groupExistsError: ''
    }
  },
  mounted: function () {
    this.updateUserGroups()
  },
  methods: {
    updateUserGroups: function () {
      this.Groups = []

      var vm = this
      api.getUserGroups(vm.$store.state.user.userID).then(function (r) {
        for (var i = 0; i < r.data.length; i++) {
          api.getGroup(r.data[i].groupName).then(function (R) {
            vm.Groups.push(R.data[0])
          })
        }
      })
    },

    createGroup: async function () {
      var vm = this
      if (vm.newGroupName.indexOf(' ') >= 0) {
        vm.groupExistsError = 'Group names cannot contain spaces!'
      } else {
        await api.getGroup(vm.newGroupName).then(async function (r) {
          if (r.data.length === 0) {
            await api.createGroup(vm.newGroupName, vm.$store.state.user.userID)
            vm.groupExistsError = ''
            api.createUserGroup(vm.newGroupName, vm.$store.state.user.userID)
          } else {
            vm.groupExistsError = 'Group already exists!'
          }
        })
      }
      vm.updateUserGroups()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
