<template>
  <div ref="box">
    <div
      :class="{
      [overflow]: fontSize <= minSize
    }"
      :style="styles"
      class="auto-text"
      style="border: 1px solid red;"
    >
      <slot>{{text}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutoText',
  props: {
    width: Number,
    overflow: {
      type: String,
      default: 'elip',
      validator (value) {
        return value === 'elip' || value === 'hidden' || value === 'wrap'
      }
    },
    text: String,
    size: {
      type: Number,
      required: true
    },
    minSize: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      fontSize: this.size
    }
  },
  watch: {
    computedText () {
      this.computeFontsize()
    }
  },
  computed: {
    computedText () {
      return this.text || this.$el.innerText
    },
    computedWidth () {
      return this.width || this.$el.clientWidth
    },
    styles () {
      return {
        width: this.computedWidth + 'px',
        fontSize: this.fontSize + 'px'
      }
    }
  },
  mounted () {
    this.computeFontsize()
  },
  methods: {
    createTempSpan (str) {
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
      spanNode.style.fontSize = fontSize
      return spanNode.offsetWidth
    },
    computeFontsize () {
      this.$nextTick(() => {
        // 获取宽度
        const width = this.computedWidth
        // 获取最小字体值
        const minSize = this.minSize
        // 获取字体值
        let fontSize = this.size

        // 创建临时span
        const spanNode = this.createTempSpan(this.computedText)

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
      })
    }
  }
}
</script>

<style>
.auto-text.hidden {
  overflow: hidden;
}

.auto-text.break {
  word-break: break-word;
}

.auto-text.elip {
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  white-space: nowrap;
}
</style>
