<template>
  <div>
    <h1>{{ msg }}</h1>
      <p>Links to all groups the user is in will be below:</p>
      <router-link to="/Group">group</router-link>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Main Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
