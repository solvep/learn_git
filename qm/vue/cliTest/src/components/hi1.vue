<template>
  <div >
    <h1>{{msg}}--{{$route.params.username}}--{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'I am Hi1 page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
