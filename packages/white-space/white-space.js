// plugin/components/white-space/white-space.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    size: {
      type: String,
      value: 'sm'
    }
  },

  attached() {
    let height
    switch (this.data.size) {
      case 'sm':
        height = 30
        break;
      case 'md':
        height = 50
        break;
      case 'lg':
        height = 80
        break;
      default:
        height = 30
        break
    }
    this.setData({ height })
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: 30
  },
})
