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

  $('.navbar-toggle').on('click', function() {
    document.getElementById("myNav").style.width = "100%";
  });

   $('.closebtn').on('click', function() {
    document.getElementById("myNav").style.width = "0%";
  });

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

});
