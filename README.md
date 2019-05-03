# vue-auto-text | 文字大小自适应组件

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg)](https://opensource.org/licenses/mit-license.php)
[![npm](https://img.shields.io/npm/v/vue-auto-text.svg)](https://www.npmjs.com/package/vue-auto-text)
[![size](https://img.shields.io/bundlephobia/minzip/vue-auto-text.svg)](https://www.npmjs.com/package/vue-auto-text)
[![download](https://img.shields.io/npm/dw/vue-auto-text.svg)](https://npmcharts.com/compare/vue-auto-text?minimal=true)

## 介绍

当给定宽度时, 文字的大小自适应, 以保证不溢出和换行

![演示图](./public/example.gif)

## 文档

[https://dream2023.github.io/vue-auto-text](https://dream2023.github.io/vue-auto-text/)

## 安装

```bash
npm install vue-auto-text --save
```

## 使用

```js
// 局部引入
import AutoText from 'vue-auto-text'
export default {
  components: {
    AutoText
  }
}
```

```js
// 全局引入
import AutoText from 'vue-auto-text'
Vue.component(AutoText.name, AutoText)
```

## Props 参数

```js
props: {
  // 文本限定宽度, 单位px, 可选, 如果不传, 则默认是父元素宽度
  width: Number,
  // 给定文本, 可选, 如果不传, 则获取插槽内文本, 但无法检测变化
  text: String,
  // 默认 font-size 大小, 数字, 必填
  size: {
    type: Number,
    required: true
  },
  // 最小 font-size 大小, 默认是 16 px
  minSize: {
    type: Number,
    default: 16
  },
  // 当文本超出时处理方式, elip 超出省略号, clip 超出截断, break 超出换行
  overflow: {
    type: String,
    default: 'ellipsis',
    validator (value) {
      return value === 'ellipsis' || value === 'clip' || value === 'break'
    }
  }
}
```

## 例子

```html
<!-- 可以检查到字数变化, 进而动态更改字体大小 -->
<auto-text :minSize="24" :size="48" :text="text" :width="200" />
```

```html
<!-- 仅能根据首次获取字数多少, 进行判断字数大小, 无法检测到字数变化 -->
<auto-text :minSize="24" :size="48" :width="200">{{text}}</auto-text>
```

```html
<!-- 超出换行 -->
<auto-text
  :minSize="24"
  overflow="break"
  :size="48"
  :text="text"
  :width="200"
/>
```
