import API from '../../../request/api.js'
import Http from '../../../request/index.js'

// pages/user/order-list/order-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoad:false,
    unpay:[],
    payed:[],
    status:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad: function (options) {
    this.requestData();
  },



  requestData() {
    wx.showLoading({
      title: 'waiting',
      mask: true
    });

    wx.showNavigationBarLoading();

    this.http = new Http();
    this.http.get(API.USER_ORDER_API)
      .then(({ data }) => {
        this.setData({
          isLoad: true,
          unpay: data.unpay,
          payed: data.payed,
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        console.log(this.data)
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      })
  },


  statusAction(ev){
    // console.log(ev.currentTarget.dataset.status);
    this.setData({
      status: ev.currentTarget.dataset.status
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})