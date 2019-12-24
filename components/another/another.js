import Pubsub from 'pubsub-js';
// components/another/another.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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

  },

  lifetimes:{
    ready(){
      Pubsub.subscribe('send-girl',(ev,girl)=>{
        console.log(ev,girl);
      })
    }
  }
})
