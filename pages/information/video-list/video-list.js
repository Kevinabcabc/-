import API from '../../../request/api.js'
import Http from '../../../request/index.js'
// pages/information/video-list/video-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoad:false,
    videoSrc:"",
    count:Number,
    hasMore:true
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
    this.requestData(true);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */


  requestData(canLoadmore) {
    wx.showLoading({
      title: 'waiting',
      mask: true
    });

    wx.showNavigationBarLoading();

    this.http = new Http();
    this.http.get(API.INFORMATION_VIDEO_API)
      .then(({ data }) => {
        let newVideo = [];
        if (canLoadmore) {
          newVideo = [...this.data.videoSrc, ...data.video]
        } else {
          newVideo = data.video;
        }
        this.setData({
          isLoad: true,
          videoSrc: newVideo,
          count: data.count
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        // console.log(this.data)
        // console.log(this.data.count, this.data.videoSrc.length);
        if (this.data.count <= this.data.videoSrc.length) {
          this.setData({
            hasMore: false
          })
        }
        wx.hideLoading();
        wx.hideNavigationBarLoading();
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
    if (this.data.hasMore) {
      this.requestData(true);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})