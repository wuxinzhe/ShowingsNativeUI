// plugin/components/cascader/cascader.js
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
      type: Array,
      value: null
    },
    name: String
  },


  /**
   * 组件的初始数据
   */
  data: {
    visible: false,
    modalFooter: [{
      label: '取消'
    }, {
      label: '确认',
      color: '#04be02'
    }],
    pickerColumns: [],
    selectedArray: [0],
    selectedLabels: ['请选择']
  },


  attached() {
    //检查数据有效性
    if (this.data.options === null || !this.data.options.length) {
      throw new TypeError('请设置正确的备选项目')
    }
    let defaultOption = { id: -1, label: '请选择', children: [] }
    let pickerColumns = []
    //判断是否需要预设值
    if (this.data.value !== null && this.data.value.length) {
      let selectedArray = []
      let selectedLabels = []
      function loop(options, valueArray) {
        if (valueArray.length) {
          options.unshift(defaultOption)
          let value = valueArray.shift()
          let column = options.map(({ id, label }) => {
            return { id, label }
          })
          pickerColumns.push(column)
          let temp = options.filter(({ id, label }, idx) => {
            if (value === id) {
              selectedArray.push(idx)
              selectedLabels.push(label)
            }
            return value === id
          })[0]
          if (temp.children) {
            loop([...temp.children], valueArray)
          }
        }
      }
      loop([...this.data.options], this.data.value)
      this.setData({ pickerColumns, selectedArray, selectedLabels })
    } else {
      let column = this.data.options.map(({ id, label }, idx) => {
        return { id, label }
      })
      column.unshift(defaultOption)
      pickerColumns.push(column)
      this.setData({ pickerColumns })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      if (this.data.disabled) {
        return
      }
      this.setData({
        visible: true,
      })
    },
    onChange({ detail: { value } }) {
      let defaultOption = { id: -1, label: '请选择', children: [] }
      let pickerColumns = []
      let selectedArray = []
      for (let i = 0; i < value.length; i++) {
        pickerColumns.push(this.data.pickerColumns[i])
        selectedArray.push(value[i])
        if (this.data.selectedArray[i] !== value[i]) {
          let temp = this.data.options.concat()
          selectedArray.forEach(idx => {
            if (temp[idx - 1] === undefined) {
              temp = undefined
            } else {
              temp = temp[idx - 1].children !== undefined ? temp[idx - 1].children.concat() : undefined
            }
          })
          if (temp !== undefined) {
            temp.unshift(defaultOption)
            pickerColumns.push(temp)
            selectedArray.push(0)
          }
          break
        }
      }
      this.setData({
        selectedArray,
        pickerColumns
      })
    },
    modalTap({ detail: { idx } }) {
      switch (idx) {
        case 0:
          break;
        case 1:
          let selectedArray = this.data.selectedArray
          let pickerColumns = this.data.pickerColumns
          let selectedLabels = []
          let value = []
          pickerColumns.forEach((column, idx) => {
            let { id, label } = column[selectedArray[idx]]
            selectedLabels.push(label)
            value.push(id)
          })
          this.setData({
            value,
            selectedLabels
          })
          this.triggerEvent('onConfirm', { value })
          break;
      }
    }
  }
})
