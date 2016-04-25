var sheet = (function() {
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
}());

sheet.addRule('.ps-rotate-over', 'transform:rotate(-180deg);-moz-transform:rotate(-180deg);-webkit-transform:rotate(-180deg)');
sheet.addRule('.ps-rotate-out', 'transform:rotate(-360deg);-moz-transform:rotate(-360deg);-webkit-transform:rotate(-360deg)');

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
