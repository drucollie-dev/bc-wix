class BCHero extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
:host{display:block;width:100%;height:100%;container-type:size}
*{box-sizing:border-box;margin:0}
.hero{width:100%;height:100%;background:#081F3B;color:#FBFCFE;font-family:'Plus Jakarta Sans',system-ui,sans-serif;padding:clamp(24px,4cqw,56px) clamp(20px,4.4cqw,64px);display:flex;flex-direction:column;justify-content:center;gap:clamp(14px,2cqw,28px)}
.meta{font-size:clamp(10px,.9cqw,12px);font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#CBD3E0;line-height:1.6}
.chip{align-self:flex-start;display:inline-flex;align-items:center;gap:10px;border:1.5px solid #CBD3E0;border-radius:999px;padding:7px 14px;font-size:clamp(10px,.9cqw,12px);font-weight:700;letter-spacing:.14em;text-transform:uppercase}
.chip i{width:8px;height:8px;border-radius:50%;background:#E85D2C}
h1{font-weight:800;letter-spacing:-.045em;line-height:.93;font-size:clamp(48px,10.6cqw,152px)}
.out{color:transparent;-webkit-text-stroke:clamp(1.5px,.18cqw,2.5px) #F4B4C4}
p.sub{max-width:34ch;font-size:clamp(17px,1.7cqw,22px);line-height:1.5}
.cta{display:flex;flex-wrap:wrap;gap:20px 28px;align-items:center}
a.btn{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:0 32px;border-radius:999px;background:#E85D2C;color:#081F3B;font-weight:800;font-size:17px;text-decoration:none}
a.btn:hover{background:#f06c3d}
a.q{color:#FBFCFE;font-weight:600;font-size:16px;text-decoration:none;border-bottom:2px solid currentColor;padding-bottom:2px}
@media (max-width:520px){a.btn{width:100%}}
</style>
<section class="hero">
  <p class="meta">Blue Collie Studio · Nashville, TN · Serving organizations nationwide</p>
  <div class="chip"><i></i>For organizations with a next stage to reach</div>
  <h1>Say it clearly. Show it well. Get <span class="out">found.</span></h1>
  <p class="sub">You've built something worth choosing. We help the right people understand it, find it, and say yes.</p>
  <div class="cta">
    <a class="btn" href="https://calendar.app.google/UX2jRcXVKYiSSgin9" target="_blank" rel="noopener">Book a 20-minute call</a>
    <a class="q" href="https://www.bluecolliestudio.com/clarity-check" target="_top">or take the five-minute Clarity Check</a>
  </div>
</section>`;
  }
}
if (!customElements.get('bc-hero')) customElements.define('bc-hero', BCHero);

if (!customElements.get('wix-default-custom-element')) customElements.define('wix-default-custom-element', class extends BCHero {});
