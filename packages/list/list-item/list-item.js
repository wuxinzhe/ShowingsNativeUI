Component({
  options: {
    multipleSlots: true
  },
  properties: {
    extra: {
      type: String,
      value: ''
    },
    arrow: {
      type: String,
      value: null
    },
    size: {
      type: String,
      value: 'sm'
    }
  },
  methods: {
    onTap(e) {
      this.triggerEvent('onTap', e)
    }
  }
})
