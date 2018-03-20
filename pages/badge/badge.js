// pages/divider/divider.js
Page({

  data: {
    title: 'Badger',
    name: '分割线'
  },


  onShareAppMessage: () => ({
    title: 'Showings UI · Badge',
    path: '/pages/badge/badge',
    imageUrl: '../showings_share.png'
  })
})