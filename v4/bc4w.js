/* Blue Collie V4 loader. Loads bc4.js, then also registers the generic
   wix-default-custom-element tag, which picks its section from the
   "section" attribute (hero, band, problem, issue, owners, work, steps, close). */
(function () {
  var SRC = 'https://cdn.jsdelivr.net/gh/drucollie-dev/bc-wix@cfbda8b3df667f25f3f1c48f0e35e37420ee2d7d/v4/bc4.js';
  function pick(el) {
    var k = (el.getAttribute('section') || el.getAttribute('data-section') || 'hero').toLowerCase();
    return customElements.get('bc4-' + k) || customElements.get('bc4-hero');
  }
  function defineRouter() {
    if (customElements.get('wix-default-custom-element')) return;
    var Hero = customElements.get('bc4-hero');
    if (!Hero) return;
    var Base = Object.getPrototypeOf(Hero);
    class Router extends Base {
      css() { return pick(this).prototype.css.call(this); }
      html(m) { return pick(this).prototype.html.call(this, m); }
      after(m) { return pick(this).prototype.after.call(this, m); }
      stop() { var p = pick(this).prototype.stop; if (p) p.call(this); }
      static get observedAttributes() { return ['section', 'data-section', 'photo']; }
      attributeChangedCallback() { if (this.shadowRoot) { this.m = null; this.fit(); } }
    }
    customElements.define('wix-default-custom-element', Router);
  }
  if (customElements.get('bc4-hero')) { defineRouter(); return; }
  var s = document.createElement('script');
  s.src = SRC;
  s.onload = defineRouter;
  document.head.appendChild(s);
})();
