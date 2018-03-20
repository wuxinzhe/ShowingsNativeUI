// pages/mask/mask.js
Page({
  data: {
    title: 'Mask',
    name: '蒙版动画',
    start: false
  },
  onShow() {
    this.setData({ start: true })
  },
  onShareAppMessage: () => ({
    title: 'Showings UI · Mask',
    path: '/pages/mask/mask',
    imageUrl: '../showings_share.png'
  })
})