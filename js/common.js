$(function() {

	var mainHeader = $('.cd-auto-hide-header'),
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();
	
	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 5,
		scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
		$(this).toggleClass("on");
		$(".cd-primary-nav").slideToggle();

	});
	
	
	/*$(".cd-primary-nav a").click(function() {
		$(".nav-trigger").toggleClass("on");
		mainHeader.toggleClass('nav-open');
		$(".cd-primary-nav").slideToggle();

	});*/

  		$('.pf-images').slick({
  		infinite: true,
                      slidesToShow: 5,
                      slidesToScroll: 1,
                      arrows: false,
                      autoplay: true,
                      autoplaySpeed: 2000,
                      responsive: [
                            {
                              breakpoint: 1800,
                              settings: {
                                slidesToShow: 5,
                                rows: 2,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 1008,
                              settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 800,
                              settings: {
                              	slidesToShow: 2,
                              	rows: 1,
                              	arrows: false,
                      			autoplay: 0
                          		}
                            }

                          ]
  		});


	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 ) 
			checkSimpleNavigation(currentTop);
	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
	    if (previousTop - currentTop > scrollDelta) {
	    	//if scrolling up...
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	//if scrolling down...
	    	mainHeader.addClass('is-hidden');
	    }
	}

	$(".cd-primary-nav a").mPageScroll2id();
	$(".scroll a").mPageScroll2id();




});
