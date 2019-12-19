class Http{
  constructor (){
    this.requestTask = null;
  }

  request(url,method,data){
    return new Promise((resolve,reject)=>{
      this.requestTask = wx.request({
        url,
        data,
        method,
        success:(res)=>{
          const {data,statusCode,header} = res;
          if(statusCode >= 200 && statusCode <300 && data.code === 0){
            resolve(data);
          }else{
            this.handleError(data.message);
            reject(data.message);
          }
        },
        fail:(error)=>{
          this.handleError(error.errMsg);
          reject(error.errMsg)
        }
      })
    })
  };

  get(url,data){
    return this.request(url,'GET',data);
  };

  post(url,data){
    return this.request(url,'POST',data);
  };

  cancel(){
    this.requestTask.abort();
  };

  handleError(msg){
    wx.showToast({
      title: msg,
      icon:'none'
    })
  }
}

export default Http;