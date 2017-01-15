//index.js
//获取应用实例
var app = getApp()
var hotapp = require('../../utils/hotapp.js')

 // 查询事件列表的Base URL 
const API_URL_L = "http://v.juhe.cn/certificates/typeList.php" 
 // 申请API获得的KEY 
const API_KEY = "569c0cfd9ed9eac2bc5af9ad0f539c92" 

 
Page({ 

    data:{
		  yyyyyy:'你好' ,
	
			
	},
   
   //事件处理函数 
   change_yyyyy:function(e){
		this.setData({
		    yyyyyy:'333333'
		});
   },
   
   
	setBarTitle:function(){
		wx.setNagavitionBarTile({
		  title: '跳转测试'
		}) 
	},
	
	keepT:function(){
		wx.navigateTo({
			url:'../second/second',
			success:function(res){
				console.log(res)
			},
			fail:function(err){
				console.log(err)
			}
			
		})
		
	},
	
	toGet:function(data){ 
           
		    hotapp.get('123',function(res){
		      console.log(res['data']['value']) 
				 
			}) 
		 
		 wx.request({
			url: API_URL_L,
			data:{
				appkey: 'hotapp56881400',
				key: "123",
			},
			header: {
				'content-Type': 'application/json'
			},
			success: function(res){
				console.log(res)
			}
		})  

	},
	
	
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


 
	