var app = getApp();
var common = require("../../commom/commom.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"cxj",
    pass:null,
    id:2,
    bol:true,
    arr:[1,2,3,4,5],
    obj1:{
      a:2,
      b:5
    }
  },
  show:function(){
    var bol=this.data.bol;
    this.setData({
      bol:!bol
    })
  },
  say:function(){
    commom.sayHello(this.data.name)
  }, 
  //事件处理函数
  toiindex: function () {
    wx.navigateTo({
      url: '../navi/navi',
      success:function(){
        console.log("success");
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pass:app.globalData.pass
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
    console.log("this page onshow")
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})