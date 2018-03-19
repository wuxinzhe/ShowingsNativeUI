// pages/modal/demo-default/demo-default.js
Component({

  data: {
    name: '提示窗口',
    des: '基础用法',
    modalFooter: [{
      label: '取消',
    }, {
      label: '确定',
      color: 'green'
    }],
    visible: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      this.setData({
        visible: true
      })
    },
    modalTap({ detail: { idx } }) {
      console.log(idx)
    }
  }
})
