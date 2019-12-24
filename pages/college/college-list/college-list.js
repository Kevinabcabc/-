import API from '../../../request/api.js'
import Http from '../../../request/index.js'
// pages/college/college-list/college-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infomation:[],
    count:Number,
    isLoad:false,
    hasMore:true,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData(false);
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
    this.http.get(API.COLLEGE_LIST_API)
      .then(({ data }) => {
        let newinfomation = [];
        if (canLoadmore){
          newinfomation = [...this.data.infomation, ...data.infomation]
        }else{
          newinfomation = data.infomation;
        }
        this.setData({
          infomation: newinfomation,
          count: data.count
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        // console.log(this.data.count, this.data.infomation.length);
        if (this.data.count <= this.data.infomation.length){
          this.setData({
            hasMore:false
          })
        }
        wx.hideLoading();
        wx.hideNavigationBarLoading();
      })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */

  onPullDownRefresh: function () {
    this.requestData(false);
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.hasMore){
      this.requestData(true);
    }
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})