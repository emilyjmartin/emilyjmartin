/* Image helper.
   Any <img data-img="assets/some-name"> automatically finds the file whose name
   is "some-name" with a .jpg, .jpeg, .png, .webp or .gif ending, so you only
   need to upload a photo with the right name and it appears. If no file is
   found, the colored placeholder behind it stays visible. */
(function () {
  var exts = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'JPG', 'JPEG', 'PNG'];
  document.querySelectorAll('img[data-img]').forEach(function (img) {
    var base = img.getAttribute('data-img');
    var i = 0;
    img.onload = function () {
      if (img.parentNode) { img.parentNode.classList.add('loaded'); }
    };
    function next() {
      if (i >= exts.length) { img.onerror = null; img.remove(); return; }
      img.src = base + '.' + exts[i++];
    }
    img.onerror = next;
    next();
  });
})();
