jQuery(document).ready(function($){

	$(".bxslider, .bx-wrapper .bx-prev, .bx-wrapper .bx-next").mouseenter(function(){$(".bx-wrapper .bx-prev").css({"background-position":"0 0"});$(".bx-wrapper .bx-next").css({"background-position":"-43px 0"});})
	$(".bxslider, .bx-wrapper .bx-prev, .bx-wrapper .bx-next").mouseleave(function(){$(".bx-wrapper .bx-prev").css({"background-position":"0 -35px"});$(".bx-wrapper .bx-next").css({"background-position":"-43px -35px"});})
	$(".menu-header a, .menu-footer a, .upper-btn a").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},900,function(){window.location.hash=hash;});}});$(".otherdata-header .butn").click(function(event){$("#order_call").css({"display":"block"});});$(".imgcontainer .close").click(function(event){$("#order_call").css({"display":"none"});$("#send_email").css({"display":"none"});});$(".contaktus-footer .butn").click(function(event){$("#send_email").css({"display":"block"});});var modalPhone=document.getElementById('order_call');var modalEmail=document.getElementById('send_email');window.onclick=function(event){if(event.target==modalPhone){modalPhone.style.display="none";}if(event.target==modalEmail){modalEmail.style.display="none";}}
	$(window).scroll(function(){$(".upper-btn").each(function(){var pos=$(this).offset().top;var winTop=$(window).scrollTop();if(pos<winTop+700){$(this).css({"position":"fixed","display":"block","right":"1%","bottom":"1%","z-index":"999"});}});$(".our-service-icon, .why-we-icon").each(function(){var pos=$(this).offset().top;var winTop=$(window).scrollTop();if(pos>winTop+550){$(this).addClass("iconrun");}});$(".slip_down").each(function(){var pos=$(this).offset().top;var winTop=$(window).scrollTop();if(pos<winTop+550){$(this).addClass("fadeInDown");}});$(".slip_left").each(function(){var pos=$(this).offset().top;var winTop=$(window).scrollTop();if(pos<winTop+550){$(this).addClass("fadeInLeft");}});$(".slip_InY").each(function(){var pos=$(this).offset().top;var winTop=$(window).scrollTop();if(pos<winTop+550){$(this).addClass("flipsInY");}});});
	
	// js для bxslider
	jQuery('.bxslider').bxSlider({
    auto: true,
    pager: true,
    autoHover: true,
    pause: 6000
  });
  jQuery('.bxslider2').bxSlider({
    auto: true,
    pager: true,
    autoHover: true,
    pause: 6000
  });

  // js для fancybox
  $('[data-fancybox="images"]').fancybox({
      transitionEffect: "fade"
    }); 

	// js для перехода на страницы

	$('.our-service-boxs').on('click', '.our-service-projecting', function() {
		var url = "designing";
		$(location).attr('href',url);
	}) 
	$('.our-service-boxs').on('click', '.our-service-instalation', function() {
		var url = "installation";
		$(location).attr('href',url);
	})
	$('.our-service-boxs').on('click', '.our-service-servis', function() {
		var url = "services";
		$(location).attr('href',url);
	})

	// js для маски телефонных полей
	$('#numphone_required').mask("+38(099) 999-99-99");
	$('#ctab_form_tel').mask("+38(099) 999-99-99");

	// js для валидации форм	
	$('#call_order').validate({
	rules: {
	  name: {
	    required: true,
	    minlength: 2
	  },
	  phone: {
	    required: true,
	  }
	},
	messages: {
	  name: {
	    required: "Укажите ваше имя!",
	    minlength: "Минимум 2 символа!"

	  },
	  phone: {
	    required: "Укажите номер телефона!",
	  }
	},
	submitHandler: function(form) {
    	var th = $(form);
		$.ajax({
			type: "POST",
			url: "http://teplobosh.loc/mail.php", 
			data: th.serialize()
		}).done(function() {
			th.find('.succes-formsubmit').addClass('formsubmitsucces');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				th.find('.succes-formsubmit').removeClass('formsubmitsucces');
			}, 5000);
		});
		return false;
  }
	});

	$('#email_send').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			textemail: {
				required: true
			}
		},
		messages: {
			name: {
			    required: "Укажите ваше имя!",
			    minlength: "Минимум 2 символа!"

	  		},
	  		email: {
	  			required: "Укажите ваш email!",
	  			email: "Введите правильный email"
	  		},
	  		textemail: {
				required: "Оставьте сообщение!"
			}
		},
		submitHandler: function(form) {
	    	var th = $(form);
			$.ajax({
				type: "POST",
				url: "http://teplobosh.loc/mail.php", 
				data: th.serialize()
			}).done(function() {
				th.find('.succes-formsubmit').addClass('formsubmitsucces');
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
					th.find('.succes-formsubmit').removeClass('formsubmitsucces');
				}, 5000);
			});
			return false;
  		}
	});

	$('#order_settlement').validate({
		rules: {
			fullname: {
		    	required: true,
		    	minlength: 2
		  	},
		  	tel: {
	    		required: true,
	  		},
	  		email: {
				required: true,
				email: true
			}		  
		},
		messages: {
			fullname: {
			    required: "Укажите ваше имя!",
			    minlength: "Минимум 2 символа!"
			},
			tel: {
				required: "Укажите номер телефона!",
			},
			email: {
	  			required: "Укажите ваш email!",
	  			email: "Введите правильный email"
	  		}
		},
		submitHandler: function(form) {
	    	var th = $(form);
			$.ajax({
				type: "POST",
				url: "http://teplobosh.loc/mail.php", 
				data: th.serialize()
			}).done(function() {
				th.find('.succes-formsubmit').addClass('formsubmitsucces');
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
					th.find('.succes-formsubmit').removeClass('formsubmitsucces');
				}, 5000);
			});
			return false;
  		}
	});


});