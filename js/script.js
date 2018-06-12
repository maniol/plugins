var templateSlide = document.getElementById('template-slide').innerHTML;
var carouselContainer = document.querySelector('.carousel');
var captionContainer = document.querySelector('.caption');
var slide = ''
Mustache.parse(templateSlide);
for(var i = 0; i < carouselData.length; i++){
		slide = Mustache.render(templateSlide, carouselData[i]);
		carouselContainer.insertAdjacentHTML('beforeend', slide);
	}

var flkty = new Flickity( '.carousel', {
  pageDots: false,
  hash: true,	
  draggable: false,
  cellSelector: ".carousel-cell"
});

var restartButton = document.querySelector('.restart');

restartButton.addEventListener( 'click', function() {
	flkty.selectCell('#tempelhof');
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});