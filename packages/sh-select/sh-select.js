Component({
  behaviors: ['wx://form-field'],
  properties: {
    label: {
      type: String,
      value: null
    },
    size: {
      type: String,
      value: 'sm'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    options: {
      type: Array,
      value: null
    },
    value: {
      type: Number,
      value: null
    },
    name: String
  },
  data: {
    selectedOption: {
      id: -1,
      label: '请选择'
    },
    visible: false,
    modalFooter: [{
      label: '取消'
    }, {
      label: '确认',
      color: '#04be02'
    }],
    selectedIdxInit: 0,
    selectedIdx: 0
  },

  attached() {
    
  },

  methods: {
    onTap() {
      if (this.data.disabled) {
        return
      }
      this.setData({
        visible: true,
        selectedIdx: this.data.selectedIdxInit
      })
      let defaultOption = { id: -1, label: '请选择' }
      if (this.data.options === null) {
        this.setData({
          options: [defaultOption]
        })
      } else {
        let temp = [...this.data.options]
        temp.unshift(defaultOption)
        this.setData({
          options: temp
        })
      }
      let value = this.data.value
      if (value === null) {
        this.setData({
          selectedOption: { id: -1, label: '请选择' }
        })
      } else {
        let selectedIdx
        let selectedOptions = this.data.options.filter((option, idx) => {
          if (option.id === value) {
            selectedIdx = idx
          }
          return option.id === value
        })
        if (selectedOptions.length > 0) {
          let [selectedOption] = selectedOptions
          this.setData({
            selectedOption,
            selectedIdx,
            selectedIdxInit: selectedIdx
          })
        } else {
          this.setData({
            selectedOption: { id: -1, label: '请选择' }
          })
        }
      }
    },
    modalTap({ detail: { idx } }) {
      switch (idx) {
        case 0:
          break;
        case 1:
          this.setData({
            selectedIdxInit: this.data.selectedIdx,
            selectedOption: this.data.options[this.data.selectedIdx],
            value: this.data.options[this.data.selectedIdx] && this.data.options[this.data.selectedIdx].id
          })
          this.triggerEvent('onInput', { value: this.data.value })
          break;
      }
    },
    onChange({ detail: { value: [idx] } }) {
      this.setData({
        selectedIdx: idx
      })
    }
  }
})
