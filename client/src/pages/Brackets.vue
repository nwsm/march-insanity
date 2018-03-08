<template>
  <div>
    <h1>{{ msg }}</h1>
      <router-link to="/">Main</router-link>
  </div>
</template>

<script>
export default {
  name: 'Brackets',
  data () {
    return {
      msg: 'This page will show all of your brackets!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
