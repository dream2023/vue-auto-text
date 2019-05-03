<template>
  <div ref="box">
    <div
      :class="{
      [overflow]: fontSize <= minSize
    }"
      :style="styles"
      class="auto-text"
    >
      <slot>{{text}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'auto-text',
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
    // 当文本超出时处理方式, elip 超出省略号, hidden 超出省略, break 超出换行
    overflow: {
      type: String,
      default: 'ellipsis',
      validator (value) {
        return value === 'ellipsis' || value === 'hidden' || value === 'break'
      }
    }
  },
  data () {
    return {
      fontSize: this.size,
      styles: {}
    }
  },
  watch: {
    text () {
      this.computeFontsize()
    }
  },
  mounted () {
    this.computeFontsize()
  },
  methods: {
    createTempSpan (str) {
      // 确保类的唯一性
      const className = 'get-text-width-' + this._uid
      const spanNode = document.createElement('span')
      spanNode.innerText = str
      spanNode.className = className
      this.$el.appendChild(spanNode)
      return spanNode
    },
    removeTempSpan (spanNode) {
      this.$el.removeChild(spanNode)
    },
    getTextWidth (fontSize, spanNode) {
      spanNode.style.fontSize = fontSize + 'px'
      return spanNode.offsetWidth
    },
    computeFontsize () {
      this.$nextTick(() => {
        // 传递过来的文本或者插槽内容
        const text = this.text || this.$el.innerText
        // 获取宽度
        const width = this.width || this.$el.clientWidth
        // 获取最小字体值
        const minSize = this.minSize
        // 获取字体值
        let fontSize = this.size

        // 创建临时span
        const spanNode = this.createTempSpan(text)

        // 获取当前字号下占用的宽度
        let textWidth = this.getTextWidth(fontSize, spanNode)
        // 字体占用宽度 > 设置宽度, 且没到最小字体, 则缩小字体
        while (textWidth > width && fontSize > minSize) {
          fontSize = fontSize - 1
          textWidth = this.getTextWidth(fontSize, spanNode)
        }

        // 移除span
        this.removeTempSpan(spanNode)

        this.fontSize = fontSize
        this.styles = {
          fontSize: fontSize + 'px',
          width: width + 'px'
        }
      })
    }
  }
}
</script>

<style>
.auto-text.hidden {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.auto-text.break {
  word-break: break-word;
}

.auto-text.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  white-space: nowrap;
}
</style>
