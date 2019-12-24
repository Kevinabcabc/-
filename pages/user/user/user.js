import API from '../../../request/api.js'
// pages/user/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data:{
    nickName:String,
    avatarUrl:String
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
    console.log(app.globalData.userInfo);
    wx.login({
      success(res){
        // console.log(res);
        wx.request({
          url: API.LOGIN_API,
          data:{
            code:res.code
          },
          method:'POST',
          success:(res)=>{
            console.log(res);
          }
        })
      }
    });

    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          this.setData({ canGetUserInfo: true });

          //可以获得用户信息
          wx.getUserInfo({
            success: (res) => {
              console.log(res.userInfo)
                this.setData({
                  nickName: res.userInfo.nickName,
                  avatarUrl: res.userInfo.avatarUrl
                })
            }
          })

        }
      }
    })
  },


  pushAction(ev){
    console.log(ev.currentTarget.dataset.push)
    wx.navigateTo({
      url: ev.currentTarget.dataset.push
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