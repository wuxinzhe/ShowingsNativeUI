Component({
  /**
   * 组件的属性列表
   */
  properties: {
    justify: {
      type: String,
      value: 'flex-start'
    },
    align: {
      type: String,
      value: 'flex-start'
    },
    wrap: {
      type: String,
      value: 'nowrap'
    },
    direction: {
      type: String,
      value: 'column'
    },
  },

  attached() {
    this.setData({
      style: `
       align-items: ${this.data.align};
       justify-content:${this.data.justify};
       flex-wrap: ${this.data.wrap};
       flex-direction: ${this.data.direction};
      `
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
    style: ''
  },
})
