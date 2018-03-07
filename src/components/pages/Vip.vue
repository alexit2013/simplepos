<template>
  <div class="vip">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'vip',
  data () {
    return {
      msg: 'vip'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>