// components/boxson/boxson.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      optionalTypes: [Number],
      value: "here",
      observer(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },

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
    clickAction(e){
      console.log(e)
    },

    trggerAction(){
      this.triggerEvent('changeNum',123456);
    }
  }
})
