class BCBand extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const r = this.attachShadow({ mode: 'open' });
    const seg = '<div class="seg"><span>Message</span><i></i><span>Website</span><i></i><span>Search &amp; AI visibility</span><i></i><span>Ongoing marketing partnership</span><i></i></div>';
    r.innerHTML = `<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap" rel="stylesheet"><style>:host{display:block;width:100%;height:100%;container-type:size}*{box-sizing:border-box;margin:0}.band{width:100%;height:100%;background:#E85D2C;color:#081F3B;overflow:hidden;display:flex;align-items:center;font-family:'Plus Jakarta Sans',system-ui,sans-serif}.track{display:flex;width:max-content;animation:m 30s linear infinite}.seg{display:flex;align-items:center;gap:40px;padding-right:40px;font-weight:800;font-size:clamp(22px,3.05cqw,44px);letter-spacing:-.03em;text-transform:uppercase;white-space:nowrap}i{width:.32em;height:.32em;background:#081F3B;border-radius:50%;display:block}@keyframes m{to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){.track{animation:none}}</style><div class="band" aria-hidden="true"><div class="track">${seg}${seg}</div></div>`;
  }
}
if (!customElements.get('bc-band')) customElements.define('bc-band', BCBand);
