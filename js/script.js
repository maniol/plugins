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