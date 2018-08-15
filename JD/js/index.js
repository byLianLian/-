$(document).ready(function(){

	// 最上面活动
	$('.event i').click(function(){
		$('.event').css({display:"none"})
	})
	// 控制cart_right的显示方式
	var $cart_right = $('.cart_right');
	$('.cate_menu li').mouseenter(function(){	
		$(this).children('.cart_right').addClass('cate_display');
		if($(window).scrollTop()>251){
			cart_left = parseInt($('.fs_inner').css('marginLeft'));
			$cart_right.css({"position":"fixed","top":0,"left": cart_left+191+'px'});
		}
		else{
			$cart_right.css({"position":"absolute","top":0,"left":"191px" });
		}
	})
	$('.cate_menu li').mouseleave(function(){
		$(this).children('.cart_right').removeClass('cate_display');
	})

	// 搜索框固定
	$(window).scroll(function() {
		if($(document).scrollTop() >= 700) {
			$('.search').addClass('search_fix').slideDown(1000);
		} else {
			$('.search').removeClass('search_fix');
		}
	})

	
	// .news_last  hover的时候
	$('.news_last').hover(function(){
		$('.news_tab_active').css('transform','translateX(57px)');
	});
	$('.news_last').hover(function(){
		$('.mtci1').css('display','none');
	});
	$('.news_last').hover(function(){
		$('.mtci2').css('display','block');
	})
	// .news_first  hover的时候
	$('.news_first').hover(function(){
		$('.news_tab_active').css('transform','translateX(0px)');
	})
	$('.news_first').hover(function(){
		$('.mtci2').css('display','none');
	})
	$('.news_first').hover(function(){
		$('.mtci1').css('display','block');
	})



	// // 滑动的幻灯片
	// var $li = $('.slider_wrapper li');
	// var len = $li.length;
	// var $prev = $('.slider_control_prev');
	// var $next = $('.slider_control_next');
	// var $points = $('.slider_indicators i');
	// // 将要运动过来的li
	// var nowli = 0;
	// // 将要离开的li
	// var preli = 0;
	// var timer = null;
	// // 点击小点
	// $points.click(function(){
	// 	nowli = $(this).index();
	// 	if(nowli==preli){
	// 		return;
	// 	}
	// 	move();
	// 	$(this).addClass('slider_indicators_btn_active').siblings().removeClass('slider_indicators_btn_active');
	// })
	// $li.not(':first').css({left:'590px'});
	// // 点向前
	// $prev.click(function(){
	// 	nowli--;
	// 	move();
	// 	$points.eq(nowli).addClass('slider_indicators_btn_active').siblings().removeClass('slider_indicators_btn_active');
	// })
	// // 点向后
	// $next.click(function(){
	// 	nowli++;
	// 	move();
	// 	$points.eq(nowli).addClass('slider_indicators_btn_active').siblings().removeClass('slider_indicators_btn_active');
	// })
	// // 自动播放
	// function autoplay(){
	// 	nowli++;
	// 	move();
	// 	$points.eq(nowli).addClass('slider_indicators_btn_active').siblings().removeClass('slider_indicators_btn_active');
	// }
	// timer = setInterval(autoplay,4000);
	// $('.slider_list').mouseenter(function(){
	// 	clearInterval(timer);
	// })
	// $('.slider_list').mouseleave(function(){
	// 	timer = setInterval(autoplay,4000);
	// })
	// // 控制怎么动
	// function move(){
	// 	if(nowli>len-1){
	// 		nowli = 0;
	// 		preli = len-1;
	// 		$li.eq(nowli).css({left:'590px'});
	// 		$li.eq(preli).stop().animate({left:'-590px'});
	// 		$li.eq(nowli).stop().animate({left:'0px'});
	// 		preli = nowli;
	// 		return;
	// 	}

	// 	if(nowli<0){
	// 		nowli = len-1;
	// 		preli = 0;
	// 		$li.eq(nowli).css({left:'-590px'});
	// 		$li.eq(preli).stop().animate({left:'590px'});
	// 		$li.eq(nowli).stop().animate({left:'0px'});
	// 		preli = nowli;
	// 		return;
	// 	}

	// 	if (nowli>preli){
	// 		$li.eq(nowli).css({left:'590px'});
	// 		$li.eq(preli).stop().animate({left:'-590px'});
	// 	}
	// 	else{
	// 		$li.eq(nowli).css({left:'-590px'});
	// 		$li.eq(preli).stop().animate({left:'590px'});
	// 	}
	// 	$li.eq(nowli).stop().animate({left:'0px'});
	// 	preli = nowli;
	// }


	// 渐隐的幻灯片
	var $li = $('.fs .slider_wrapper li');
	var len = $li.length;
	var $prev = $('.fs .fs_col2 .slider .slider_control_prev');
	var $next = $('.fs .fs_col2 .slider .slider_control_next');
	var $points = $('.fs .slider_indicators i');
	// 将要运动过来的li
	var nowli = 0;
	// 将要离开的li
	var preli = 0;
	var timer = null;
	// 点击小点
	$points.click(function(){
		nowli = $(this).index();
		if(nowli==preli){
			return;
		}
		move();
		$(this).addClass('slider_indicators_btn_active').siblings().removeClass('slider_indicators_btn_active');
	})
	
	// 点向前
	$prev.click(function(){
		nowli--;
		move();
		$points.eq(nowli).addClass('slider_indicators_btn_active').siblings().removeClass('slider_indicators_btn_active');
	})
	// 点向后
	$next.click(function(){
		nowli++;
		move();
		$points.eq(nowli).addClass('slider_indicators_btn_active').siblings().removeClass('slider_indicators_btn_active');
	})
	// 自动播放
	function autoplay(){
		nowli++;
		move();
		$points.eq(nowli).addClass('slider_indicators_btn_active').siblings().removeClass('slider_indicators_btn_active');
	}
	timer = setInterval(autoplay,4000);
	$('.slider_list').mouseenter(function(){
		clearInterval(timer);
	})
	$('.slider_list').mouseleave(function(){
		timer = setInterval(autoplay,4000);
	})
	// 控制怎么动
	function move(){
		if(nowli>len-1){
			nowli = 0;
			preli = len-1;
			$li.eq(preli).stop().animate({opacity:0});
			$li.eq(nowli).stop().animate({opacity:1});
			preli = nowli;
			return;
		}

		if(nowli<0){
			nowli = len-1;
			preli = 0;
			$li.eq(preli).stop().animate({opacity:0});
			$li.eq(nowli).stop().animate({opacity:1});
			preli = nowli;
			return;
		}

		if (nowli>preli){
			$li.eq(preli).stop().animate({opacity:0});
		}
		else{
			$li.eq(preli).stop().animate({opacity:0});
		}
		$li.eq(nowli).stop().animate({opacity:1});
		preli = nowli;
	}




	// 话费机票
	$('.service_frame').mouseenter(function(){		
		$(this).addClass('service_frame_on').siblings().removeClass('service_frame_on');
		$('.service_pop_item').eq($(this).index()).addClass('pop_show').siblings().removeClass('pop_show');
		$('.service').addClass('service_expand');
	})		

	$('.service_pop i').click(function(){
		$('.service').removeClass('service_expand');
	})




	// 秒杀倒计时
	var s = parseInt(7200);
	var sk_timer = null;
	var day=0, hour=0,minute=0,second=0;
	function cal(){
		day = Math.floor(s/(24*60*60));
		hour = Math.floor(s/(60*60))-day*24;
		minute = Math.floor(s/60)-day*24*60-hour*60;
		second = Math.floor(s)-day*24*60*60-hour*60*60-minute*60;

		if(hour<=9){hour='0'+hour};
		if(minute<=9){minute='0'+minute};
		if(second<=9){second='0'+second};

		$('.cd_hour .cd_item_txt').html(hour);
		$('.cd_minute .cd_item_txt').html(minute);
		$('.cd_second .cd_item_txt').html(second);

		s--;
		if(s==0){
			s=7200;
		}
	}
	
	sk_timer = setInterval(cal,1000)





	// 秒杀幻灯片
	
	var $sk_part = $('.sk_list .sk_part');
	sk_len = $sk_part.length;
	$sk_part.not(':first').css({left:'800px'})
	var nowpart = 0;
	var prepart = 0;
	
	$('.sk_list .slider_control_next').click(function(){
		nowpart++;
		sk_move();
	})
	$('.sk_list .slider_control_prev').click(function(){
		nowpart--;
		sk_move();
	})
	function sk_move(){
		if(nowpart>sk_len-1){
			nowpart = 0;
			prepart = sk_len-1;
			$sk_part.eq(nowpart).css({left:'800px'});
			$sk_part.eq(prepart).stop().animate({left:'-800px'});
			$sk_part.eq(nowpart).stop().animate({left:'0px'});
			prepart = nowpart;
			return;
		}
		if(nowpart<0){
			nowpart = sk_len-1;
			prepart = 0;
			$sk_part.eq(nowpart).css({left:'-800px'});
			$sk_part.eq(prepart).stop().animate({left:'800px'});
			$sk_part.eq(nowpart).stop().animate({left:'0px'});
			prepart = nowpart;
			return;
		}
		if(nowpart>prepart){
			$sk_part.eq(nowpart).css({left:'800px'});
			$sk_part.eq(prepart).stop().animate({left:'-800px'});
		}
		else{
			$sk_part.eq(nowpart).css({left:'-800px'});
			$sk_part.eq(prepart).stop().animate({left:'800px'});
		}
		$sk_part.eq(nowpart).stop().animate({left:'0px'});
		prepart = nowpart;
	}

	// 秒杀右边小幻灯片
	var $chn_link = $('.sk_chn .sk_chn_link');
	var chn_len = $chn_link.length;
	var $chn_btn = $('.sk_chn_indicators_btn');
	var nowsk = 0;
	var presk = 0;
	var chn_timer = null;


	$chn_btn.mouseenter(function(){
		nowsk = $(this).index();
		chn_move();
		$(this).addClass('sk_chn_indicators_btn_active').siblings().removeClass('sk_chn_indicators_btn_active');
	})
	function chn_move(){
		if(nowsk==1){
			$chn_link.eq(0).animate({left:'-180px'});
			$chn_link.eq(1).animate({left:'0px'});
		}
		else{
			$chn_link.eq(1).animate({left:'180px'});
			$chn_link.eq(0).animate({left:'0px'});
		}
	}
	
	// 排行榜左边
	$('.corechn1 .tab_head_item').hover(function(){
		$(this).addClass('tab_head_item_active').siblings().removeClass('tab_head_item_active');
		$('.corechn1 .tab_body .tap_wrapper').eq($(this).index()).addClass('tap_show').siblings().removeClass('tap_show');
		top_move();

	})
	function top_move(){
		$('.tap_show .tab_slider_indicators_btn').mouseenter(function(){
			$(this).addClass('tab_slider_indicators_btn_active').siblings().removeClass('tab_slider_indicators_btn_active');
			var index = $(this).index();
			if(index==1){
				$('.tap_show .top_slider_item').eq(0).stop().animate({left:'-350px'});
				$('.tap_show .top_slider_item').eq(1).stop().animate({left:'0px'});
			}
			else{
				$('.tap_show .top_slider_item').eq(1).stop().animate({left:'350px'});
				$('.tap_show .top_slider_item').eq(0).stop().animate({left:'0px'});

			}
		})
	}
	top_move();

		
	

	// 排行榜中间
	var $daily_lk = $('.corechn1_daily .daily_slider_wrapper .daily_lk');
	var daily_len = $daily_lk.length;
	var $daily_prev = $('.corechn1_daily .corechn1_box_bd .slider_control_prev');
	var $daily_next = $('.corechn1_daily .corechn1_box_bd .slider_control_next');
	var $daily_points = $('.corechn1_daily .daily_slider .tab_slider_indicators_btn');
	var pre_daily = 0;
	var now_daily = 0;

	$daily_lk.not(':first').css({left:'350px'});
	$daily_next.click(function(){
		now_daily++;
		daily_move();
		$daily_points.eq(now_daily).addClass('tab_slider_indicators_btn_active').siblings().removeClass('tab_slider_indicators_btn_active');
	})
	$daily_prev.click(function(){
		now_daily--;
		daily_move();
		$daily_points.eq(now_daily).addClass('tab_slider_indicators_btn_active').siblings().removeClass('tab_slider_indicators_btn_active');
	})
	$daily_points.mouseenter(function(){
		now_daily = $(this).index();
		if(now_daily==pre_daily){
			return;
		}
		daily_move();
		$(this).addClass('tab_slider_indicators_btn_active').siblings().removeClass('tab_slider_indicators_btn_active');
	})
	function daily_move(){
		if(now_daily>daily_len-1){
			now_daily = 0;
			pre_daily = daily_len-1;
			$daily_lk.eq(now_daily).css({left:'350px'});
			$daily_lk.eq(pre_daily).stop().animate({left:'-350px'});
			$daily_lk.eq(now_daily).stop().animate({left:'0px'});
			pre_daily = now_daily;
			return;
		}
		if(now_daily<0){
			now_daily = daily_len-1;
			pre_daily = 0;
			$daily_lk.eq(now_daily).css({left:'-350px'});
			$daily_lk.eq(pre_daily).stop().animate({left:'350px'});
			$daily_lk.eq(now_daily).stop().animate({left:'0px'});
			pre_daily = now_daily;
			return;
		}
		if(now_daily>pre_daily){
			$daily_lk.eq(now_daily).css({left:'350px'});
			$daily_lk.eq(pre_daily).stop().animate({left:'-350px'});
		}
		else{
			$daily_lk.eq(now_daily).css({left:'-350px'});
			$daily_lk.eq(pre_daily).stop().animate({left:'350px'});
		}
		$daily_lk.eq(now_daily).stop().animate({left:'0px'});
		pre_daily = now_daily;
	}
	// 排行榜右边
	var $coupon_item_list = $('.corechn1_last .coupon_item_list');
	var coupon_len = $coupon_item_list.length;
	var $coupon_points = $('.corechn1_last .coupon_indicators_btn');
	$coupon_item_list.eq(1).css({left:'350px'})
	$coupon_points.mouseenter(function(){
		var coupon_index = $(this).index()
		if(coupon_index==1){			
			$coupon_item_list.eq(0).animate({left:'-350px'})
			$coupon_item_list.eq(1).animate({left:'0px'})
		}
		else{
			$coupon_item_list.eq(1).animate({left:'350px'})
			$coupon_item_list.eq(0).animate({left:'0px'})
		}
		$(this).addClass('coupon_indicators_btn_active').siblings().removeClass('coupon_indicators_btn_active');
	})

	//mime幻灯片
	var $mime_item = $('.corechn2 .mime_box_bd .mime_item');
	var mime_len = $mime_item.length;
	var $mime_prev = $('.corechn2 .mime_box_bd .slider_control_prev');
	var $mime_next = $('.corechn2 .mime_box_bd .slider_control_next');
	var $mime_points = $('.corechn2 .mime_box_bd .mime_indicators_btn');

	pre_mime = 0;
	now_mime = 0;
	mime_timer = null;
	$mime_item.not(':first').css({left:'350px'});

	$mime_next.click(function(){
		now_mime++;
		mime_move();
		$mime_points.eq(now_mime).addClass('mime_indicators_btn_active').siblings().removeClass('mime_indicators_btn_active');
	})
	$mime_prev.click(function(){
		now_mime--;
		mime_move();
		$mime_points.eq(now_mime).addClass('mime_indicators_btn_active').siblings().removeClass('mime_indicators_btn_active');
	})
	$mime_points.mouseenter(function(){
		now_mime = $(this).index();
		if(now_mime==pre_mime){
			return;
		}
		mime_move();
		$(this).addClass('mime_indicators_btn_active').siblings().removeClass('mime_indicators_btn_active');
	})
	function mime_move(){
		if(now_mime>mime_len-1){
			now_mime = 0;
			pre_mime = mime_len-1;
			$mime_item.eq(now_mime).css({left:'350px'});
			$mime_item.eq(pre_mime).stop().animate({left:'-350px'});
			$mime_item.eq(now_mime).stop().animate({left:'0px'});
			pre_mime = now_mime;
			return;
		}
		if(now_mime<0){
			now_mime = mime_len-1;
			pre_mime = 0;
			$mime_item.eq(now_mime).css({left:'-350px'});
			$mime_item.eq(pre_mime).stop().animate({left:'350px'});
			$mime_item.eq(now_mime).stop().animate({left:'0px'});
			pre_mime = now_mime;
			return;
		}
		if(now_mime>pre_mime){
			$mime_item.eq(now_mime).css({left:'350px'});
			$mime_item.eq(pre_mime).stop().animate({left:'-350px'});
		}else{
			$mime_item.eq(now_mime).css({left:'-350px'});
			$mime_item.eq(pre_mime).stop().animate({left:'350px'});
		}
		$mime_item.eq(now_mime).stop().animate({left:'0px'});
		pre_mime = now_mime;
	}
	function mime_autoplay(){
		now_mime++;
		mime_move();
		$mime_points.eq(now_mime).addClass('mime_indicators_btn_active').siblings().removeClass('mime_indicators_btn_active');
	}

	mime_timer = setInterval(mime_autoplay,3000);
	$('.mime_slider_list').mouseenter(function(){
		clearInterval(mime_timer);
	})
	$('mime_slider_list').mouseleave(function(){
		mime_timer = setInterval(mime_autoplay,3000);
	})


	// special幻灯片
	var time=new Date();
	var $special_prev = $('.special .slider_control_prev');
	var $special_next = $('.special .slider_control_next');
	var $special_points = $('.special_indicators_btn');
	
	$special_points.mouseover(function(){
		$(this).addClass('special_indicators_btn_active').siblings().removeClass('special_indicators_btn_active');
		special_index = $(this).index()+1;
		$('.special_slider_wrapper').stop().animate({"marginLeft":-1190*special_index+"px"},500);
		console.log($(window).scrollTop());
	})
	$special_next.click(function(){
		if(new Date()-time>500){
			time=new Date();
			i = $(this).nextAll().find('.special_indicators_btn_active').index();
			left = parseInt($('.special_slider_wrapper').css('marginLeft'));
			i++;
			if(i==4){
				i=0;
			}
			$special_points.eq(i).addClass('special_indicators_btn_active').siblings().removeClass('special_indicators_btn_active');
			$('.special_slider_wrapper').stop().animate({"marginLeft":-1190+left+"px"},500,function(){
				left = parseInt($('.special_slider_wrapper').css('marginLeft'));
				if(left<=-5950){
					$('.special_slider_wrapper').css({'marginLeft':'-1190px'});
				}
			})
		}
	})
	$special_prev.click(function(){
		if(new Date()-time>500){
			time=new Date();
			i = $(this).nextAll().find('.special_indicators_btn_active').index();
			left = parseInt($('.special_slider_wrapper').css('marginLeft'));
			i--;
			if(i==-1){
				i=3;
			}
			$special_points.eq(i).addClass('special_indicators_btn_active').siblings().removeClass('special_indicators_btn_active');
			$('.special_slider_wrapper').stop().animate({"marginLeft":1190+left+"px"},500,function(){
				left = parseInt($('.special_slider_wrapper').css('marginLeft'));
				if(left>=0){
					$('.special_slider_wrapper').css({'marginLeft':'-4760px'});
				}
			})
		}
	})



	

})