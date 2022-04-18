// pages/plaza/plaza.js
var app = getApp()
var api = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataTree: [
      // {
      //   id: 1,
      //   name: '一级A',
      //   children: [
      //     {
      //       id: 23,
      //       name: '二级A-a',
      //       children: [
      //         {
      //           id: 98,
      //           name: '三级A-a-1'
      //         }
      //       ]
      //     },
      //     {
      //       id: 20,
      //       name: '二级A-b',
      //     }
      //   ]
      // },
      // {
      //   id: 2,
      //   name: '一级B',
      //   children: [
      //     {
      //       id: 21,
      //       name: '二级B-a',
      //     }
      //   ]
      // }
    ],
    selectKey: '', //选中的节点id
    isVisible: false,
    buttonText: '显示',
    showResult: true,
    articleContents:[],
    articleQuery: [],
    pageNum: 1,
    pageSize: 10,
    total: 0,
    totalPage: 0,
    loading: false,
    queryVisible: false,
    catalogData: [],
    resultVisible: false,
  },

  getDocumentCatalogueTree(callback){
    api.getDocumentCatalogueTreeAPI({
      success(res){
        callback.success(res.content)
      }
    })
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
      articleContents: []
    })
    this.articleQuery = this.getChildren(e.detail.item)
    this.submitAllSearchFilters()
    this.setData({
      resultVisible: true
    })
  },

  getChildren: function (node){
    // console.log(node)
    if (node.children == null){
      return [node.id]
    }
    else{
      var list = []
      for (let child of node.children){
        list = list.concat(this.getChildren(child));
      }
      console.log(list)
      return list
    }
  },

  getAllArticle(catalogues, callback){
    var that = this
    api.getAllArticleAPI(catalogues,{
      success(res){
        var resultJ = res.content;
        console.log(resultJ);

        console.log(that.articleContents)
        that.setData({
          pageNum: resultJ.pageNum,
          total: resultJ.total,
          totalPage: resultJ.totalPage,
          articleContents: resultJ.list
        })
        // callback.success(resultJ);
      }
    })
  },

  submitAllSearchFilters(){
    // var art = this.articleQuery
    // var that = this
    this.getAllArticle(this.articleQuery,{

    })
    console.log(this.articleContents)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.getDocumentCatalogueTree({
      success(res){
        // console.log(res)
        that.setData({
          dataTree: res
        })
        // console.log(that.articleData)
      }
    })
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