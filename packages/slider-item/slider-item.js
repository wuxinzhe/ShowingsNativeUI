// plugin/components/slider-item/slider-item.js
Component({
  behaviors: ['wx://form-field'],

  properties: {
    size: {
      type: String,
      value: 'sm'
    },
    label: {
      type: String,
      value: null
    },
    step: {
      type: Number,
      value: 1
    },
    show: {
      type: Boolean,
      value: false
    },
    value: String,
    name: String
  },

  attached() {
    let blockSize;
    switch (this.data.size) {
      case 'sm':
        blockSize = 20
        break;
      case 'md':
        blockSize = 28
        break;
      case 'lg':
        blockSize = 35
        break;
    }
    this.setData({ blockSize })
  },

  data: {
    blockSize: 20
  },

  methods: {
    onChange({ detail: { value } }) {
      this.setData({ value })
      this.triggerEvent('onChange', { value })
    }
  }
})
