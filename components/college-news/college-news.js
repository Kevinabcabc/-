// components/college-news/college-news.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    desc:String,
    image:String,
    time:String,
    title:String,
    url:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    pushAction(){
        let urla = '/pages/course/course-detail/course-detail';
        if(this.properties.url){
          urla = this.properties.url;
        }
      wx.navigateTo({
        url: urla,
      })
    }
  }
})
