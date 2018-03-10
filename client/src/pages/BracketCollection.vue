<template>
  <div>
    <h1>{{ msg }}{{ bracketId }}</h1>
      <router-link to="/BracketCollections">Back To Collections</router-link>
  </div>
</template>

<script>
export default {
  name: 'BracketCollection',
  data () {
    return {
      msg: 'This page will show all the Brackets on BracketCollection ',
      bracketId: 0
    }
  },

  created() {
    this.bracketId = this.$route.params.bracketId
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
