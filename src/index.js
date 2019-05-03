import AutoText from './AutoText'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(AutoText.name, AutoText)
}

export default AutoText
