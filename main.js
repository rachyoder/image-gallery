var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
function resize(img) {
  displayedImage.setAttribute('src', img);
}
/* Looping through images */
for (var i = 1; i <= 5; i++) {
  var photo = 'images/pic' + i + '.jpg'; 
  var newImage = document.createElement('img');
  newImage.setAttribute('src', photo);
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    var photoSrc = e.target.getAttribute('src');
    resize(photoSrc);
  }
}
/* Wiring up the Darken/Lighten button */
