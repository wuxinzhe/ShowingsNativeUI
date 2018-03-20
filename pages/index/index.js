Page({

  data: {
    logo: 'http://p2814hhmp.bkt.clouddn.com/logo.png'
  },

  onTap({ target: { dataset: { page } } }) {
    wx.navigateTo({
      url: page,
    })
  },

  onClip() {
    wx.setClipboardData({
      data: 'https://github.com/wuxinzhe/ShowingsNativeMinUI.git',
      success: () => {
        wx.showModal({
          title: '请打开浏览器',
          content: 'Github地址已复制，请打开浏览器浏览',
        })
      }
    })
  },

  onShareAppMessage: () => ({
    title: 'Showings UI · Native Power',
    path: '/pages/index/index',
    imageUrl: '../showings_share.png'
  })
})