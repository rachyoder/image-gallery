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
btn.onclick =function() {
 var status = btn.getAttribute('class');
 if (status === 'dark') {
   btn.setAttribute('class', 'light');
   btn.textContent = 'Lighten';
   overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
 } else {
   btn.setAttribute('class', 'dark');
   btn.textContent = 'Darken';
   overlay.style.backgroundColor = 'rgba(0,0,0,0)';
 }
}