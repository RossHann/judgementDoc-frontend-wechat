Page({
  //复制地址
  CopyLink(e) {
    wx.setClipboardData({
      data: '',
      success: res => {
        wx.showToast({
          title: '已复制',
          duration: 1000,
        })
      }
    })
  },
});