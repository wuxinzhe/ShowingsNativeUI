// plugin/components/input/input.js
Component({
  behaviors: ['wx://form-field'],
  properties: {
    size: {
      type: String,
      value: 'sm'
    },
    label: {
      type: String,
      value: null
    },
    type: {
      type: String,
      value: 'text'
    },
    clearable: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    placeholder: String,
    value: String,
    name: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    clearVisible: false,
  },


  /**
   * 组件的方法列表
   */
  methods: {
    onFocus() {
      this.setData({
        clearVisible: true
      })
    },
    onBlur() {
      this.setData({
        clearVisible: false
      })
    },
    onClear() {
      this.setData({
        value: ''
      })
    },
    onInput({ detail: { value } }) {
      this.triggerEvent('onInput', { value })
    }
  }
})
