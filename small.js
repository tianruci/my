//index.js
//获取应用实例
//哈哈哈提交啦！
	
	pay:function(){
		wx.requestPayment({  
			nonceStr: res.data.nonceStr,  
			package: "prepay_id="+res.data.prepayId,  
			signType: 'MD5',  
			timeStamp: res.data.timestamp,      
			paySign: sign,//<strong><span style="color:#ff0000;">五个字段参与签名(区分大小写)：appId,nonceStr,package,signType,timeStamp（需要注意的是，这5个参数签名排序的顺序按照ASCII字典序排序）</span></strong>  
			success: function(res){  
			  console.log("支付成功");  
			},  
			fail: function() {  
			},  
			complete: function() {  
            }  
        })  
		
	},
	
  onLoad: function (wh) {
	hotapp.init("hotapp56881400")  
    var that = this 
    //调用应用实例的方法获取全局数据
    app.get_informations(
		function(e){ 
		  //更新数据 
		  that.setData({
			userInfo:e
		  })
		}
	)
  },
  
  
})


 
	