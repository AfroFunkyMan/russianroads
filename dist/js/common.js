

// function debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };

// var myEfficientFn = debounce(function(e) {
//
// 	console.log("SCROLL");
// 	if(e.originalEvent.wheelDelta /120 > 0) {
// 		viewPage--;
// 		if ($('\.'+screenarr[viewPage]).is(':hidden')) {
// 			viewPage--;
// 		};
// 		if(viewPage<0){
// 		 console.log('noobs detect: '+viewPage);
// 			viewPage++;
// 		}
// 		else {
// 			console.log($('\.'+screenarr[viewPage]).height());
// 			$('html, body').animate({ scrollTop:  ($('\.'+screenarr[viewPage]).offset().top) }, 500 );
// 		};
// 	}
// 	else
// 	{
// 		viewPage++;
// 		if ($('\.'+screenarr[viewPage]).is(':hidden')) {
// 			viewPage++;
// 		};
// 		if(viewPage==screenarr.length){
// 			console.log('noobs detect: '+viewPage);
// 			viewPage--;
// 		}
// 		else
// 		{
// 			console.log($('\.'+screenarr[viewPage]).height());
// 			$('html, body').animate({ scrollTop:  ($('\.'+screenarr[viewPage]).offset().top) }, 500 );
// 		}
// 	};
// 	console.log(screenarr[viewPage]);
// }, 250);



// // теперь это будет работать
//
// 	var startStr = 1;
// 	var maxStr = 20;
// 	var movementStrength = 20;
// 	var currentX = '';
// 	var currentY = '';
// 	var movementConstant = .003;
//
// //	$("#maestro").mousemove(function(e){
// //		var height =  startStr/ window.innerWidth;
// //		var width = startStr / window.innerHeight;
// //
// //		//	console.log(e);
// //		if (startStr<maxStr) startStr+=1;
// //		var pageX = e.pageX - (window.innerWidth / 2);
// //		var pageY = e.pageY - (window.innerHeight / 2);
// //		var newvalueX = width * pageX * 1;
// //		var newvalueY = height * pageY * 1 + 5;
// //		$('#maestro').css("background-position", newvalueX+"px     "+newvalueY+"px");
// //		if(currentX == '') currentX = e.pageX;
// //		var xdiff = e.pageX - currentX;
// //		currentX = e.pageX;
// //		if(currentY == '') currentY = e.pageY;
// //		var ydiff = e.pageY - currentY;
// //		currentY = e.pageY;
// //	});
// });
//
