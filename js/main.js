//pc端各种语言的切换
$(function() {
	$('#yuyan_tabs ul li ').click(function() {
		$(this).addClass('tabulous_active').siblings().removeClass('tabulous_active');
		$('#tabs_container>.container:eq(' + jQuery(this).index() + ')').show().siblings().hide();
	});
})
//手机端各种语言的切换
$(function() {
	$('#yuyan_tabs1 ul li ').click(function() {
		$(this).addClass('tabulous_active').siblings().removeClass('tabulous_active');
		$('#tabs_container>.container:eq(' + jQuery(this).index() + ')').show().siblings().hide();
	});
})
//图片的渐隐式切换
var c_NowDiv = 1; //表示当前显示的div
var c_MaxDiv = 5; //表示div的个数
var j_NowDiv = 1; //表示当前显示的div
var j_MaxDiv = 5; //表示div的个数
var e_NowDiv = 1; //表示当前显示的div
var e_MaxDiv = 5; //表示div的个数
var k_NowDiv = 1; //表示当前显示的div
var k_MaxDiv = 5; //表示div的个数
function showchina() {
	for(var i = 1; i <= c_MaxDiv; i++) {
		if(c_NowDiv == i)
	document.getElementById("china" + c_NowDiv).style.display = 'flex'; //当前显示的div
		else
	document.getElementById("china" + i).style.display = 'none';
	}
	if(c_NowDiv == c_MaxDiv) //判断当前div是否是最后一个，如果是则从第一个重新轮回显示
		c_NowDiv = 1;
	else
		c_NowDiv++; //设置下一个显示的图片
}
function showjapan(){
		for(var i = 1; i <= j_MaxDiv; i++) {
		if(j_NowDiv == i)
			document.getElementById("japan" + j_NowDiv).style.display = 'flex'; //当前显示的div
		else
			document.getElementById("japan" + i).style.display = 'none';
	}
	if(j_NowDiv == j_MaxDiv) //判断当前div是否是最后一个，如果是则从第一个重新轮回显示
		j_NowDiv = 1;
	else
		j_NowDiv++; //设置下一个显示的图片
}
function showenglish(){
		for(var i = 1; i <= e_MaxDiv; i++) {
		if(e_NowDiv == i)
			document.getElementById("english" + e_NowDiv).style.display = 'flex'; //当前显示的div
		else
			document.getElementById("english" + i).style.display = 'none';
	}
	if(e_NowDiv == e_MaxDiv) //判断当前div是否是最后一个，如果是则从第一个重新轮回显示
		e_NowDiv = 1;
	else
		e_NowDiv++; //设置下一个显示的图片
}
function showkorea(){
		for(var i = 1; i <= k_MaxDiv; i++) {
		if(k_NowDiv == i)
			document.getElementById("korea" + k_NowDiv).style.display = 'flex'; //当前显示的div
		else
			document.getElementById("korea" + i).style.display = 'none';
	}
	if(k_NowDiv == k_MaxDiv) //判断当前div是否是最后一个，如果是则从第一个重新轮回显示
		k_NowDiv = 1;
	else
		k_NowDiv++; //设置下一个显示的图片
}
theTimer = setInterval("showchina()", 3000); //设置定时器，显示下一个图片
theTimer = setInterval("showjapan()", 3000);
theTimer = setInterval("showenglish()",3000);
theTimer = setInterval("showkorea()",3000);
window.onload = showchina;//不需要加括号
window.onload = showjapan;
window.onload = showenglish;
window.onload =  showkorea;


//果安卓按钮切换
 $('.qiehuan').hover(
   function(){
   	$(this).css('border',"1px solid #28a439");
   	$(this).find('ul li:eq(0) img').attr('src','img/apple1.png')
   	$(this).find('ul li:eq(1) img').attr('src','img/appstore1.png')
   },
   function(){
   $(this).css('border',"1px solid #333333");
   	$(this).find('ul li:eq(0) img').attr('src','img/apple.png')
   	$(this).find('ul li:eq(1) img').attr('src','img/appstore.png')
   }
);
$('.android-div').hover(
   function(){
   	$(this).css('border',"1px solid #28a439");
   	$(this).find('ul li:eq(0) img').attr('src','img/android1.png')
   	$(this).find('ul li:eq(1) img').attr('src','img/androidstore1.png')
   },
   function(){
   $(this).css('border',"1px solid #333333");
   	$(this).find('ul li:eq(0) img').attr('src','img/android.png')
   	$(this).find('ul li:eq(1) img').attr('src','img/androidstore.png')
   }
);

// 检测浏览器语言
	$(window).on('load',function(){
		chk_userlanguage();
	})
var chk_userlanguage = function() {  
    /* get browser default lang */  
    if (navigator.userLanguage) {  
        baseLang = navigator.userLanguage.substring(0,2).toLowerCase();  
    } else {  
        baseLang = navigator.language.substring(0,2).toLowerCase();  
    } 
   //根据浏览器语言现实相应的语言界面
if(baseLang == 'zh'){
$('#yuyan_tabs').find('ul li:eq(3)').addClass('tabulous_active');
$('.showdiv4').css('display','block')
}else if(baseLang == 'ja'){
$('#yuyan_tabs').find('ul li:eq(0)').addClass('tabulous_active');
$('.showdiv1').css('display','block');
}else if(baseLang == 'ko'){
$('#yuyan_tabs').find('ul li:eq(1)').addClass('tabulous_active');
$('.showdiv2').css('display','block');	
}else{
$('#yuyan_tabs').find('ul li:eq(2)').addClass('tabulous_active');
$('.showdiv3').css('display','block');
}
//根据浏览器语言更改keywords和description
if(baseLang == 'zh'){
	$("meta[name ='description']").attr('content','HiChat 是壹款基於點對點加密技術的，為區塊鏈技術愛好者及虛擬貨幣投資者量身打造的綜合性社交軟件。');
	$("meta[name ='keywords']").attr('content','HiChat 是壹款基於點對點加密技術的，為區塊鏈技術愛好者及虛擬貨幣投資者量身打造的綜合性社交軟件。');
}else if(baseLang == 'ja'){
	$("meta[name ='description']").attr('content','HiChatはP2Pの暗号化技術に基づき、ブロックチェーン愛好者及び仮想通貨投資者のために作れられた総合的なソーシャルソフトウェア。');
	$("meta[name ='keywords']").attr('content','HiChat 是壹款基於點對點加密技術的，為區塊鏈技術愛好者及虛擬貨幣投資者量身打造的綜合性社交軟件。');
}else if(baseLang == 'ko'){
    $("meta[name ='description']").attr('content','HiChat은 블록체인 기술자와 가상 화폐 투자자를 위해 제작된 P2P (peer to peer, 각 개인간의 직접 연결된 파일 공유) 기술을 기반의 종합 커뮤니티 소프트웨어입니다. ');
	$("meta[name ='keywords']").attr('content','HiChat 是壹款基於點對點加密技術的，為區塊鏈技術愛好者及虛擬貨幣投資者量身打造的綜合性社交軟件。');
}else{
	$("meta[name ='description']").attr('content','HiChat is a comprehensive social software based on peer-to-peer encryption technology tailored to blockchain tech enthusiasts and virtual currency investors.');
	$("meta[name ='keywords']").attr('content','HiChat 是壹款基於點對點加密技術的，為區塊鏈技術愛好者及虛擬貨幣投資者量身打造的綜合性社交軟件。');
}
};
