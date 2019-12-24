// components/comment/comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:String,
    img:String,
    time:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    good:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goodAction(ev){
      this.setData({
        good:!this.data.good
      })  
    }
  }
})
