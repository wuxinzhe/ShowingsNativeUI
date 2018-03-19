// plugin/components/switch-item/switch-item.js
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
    label: {
      type: String,
      value: null
    },
    type: {
      type: String,
      value: 'switch'
    },
    checked: {
      type: Boolean,
      value: false,
    },
    color: {
      type: String,
      value: ''
    },
    value: String,
    name: String
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange({ detail: { value } }) {
      this.setData({ value })
      this.triggerEvent('onChange', { value })
    }
  }
})
