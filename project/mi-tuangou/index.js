top1R();
top5();
top6();

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
function top5(){
	var aLi = document.querySelectorAll('.top5 .top5-content .top5-d ul li')
	var aPl = document.querySelectorAll('.top5 .top5-content .top5-d ul li .top5-pl')
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = i
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aPl[j].style.height = '0px';
			}
			aPl[this.index].style.height = '40px';
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
			aPl[this.index].style.height = '40px';
		}
	}
}
