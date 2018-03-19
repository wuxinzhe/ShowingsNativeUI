// plugin/components/radio-item/radio-item.js
Component({
  behaviors: ['wx://form-field'],
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Array,
      value: []
    },
    size: {
      type: String,
      value: 'sm'
    },
    value: String,
    name: String
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange({ currentTarget: { dataset: { id: value } } }) {
      this.setData({ value })
      this.triggerEvent('onChange', { value })
    }
  }
})
