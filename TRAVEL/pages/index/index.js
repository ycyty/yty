Page({
  data: {
    
    
    //滚动展览数据
    hotcity: [
      {
        name: "牛肉面",
        imagePath: "/images/牛肉面.jpg",
      },
      {
        name: "手抓羊肉",
        imagePath: "/images/手抓羊肉.jpg",

      },
      {
        name: "牛奶鸡蛋醪糟",
        imagePath: "/images/牛奶鸡蛋醪糟.jpg",
      },
    ],
    
    //城市选择数据
    multiArray: [['贵州','甘肃','宁夏'], ['贵阳']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '贵州'
        },
        {
          id: 1,
          name: '甘肃'
        },
        {
          id: 2,
          name: '宁夏'
        }
      ], [
        {
          id: 0,
          name: '贵阳'
        },
        
      ]
    ],
    multiIndex: [0, 0]

  },

//选择城市事件
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
      })
    getApp().globalData.column = e.detail.value[0];
    getApp().globalData.value = e.detail.value[1];
    
  }, 
  
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
   

    //getApp().globalData.column = e.detail.column;
    //getApp().globalData.value = e.detail.value;
    
    console.log('全局c', getApp().globalData.column, '，全局v', getApp().globalData.value);

    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    
   data.multiIndex[e.detail.column] = e.detail.value;
   ;


    //根据选择显示城市
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['贵阳'];
            break;
          case 1:
            data.multiArray[1] = ['兰州','嘉峪关'];
            break;
          case 2:
            data.multiArray[1] = ['银川'];
            break;
        }
        data.multiIndex[1] = 0;
        break;
  

        break;
    }
    
    this.setData(data);
  },
  

 
})
