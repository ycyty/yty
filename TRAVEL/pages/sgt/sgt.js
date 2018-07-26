Page({

  /**
  Page({

  /**
   * 页面的初始数据
   */


  data: {

    //美食数据
    hotView: [{
      title: "",
      imgUrl: "",
      id:""
    }, {
      title: "",
      imgUrl: "",
      id: ""
    }, {
      title: "",
      imgUrl: "",
      id: ""
    }, {
      title: "",
      imgUrl: "",
      id: ""
    }]

  },
  
  
  //美食点击事件
  enterDetail(e) {
  

    getApp().globalData.menuid = e.currentTarget.dataset.id;
    console.log('id:', getApp().globalData.menuid);
    wx.navigateTo({
      url: '../menu/menu'
      

    })
  },

/*url: '../index/view-detail/view-detail?sid=' + sid + ''*/


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    ;


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    

    var tit0 = "hotView[" + 0 + "].title";
    var tit1 = "hotView[" + 1 + "].title";
    var tit2 = "hotView[" + 2 + "].title";
    var tit3 = "hotView[" + 3 + "].title";


    var img0 = "hotView[" + 0 + "].imgUrl";
    var img1 = "hotView[" + 1 + "].imgUrl";
    var img2 = "hotView[" + 2 + "].imgUrl";
    var img3 = "hotView[" + 3 + "].imgUrl";


    var id0 = "hotView[" + 0 + "].id";
    var id1 = "hotView[" + 1 + "].id";
    var id2 = "hotView[" + 2 + "].id";
    var id3 = "hotView[" + 3 + "].id";




    console.log('c', getApp().globalData.column, '，v', getApp().globalData.value);

    //不同城市的美食
    switch (getApp().globalData.column) {
      //北京
      case 0:

        wx.setNavigationBarTitle({
          title: '贵阳菜谱'//页面标题为路由参数
        })


        this.setData({ [tit0]: "遵义羊肉粉" });
        this.setData({ [tit1]: "花溪牛肉粉" });
        this.setData({ [tit2]: "红油米豆腐" });
        this.setData({ [tit3]: "丝娃娃" });



        this.setData({ [img0]: "/images/destination/遵义羊肉粉.jpg" });
        this.setData({ [img1]: "/images/destination/花溪牛肉粉.jpg" });
        this.setData({ [img2]: "/images/destination/红油米豆腐.jpg" });
        this.setData({ [img3]: "/images/destination/丝娃娃.jpg" });


        this.setData({ [id0]: "0" });
        this.setData({ [id1]: "1" });
        this.setData({ [id2]: "2" });
        this.setData({ [id3]: "3" });




        break;
      //甘肃
      case 1:

        switch (getApp().globalData.value) {
          case 0:

            wx.setNavigationBarTitle({
              title: '兰州菜谱'//页面标题为路由参数
            })


            this.setData({ [tit0]: "牛肉面" });
            this.setData({ [tit1]: "牛奶鸡蛋醪糟" });
            this.setData({ [tit2]: "酿皮子" });
            this.setData({ [tit3]: "炒凉粉" });



            this.setData({ [img0]: "/images/destination/牛肉面.jpg" });
            this.setData({ [img1]: "/images/destination/牛奶鸡蛋醪糟.jpg" });
            this.setData({ [img2]: "/images/destination/酿皮子.jpg" });
            this.setData({ [img3]: "/images/destination/炒凉粉.jpg" });


            this.setData({ [id0]: "4" });
            this.setData({ [id1]: "5" });
            this.setData({ [id2]: "6" });
            this.setData({ [id3]: "7" });

            break;
          case 1:

            wx.setNavigationBarTitle({
              title: '嘉峪关菜谱'//页面标题为路由参数
            })

            this.setData({ [tit0]: "丝路驼掌" });
            this.setData({ [tit1]: "粉蒸牛羊肉" });
            this.setData({ [tit2]: "油爆驼峰" });
            this.setData({ [tit3]: "烧壳子" });



            this.setData({ [img0]: "/images/destination/丝路驼掌.jpg" });
            this.setData({ [img1]: "/images/destination/粉蒸牛羊肉.jpg" });
            this.setData({ [img2]: "/images/destination/油爆驼峰.jpg" });
            this.setData({ [img3]: "/images/destination/烧壳子.jpg" });

            this.setData({ [id0]: "8" });
            this.setData({ [id1]: "9" });
            this.setData({ [id2]: "10" });
            this.setData({ [id3]: "11" });

            break;
        }
        break;
      //宁夏
      case 2:
        wx.setNavigationBarTitle({
          title: '银川菜谱'//页面标题为路由参数
        })


        this.setData({ [tit0]: "手抓羊肉" });
        this.setData({ [tit1]: "烩羊杂碎" });
        this.setData({ [tit2]: "回乡馓子" });
        this.setData({ [tit3]: "清蒸羊羔肉" });



        this.setData({ [img0]: "/images/destination/手抓羊肉.jpg" });
        this.setData({ [img1]: "/images/destination/烩羊杂碎.jpg" });
        this.setData({ [img2]: "/images/destination/回乡馓子.jpg" });
        this.setData({ [img3]: "/images/destination/清蒸羔羊肉.jpg" });


        this.setData({ [id0]: "12" });
        this.setData({ [id1]: "13" });
        this.setData({ [id2]: "14" });
        this.setData({ [id3]: "15" });

        break;

    }


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})