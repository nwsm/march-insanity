<template>
  <div>
    <h1>{{ msg }}</h1>
      <router-link to="/">Main</router-link>
  </div>
</template>

<script>
export default {
  name: 'Group',
  data () {
    return {
      msg: 'This page will show info about one group'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
