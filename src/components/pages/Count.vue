<template>
  <div class="count">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'count',
  data () {
    return {
      msg: 'count'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>