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