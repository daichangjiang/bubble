$(function() {
	//	$.ajax({
	//		url: '/abc/areaSearch/search',
	//		data: {
	//			CityId: "1",
	//			KeyWord: "",
	//			hotelBrand: 1
	//		},
	//		type: "POST",
	//		complete: function() {},
	//		success: function(result) {
	//
	//		},
	//		error: function(jqXhr) {
	//
	//		}
	//	});
	$("img.lazy").lazyload({
		threshold       : 0,
        failure_limit   : 0,
        event           : "scroll",
        effect          : "fadeIn",
        container       : window,
        data_attribute  : "original",
        skip_invisible  : true,
        appear          : null,
        load            : null,
        placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
	});
	window.TouchSlide && TouchSlide({
		slideCell: "#focus",
		titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: true, //自动播放
		autoPage: true, //自动分页
		switchLoad: "_src" //切换加载，真实图片路径为"_src" 
	});
})