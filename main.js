$(document).ready(function () {    
    
// fixed header
    
var wrap = $("#scroll");
var fixedHeader = $("#fixed_header");
var $win = $(window);
var winH = $win.height();

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > winH) {
    fixedHeader.addClass("fixed_header--fix-after-scrolled");
  } else {
    fixedHeader.removeClass("fixed_header--fix-after-scrolled");
  }
  
});
    
    
// smooth scroll
    $("#hello").click(function () {
        $('html, body').animate({
            scrollTop: $(".header_about").offset().top
        }, 1000);
    });
    
    $("#portfolio").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio_link").offset().top
        }, 1000);
    });
    
    $("#team").click(function () {
        $('html, body').animate({
            scrollTop: $("#team_link").offset().top
        }, 1200);
    });

    $("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact_link").offset().top
        }, 1400);
    });
    
    $("#green_button").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio_link").offset().top
        }, 1400);
    });
    
    
    $(".contact_us__button").click(function () {
        $('html, body').animate({
            scrollTop: $(".contact_us2").offset().top
        }, 1400);
    });
    
    $(".back_to_top").click(function () {
        $('html, body').animate({
            scrollTop: $(".fixed_header").offset().top
        }, 1000);
    });
    
    
    
// portfolio masonry 
var $grid = $('.portfolio__collection').isotope({
    itemSelector: '.portfolio__item'
    , masonry: {
        columnWidth: 270
        , gutter: 10
        , horizontalOrder: true
    }
});
$('.filter-button-group').on('click', '.portfolio__tab', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});
$('.slider_team').slick({
    slide: '.slider-team__item'
    , slidesToShow: 1
    , slidesToScroll: 1
    , dots: true
    , centerMode: true
    , focusOnSelect: true
    , centerPadding: 0
});
$(".portfolio__item img").hover(function () {
    $(this).addClass("hover");
}, function () {
    $(this).removeClass("hover");
});

//   slider testimonials  
$('.slider_testimonials').slick({
slide: '.slider_testimonials__item'
, slidesToShow: 1
, slidesToScroll: 1
, dots: true
, centerMode: true
, focusOnSelect: true
, centerPadding: 0
, arrows: false
, autoplay: true
, autoplaySpeed: 4000
});
  
    
// Google maps bugfix   

// it would be better to create a map wrapper div for #map and assign 'click' and 'mouse leave' event on it. but I did it for .contact_us2. 
    
$('#map').addClass('scrolloff'); 
$('.contact_us2').on('click', function () {
$('#map').removeClass('scrolloff'); 
});
$(".contact_us2").mouseleave(function () {
 $('#map').addClass('scrolloff'); 
}); 
    
 // Wow plugin
    
new WOW().init();
    
});



 
function initMap() {

        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.

    var styledMapType = new google.maps.StyledMapType(
            [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2AAFC7"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1efafa"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
],
            {name: 'Styled Map'});
    
var position = [49.568692, 34.584971];
var latLng = new google.maps.LatLng(position[0], position[1]);
var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.568692, lng: 34.584971},
          zoom: 17,
          mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });

//Associate the styled map with the MapTypeId and set it to display.
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');
    
marker = new google.maps.Marker({
        position: latLng
        , map: map
        , icon: 'assets/favicon.png'
        , draggable: true
        , animation: google.maps.Animation.DROP 
        
    });

marker.setMap(map);
}; //









