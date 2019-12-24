// components/box/box.js
import Pubsub from 'pubsub-js'
import dataBehavior from '../../behaviors/behaviors.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      optionalTypes: [Number],
      value:"hi",
      observer(newVal,oldVal){
          console.log(newVal,oldVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:1
  },

  behaviors: [
    dataBehavior
  ],
  /**
   * 组件的方法列表
   */

  methods: {
    countAction(e) {
      Pubsub.publish('send-girl',"LJ")
      // this.setData({value:this.data.value++});
      let newVal = this.data.value + 1;
      this.setData({ value: newVal})
    },

    changeVal(event){
      console.log(event)
      this.setData({ value: event.detail })
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      // console.log("box attached",this.data.info);      
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  pageLifetimes: {
    show() {
      console.log('show');
    },
    hide() {
      console.log('hide');
    },
    resize() {
      console.log('resize');
    }
  }


})
