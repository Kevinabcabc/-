// components/user-comment/user-comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:Object
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
    demoAction(){
      console.log(this.properties.info)
    }
  }
})
