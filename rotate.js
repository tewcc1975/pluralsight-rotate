var sheet = (function() {
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
}());

sheet.addRule('.ps-rotate-over', 'color:red;transform:rotate( -180deg );-moz-transform:rotate( -180deg );-ms-transform:rotate( -180deg );-o-transform:rotate( -180deg );-webkit-transform: rotate( -180deg );transition:transform 550ms ease;-moz-transition:-moz-transform 550ms ease;-ms-transition:-ms-transform 550ms ease;-o-transition:-o-transform 550ms ease;-webkit-transition: -webkit-transform 550ms ease;');
sheet.addRule('.ps-rotate-out', 'transform:rotate( -360deg );-moz-transform:rotate( -360deg );-ms-transform:rotate( -360deg );-o-transform:rotate( -360deg );-webkit-transform: rotate( -360deg );transition:transform 550ms ease;-moz-transition:-moz-transform 550ms ease;-ms-transition:-ms-transform 550ms ease;-o-transition:-o-transform 550ms ease;-webkit-transition:-webkit-transform 550ms ease;');

var rotateEls = document.getElementsByClassName('rotate');
for (var i = 0; i < rotateEls.length; i++) {
  rotateEls[i].addEventListener('mouseover', function() {
    this.className = 'ps-rotate-over';
  }, false);

  rotateEls[i].addEventListener('mouseout', function() {
    var rotate = this;
    this.className = 'ps-rotate-out';
    window.setTimeout(function () {rotate.className = ''});
  }, false);
}
