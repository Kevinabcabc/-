// components/order-item/order-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    order:Object
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
      console.log(this.properties.order);
      wx.navigateTo({
        url: '/pages/user/order-detail/order-detail?id=' + this.properties.order.id,
      })

    }
  }
})
