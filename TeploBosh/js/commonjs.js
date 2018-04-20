jQuery(document).ready(function($){
	$(".bxslider, .bx-wrapper .bx-prev, .bx-wrapper .bx-next").mouseenter(function(){$(".bx-wrapper .bx-prev").css({"background-position":"0 0"});$(".bx-wrapper .bx-next").css({"background-position":"-43px 0"});})
	$(".bxslider, .bx-wrapper .bx-prev, .bx-wrapper .bx-next").mouseleave(function(){$(".bx-wrapper .bx-prev").css({"background-position":"0 -35px"});$(".bx-wrapper .bx-next").css({"background-position":"-43px -35px"});})
	$(".menu-header a, .menu-footer a, .upper-btn a").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},900,function(){window.location.hash=hash;});}});$(".otherdata-header .butn").click(function(event){$("#order_call").css({"display":"block"});});$(".imgcontainer .close").click(function(event){$("#order_call").css({"display":"none"});$("#send_email").css({"display":"none"});});$(".contaktus-footer .butn").click(function(event){$("#send_email").css({"display":"block"});});var modalPhone=document.getElementById('order_call');var modalEmail=document.getElementById('send_email');window.onclick=function(event){if(event.target==modalPhone){modalPhone.style.display="none";}if(event.target==modalEmail){modalEmail.style.display="none";}}
	$(window).scroll(function(){$(".upper-btn").each(function(){var pos=$(this).offset().top;var winTop=$(window).scrollTop();if(pos<winTop+700){$(this).css({"position":"fixed","display":"block","right":"1%","bottom":"1%","z-index":"999"});}});$(".our-service-icon, .why-we-icon").each(function(){var pos=$(this).offset().top;var winTop=$(window).scrollTop();if(pos>winTop+550){$(this).addClass("iconrun");}});$(".slip_down").each(function(){var pos=$(this).offset().top;var winTop=$(window).scrollTop();if(pos<winTop+550){$(this).addClass("fadeInDown");}});$(".slip_left").each(function(){var pos=$(this).offset().top;var winTop=$(window).scrollTop();if(pos<winTop+550){$(this).addClass("fadeInLeft");}});$(".slip_InY").each(function(){var pos=$(this).offset().top;var winTop=$(window).scrollTop();if(pos<winTop+550){$(this).addClass("flipsInY");}});});
	$("#call_order").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Р’Р°С€Рµ РїРёСЃСЊРјРѕ РѕС‚РїСЂР°РІР»РµРЅРѕ!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
$("#email_send").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Р’Р°С€Рµ РїРёСЃСЊРјРѕ РѕС‚РїСЂР°РІР»РµРЅРѕ!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	$("#order_settlement").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Р’Р°С€Рµ РїРёСЃСЊРјРѕ РѕС‚РїСЂР°РІР»РµРЅРѕ!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	}); 
	$('.our-service-boxs').find('.our-service-projecting').on('click', function() {
		var url = "designing";
		$(location).attr('href',url);
	}) 
});