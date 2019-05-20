(function(doc,win){
	var d=doc.documentElement,
	r1='orientationchange'in window ?'orientationchange':'resize',
	r2=function(){
		var w=win.screen.width;
		if(!w) return;
		if(w<640){
			d.style.fontSize=16*(w/375)+'px'
		}else{
			d.style.fontSize='16px'
		}if(w==768){
			d.style.fontSize='25px'
		}if(w==1024){
			d.style.fontSize='33px'
		}
	}
	if(!doc.addEventListener) return;
	win.addEventListener(r1,r2,false);
	doc.addEventListener("DOMContentLoaded",r2,false);
	
})(document,window)
