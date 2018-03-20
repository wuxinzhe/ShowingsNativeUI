// pages/divider/divider.js
Page({

  data: {
    title: 'Divider',
    name: '分割线'
  },
  onShareAppMessage: () => ({
    title: 'Showings UI · Divider',
    path: '/pages/divider/divider',
    imageUrl: '../showings_share.png'
  })
})