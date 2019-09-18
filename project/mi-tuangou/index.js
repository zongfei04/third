top1R()；


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
