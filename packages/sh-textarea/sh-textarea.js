// plugin/components/textarea-item/textarea-item.js
Component({
  behaviors: ['wx://form-field'],
  /**
   * 组件的属性列表
   */
  properties: {
    size: {
      type: String,
      value: 'sm'
    },
    clearable: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      value: -1
    },
    disabled: {
      type: Boolean,
      value: false
    },
    placeholder: String,
    value: String,
    name: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInput({ detail: { value } }) {
      this.setData({
        count: value.length
      })
      this.triggerEvent('onInput', { value })
    }
  }
})
