//app.js
var api = require('./utils/api.js');
App({

  onLaunch: function () {
    var that = this;
    wx.getStorage({
      key: 'userLogin',
      success: function(res) {
        that.globalData.openid = res.data.openid,
        that.globalData.account_code = api.account_code
        that.globalData.userId = res.data.userId
      },
      fail:function(res){
        // 登录
        wx.login({
          success: res => {
            //发送 res.code 到后台换取 openId, sessionKey, unionId
            wx.request({
              url: api.wxlogin_url,
              data: {
                code: res.code,
                account_code: api.account_code
              },
              success: function (res) {
                that.globalData.openid = res.data.data.openid,
                that.globalData.account_code = api.account_code
                that.globalData.userId = res.data.data.userId
                wx.setStorage({
                  key: 'userLogin',
                  data: res.data.data,
                })
              },
            })
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            lang: 'zh_CN',
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              that.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    wx.getSystemInfo({
      success: e => {
        that.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          that.globalData.Custom = capsule;
          that.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          that.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  globalData: {
    canIUse:false,
    openid: null,
    userId: null,
    account_code: null,
    session_key:null,
    userInfo:null,
    ColorList: [{
      title: '主题色',
      name: 'red',
      color: '#2c3e50'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
    ]
  }
})