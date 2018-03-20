// packages/badge/badge.js
Component({
  properties: {
    message: {
      type: String,
      value: null
    },
    count: {
      type: Number,
      value: null
    }
  },
  data: {
    text: ''
  },

  attached() {
    let text = this.data.message || this.data.count
    if (text) {
      if (this.data.message) {
        this.setData({ text })
      } else {
        this.setData({
          text: text > 99 ? '99+' : text
        })
      }
    }
  }
})
