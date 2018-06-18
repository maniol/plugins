var restartButton = document.querySelector('.restart');
var progressBar = document.querySelector('.progress-bar')
var templateSlide = document.getElementById('template-slide').innerHTML;
var carouselContainer = document.querySelector('.carousel');
var slide = ''

restartButton.addEventListener( 'click', function() {
  flkty.selectCell('#tempelhof');
});

Mustache.parse(templateSlide);

for(var i = 0; i < carouselData.length; i++) {
  slide = Mustache.render(templateSlide, carouselData[i]);
  carouselContainer.insertAdjacentHTML('beforeend', slide);
}

var flkty = new Flickity( '.carousel', {
  pageDots: false,
  hash: true,
  draggable: false,
  cellSelector: ".carousel-cell"
});

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var infos = document.getElementById('infos');
// Initialize and add the map
window.initMap = function () {
  // The location of the first slide
  var firstSlideCoord = carouselData[0]['coords'];
  // The map, centered at firstSlideCoord
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 14, center: firstSlideCoord});
  flkty.on( 'change', function(index) {
    var coords = carouselData[index]['coords'];
    map.setZoom(16);
    map.setCenter(coords);
  });
  // Assign markers to locations
  for (let i = 0; i < carouselData.length; i++) {
    var markerName = carouselData[i]['id'] + 'Marker';
    markerName = new google.maps.Marker({position: carouselData[i]['coords'], map: map});
    markerName.addListener('click', function(){
      flkty.selectCell(i);
    });
  }
};