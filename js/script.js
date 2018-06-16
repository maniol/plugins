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

(function() {
  var infos = document.getElementById('infos');
 // Initialize and add the map
  window.initMap = function () {
    // The location of Tempelhof
    var tempelhofCoord = {lat: 52.462553, lng: 13.392475};
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Tempelhof
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 14, center: tempelhofCoord});
    // Assign markers to locations
    for (var location in carouselData) {
      var markerName = carouselData[location]['id'] + 'Marker';
      markerName = new google.maps.Marker({position: carouselData[location]['coords'], map: map});
    }
  };
})();