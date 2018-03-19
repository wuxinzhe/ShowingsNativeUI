Page({
  onLoad: function () {
  },
  data: {
    logo: 'http://p2814hhmp.bkt.clouddn.com/logo.png'
  },

  onTap({ target: { dataset: { page } } }) {
    wx.navigateTo({
      url: page,
    })
  }

})