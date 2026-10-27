// Zvuk otočení stránky při kliknutí v menu. Soubor turn2.mp3 z pluginu dFlip Lite (GPLv2), stejný jako na emoirestaurant.cz.
(function () {
  var audio = new Audio('/sound/otoceni.mp3');
  audio.preload = 'auto';
  audio.volume = 1;

  function play() {
    try {
      audio.currentTime = 0;
      var p = audio.play();
      if (p && p.catch) p.catch(function () {});
    } catch (err) {}
  }

  function onClick(e) {
    var a = e.currentTarget;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target && a.target !== '_self') return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#') return;
    play();
    e.preventDefault();
    setTimeout(function () { window.location.href = href; }, 350);
  }

  var links = document.querySelectorAll('.nav a, .nav-mobile a, .brand');
  for (var i = 0; i < links.length; i++) links[i].addEventListener('click', onClick);
})();
