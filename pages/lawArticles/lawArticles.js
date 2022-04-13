// pages/plaza/plaza.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataTree: [
      {
        id: 1,
        name: '一级A',
        children: [
          {
            id: 23,
            name: '二级A-a',
            children: [
              {
                id: 98,
                name: '三级A-a-1'
              }
            ]
          },
          {
            id: 20,
            name: '二级A-b',
          }
        ]
      },
      {
        id: 2,
        name: '一级B',
        children: [
          {
            id: 21,
            name: '二级B-a',
          }
        ]
      }
    ],
    selectKey: '', //选中的节点id
    isVisible: false,
    buttonText: '显示',
    isSelectLastNode: true,
    isOpenAll: false,
  },

  loadLawArticles(){

  },

  showQuery(){
    var that= this
    //判断元素为显示还是隐藏并做相应操作
    if(that.data.isVisible == true){
      that.setData({
        isVisible:false,
        buttonText: '显示'
      })
    }else{
      this.loadLawArticles(),
      that.setData({
        isVisible:true,
        buttonText: '隐藏'
      })
    }
  },
  handleSelect(e) {
    if (e.detail.tips) {
      console.log('必须选择到最后一个节点')
    } else {
      this.setData({
        selectKey: e.detail.item.id
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})