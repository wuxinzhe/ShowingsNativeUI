Page({

  data: {
    logo: 'http://p2814hhmp.bkt.clouddn.com/logo.png'
  },

  onTap({ target: { dataset: { page } } }) {
    wx.navigateTo({
      url: page,
    })
  },

  onShareAppMessage: () => ({
    title: 'Showings UI · Native Power',
    path: '/pages/index/index',
    imageUrl: '../showings_share.png'
  })
})