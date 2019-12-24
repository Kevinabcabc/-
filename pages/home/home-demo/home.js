import API from '../../../request/api.js'
import Http from '../../../request/index.js'

// pages/home/home/home.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoad:false,
    bannerIndex:0,
    banner:[],
    category:[],
    teachers: [],
    infomation: [],
    honor: [],
    connect: {},
    mockData: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mockData();
    this.requestData();
  },
  // 构建假数据
  mockData() {
    let arr = new Array(20).fill(undefined).map(() => {
      return {
        width: 200 + parseInt(Math.random() * 500),
        height: 50 + parseInt(Math.random() * 40)
      };
    });
    // console.log(arr);
    this.setData({ mockData: arr });
  },

  requestData(){
    wx.showLoading({
      title:'waiting',
      mask:true
    });

    wx.showNavigationBarLoading();

    this.http = new Http();
    this.http.get(API.HOME_API)
    .then(({data})=>{
      this.setData({
        isLoad:true,
        banner: data.banner,
        category: data.category,
        teachers: data.teacher,
        infomation: data.infomation,
        honor: data.honor,
        connect: data.connect
      });
    })
    .catch(error=>{
      console.log(error);
    })
    .finally(()=>{
      console.log(this.data)
      wx.hideLoading();
      wx.hideNavigationBarLoading();
    })
  },

  bannerChangeAction(ev){
    this.setData({
      bannerIndex:ev.detail.current
    })
  },
  testAction(ev) {
    console.log(ev);
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