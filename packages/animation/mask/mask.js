// packages/animation/mask/mask.js
Component({
  properties: {
    color: {
      type: String,
      value: '#fff'
    },
    mode: {
      type: String,
      value: 'radial'
    },
    visible: {
      type: Boolean,
      value: true
    },
    start: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        if (newVal) {
          let mainId = setInterval(() => {
            let { main, transparent } = this.data
            if (transparent >= 100) {
              clearInterval(mainId)
              this.setData({
                visible: false
              })
            }
            this.setData({
              main: main + 2,
              transparent: transparent + 1
            })
          }, 1000 / 60)
        }
      }
    }
  },
  data: {
    main: 0,
    transparent: 0
  }
})
