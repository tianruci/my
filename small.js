//index.js
//��ȡӦ��ʵ��

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
			paySign: sign,//<strong><span style="color:#ff0000;">����ֶβ���ǩ��(���ִ�Сд)��appId,nonceStr,package,signType,timeStamp����Ҫע����ǣ���5������ǩ�������˳����ASCII�ֵ�������</span></strong>  
			success: function(res){  
			  console.log("֧���ɹ�");  
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
    //����Ӧ��ʵ���ķ�����ȡȫ������
    app.get_informations(
		function(e){ 
		  //�������� 
		  that.setData({
			userInfo:e
		  })
		}
	)
  },
  
  
})


 
	