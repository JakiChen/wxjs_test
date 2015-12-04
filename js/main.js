// JavaScript Document

$(document).ready(function(e) {
	
	//show or hide menu
	$("#icon-cart").click(function(){
		$("#menu").toggleClass("on");
		$(".button-swap").toggleClass("button-swap-on");
	});
});
function WeiXinAddContact(name){
	WeixinJSBridge.invoke("addContact", {webtype: "1",username: name}, function(e) {
		WeixinJSBridge.log(e.err_msg);
		//e.err_msg:add_contact:added 已经添加
		//e.err_msg:add_contact:cancel 取消添加
		//e.err_msg:add_contact:ok 添加成功
		if(e.err_msg == 'add_contact:added' || e.err_msg == 'add_contact:ok'){
		    //关注成功，或者已经关注过
		}
	})
}
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wx7109fa9354031087', // 必填，公众号的唯一标识
    timestamp: 1449199026, // 必填，生成签名的时间戳
    nonceStr: 'EK9y23pNp5Fo1jG7', // 必填，生成签名的随机串
    signature: '9580a66040a2281e43ce8e751fab4069f85dd8ec',// 必填，签名，见附录1
    jsApiList: ['chooseWXPay','getNetworkType','previewImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
wx.ready(function () {
	// 1 判断当前版本是否支持指定 JS 接口，支持批量判断
	document.querySelector('#wx-js-test').onclick = function () {
		wx.checkJsApi({
			jsApiList: [
			'getNetworkType',
			'previewImage',
			'chooseWXPay'
			],
			success: function (res) {
			alert(JSON.stringify(res));
		}
		});
	};
});
wx.error(function (res) {
  alert(res.errMsg);
});