// pages/plaza/plaza.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // dataTree: [
    //   {
    //     id: 1,
    //     name: '一级A',
    //     children: [
    //       {
    //         id: 23,
    //         name: '二级A-a',
    //         children: [
    //           {
    //             id: 98,
    //             name: '三级A-a-1'
    //           }
    //         ]
    //       },
    //       {
    //         id: 20,
    //         name: '二级A-b',
    //       }
    //     ]
    //   },
    //   {
    //     id: 2,
    //     name: '一级B',
    //     children: [
    //       {
    //         id: 21,
    //         name: '二级B-a',
    //       }
    //     ]
    //   }
    // ],
    // selectKey: '', //选中的节点id
    isVisible: false,
    buttonText: '显示',

    articleData: [],
    articleQuery: {
      keyword: '',
      number: '',
      crime: '',
      catalogs: [],
    },
    pageNum: 1,
    pageSize: 10,
    total: 0,
    totalPage: 0,
    loading: false,
    queryVisible: false,
    curKeyword: '',
    catalogData: [],
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
    this.setData({
        curKeyword: e.detail.item.id
      })
  },

  submitAllSearchFilters(){

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