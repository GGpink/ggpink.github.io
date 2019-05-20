
	
var _pages=document.getElementsByClassName("page");
var startY,endY,dis=0;
var index=0;
var canmove=false;


var _arrow=document.getElementsByClassName("arrow");

	

for(var i=0;i<_arrow.length;i++){

	_arrow[i].addEventListener("animationend",function(){	
		canmove=true;
	});
}


document.addEventListener("touchstart",function(e){
	var Touch=e.touches[0];
	startY=Touch.pageY;
	
})
document.addEventListener("touchmove",function(e){
	var Touch=e.touches[0];
	endY=Touch.pageY;
	dis = startY - endY;

})
document.addEventListener("touchend",function(e){

	if(Math.abs(dis)>30 && canmove){
		
		if(dis>0){
			
			pageTop(index);
			qingling();
			canmove=false;
			
		}else{
			
//			pageDown(index);
//			qingling();
			//canmove=false;
		}
		
	}

})


function pageTop(n){
		
	if(n<_pages.length-1){
		
		index++;
		n++;
		
		setTimeout(function(){
			
			_pages[n-1].classList.add('hide');
			
		},1000);
		
		_pages[n-1].classList.add('out_top');
		_pages[n-1].classList.remove('in_top','in_down','out_down');
		
		_pages[n].classList.add('in_top');
		_pages[n].classList.remove('out_top','in_down','out_down','hide');
		
	}
	

}


function pageDown(n){
	
	if(n>0){
		
		index--;
		n--;
		
		setTimeout(function(){
			
			_pages[n+1].classList.add('hide');
			
		},1000);
		
		_pages[n+1].classList.add('out_down');
		_pages[n+1].classList.remove('in_top','in_down','in_down');
		
		_pages[n].classList.add('in_down');
		_pages[n].classList.remove('out_top','in_top','out_down','hide');
		
	}
	
	
	
}

function qingling(){
	
	startY=0;
	endY=0;
	dis=0;
	
}



