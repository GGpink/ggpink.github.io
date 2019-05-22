$(document).ready(function(){
	var num = 0 ;
	var timer = setInterval(function(){
		num++;
		var $p = $(".load p");
		$p.text(num+'%');
		if(num>=100){
			
			clearInterval(timer);
			$p.css({
				 "padding": "5px",
                 "borderRadius": "12px",
                 "backgroundColor": "#00a8ff"
			})
			$p.text("开始");
			$p.on("click.me",function(){
				//跳到第二页
				mySwiper.slideNext(1000);
				//删除加载页				
				setTimeout(function(){
					mySwiper.removeSlide(0);
				},1000);
				
				$("#music").trigger("play");
				$(".music-wrap").css("display","block");
                
			})

			
			
			// $(".load").addClass('hide');

			// $(".swiper-container").removeClass('hide');
			//切换到下一页
			
			
					
			// mySwiper.slideNext(2000); 
					
		}
		
	},200);
   
   
   
   //音乐
   
   var music_wrap = $(".music-wrap").get(0);
   music_wrap.isplay=1;
  
   
   $(".music-wrap").click(function(){
	   
	   
	   if($(this).get(0).isplay){
		   $(this).css({
		      "animationPlayState":"paused",
			  "background-image": "url(images/bgm_off.png)"
		   })
		   $("#music").trigger("pause");
	   }else{
		   $(this).css({
		   "animationPlayState":"running",
		   "backgroundImage": "url(images/bgm_on.png)"
		   })
		   $("#music").trigger("play");
		 
	   }
	   
	   music_wrap.isplay= (music_wrap.isplay==1) ? 0:1;
	     	   
   })
})
	
