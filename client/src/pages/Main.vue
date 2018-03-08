<template>
  <div>
    <router-link to="/Groups"><b-btn size="lg" variant="outline-primary">Your Groups</b-btn></router-link>
    <router-link to="/Brackets"><b-btn size="lg" variant="outline-primary">Your Brackets</b-btn></router-link>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
