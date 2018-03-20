// pages/portrait/portrait.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'Portrait',
    name: '头像'
  },
  onShareAppMessage: () => ({
    title: 'Showings UI · Portrait',
    path: '/pages/portrait/portrait',
    imageUrl: '../showings_share.png'
  })
})