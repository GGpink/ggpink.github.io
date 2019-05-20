window.onload = function() {
	//解决自动播放
	
	
	

	var loadingnum = document.getElementById("loadingnum");
	var num = 30;

	var music_div = document.getElementById("music_div");

  
// 	music_div.innerHTML='<audio src="media_project1/bgm.mp3" loop="loop" id="music"></audio>';
// 	
// 	window.addEventListener('touchstart',function(){
// 		 music.play();
// 	});  
			 
	
	
	var music = document.getElementById("music");
	var music_c = 1;
	

  


	//获取多媒体资源来加载
// 	var imgs_num = 0;
// 	var imgs = document.querySelectorAll("img");
// 	var audios = document.querySelectorAll("audio,video");
//   for (var i = 0; i <imgs.length;i++) {
//   		add_imgs_num();
//   }
//   for(var i=0;i<audios.length;i++){
// 		audios[i].addEventListener('canplay',function(){
// 				imgs_num++;
// 		})
// 	}	
// 	function add_imgs_num() {
// 		setTimeout(function() {
// 			if (imgs[i].complete) {
// 				imgs_num++;
// 				// console.log(imgs_num);
// 			}
// 			
// 		}, 50);
// 	}









	loading();
	
	function loading() {

		var time = setInterval(function() {

			num = num + 1;

			loadingnum.innerText = num + "%";

			if (num>=100) {
				clearInterval(time);
				loadingnum.innerText = "100%";
				loadingnum.style.transform='scale(0)';
				

				
				
				setTimeout(function(){
					loadingnum.innerText = "点击开始";
					loadingnum.style.transform='scale(1)';
					
					loadingnum.onclick=function(){
					
						pageTop(index);
						music_div.style.display = "block";
            music.play();

					}
					
				},400);
				
				
				
				

         		 
	//自动触发事件click来躲避自动播放限制
// 				var myEvent  = new Event('click'); 
// 				music_div.dispatchEvent(myEvent);


			
				

			}


		}, 10);
	}




	music_div.onclick = function() {

		if (music_c) {
			music_div.style.backgroundImage = "url(img_project1/bgm_off.png)";
			music_div.style.animationPlayState = "paused";
			music.pause();
			music_c = false;
		} else {
			music_div.style.backgroundImage = "url(img_project1/bgm_on.png)";
			music_div.style.animationPlayState = "running";
			music.play();
			music_c = true;
		}

	}




	///////




	var _pages = document.getElementsByClassName('page');

	//page04
	var _name = document.getElementById('name');
	var _work = document.getElementById('work');
	var _p4_btn = document.getElementById('p4_btn');
	var _p4_dialog = document.getElementById('p4_dialog');
	
	var _p4_dialog_img = _p4_dialog.firstElementChild;
	var name, work;

	var _student = ['辣条', '雪糕', '软糖'];
	var _Working = ['米粉', '肠粉', '盒饭'];

  
	
	_p4_btn.onclick = function(){
alert(this);
		name = _name.value;
		work = _work.value;
		console.log(name, work);

		if (name == '' && !name) {
			_p4_dialog_img.src = 'img_project1/p4_dialog_t1.png';
			_p4_dialog.style.display='block';

			_p4_dialog.show(); 
		} else if (name.length < 2 || name.length > 4) {
			_p4_dialog_img.src = 'img_project1/p4_dialog_t3.png';
			_p4_dialog.style.display='block';
			
			_p4_dialog.show();
		} else if (!work) {
			_p4_dialog_img.src = 'img_project1/p4_dialog_t2.png';
			_p4_dialog.style.display='block';
			
			_p4_dialog.show();
		} else {
// 			index++;
// 
// 			_pages[3].classList.add('out_top');
// 			_pages[3].classList.remove('in_top', 'in_down', 'out_down');
// 
// 			_pages[4].classList.add('in_top');
// 			_pages[4].classList.remove('out_top', 'in_down', 'out_down', 'hide');

      pageTop(index);

			for (i = 6; i < _food.length; i++) {
				if (work == 1) {
					_food[i].innerText = _Working[i - 6];
				} else {
					_food[i].innerText = _student[i - 6];
				}
			}
		}
	}

	_p4_dialog.onclick = function() {
		this.style.display='none';
		_p4_dialog.close();
	}

	//page05
	var _food = document.getElementsByClassName('food');
	var _clean = document.getElementById('clean');
	var _add = document.getElementById('add');
	var _equal = document.getElementById('equal');

	var _t1 = document.getElementById('p5_t1');
	var _t2 = document.getElementById('p5_t2');

	var _score = new Array();
	var _grade = 0;
	var isNum = 0;

	var _back = document.getElementById('p5_back');

	var _p5_dialog = document.getElementById('p5_dialog');
	var _p5_dialog_img = document.getElementById('p5_dialog_img');
	var _p5_dialog_name = document.getElementById('p5_dialog_name');
	var _p5_dialog_grade = document.getElementById('p5_dialog_grade');
	var _p5_dialog_result = document.getElementById('p5_dialog_result');


	for (var i = 0; i < _food.length; i++) {
		if (i < 6) {
			_food[i].value = 100;
		} else {
			_food[i].value = 50;
		}
		_food[i].isclick = 0;
		_food[i].onclick = function() {
			if (_score.length == 0) {

				this.style.backgroundColor = 'rgba(255,255,255,0.8)';
				this.isclick = 1;

				_score.push(this.value);
				_t1.innerText = this.value;
				_t2.style.opacity = 0;

				_add.style.animationPlayState = 'running';

				isNum = 1;
			} else {
				if (!isNum && _score.length < 3 && this.isclick == 0) {

					this.style.backgroundColor = 'rgba(255,255,255,0.8)';
					this.isclick = 1;

					_score.push(this.value);
					_t1.innerText += this.value;
					if (_score.length == 3) {

					} else {
						_add.style.animationPlayState = 'running';
					}

					isNum = 1;
					//			  console.log(_score);
				}
			}
		}
	}

	_add.onclick = function() {
		if (isNum == 1 && _score.length != 3) {
			_add.style.animationPlayState = 'paused';
			_t1.innerText += '+';
			isNum = 0;
		}
	}
	_equal.onclick = function() {
		if (_equal.innerText == '=') {
			if (isNum && _score.length == 3) {
				for (var i = 0; i < _score.length; i++) {
					_grade += parseInt(_score[i]);
				}
				_t1.innerText += '=' + _grade;
				_t2.style.opacity = 1;
				_t2.innerText = _grade;
				_equal.innerText = '查看健康值';
				_equal.style.fontSize = '1em';
			}
		} else {
			_p5_dialog.show();
			if (_grade > 250) {
				_p5_dialog_result.innerText = '结果：优';
				_p5_dialog_img.src = 'img_project1/p5_dialog_you.png';
			} else if (_grade > 199) {
				_p5_dialog_result.innerText = '结果：良';
				_p5_dialog_img.src = 'img_project1/p5_dialog_liang.png';
			} else {
				_p5_dialog_result.innerText = '结果：差';
				_p5_dialog_img.src = 'img_project1/p5_dialog_cha.png';
			}

			_p5_dialog_name.innerText = '名字：' + name;
			_p5_dialog_grade.innerText = '分数：' + _grade;

		}
	}

	_p5_dialog.onclick = function() {
		_p5_dialog.close();
	}

	_clean.onclick = function() {
		init();
	}

	_back.onclick = function() {
		pageDown(index);
		init();
	}


	function init() {
		_score = new Array();
		_grade = 0;

		for (var i = 0; i < _food.length; i++) {
			_food[i].style.backgroundColor = 'white';
			_food[i].isclick = 0;
		}

		_add.style.animationPlayState = 'paused';
		isNum = 0;
		_t1.innerText = '请点击按键';
		_t2.innerText = '开始计算';
		_t2.style.opacity = '1';
		_equal.innerText = '=';
		_equal.style.fontSize = '1.5em';
	}


}
