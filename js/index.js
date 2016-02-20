/* https://github.com/farinspace/jquery.imgpreload */
if ("undefined" != typeof jQuery) { (function(a) {
	a.imgpreload = function(b, c) {
		c = a.extend({},
		a.fn.imgpreload.defaults, c instanceof Function ? {
			all: c
		}: c);
		if ("string" == typeof b) {
			b = new Array(b)
		}
		var d = new Array;
		a.each(b, function(e, f) {
			var g = new Image;
			var h = f;
			var i = g;
			if ("string" != typeof f) {
				h = a(f).attr("src");
				i = f
			}
			a(g).bind("load error", 
			function(e) {
				d.push(i);
				a.data(i, "loaded", "error" == e.type ? false: true);
				if (c.each instanceof Function) {
					c.each.call(i)
				}
				if (d.length >= b.length && c.all instanceof Function) {
					c.all.call(d)
				}
				a(this).unbind("load error")
			});
			g.src = h
		})
	};
	a.fn.imgpreload = function(b) {
		a.imgpreload(this, b);
		return this
	};
	a.fn.imgpreload.defaults = {
		each: null,
		all: null
	}
})(jQuery)}



$(window).load(function() {
	$([
	'./images/bg.jpg', 
	'./images/bg/1.png', 
	'./images/bg/2.png', 
	'./images/bg/3.png', 
	'./images/bg/4.png', 
	'./images/bg/5-1.png'
	]).imgpreload(function() {
		$("#overlay").fadeOut("slow");
	});



	$("#menu").css("padding-top", ($(window).height() - $("#menu").height()) / 2);

	if (window.location.hash) {
		var hash = window.location.hash;

		if (hash.indexOf("!") > 0) {
			var subhash = hash.substr(hash.indexOf("!") + 1);

			var lightbox = $("#lightbox");
			var element = $(this);

			$.get(subhash, 
			function(returnData) {
				$("#lightboxContent").html(returnData);
				$("#lightboxContent .nano").nanoScroller().scrollTop(0);

			});

			$("#lightbox").addClass("active").css("left", ($(window).outerWidth() - 970) / 2);

			$(".wrap").hide();


		} else {
			$('nav a[href="' + hash + '"]').click();

		}

	}


});



$(document).ready(function() {

	$("#menu ul li a").click(function(e) {
		$("#menu .hover").removeClass("hover");

	});

	$("a[href^='http:']:not([href*='" + window.location.host + "'][target='_blank'])").live('click', 
	function() {
		$(this).attr('target', '_blank');

	});

	$(".downloadBox a").click(function(e) {
		$(this).attr('target', '_blank');

	});

	$(window).resize(function() {
		$("#menu, #rightNav").css("padding-top", ($(window).height() - $("#menu").height()) / 2);

	});



	$.fn.scrollPath("getPath")
	.moveTo(1000, 0, {
		name: "home"
	})
	.lineTo(1000, 2250, {
		name: "kdo-jsme"
	})
	.lineTo(1000, 3250)
	.arc(1550, 3250, 550, -Math.PI, Math.PI / 2, true)
	.lineTo(2500, 3800, {
		name: "o-projektu",
		rotate: -Math.PI / 2
	})
	.arc(3550, 3800, 900, -Math.PI, Math.PI / 2, true)
	.lineTo(4500, 4700, {
		name: "novinky"
		
	})
	.arc(4500, 3800, 900, Math.PI / 2, 0, true)
	.lineTo(5400, 1350, {
		name: "kalendar",
		rotate: Math.PI / 2
	})
	.arc(5400, -50, 50,1.5*Math.PI, Math.PI,true)
	.lineTo(1000, 0, {
		rotate: 0
	});


	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({
		drawPath: false,
		wrapAround: true
	});

	$("nav > ul > li > a").each(function() {
		var target = $(this).attr("href").replace("#", "");

		$(this).click(function(e) {
			if (target != "home") {
				window.location.hash = '#' + target;

			} else {
				window.location.hash = '#';

			}

			if (!$(this).parent().hasClass("active")) {
				e.preventDefault();

				$("nav .active").removeClass("active");
				$(this).parent().addClass("active");
				$.fn.scrollPath("scrollTo", target, 2000, "easeInOutSine");

			} 

		});


	});





	(function($) {
		$("#menu ul > li").hover(function() {
			$(this).addClass("hover");

		},
		function() {
			$(this).removeClass("hover");

		});


	})(jQuery);



	// 圆环百分比
	drawCircle("canvas_ps",0.8);
	drawCircle("canvas_js",0.8);
	drawCircle("canvas_html",0.7);
	drawCircle("canvas_css",0.75);
	drawCircle("canvas_jq",0.9);
	drawCircle("canvas_sea",0.75);


	
	function drawCircle(id,per){
		var bg = document.getElementById(id);
		var ctx = bg.getContext('2d');
		var circ = Math.PI * 2;
		var quart = Math.PI / 2;
		var imd = null;
		var circ = Math.PI * 2;
		var quart = Math.PI / 2;

		ctx.beginPath();
		ctx.strokeStyle = '#2abce6';
		ctx.lineCap = 'square';
		ctx.closePath();
		ctx.fill();
		ctx.lineWidth = 15.0;

		imd = ctx.getImageData(0, 0, 240, 240);
		function draw(current){
			ctx.putImageData(imd, 0, 0);
			ctx.beginPath();
			ctx.arc(76, 76, 67, -(quart), ((circ) * current) - quart, false);
			ctx.stroke();
		}
		//draw(0.6);
		var t=0;
		var timer=null;
		function loadCanvas(now){
			timer = setInterval(function(){
				if(t>now){
					clearInterval(timer);
				}else{
					draw(t);
					t+=0.01;
				}
			},20);
		}
		loadCanvas(per);
		timer=null;
	}



	$(".kalendar .code").on({

		"mouseenter" : function(){
			if( !$(this).find(".hide").is(":animated") ){    
				$(this).find(".hide").slideDown();
			};
			
		},
		"mouseleave" : function(){
			if( !$(this).find(".hide").is(":animated") ){    
				$(this).find(".hide").slideUp();
			};
		}
		
	})


});