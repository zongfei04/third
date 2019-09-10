top3L();
top1R();
top3R();
time();
top2M();
top5up();
top8R();

// var oTop2 = document.querySelector('.top2 .top2-r input')
// oTop2.onclick = function(){
// 	oTop2.style.borderColor = '#ff6700'
// }



//左菜单
function top3L(){
	var oTopul = document.querySelector('.top3-ul');
	var aLi1 = document.querySelectorAll('.top3-ul li');
	var oSon2 = document.querySelector('.top3-son2');
	for(i=0;i<aLi1.length;i++){
		aLi1[i].index = i;
		var handtime = 0;
		aLi1[i].onmouseenter = function(){
			clearTimeout(handtime);
			for(var j=0;j<aLi1.length;j++){
				aLi1[j].style.backgroundColor = 'rgba(0,0,0,0)'
			};
			this.style.backgroundColor = '#ff6700';
			oSon2.style.display = 'block';
			load3Data(this.index);
		}
		
		oTopul.onmouseleave = function(){
			for(var j=0;j<aLi1.length;j++){
				aLi1[j].style.backgroundColor = 'rgba(0,0,0,0)';
				
			}
			handtime = setTimeout(function(){
				oSon2.style.display = 'none';
			},500);
			
		}
		oSon2.onmouseenter = function(){
			clearTimeout(handtime);
			oSon2.style.display = 'block';
		}
		oSon2.onmouseleave = function(){
			handtime = setTimeout(function(){
				oSon2.style.display = 'none';
			},500);
		}
	}
	function load3Data(index){
		var data = aTop3data[index];
		var html = '<ul>';
		for(var i=0;i<data.length;i++){
			html += '<li>';
			html += 	'<a href="'+data[i].url+'">';
			html += 		'<img src="'+data[i].img+'" alt="">';
			html += 	'</a>';
			html += 	'<span class="top3-name">'+data[i].name+'</span>';
			html += '</li>';
		}
		html += '</ul>';
		oSon2.innerHTML = html;
	}
}
//购物车
function top1R(){
	var oCart = document.querySelector('.top1-r-shopping')
	var oBox = document.querySelector('.top1-cartbox')
	var oLoader = document.querySelector('.top1-cartbox #loader')
	var oSpan1 = document.querySelector('.top1-cartbox span')
	var timer1 = 0;

	oCart.onmouseenter = function(){
		clearTimeout(timer1);
		var timer1 = setTimeout(function(){
			oSpan1.style.display = 'block';
			oLoader.style.display = 'none';
		},500)
		oLoader.style.display = 'block';
		animation(oBox,{height:100},true);
	}
	oCart.onmouseleave = function(){
		animation(oBox,{height:0},true);
		clearTimeout(timer1);
		oSpan1.style.display = 'none';
		oLoader.style.display = 'none';
		
	}
}
//轮播图
function top3R(){
	new Carousel({
	id:'imgs',
	aImg:['images/carousel1.jpg','images/carousel2.jpg','images/carousel3.jpg','images/carousel4.jpg'],
	width:1226,
	height:460,
	autoPlayTime:3000
	})
}
//倒计时
function time(){
	
	function ps(num){
		return num<10 ? '0'+num : ''+num
	}
	var aTime = document.querySelectorAll('.top5 .top5-down-ul .top5-sp')
	var endTime = new Date('2019-09-05 17:00:00')
	var time01 = 0;
	clearInterval(time01);
	function timer01(){
		var allTime = parseInt((endTime.getTime()-Date.now())/1000);
		if(allTime<=0){
			allTime = 0;
			clearInterval(time01);
		}

		var iH = parseInt(allTime/3600);
		var iM = parseInt((allTime%3600)/60);
		var iS = (allTime%3600)%60;
		
		aTime[0].innerHTML = ps(iH);
		aTime[1].innerHTML = ps(iM);
		aTime[2].innerHTML = ps(iS);
	}
	time01 = setInterval(timer01,1000);
	timer01();
}
//top2下拉菜单
function top2M(){
	var oUl1 = document.querySelector('.top2-ul')
	var oUl2 = document.querySelector('.top2-ul-down')
	// var oLoader = document.querySelector('.top2-ul-down #loader')
	// var oDataBox = oUl2.querySelector('')
	var aLi1 = oUl1.children
	var handTime = 0;
	for(var i=0;i<aLi1.length-2;i++){
		aLi1[i].index = i;
		aLi1[i].onmouseenter = function(){
			oUl2.innerHTML = '<div id="loader"></div>'
			clearTimeout(handTime)
			animation(oUl2,{height:230},true);
			oUl2.style.borderTop = '1px solid #ccc';
			var index = this.index;
			setTimeout(function(){
				loadData(index);
			},500)
			
		}
		aLi1[i].onmouseleave = function(){
			handin();
		}
	}
	oUl2.onmouseenter = function(){
		clearTimeout(handTime)
		animation(oUl2,{height:230},true);
		oUl2.style.borderTop = '1px solid #ccc';
	}
	oUl2.onmouseleave = function(){
		handin();
	}
	// function handout(){
	// 	clearTimeout(handTime)
	// 	// oLoader.style.display = 'block';
	// 	animation(oUl2,{height:230},true);
	// 	oUl2.style.borderTop = '1px solid #ccc';
	// }
	function handin(){
		handTime = setTimeout(function(){
			animation(oUl2,{height:0},true,function(){
			oUl2.style.borderTop = '';
		})
		},500)
	}
	function loadData(index){
		var data = aTop2data[index]
		var html = '<ul>';
		for(var i=0;i<data.length;i++){
			// console.log(data[i])
			html += '<li>';
			html += 	'<div class="img-box">';
			html += 		'<a href="'+data[i].url+'">';
			html += 			'<img src="'+data[i].img+'" alt="">';
			html += 		'</a>';
			html += 	'</div>';
			html += 	'<p class="top2-name">'+data[i].name+'</p>';
			html += 	'<p class="top2-price">'+data[i].price+'</p>';
			html += '</li>';
		}
		



		html += '</ul>';
		oUl2.innerHTML = html
	}
}
//top5左右轮播图
function top5up(){
	var aSpan5 = document.querySelectorAll('.top5 .top5-up-r span');
	var oUl5 = document.querySelector('.top5-data .top5-down-ul-data');
	var aLi5 = oUl5.children;
	aSpan5[1].onclick = function(){
		oUl5.style.left = '-978px';
	}
	aSpan5[0].onclick = function(){
		oUl5.style.left = '0px';
	}
}
//选项卡部分
function top8R(){

	var oTop8 = document.querySelector('.top8 .top8-up .top8-up-r ul')
	var oTop8Down = document.querySelector('.top8 .top8-down .down-right .top8-data')
	loadData8(0);
	var aLi8 = oTop8.children;
	

	for(var i=0;i<aLi8.length;i++){
		aLi8[i].index = i;
		aLi8[i].onmouseenter = function(){
			for(var j=0;j<aLi8.length;j++){
				aLi8[j].style.borderBottom = '';
				aLi8[j].className = '';
			}
			this.className = 'active8';
			this.style.borderBottom = '2px solid #ff6700';
			loadData8(this.index);
		}
	}


	function loadData8(index){
		var data = aTop8data[index]
		var html = '';

		for(var i=0;i<data.length-1;i++){
			html += '<li class="top8-li">';
			if(data[i].flag){
				html += '	<span class="flag">'+data[i].flag+'</span>';
			} 
			if(data[i].flagJ){
				html += '	<span class="flag-jian">'+data[i].flagJ+'</span>';
			}
			if(data[i].flagN){
				html += '	<span class="flag-new">'+data[i].flagN+'</span>';
			}
			
			html += '	<a href="'+data[i].url+'">';
			html += '		<img src="'+data[i].img+'" alt="">';
			html += '		<p class="down-right-name">'+data[i].name+'</p>';
			html += '	</a>';
			html += '	<p class="top5-de down-right-de">'+data[i].des+'</p>';
			html += '	<p class="top5-jia down-right-jia"><span>'+data[i].price+'</span><del>'+data[i].del+'</del></p>';
			if(data[i].pl){
				html += '	<div class="pl">';
				html += '		<p class="pl-con">'+data[i].pl.content+'</p>';
				html += '		<p class="pl-na">来自于<span>'+data[i].pl.author+'</span>的评论</p>';
				html += '	</div>';
			}
			html += '</li>';
		}

		
		var lastData = data[data.length-1]
		html +='<li class="down-r-mix1">';
		html +='	<a href="'+lastData.top.url+'"><p class="name">'+lastData.top.name+'</p></a>';
		html +='	<p class="top5-jia"><span>'+lastData.top.price+'</span></p>';
		html +='	<a href="javascript:;"><img src="'+lastData.top.img+'" alt=""></a>';
		html +='</li>';
		html +='<li class="down-r-mix2">';
		html +='	<a href="'+lastData.bottom.url+'">';
		html +='		<p>'+lastData.bottom.name+'<br><span>'+lastData.bottom.price+'</span></p>';
		html +='		<i class="iconfont">'+lastData.bottom.ides+'</i>';
		html +='	</a>';
		html +='</li>';


		oTop8Down.innerHTML = html;
	}
}