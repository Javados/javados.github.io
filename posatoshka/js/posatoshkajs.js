$(document).ready(function() {

	$(".rocket-up li a,[href='#earn_free_btc']").on('click', function(event) {
    if (this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
  
        window.location.hash = hash;
      });
    } 
  	});

  	$(window).scroll(function() {
    $(".slip_left").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 550) {
          $(this).addClass("fadeInLeft");
        }
    });

    $(".slip_up").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 550) {
          $(this).addClass("fadeInUp");
        }
    });

    $(".slip_down").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("fadeInDown");
        }
    });

    $(".slip_right").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 550) {
          $(this).addClass("fadeInRight");
        }
    });

    $(".increase").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 550) {
          $(this).addClass("fadeIncrease");
        }
        
    });

  });

  var i = 0;
  var txt = 'Selection of projects for simple earnings';
  var speed = 120;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("textWritter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

	})