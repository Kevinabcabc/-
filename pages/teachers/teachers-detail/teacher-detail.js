import API from '../../../request/api.js'
import Http from '../../../request/index.js'
// pages/teachers/teachers-detail/teacher-detail.js
Page({



  /**
   * 页面的初始数据
   */
  data: {
    isLoad:false,
    comment:[],
    content:String,
    courseList:[],
    honor:[],
    img:String,
    info:{},
    inputVal:""
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

    console.log(API.TEACHER_DETAIL_API)
    wx.showNavigationBarLoading();
    this.http = new Http();
    this.http.get(API.TEACHER_DETAIL_API)
      .then(({ data }) => {
        
        this.setData({
          comment: data.comment,
          content: data.content,
          courseList: data.courseList,
          honor: data.honor,
          img: data.img,
          info: data.info,
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  sendAction(){
    console.log(this.data.inputVal);
    let newComment = [...this.data.comment,{
      img:'http://localhost:8080/static/tlogo.png',
      time: new Date().toLocaleString(),
      content: this.data.inputVal
    }]
    this.setData({
      comment: newComment
    })
  },
  blurAction(ev){
    console.log(ev)
    this.setData({
      inputVal: ev.detail.value
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