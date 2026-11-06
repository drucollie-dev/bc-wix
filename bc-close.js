class BCClose extends HTMLElement {
connectedCallback() {
if (this.shadowRoot) return;
const r = this.attachShadow({ mode: 'open' });
r.innerHTML = `<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet"><style>:host{display:block;width:100%;height:100%;container-type:size}*{box-sizing:border-box;margin:0}.sec{width:100%;height:100%;background:#081F3B;color:#FBFCFE;font-family:'Plus Jakarta Sans',system-ui,sans-serif;padding:clamp(24px,6cqw,72px) clamp(20px,5cqw,64px) 0;display:flex;flex-direction:column;justify-content:flex-start;gap:20px}.lab{font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#CBD3E0}h2{font-weight:800;letter-spacing:-.045em;line-height:.98;font-size:clamp(44px,8.6cqw,124px)}.out{color:transparent;-webkit-text-stroke:2.5px #FBFCFE}@container (max-width:560px){h2{font-size:clamp(40px,13cqw,56px)}.out{-webkit-text-stroke:1.8px #FBFCFE}}</style><section class="sec"><p class="lab">[ 06 ] Next step</p><h2>Let&rsquo;s talk about your <span class="out">next stage.</span></h2></section>`;
}
}
if (!customElements.get('bc-close')) customElements.define('bc-close', BCClose);
