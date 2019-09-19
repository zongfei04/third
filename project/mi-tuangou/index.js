top1R();
top2();
top5();
top6();
top7();
top8();
top9();
top10();
top11();
top12();

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
function top2(){
	var aTop2 = document.querySelector('.top2-del')
	var isShow = false;
	window.onscroll = function(){
		if(getScrollTop() >= 600){
			if(!isShow){
				animate(aTop2,'height',100);
				isShow = true;
			}
		}else{
			if(isShow){
				animate(aTop2,'height',0);
				isShow = false;
			}
		}
	}	
}
function top5(){
	var aLi = document.querySelectorAll('.top5 .top5-content .top5-d ul li')
	var aPl = document.querySelectorAll('.top5 .top5-content .top5-d ul li .top5-pl')
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aPl[j].style.height = '0px';
			}
			aPl[this.index].style.height = '50px';
		}
		aLi[i].onmouseleave = function(){
			aPl[this.index].style.height = '0px';
		}
	}
}
function top6(){
	var aLi = document.querySelectorAll('.top6 .top6-content .top6-d ul li')
	var aPl = document.querySelectorAll('.top6 .top6-content .top6-d ul li .top6-pl')
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aPl[j].style.height = '0px';
			}
			aPl[this.index].style.height = '50px';
		}
		aLi[i].onmouseleave = function(){
			aPl[this.index].style.height = '0px';
		}
	}
}
function top7(){
	var aLi = document.querySelectorAll('.top7 .top7-content .top7-d ul li')
	var aPl = document.querySelectorAll('.top7 .top7-content .top7-d ul li .top7-pl')
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aPl[j].style.height = '0px';
			}
			aPl[this.index].style.height = '50px';
		}
		aLi[i].onmouseleave = function(){
			aPl[this.index].style.height = '0px';
		}
	}
}
function top8(){
	var aLi = document.querySelectorAll('.top8 .top8-content .top8-d ul li')
	var aPl = document.querySelectorAll('.top8 .top8-content .top8-d ul li .top8-pl')
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aPl[j].style.height = '0px';
			}
			aPl[this.index].style.height = '50px';
		}
		aLi[i].onmouseleave = function(){
			aPl[this.index].style.height = '0px';
		}
	}
}
function top9(){
	var aLi = document.querySelectorAll('.top9 .top9-content .top9-d ul li')
	var aPl = document.querySelectorAll('.top9 .top9-content .top9-d ul li .top9-pl')
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aPl[j].style.height = '0px';
			}
			aPl[this.index].style.height = '50px';
		}
		aLi[i].onmouseleave = function(){
			aPl[this.index].style.height = '0px';
		}
	}
}
function top10(){
	var aLi = document.querySelectorAll('.top10 .top10-content .top10-d ul li')
	var aPl = document.querySelectorAll('.top10 .top10-content .top10-d ul li .top10-pl')
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aPl[j].style.height = '0px';
			}
			aPl[this.index].style.height = '50px';
		}
		aLi[i].onmouseleave = function(){
			aPl[this.index].style.height = '0px';
		}
	}
}
function top11(){
	var aLi = document.querySelectorAll('.top11 .top11-content .top11-d ul li')
	var aPl = document.querySelectorAll('.top11 .top11-content .top11-d ul li .top11-pl')
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aPl[j].style.height = '0px';
			}
			aPl[this.index].style.height = '50px';
		}
		aLi[i].onmouseleave = function(){
			aPl[this.index].style.height = '0px';
		}
	}
}
function top12(){
	var aLi = document.querySelectorAll('.top12 .top12-content .top12-d ul li')
	var aPl = document.querySelectorAll('.top12 .top12-content .top12-d ul li .top12-pl')
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aPl[j].style.height = '0px';
			}
			aPl[this.index].style.height = '50px';
		}
		aLi[i].onmouseleave = function(){
			aPl[this.index].style.height = '0px';
		}
	}
}
