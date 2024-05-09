/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Common Scripts
Project:    Faucets-Washroom & Kitchen Interior Responsive Template
Author:     Syed Mehdi Hasan
Author URI: http://hmehdi.com/
 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++ Table of contents +++++++++
		1. Page-loader 
		2. Sticky
		3. WOW
		4. Parallax
		5. OwlCarousel
		7. Product
		8. Map
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
$(function () {
	'use strict'; // use strict to start
/* ---------------------------------------------
    page-loader 
 --------------------------------------------- */		
$(window).on('load', function() {
	$('#page-loader').delay().fadeOut('slow').remove();
});
/* ---------------------------------------------
    Sticky 
 --------------------------------------------- */
$(window).on('scroll',function () {
	var windowSize = $(window).width();
	if (windowSize > 1000 && $(this).scrollTop() > 1) {
		$('header').addClass("sticky");
	}
	else {
		$('header').removeClass("sticky");
	}
});
/* ---------------------------------------------
    WOW 
 --------------------------------------------- */	
$(document).ready(function(){
	new WOW().init();
});
/* ---------------------------------------------
    Parallax
 --------------------------------------------- */
if (($(window).width() >= 767)) {	
	$('#quote-section').parallax("50%", 0.5);
	$('#testimonial-section').parallax("50%", 0.5);
	$('.testimonial-inner-items').parallax("50%", 0.5);
	$('.quote-inner-items').parallax("50%", 0.5);
}
/* ---------------------------------------------
    OwlCarousel
 --------------------------------------------- */
	$('.custom1').owlCarousel({
		items: 1,
		margin: 30,
		stagePadding: 30,
		smartSpeed: 450,
		dots: true,
		loop:true,
		nav: false,
		autoHeight:true,
	});
	
	var owl = $('.owl-carousel');
	  owl.owlCarousel({
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		margin: 10,
		nav: true,
		loop: true,
		dots: true,
		items: 1,
		singleItem:true,  
	    autoplay:true,
		stagePadding: 0
	  });
/* ---------------------------------------------
    Product
 --------------------------------------------- */
	$(window).on('load',function() {
		var worksfilters = $('.filters li'),
			worksitem = $('#isotope-grid');	
		if (worksfilters != 'undefined'){		
			worksitem.isotope({			
				itemSelector : '.grid-item',
				layoutMode: 'fitRows',
				 masonry: {
				columnWidth: '.grid-item'
			  }
			});				
		worksfilters.on('click', function(){		
		worksfilters.removeClass('active');
		$(this).addClass('active');	
		var selector = $(this).attr('data-filter');
		worksitem.isotope({ filter: selector });	
		return false;		
		});
	   }
	});	
});
/* ---------------------------------------------
    Map
 --------------------------------------------- */
window.initMap = function() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.6626057, lng: -73.9489542},
          zoom: 15,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
      }