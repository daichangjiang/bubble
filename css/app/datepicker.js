$(function(){
	/*获得本月天数*/
	$(".calendar-date>li").text("");
	renderDatePicker((new Date()).getTime());
	function renderDatePicker(para){
		var thisDate = new Date(para);
		$(".calendar-wrapper").data('date',thisDate.getTime());
		$(".calendar-month .year").text(thisDate.getFullYear());
		$(".calendar-month .month").text((thisDate.getMonth() + 1) + "月");
		$(".calendar-wrapper .calendar-date li").removeClass('disabled').removeClass('today');
		var thisMonth = thisDate.getMonth();
		var nextMonth = thisMonth == 11 ? 0 : ++thisMonth;
		var thisMonthDays = (new Date(thisDate.getYear(),nextMonth,0)).getDate();
		var thisMonthObject = new Array();
		for(var i=1;i<=thisMonthDays;i++){
			thisMonthObject.push(new Date(thisDate.getFullYear(),thisDate.getMonth(),i));
		}
		var firstDay = thisMonthObject[0].getDay();
		var lastDay = thisMonthObject[thisMonthObject.length - 1].getDay();
		
		var aheadDays = firstDay - 1;
		var tailDays = 7 - lastDay;
		
		for(var i=0;i<aheadDays;i++){
			thisMonthObject.splice(0,0,new Date(thisDate.getFullYear(),thisDate.getMonth(),-i));
		}
		for(var i=0;i<tailDays;i++){
			thisMonthObject.splice(thisMonthObject.length,0,new Date(thisDate.getFullYear(),thisDate.getMonth(),thisMonthDays + i + 1));
		}
		
		for(var i=0;i<thisMonthObject.length;i++){
			$(".calendar-wrapper .calendar-date li").eq(i).text(thisMonthObject[i].getDate());
			if(thisMonthObject[i].getMonth() != thisDate.getMonth()){
				$(".calendar-wrapper .calendar-date li").eq(i).addClass('disabled');
			}
			if(isToday(thisMonthObject[i])){
				$(".calendar-wrapper .calendar-date li").eq(i).addClass('today');
			}
		}
	}
	function isToday(str){
	    var d = new Date(str);
	    var todaysDate = new Date();
	    if(d.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
	        return true;
	    } else {
	        return false;
	    }
	}
	
	$(".left-arrow").on('click',function(event){
		event.stopPropagation();
		var thisDateTime = new Date($(".calendar-wrapper").data('date'));
		var lastMonth = new Date(thisDateTime.getFullYear(),thisDateTime.getMonth(),0);
		renderDatePicker(lastMonth.getTime());
	})
	
	$(".right-arrow").on('click',function(event){
		event.stopPropagation();
		var thisDateTime = new Date($(".calendar-wrapper").data('date'));
		var lastMonth = new Date(thisDateTime.getFullYear(),thisDateTime.getMonth() + 2,0);
		renderDatePicker(lastMonth.getTime());
	})
	
	var hammertime = new Hammer(document.getElementById("calendar-control-id"));
	hammertime.on("swipeleft", function (e) {
         //document.getElementById("result").innerHTML += "X偏移量：【" + e.deltaX + "】，Y偏移量：【" + e.deltaY + "】<br />";
         //控制台输出
     	var thisDateTime = new Date($(".calendar-wrapper").data('date'));
		var lastMonth = new Date(thisDateTime.getFullYear(),thisDateTime.getMonth() + 2,0);
		renderDatePicker(lastMonth.getTime());
     });
     hammertime.on("swiperight", function (e) {
         //document.getElementById("result").innerHTML += "X偏移量：【" + e.deltaX + "】，Y偏移量：【" + e.deltaY + "】<br />";
         //控制台输出
     	var thisDateTime = new Date($(".calendar-wrapper").data('date'));
		var lastMonth = new Date(thisDateTime.getFullYear(),thisDateTime.getMonth(),0);
		renderDatePicker(lastMonth.getTime());
     });
})
