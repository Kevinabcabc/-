import API from '../../../request/api.js'
import Http from '../../../request/index.js'
// pages/course/course-detail/course-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stime:String,
    etime:String,
    rest:Number,
    teacher:[],
    visitor:Number,
    intro:'',
    purchased:'false'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      purchased: options.purchased
    })
    this.requestData();
  },

  requestData() {
    wx.showLoading({
      title: 'waiting',
      mask: true
    });

    console.log(API.COURSE_DETAIL_API)
    wx.showNavigationBarLoading();
    this.http = new Http();
    this.http.get(API.COURSE_DETAIL_API)
      .then(({ data }) => {
        console.log(data);
        this.setData({
          stime: data.stime,
          etime: data.etime,
          rest: data.rest,
          teacher: data.teacher,
          visitor: data.visitor,
          intro: data.intro,
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setData({
          isLoad: true,
        });
        console.log(this.data)
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      })
  },

  pushAction(){
    wx.navigateTo({
      url: '/pages/user/order-detail/order-detail',
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