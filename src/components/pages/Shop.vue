<template>
  <div class="shop">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  data () {
    return {
      msg: 'shop'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
