import API from '../../../request/api.js'
import Http from '../../../request/index.js'
// pages/teachers/teachers-list/teacher-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teachers: [],
    onlaod: false
  },

  /**
   * 生命周期函数--监听页面加载
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
    console.log(API.TEACHE_LIST_API)
    this.http = new Http();
    this.http.get(API.TEACHE_LIST_API)
      .then(({ data }) => {
        this.setData({
          teachers: data.teacher,
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setData({
          onlaod: true,
        });
        console.log(this.data)
        wx.hideLoading();
        wx.hideNavigationBarLoading();
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})