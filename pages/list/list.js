// pages/list/list.js
Page({
  data: {
    title: 'List',
    name: '列表'
  },
  onShareAppMessage: () => ({
    title: 'Showings UI · List',
    path: '/pages/list/list',
    imageUrl: '../showings_share.png'
  })
})