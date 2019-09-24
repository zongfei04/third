
cart();
reserch();
shouye1();
shouye2();
phone();
guanfang();
dress();
huxi();
fuwu();
handleCart();
mouth();
fix();
handleFlash();
//购物车交互功能
//1获取元素
	function cart(){
		var oTopShop = document.querySelector('.top .top-shop');
		var oShopBottom = document.querySelector('.top .top-shop .shop-bottom');
		var hideTime = 0;
		//2绑定事件
		oTopShop.onmouseenter = function(){
			oShopBottom.style.display = 'block';
			animation(oShopBottom,{opacity:100})
		}
		oTopShop.onmouseleave = function(){
			//oShopBottom.style.display = 'none';
			handleHide();
		}
		oShopBottom.onmouseenter = function(){
			clearTimeout(hideTime);
		}
		oShopBottom.onmouseleave = function(){
			handleHide();
		}
		function handleHide(){
			hideTime = setTimeout(function(){
				animation(oShopBottom,{opacity:0},true,function(){
					oShopBottom.style.display = 'none';
				})
			},500)
		}
	}
	//搜索框点击事件
	function reserch(){
	 	var oTxt = document.getElementById('txt');
	 	var oSearchList = document.querySelector('.header .head-right .search-list')
	 	var oReachRight = document.querySelector('.head-right .reach-right');
	 	

	 	oTxt.onfocus = function(){
	 		oSearchList.style.display = 'block';
	 		oReachRight.style.display = 'none';
	 		oTxt.placeholder="请输入您搜索的商品";

	 	}
	 	oTxt.onblur = function(){
	 		oSearchList.style.display = 'none';
	 		oReachRight.style.display = 'block';
	 		oTxt.placeholder="";
	 	}
	} 
    //首页下拉列表的实现
    function shouye1(){
    	var oOne = document.querySelector('.one');
    	var oHeadLeftContent = document.querySelector('.header .head-left-content')
    	//console.log(oHeadLeftContent);

    	oOne.onmouseenter = function(){
    		oHeadLeftContent.style.display = 'block';
    	}
    	oHeadLeftContent.onmouseenter = function(){
    		oHeadLeftContent.style.display = 'block';
    	}
    	oOne.onmouseleave = function(){
    		oHeadLeftContent.style.display = 'none';
    	}
    	oHeadLeftContent.onmouseleave = function(){
    		oHeadLeftContent.style.display = 'none';
    	}
    }
    function shouye2(){
        var oOne = document.querySelector('.nav .one');
        var oHeadLeftContent = document.querySelector('.nav .head-left-content')
        console.log(oHeadLeftContent);

        oOne.onmouseenter = function(){
            oHeadLeftContent.style.display = 'block';
        }
        oHeadLeftContent.onmouseenter = function(){
            oHeadLeftContent.style.display = 'block';
        }
        oOne.onmouseleave = function(){
            oHeadLeftContent.style.display = 'none';
        }
        oHeadLeftContent.onmouseleave = function(){
            oHeadLeftContent.style.display = 'none';
        }
    }
    // 手机下拉列表的实现
    function phone(){
    	var oTwo = document.querySelector('.two');
    	var oHeadLeftContent1 = document.querySelector('.header .head-left-content1')
    	//console.log(oHeadLeftContent1);
    	//console.log(oTwo);

    	oTwo.onmouseenter = function(){
    		oHeadLeftContent1.style.display = 'block';
    	}
    	oHeadLeftContent1.onmouseenter = function(){
    		oHeadLeftContent1.style.display = 'block';
    	}
    	oTwo.onmouseleave = function(){
    		oHeadLeftContent1.style.display = 'none';
    	}
    	oHeadLeftContent1.onmouseleave = function(){
    		oHeadLeftContent1.style.display = 'none';
    	}	
    }
    // 官方配件下拉列表的实现
    function guanfang(){
    	var oThree = document.querySelector('.three');
    	var oHeadLeftContent2 = document.querySelector('.header .head-left-content2')
    	// console.log(oHeadLeftContent2);
    	// console.log(oThree);
    	
    	oThree.onmouseenter = function(){
    		oHeadLeftContent2.style.display = 'block';
    	}
    	oHeadLeftContent2.onmouseenter = function(){
    		oHeadLeftContent2.style.display = 'block';
    	}
    	oThree.onmouseleave = function(){
    		oHeadLeftContent2.style.display = 'none';
    	}
    	oHeadLeftContent2.onmouseleave = function(){
    		oHeadLeftContent2.style.display = 'none';
    	} 		
    }
    //服饰箱包下拉列表的实现
    function dress(){
    	var oFour = document.querySelector('.four');
    	var oHeadLeftContent3 = document.querySelector('.header .head-left-content3')
    	
    	oFour.onmouseenter = function(){
    		oHeadLeftContent3.style.display = 'block';
    	}
    	oHeadLeftContent3.onmouseenter = function(){
    		oHeadLeftContent3.style.display = 'block';
    	}
    	oFour.onmouseleave = function(){
    		oHeadLeftContent3.style.display = 'none';
    	}
    	oHeadLeftContent3.onmouseleave = function(){
    		oHeadLeftContent3.style.display = 'none';
    	} 		
    }
    //畅呼吸下拉列表的实现
    function huxi(){
    	var oFive = document.querySelector('.five');
    	var oHeadLeftContent4 = document.querySelector('.header .head-left-content4')
    	// console.log(oHeadLeftContent4);
    	// console.log(oFive);
    	
    	oFive.onmouseenter = function(){
    		oHeadLeftContent4.style.display = 'block';
    	}
    	oHeadLeftContent4.onmouseenter = function(){
    		oHeadLeftContent4.style.display = 'block';
    	}
    	oFive.onmouseleave = function(){
    		oHeadLeftContent4.style.display = 'none';
    	}
    	oHeadLeftContent4.onmouseleave = function(){
    		oHeadLeftContent4.style.display = 'none';
    	} 	
    }
    // 服务下拉列表的实现
    function fuwu(){
    	
    	var oSix = document.querySelector('.six');
    	var oHeadLeftContent5 = document.querySelector('.header .head-left-content5')
    	// console.log(oHeadLeftContent5);
    	// console.log(oSix);
    	
    	oSix.onmouseenter = function(){
    		oHeadLeftContent5.style.display = 'block';
    	}
    	oHeadLeftContent5.onmouseenter = function(){
    		oHeadLeftContent5.style.display = 'block';
    	}
    	oSix.onmouseleave = function(){
    		oHeadLeftContent5.style.display = 'none';
    	}
    	oHeadLeftContent5.onmouseleave = function(){
    		oHeadLeftContent5.style.display = 'none';
    	} 	
    }
    // 轮播图的实现
    function handleCart(){
        new Carousel({
        id:'carsouel',
        aImg:['images/carsouel.png','images/carsouel1.png','images/carsouel2.png'],
        width:1226,
        height:498,
        autoPlayTime:1000
        })
    }
    //处理滑动部分
    
    function handleFlash(){
        var oSpan = document.querySelectorAll('.shopping .more span');
        var oFlasBox = document.querySelector('.shopping .cart1');
        var oProduct = document.querySelector('.shopping .cart1 .hd-list');
       oSpan[0].onclick = function(){
            oProduct.style.marginLeft = '0px';
       }
        oSpan[1].onclick = function(){
            oProduct.style.marginLeft = '-1216px';
       }
    }
    
    
    // 查看详情处理
    function mouth(){
        var aLook = document.querySelectorAll('.look');
        var aHdItem = document.querySelectorAll('.hd-item');
        for(var i = 0;i<aHdItem.length;i++){ 
            aHdItem[i].index = i;      
            aHdItem[i].onmouseenter = function(){ 
                for(var j = 0;j<aHdItem.length;j++){
                    aLook[j].style.display = 'none';
                }
               aLook[this.index].style.display = 'block';
            }
            aHdItem[i].onmouseleave = function(){
                aLook[this.index].style.display = 'none';
            }
        }
    }

    // 顶部固定
    function fix(){
        var oNav = document.getElementById('nav');
        var isShow = false;       
        window.onscroll = function(){
            if(getScrollTop() >= 45){
                if(!isShow){
                   animate(oNav,'height',74);
                   isShow = true; 
                } 
            }
            else{
                if(isShow){
                    animate(oNav,'height',0)
                    isShow = false;
                }   
            } 
        }    
    }
    

