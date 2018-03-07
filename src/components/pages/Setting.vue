<template>
  <div class="setting">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      msg: 'setting'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>