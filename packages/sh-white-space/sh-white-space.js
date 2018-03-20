Component({
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
  data: {
    height: 30
  },
})
