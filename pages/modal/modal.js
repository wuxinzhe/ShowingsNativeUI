// pages/modal/modal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'Modal',
    name: '提示窗口'
  },
  onShareAppMessage: () => ({
    title: 'Showings UI · Modal',
    path: '/pages/modal/modal',
    imageUrl: '../showings_share.png'
  })
})