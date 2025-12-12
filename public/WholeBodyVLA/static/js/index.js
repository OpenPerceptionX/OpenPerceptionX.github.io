window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE1 = "./static/interpolation/stacked1";
var INTERP_BASE2 = "./static/interpolation/stacked2";
var INTERP_BASE3 = "./static/interpolation/stacked3";

var NUM_INTERP_FRAMES1 = 152;
var NUM_INTERP_FRAMES2 = 152;
var NUM_INTERP_FRAMES3 = 152;

var interp_images1 = [];
var interp_images2 = [];
var interp_images3 = [];
function preloadInterpolationImages1() {
  for (var i = 0; i < NUM_INTERP_FRAMES1; i++) {
    var path = INTERP_BASE1 + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images1[i] = new Image();
    interp_images1[i].src = path;
  }
}

function preloadInterpolationImages2() {
  for (var i = 0; i < NUM_INTERP_FRAMES2; i++) {
    var path = INTERP_BASE2 + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images2[i] = new Image();
    interp_images2[i].src = path;
  }
}

function preloadInterpolationImages3() {
  for (var i = 0; i < NUM_INTERP_FRAMES3; i++) {
    var path = INTERP_BASE3 + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images3[i] = new Image();
    interp_images3[i].src = path;
  }
}


function setInterpolationImage1(i) {
  var image = interp_images1[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper1').empty().append(image);
}

function setInterpolationImage2(i) {
  var image = interp_images2[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper2').empty().append(image);
}

function setInterpolationImage3(i) {
  var image = interp_images3[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper3').empty().append(image);
}







$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    const options = {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      autoplay: false,
      pauseOnHover: true,
      duration: 400,
      navigation: true,
      pagination: true,
    };

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
    

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    preloadInterpolationImages1();
    preloadInterpolationImages2();
    preloadInterpolationImages3();

    $('#interpolation-slider1').on('input', function(event) {
      setInterpolationImage1(this.value);
    });
    setInterpolationImage1(0);
    $('#interpolation-slider1').prop('max', NUM_INTERP_FRAMES1 - 1);


    $('#interpolation-slider2').on('input', function(event) {
      setInterpolationImage2(this.value);
    });
    setInterpolationImage2(0);
    $('#interpolation-slider2').prop('max', NUM_INTERP_FRAMES2 - 1);
    
    
    $('#interpolation-slider3').on('input', function(event) {
      setInterpolationImage3(this.value);
    });
    setInterpolationImage3(0);
    $('#interpolation-slider3').prop('max', NUM_INTERP_FRAMES3 - 1);

    bulmaSlider.attach();
    
    const cbCarousel = document.querySelector('.cb-carousel');
const cbSlidesContainer = cbCarousel.querySelector('.cb-slides');
const cbSlides = cbCarousel.querySelectorAll('.cb-slide');
const cbPrevBtn = cbCarousel.querySelector('.cb-prev');
const cbNextBtn = cbCarousel.querySelector('.cb-next');

let cbCurrentIndex = 0;
const cbTotalSlides = cbSlides.length;

function cbUpdateSlide() {
    cbSlidesContainer.style.transform = `translateX(-${cbCurrentIndex * 100}%)`;
}

cbPrevBtn.addEventListener('click', () => {
    cbCurrentIndex = (cbCurrentIndex - 1 + cbTotalSlides) % cbTotalSlides;
    cbUpdateSlide();
});

cbNextBtn.addEventListener('click', () => {
    cbCurrentIndex = (cbCurrentIndex + 1) % cbTotalSlides;
    cbUpdateSlide();
});

});



// 修复后的JavaScript
