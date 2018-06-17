$(document).ready(function() {
	// navigation onmouseover
	$('.dropdown1').on('mouseover', function () {
		$('#nav-list > li.dropdown1').addClass("open");

	})

	$('.dropdown1').on('mouseout', function () {
		$('#nav-list > li.dropdown1').removeClass("open");
	})

  $('.dropdown2').on('mouseover', function () {
    $('#nav-list > li.dropdown2').addClass("open");

  })

  $('.dropdown2').on('mouseout', function () {
    $('#nav-list > li.dropdown2').removeClass("open");
  })

  $('.dropdown3').on('mouseover', function () {
    $('#nav-list > li.dropdown3').addClass("open");

  })

  $('.dropdown3').on('mouseout', function () {
    $('#nav-list > li.dropdown3').removeClass("open");
  })

	// Login Page
	$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  	var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    	}
    else if (e.type === 'blur') {
      if( $this.val() === '' ) {
        label.removeClass('active highlight');
      	}
      	else {
        	label.removeClass('highlight');
      	}
    	}
    	else if (e.type === 'focus') {

      	if( $this.val() === '' ) {
        	label.removeClass('highlight');
      	}
      else if( $this.val() !== '' ) {
        	label.addClass('highlight');
      	}
    	}

  });

	$('.tab a').on('click', function (e) {

	  e.preventDefault();

	  $(this).parent().addClass('active');
	  $(this).parent().siblings().removeClass('active');

	  target = $(this).attr('href');

	  $('.tab-content > div').not(target).hide();

	  $(target).fadeIn(600);

	});

  $(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("#header-nav").css({"background-color":"white"});
      $("#header-nav h1").css("color" , "#02b3e4");
      $("#header-nav a").css("color" , "#02b3e4");
      $("#header-nav button").css("color" , "#f1f1f1");
      $("#header-nav button").css("background-color" , "#02b3e4");
      $('.dropdown-menu').css('background-color', '#fff');
    }
    else if(scroll <= 0){
      $("#header-nav").css("background-color" , "transparent");
      $("#header-nav h1").css("color" , "#f1f1f1");
      $("#header-nav a").css("color" , "#f1f1f1");
      $("#header-nav button").css("background-color" , "#fff");
      $("#header-nav button").css("color" , "#02b3e4");
      $('.dropdown-menu').css('background-color', 'transparent');
  }
  });

});
