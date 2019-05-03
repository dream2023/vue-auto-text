<template>
  <div>
    <auto-text
      :min-size="24"
      :size="48"
      :width="100"
    >{{text}}</auto-text>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      text: 'a'
    }
  },
  methods: {},
  mounted () {
    setTimeout(() => {
      this.text = 'asfasfasfasdfasf'
    }, 1000)
  }
}
</script>

<style scoped>
</style>
