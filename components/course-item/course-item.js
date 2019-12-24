// components/course-item/course-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img:String,
    title:String,
    content:String,
    time:String,
    type:String,
    purchased:Boolean
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
      wx.navigateTo({
        url: '/pages/course/course-detail/course-detail?purchased='+this.properties.purchased,
      })
    }
  }
})
