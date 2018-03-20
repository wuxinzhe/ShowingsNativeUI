// pages/flex/flex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'Flex',
    name: '弹性布局'
  },
  onShareAppMessage: () => ({
    title: 'Showings UI · Flex',
    path: '/pages/flex/flex',
    imageUrl: '../showings_share.png'
  })
})