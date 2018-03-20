// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'Input',
    name: '文本输入'
  },

  onShareAppMessage: () => ({
    title: 'Showings UI · Input',
    path: '/pages/input/input',
    imageUrl: '../showings_share.png'
  })
})