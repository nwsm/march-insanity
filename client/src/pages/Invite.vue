<template>
  <div>
    <h1>Group Name: {{ groupName }}</h1>
    <div>
      <h3>Enter email of new group member </h3>
      <input v-model="newMemberEmail" placeholder="New Member Email">
      <p>{{sentMessage}}</p>
      <b-btn @click="sendInvite">Send Invite</b-btn>
    </div>
    <router-link :to="{ name: 'Group', params: { groupName: this.groupName, groupAdmin: this.groupAdmin } }" id=groupPage>Back to group</router-link>
  </div>
</template>

<script>
import api from '../services/Api' //this file is where we define functions to call the API. Add functions to the file as needed

export default {
  name: 'Invite',
  data () {
    return {
      groupName: 0,
      groupAdmin: 0,
      sentMessage: '',
      newMemberEmail: ''
    }
  },
  created() {
    this.groupID = this.$route.params.groupAdmin
    this.groupName = this.$route.params.groupName
  },
  methods : { //put functions here
    sendInvite: function() {
      if (this.newMemberEmail != '') {
        api.sendMail(this.newMemberEmail, this.groupName)
        this.sentMessage = "Invite sent to " + this.newMemberEmail
      }
      console.log("sendInvite clicked")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>