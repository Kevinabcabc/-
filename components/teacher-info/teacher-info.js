// components/teacher-info/teacher-info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgurl:String,
    type:String,
    firstname:String,
    url:String
  },

  /**imgurl="{{item.image}}" type="{{item.type}}" firstname="{{item.firstname}}" id="{{item.id}}"
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    tapAction(){
    let urla = '/pages/teachers/teachers-detail/teacher-detail';
    if(this.properties.url){
      urla = this.properties.url
    }
      console.log(urla)
      wx.navigateTo({
        url: urla,
      })
    }
  }
})
