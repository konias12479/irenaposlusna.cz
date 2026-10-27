// Zvuk otočení stránky při kliknutí v menu (generovaný v prohlížeči, žádný soubor ke stažení).
(function () {
  var Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  var ctx = null;

  function flipSound() {
    if (!ctx) ctx = new Ctx();
    if (ctx.state === 'suspended') ctx.resume();
    var t = ctx.currentTime;
    var dur = 0.32;

    // Šum papíru: bílý šum přes pásmovou propust, která během zvuku přejede nahoru.
    var buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    var src = ctx.createBufferSource();
    src.buffer = buf;
    var bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 0.9;
    bp.frequency.setValueAtTime(700, t);
    bp.frequency.exponentialRampToValueAtTime(3200, t + 0.16);
    bp.frequency.exponentialRampToValueAtTime(1200, t + dur);
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.35, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.12, t + 0.18);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(bp); bp.connect(g); g.connect(ctx.destination);
    src.start(t); src.stop(t + dur);

    // Tiché dosednutí stránky na konci.
    var osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, t + 0.2);
    osc.frequency.exponentialRampToValueAtTime(60, t + 0.3);
    var g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.0001, t + 0.2);
    g2.gain.exponentialRampToValueAtTime(0.18, t + 0.215);
    g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.34);
    osc.connect(g2); g2.connect(ctx.destination);
    osc.start(t + 0.2); osc.stop(t + 0.35);
  }

  function onClick(e) {
    var a = e.currentTarget;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target && a.target !== '_self') return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#') return;
    try { flipSound(); } catch (err) { return; }
    e.preventDefault();
    setTimeout(function () { window.location.href = href; }, 220);
  }

  var links = document.querySelectorAll('.nav a, .nav-mobile a, .brand');
  for (var i = 0; i < links.length; i++) links[i].addEventListener('click', onClick);
})();
