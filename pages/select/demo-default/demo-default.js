// pages/select/demo-default/demo-default.js
Component({
  attached() {
    setTimeout(() => {
      const options = [{
        id: 1,
        label: '选项一'
      }, {
        id: 2,
        label: '选项二'
      }]
      this.setData({ options })
    }, 100)
  },
  data: {
    name: '单项选择',
    des: '弹窗式单选器，常用选项较多的场景',
    options: [],
  }
})
