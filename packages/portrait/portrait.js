// plugin/components/portrait/portrait.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: null
    },
    size: {
      type: String,
      value: 'sm'
    },
    lazy: {
      type: Boolean,
      value: false
    },
    start: {
      type: Boolean,
      value: false
    },
    mode: {
      type: String,
      value: 'img'
    },
    text: {
      type: String,
      value: 'S'
    },
    textBgColor: {
      type: String,
      value: '#409EFF'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mask: {
      white: 0,
      transparent: 0
    }
  },

  attached() {
    if (this.data.mode !== 'img') {
      this.setData({ start: true })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoadComplete() {
      this.setData({ start: true })
    }
  }
})
