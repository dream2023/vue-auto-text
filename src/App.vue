<template>
  <div id="app">
    <auto-text
      :minSize="16"
      :size="24"
      :text="name"
      :width="100"
    ></auto-text>
    <input
      type="text"
      v-model="name"
    >
  </div>
</template>

<script>
import AutoText from './AutoText'

export default {
  name: 'app',
  components: {
    AutoText
  },
  data () {
    return {
      name: '阿斯顿发送到阿斯顿发是'
    }
  }
}
</script>
