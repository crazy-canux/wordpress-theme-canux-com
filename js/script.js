$.fn.left_opacitys = function() {
	$(this).animate({
		opacity: "1",
		right: "0"
	}, 800, "easeOutSine")
};
$.fn.left_opacitys_no = function() {
	$(this).animate({
		opacity: "0",
		right: "-100px"
	}, 500, "easeOutSine")
};
$.fn.up_opacitys = function() {
	$(this).animate({
		opacity: "1",
		top: "0"
	}, 800, "easeOutSine")
};
$.fn.up_opacitys_no = function() {
	$(this).animate({
		opacity: "0",
		top: "-100px"
	}, 500, "easeOutSine")
};
$.extend({
	news_open: function() {
		$(".index_swipers").css({
			width: $("body").width()
		});
		$(".swiper-wrapper .up_down.swiper-slide-active").children(".swiper-slide_in").children(".down_pic").children("img").delay(500).animate({
			opacity: "1",
			top: "0"
		}, 1500, "easeOutCubic");
		$(".swiper-wrapper .up_down.swiper-slide-active").children(".swiper-slide_in").children(".up_text").children("#alpha").children("h3").delay(1500).up_opacitys();
		$(".swiper-wrapper .up_down.swiper-slide-active").children(".swiper-slide_in").children(".up_text").children("#alpha").children("p").delay(1500).up_opacitys();
		$(".swiper-wrapper .up_down.swiper-slide-active").children(".swiper-slide_in").children(".up_text").children(".btn").delay(1500).up_opacitys();
		$(".swiper-wrapper .up_down").not(".swiper-slide-active").children(".swiper-slide_in").children(".down_pic").children("img").animate({
			opacity: "0",
			top: "800px"
		}, 800, "easeOutSine");
		$(".swiper-wrapper .up_down").not(".swiper-slide-active").children(".swiper-slide_in").children(".up_text").children("#alpha").children("h3").up_opacitys_no();
		$(".swiper-wrapper .up_down").not(".swiper-slide-active").children(".swiper-slide_in").children(".up_text").children("#alpha").children("p").up_opacitys_no();
		$(".swiper-wrapper .up_down").not(".swiper-slide-active").children(".swiper-slide_in").children(".up_text").children(".btn").up_opacitys_no()
	}
});
$.fn.nav_poket = function() {
	if ($(window).scrollTop() >= $(this).offset().top - 650) {
		var a = 0;
		a += 200;
		$(this).children(".nav_poket_widgetss_in").children(".nav_poket_widgetss_title").children(".nav_poket_bottm").children("h2").delay(a + 100).animate({
			top: "0",
			opacity: "1"
		}, 800);
		$(this).children(".nav_poket_widgetss_in").children(".nav_poket_widgetss_title").children(".nav_poket_bottm").children("p").delay(a + 300).animate({
			top: "0",
			opacity: "1"
		}, 800);
		$(this).children(".nav_poket_widgetss_in").children(".nav_poket_widgetss_ul_out").children("#nav_poket_widgetss_ul").children("li").delay(a + 400).animate({
			left: "0",
			opacity: "1"
		}, 1000)
	}
};
$.fn.caseshow = function() {
	if ($(window).scrollTop() >= $(this).offset().top - 550) {
		var a = 0;
		a += 200;
		$(this).children(".caseshow_in").children(".cunst_title").delay(a + 100).animate({
			top: "0",
			opacity: "1"
		}, 1000);
		$(this).children(".caseshow_in").children("ul").children("li").delay(a + 300).animate({
			left: "0",
			opacity: "1"
		}, 800)
	}
};
$.fn.cunst = function() {
	if ($(window).scrollTop() >= $(this).offset().top - 650) {
		var a = 0;
		a += 200;
		$(this).children(".cunst_code").delay(a + 100).animate({
			right: "0",
			opacity: "1"
		}, 800);
		$(this).children(".cunst_text").delay(a + 100).animate({
			left: "0",
			opacity: "1"
		}, 800)
	}
};
$.fn.news = function() {
	if ($(window).scrollTop() >= $(this).offset().top - 650) {
		var a = 0;
		a += 200;
		$(this).children(".three_mode_go_mode").each(function() {
			a += 200;
			$(this).delay(a + 300).animate({
				left: "0",
				opacity: "1"
			}, 800)
		})
	}
};
$(document).ready(function() {
	$("#swiper_nav li .sub-menu").css({
		left: ($(".header_center").offset().left) + "px"
	});
	$("#swiper_nav li .sub-menu li a img").next("span").css({
		display: "none"
	});
	$(".kefu_d").stop().mouseenter(function() {
		$(this).children("div").fadeIn(300)
	});
	$(".kefu_d").stop().mouseleave(function() {
		$(this).children("div").fadeOut(300)
	});
	$("#homes").click(function() {
		if ($(this).hasClass("op")) {
			$(".kefu_d").not("#homes").fadeIn(300);
			$(this).removeClass("op")
		} else {
			$(".kefu_d").not("#homes").fadeOut(300);
			$(this).addClass("op")
		}
	});
	$(".severs_nav_ul li .sub-menu").append('<div class="jiao_severs_nav"></div>');
	$(".header_menu_ul li,.index_swipers,.severs_nav_ul li,.qie_designer a,.nav_poket_widgetss_in").hover(function() {
		$(this).children(".sub-menu,.index_next,.index_prve,.opens_designer").stop(true, true).fadeIn("200")
	}, function() {
		$(this).children(".sub-menu,.index_next,.index_prve,.opens_designer").stop(true, true).fadeOut("1000")
	});
	$(".cunst_code a").click(function() {
		$(this).prev("iframe,embed,video").fadeIn(500)
	});
	$(".buy_btn .btn").click(function() {
		$(".shop_form").fadeIn(500);
		var b = $(".shop_form").offset().top - 300;
		$("html,body").animate({
			scrollTop: b
		}, 1000)
	});
	$("#content_shop_btn").click(function() {
		$(this).addClass("cutyes");
		$("#comment_shop_btn").removeClass("cutyes");
		$("#comment_shop").fadeOut(300);
		$("#content_shop").fadeIn(300)
	});
	$("#comment_shop_btn").click(function() {
		$(this).addClass("cutyes");
		$("#content_shop_btn").removeClass("cutyes");
		$("#content_shop").fadeOut(300);
		$("#comment_shop").fadeIn(300)
	});
	$(".qhbtn_canuxtheme a").click(function() {
		var a = $(this).attr("rel");
		var b = $(a).offset().top - 120;
		$("html,body").animate({
			scrollTop: b
		}, 500);
		return false
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 200) {
			$(".header_down_out").addClass("header_down_out_fixed")
		} else {
			$(".header_down_out").removeClass("header_down_out_fixed")
		}
	});
	/*
	if ($("#footer_bottom_link .f_bq .banquan").length == 0) {
		$("body").remove();
		$("html").append("<p><a target='_blank'href=\"http://www.canuxcheng.com\">请勿删除版权信息！务必保留页脚css类.f_bq，方可显示正常。</a></p>")
	}
	$("#footer_bottom_link .f_bq .banquan").html(" | 技术支持：Canux Company");
	$("#footer_bottom_link .f_bq  .banquan").attr("href", "http://www.canuxcheng.com")
	*/
});
