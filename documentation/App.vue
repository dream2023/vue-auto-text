<template>
  <div id="app">
    <easy-github-pages
      :menus="menuList"
      author="zhangchaojie"
      githubUrl="https://github.com/dream2023/vue-auto-text"
      homepage="https://github.com/dream2023"
      title="vue-auto-text | 文字大小自适应组件"
    >
      <section id="intro">
        <h2>介绍</h2>
        <p>当给定宽度时, 文字的大小自适应, 以保证不溢出和换行</p>
        <img
          alt="vue-auto-text"
          src="/example.gif"
        >
      </section>
      <section id="install">
        <h2>安装</h2>
        <blockquote>npm install vue-auto-text --save</blockquote>
      </section>
      <section id="usage">
        <h2>使用</h2>
        <blockquote>
          <pre class="language-js">
            <code class="language-js">
              // 局部引入
              import AutoText from 'vue-auto-text'
              export default {
                components: {
                  AutoText
                }
              }
            </code>
          </pre>
        </blockquote>
        <blockquote>
          <pre class="language-js">
            <code class="language-js">
              // 全局引入
              import AutoText from 'vue-auto-text'
              Vue.component(AutoText.name, AutoText)
            </code>
          </pre>
        </blockquote>
      </section>
      <section id="props">
        <h2>Props参数</h2>
        <blockquote>
          <pre class="language-js">
            <code class="language-js">
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
            </code>
          </pre>
        </blockquote>
      </section>

      <section id="template">
        <h2 class="template">示例</h2>
        <div style="color: red; margin-bottom: 10px;">自己可以尝试输入和点击html查看参数</div>
        <div>
          <p>1.text文本的设置方式</p>
          <iframe
            allowfullscreen="allowfullscreen"
            frameborder="0"
            height="350"
            src="//jsrun.net/DRXKp/embedded/all/light/"
            width="100%"
          ></iframe>
        </div>
        <div>
          <p>2.超出情况设置(ellipsis 超出省略, clip 超出截断, break 超出换行)</p>
          <iframe
            allowfullscreen="allowfullscreen"
            frameborder="0"
            height="480"
            src="//jsrun.net/rRXKp/embedded/all/light/"
            width="100%"
          ></iframe>
        </div>
      </section>
    </easy-github-pages>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menuList: [
        {
          title: '介绍',
          href: 'intro'
        },
        {
          title: '安装',
          href: 'install'
        },
        {
          title: '使用',
          href: 'usage'
        },
        {
          title: 'Props参数',
          href: 'props'
        },
        {
          title: '示例',
          href: 'template'
        }
      ]
    }
  }
}
</script>
