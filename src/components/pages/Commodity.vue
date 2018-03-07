<template>
  <div class="commodity">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'commodity',
  data () {
    return {
      msg: 'commodity'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>