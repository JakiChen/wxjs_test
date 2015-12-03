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
wx.ready(function () {
	alert("WeChat JS SDK")
});