<template>
  <div id="app">
    <div
      class="wrapper"
      style="width: 200px"
    >
      <auto-text
        :min-size="24"
        :size="48"
        :text="text"
        :width="200"
      ></auto-text>
    </div>

    <div class="el-input">
      <input
        class="el-input__inner"
        placeholder="尝试输入一些内容"
        v-model="text"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      text: 'vue-auto-text'
    }
  },
  methods: {},
  mounted () {}
}
</script>

<style>
.wrapper {
  border: 1px solid red;
  height: 80px;
  line-height: 80px;
  margin-bottom: 20px;
}

.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 80%;
  margin: 0 auto;
}

.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
</style>
