// plugin/components/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        if (newVal) {
          this.setData({
            modalVisible: true
          })
          let id = setInterval(() => {
            this.setData({
              opacity: this.data.opacity += 0.05
            })
            if (this.data.opacity >= 1) {
              clearInterval(id)
            }
          }, 1000 / 60)
        }
      }
    },
    title: {
      type: String,
      value: ''
    },
    message: {
      type: String,
      value: ''
    },
    footerOptions: {
      type: Array,
      value: []
    }
  },
  data: {
    modalVisible: false,
    opacity: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.setData({
        modalVisible: false,
      })
      let id = setInterval(() => {
        this.setData({
          opacity: this.data.opacity -= 0.05
        })
        if (this.data.opacity <= 0) {
          clearInterval(id)
          this.setData({
            visible: false
          })
        }
      }, 1000 / 60)
    },

    onTap({ target: { dataset: { idx } } }) {
      this.onClose()
      this.triggerEvent('onTap', { idx })
    }
  }
})
