// pages/fod/fod.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    //小吃街数据
    srct:"/images/destination/美食.jpg",

    src1: "",
    src2: "",
    src3: "",
    src4: "",



    name1: "",
    name2: "",
    name3: "",
    name4: "",


    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",


    bus1: "",
    bus2: "",
    bus3: "",
    bus4: ""



  },

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
    
    console.log('c', getApp().globalData.column, '，v', getApp().globalData.value);

    //不同城市显示不同小吃街
    switch (getApp().globalData.column) {
      //北京
      case 0:
        
        wx.setNavigationBarTitle({
          title: '贵阳名吃'
        })
        
        this.setData({ src1: "/images/fd/二十七路小吃街.jpg"});
        this.setData({ src2: "/images/fd/合群路小吃夜市.jpg"});
        this.setData({ src3: "/images/fd/青云路夜市.jpg"}); 
        this.setData({ src4: "/images/fd/博爱路小吃街.jpg"});


        this.setData({ name1: "二十七路小吃街"});
        this.setData({ name2: "合群路小吃夜市"});
        this.setData({ name3: "青云路夜市"});
        this.setData({ name4: "博爱路小吃街"});


       
        this.setData({ desc1: "当地风味小吃、传统小吃应有尽有，在这里可以品尝到最正宗的贵州美食。"});
        this.setData({ desc2: "贵阳规模最大的夜市小吃街，小吃种类齐全，被誉为“贵阳夜市第一街”。"});
        this.setData({ desc3: "街边的大排档多达二三百家，大多经营贵州有名的小吃。"});
        this.setData({ desc4: "博爱路夜市一条街连接遵义路与都司路，贵阳最现代的小吃街，这里的小吃是中西合璧大杂烩。"});


        
        this.setData({ bus1: "炒米皮、安顺裹卷等"});
        this.setData({ bus2: "砂锅饭、砂锅粉、炒粉等"});
        this.setData({ bus3: "各类大排档"});
        this.setData({ bus4: "赤水竹香鸡、遵义羊肉粉"});



        break;
      //甘肃
      case 1:
        
        switch (getApp().globalData.value) {
          case 0:
            
            wx.setNavigationBarTitle({
              title: '兰州名吃'
            })
            this.setData({ src1: "/images/fd/马子禄牛肉面.jpg" });
            this.setData({ src2: "/images/fd/正宁路夜市.jpg" });
            this.setData({ src3: "/images/fd/放哈.jpg" });
            this.setData({ src4: "/images/fd/大众巷.jpg" });


            this.setData({ name1: "马子禄牛肉面" });
            this.setData({ name2: "正宁路夜市" });
            this.setData({ name3: "放哈" });
            this.setData({ name4: "大众巷" });



            this.setData({ desc1: "经过近100多年的发展成为先如今知名百年老店。"});
            this.setData({ desc2: "著名小吃一条街，在闹市区，是一条长街，整晚上灯火通明。可以吃到很多市井小吃。" });
            this.setData({ desc3: "小小的咖啡店，以当地特色“甜醅”为底料做成富有当地特色的奶茶出名。" });
            this.setData({ desc4: "是兰州最古老最著名的一条美食街，集中了多家在兰州声望很高的老字号。" });



            this.setData({ bus1: "以牛肉面为主的各类面食" });
            this.setData({ bus2: "牛奶鸡蛋醪、羊杂碎等" });
            this.setData({ bus3: "用“甜醅”做成的奶茶" });
            this.setData({ bus4: "杏皮水、灰豆、炒凉粉等" });


            break;
          case 1:
            
            wx.setNavigationBarTitle({
              title: '嘉峪关名吃'
            })

            this.setData({ src1: "/images/fd/大唐美食街.jpg" });
            this.setData({ src2: "/images/fd/李大胡子烧烤.jpg" });
            this.setData({ src3: "/images/fd/滚记糊锅.jpg" });
            this.setData({ src4: "/images/fd/山城柴火鸡.jpg" });


            this.setData({ name1: "大唐美食街" });
            this.setData({ name2: "李大胡子烧烤" });
            this.setData({ name3: "滚记糊锅" });
            this.setData({ name4: "山城柴火鸡" });



            this.setData({ desc1: "聚集全国各地美食，主要以烧烤为主。" });
            this.setData({ desc2: "烤出来的肉肉质鲜美，无论是普通烤肉还是特色肉串，都很不错。" });
            this.setData({ desc3: "滚记糊锅位于十四栋,以经营小吃面食为主,滚记糊锅。" });
            this.setData({ desc4: "主要以柴火烧肉为主，当地一大特色。" });



            this.setData({ bus1: "烤羊排、馕炕肉等" });
            this.setData({ bus2: "羊肉串、烤羊蹄等" });
            this.setData({ bus3: "糊锅" });
            this.setData({ bus4: "柴火排骨、柴火鸡等" });

          
            break;
          }
        break;
      //宁夏
        case 2:
          wx.setNavigationBarTitle({
          title: '银川名吃'//页面标题为路由参数
          })

          this.setData({ src1: "/images/fd/老毛手抓羊肉.jpg" });
          this.setData({ src2: "/images/fd/长久一品羊肉老搓面.jpg" });
          this.setData({ src3: "/images/fd/黄渠桥忠民羊羔肉.jpg" });
          this.setData({ src4: "/images/fd/三住宅凉皮.jpg" });


          this.setData({ name1: "老毛手抓羊肉" });
          this.setData({ name2: "长久一品羊肉老搓面" });
          this.setData({ name3: "黄渠桥忠民羊羔肉" });
          this.setData({ name4: "三住宅凉皮" });



          this.setData({ desc1: "百年老店秘制祖传，选料精细工艺独到，美誉宁夏面向全国。" });
          this.setData({ desc2: "老银川风味别具一格，面条柔韧筋道足，是银川家喻户晓的美味食品。" });
          this.setData({ desc3: "独特的烹制技艺享誉宁夏，精选的羊羔肉巧配底料，口味厚重鲜香怡人。" });
          this.setData({ desc4: "三住宅凉皮独到的制作工艺，口感润滑，汁味香辣适口，风味别致。" });



          this.setData({ bus1: "羊脖子肉、手抓羊肉等" });
          this.setData({ bus2: "羊肉搓面等各类面食" });
          this.setData({ bus3: "辣爆羊羔肉、土豆羊肉" });
          this.setData({ bus4: "凉皮" });


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
    
  }
})


