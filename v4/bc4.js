/* Blue Collie Studio · Homepage V4 "The Full Stop"
   One file, many custom elements. Each Wix custom element points at this file
   and uses its own tag name: bc4-hero, bc4-band, bc4-problem, bc4-issue,
   bc4-owners, bc4-work, bc4-steps, bc4-close.
   Layout is drawn at a fixed design width (1280 desktop, 390 phone) and zoomed
   to the element's real width, so it matches the mockup exactly. */
(function () {
  var BOOK = 'https://calendar.app.google/UX2jRcXVKYiSSgin9';
  var CHECK = '/clarity-check';
  var CHURCH = '/churches';
  var INK = '#081F3B', CLOUD = '#FBFCFE', FLAME = '#E85D2C', PETAL = '#F4B4C4', SLATE = '#44506A', MIST = '#CBD3E0';
  var FONT = '<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,500&display=swap" rel="stylesheet">';
  var DOT = '<i class="dot">.</i>';
  var INKDOT = '<i class="dot dk">.</i>';
  /* Wix hosts its own copy of Plus Jakarta Sans (400-800 only). Load Google's full
     family into the page under a private name so 200/300 and italics render. */
  try {
    if (!document.getElementById('bc4-font')) {
      var fs = document.createElement('style'); fs.id = 'bc4-font'; document.head.appendChild(fs);
      fetch('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,500&display=swap')
        .then(function (r) { return r.text(); })
        .then(function (t) { fs.textContent = t.replace(/font-family:\s*'Plus Jakarta Sans'/g, "font-family: 'BC Jakarta'"); })
        .catch(function () {});
    }
  } catch (e) {}
  var BASE = [
    ':host{display:block;width:100%;height:100%;overflow:hidden;background:transparent}',
    '*{box-sizing:border-box;margin:0;padding:0}',
    '.page{width:1280px;font-family:"BC Jakarta","Plus Jakarta Sans",system-ui,sans-serif;-webkit-font-smoothing:antialiased;color:' + INK + '}',
    '.page.is-m{width:390px}',
    '.page{display:flex;flex-direction:column}.page>*{flex-shrink:0}.page>:last-child{flex-grow:1}',
    'a{color:inherit}',
    'i.dot{font-style:normal;color:' + FLAME + '}',
    'i.dot.dk{color:' + INK + '}',
    '.wrap{padding:0 48px}',
    '.is-m .wrap{padding:0 24px}',
    '.ink{background:' + INK + ';color:' + CLOUD + '}',
    '.cloud{background:' + CLOUD + ';color:' + INK + '}',
    '.petal{background:' + PETAL + ';color:' + INK + '}',
    '.btn{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:0 30px;border-radius:999px;background:' + FLAME + ';color:' + INK + ';font-weight:700;font-size:17px;text-decoration:none;transition:transform .25s ease}',
    '.btn:hover{transform:translateY(-2px)}',
    '.ul{text-decoration:none;background-image:linear-gradient(' + FLAME + ',' + FLAME + ');background-size:0% 2px;background-position:0 100%;background-repeat:no-repeat;transition:background-size .3s ease;padding-bottom:4px}',
    '.ul:hover{background-size:100% 2px}',
    '@supports (animation-timeline: view()){.rise{animation:rise linear both;animation-timeline:view();animation-range:entry 0% cover 30%}@keyframes rise{from{opacity:0;translate:0 60px}to{opacity:1;translate:0 0}}}',
    '@media (prefers-reduced-motion: reduce){*{animation:none !important;transition:none !important}}'
  ].join('');

  class Base extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      this.attachShadow({ mode: 'open' });
      this.m = null;
      var self = this;
      this.ro = new ResizeObserver(function () { self.fit(); });
      this.ro.observe(this);
      this.fit();
    }
    disconnectedCallback() {
      if (this.ro) this.ro.disconnect();
      this.stop();
    }
    stop() {}
    fit() {
      var w = this.getBoundingClientRect().width || (this.parentElement && this.parentElement.getBoundingClientRect().width) || 1280;
      var m = w <= 750 ? 'm' : 'd';
      if (m !== this.m) {
        this.stop();
        this.m = m;
        this.shadowRoot.innerHTML = FONT + '<style>' + BASE + this.css() + '</style><div class="page' + (m === 'm' ? ' is-m' : '') + '">' + this.html(m) + '</div>';
        this.page = this.shadowRoot.querySelector('.page');
        this.after(m);
      }
      var z = w / (m === 'm' ? 390 : 1280);
      this.page.style.zoom = String(z);
      /* Fill the box only when Wix gives it a fixed height. When the height is
         auto, let the content set it, or the box can never shrink. */
      this.page.style.minHeight = '';
      var h = this.getBoundingClientRect().height;
      var n = this.page.getBoundingClientRect().height;
      this.page.style.minHeight = m === 'd' && h > n + 1 ? (h / z) + 'px' : '';
    }
    css() { return ''; }
    html() { return ''; }
    after() {}
  }

  /* 1 · HERO */
  var WORDS = [
    ['new logo?', 66, 6, 40, -6, 'it', .34], ['Instagram', 84, 16, 28, 8, 'light', .3],
    ['website refresh', 50, 30, 52, -3, 'heavy', .12], ['newsletter', 80, 42, 24, -10, 'caps', .4],
    ['SEO', 86, 54, 76, 4, 'heavy', .16], ['brand guide', 62, 70, 34, 6, 'it', .3],
    ['Q3 campaign', 78, 84, 20, -4, 'caps', .4], ['GEO', 40, 2, 40, -8, 'heavy', .2],
    ['sermon graphics', 16, 6, 24, 3, 'it', .3], ['donor email', 44, 90, 28, -5, 'it', .3],
    ['tagline', 24, 94, 22, 7, 'caps', .36], ['Google Ads', 68, 58, 18, -12, 'caps', .4]
  ];
  var WF = { it: 'font-style:italic;font-weight:300;', light: 'font-weight:200;', heavy: 'font-weight:800;letter-spacing:-.04em;', caps: 'font-weight:700;letter-spacing:.14em;text-transform:uppercase;' };
  class Hero extends Base {
    css() {
      return '.hero{position:relative;padding:40px 48px 0;min-height:820px;display:flex;flex-direction:column}' +
        '.field{position:relative;flex-grow:1;display:flex;flex-direction:column;justify-content:center;min-height:560px}' +
        '.w{position:absolute;white-space:nowrap;color:' + CLOUD + ';pointer-events:none;transition:left 1.4s cubic-bezier(.7,0,.2,1),top 1.4s cubic-bezier(.7,0,.2,1),font-size 1.4s cubic-bezier(.7,0,.2,1),transform 1.4s cubic-bezier(.7,0,.2,1),opacity 1.4s ease,color 1.4s ease}' +
        '.w.float{animation:fl 5s ease-in-out infinite alternate}@keyframes fl{from{translate:0 0}to{translate:0 -16px}}' +
        'h1{position:relative;z-index:2;font-size:166px;line-height:.84;letter-spacing:-.06em;font-weight:800}' +
        'h1 span{display:block}.out{color:transparent;-webkit-text-stroke:2px ' + CLOUD + '}.out i.dot{-webkit-text-stroke:0}.pk{color:' + PETAL + '}' +
        '.row{position:relative;z-index:3;display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:28px;padding:40px 0 36px}' +
        '.sub{flex:1 1 420px;max-width:540px;font-size:20px;line-height:1.5;font-weight:300;color:' + MIST + '}' +
        '.acts{display:flex;flex-wrap:wrap;align-items:center;gap:20px}' +
        '.ghost{background:transparent;border:1px solid rgba(251,252,254,.35);color:' + CLOUD + ';font:inherit;font-size:14px;font-weight:600;padding:12px 18px;border-radius:999px;cursor:pointer;min-height:44px}' +
        '.meta{display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;padding:18px 0 24px;border-top:1px solid rgba(251,252,254,.14);font-size:14px;color:' + MIST + '}' +
        '.is-m .hero{padding:24px 24px 0;min-height:0}.is-m .field{min-height:300px}.is-m h1{font-size:50px;letter-spacing:-.055em}.is-m .out{-webkit-text-stroke:1.5px ' + CLOUD + '}' +
        '.is-m .row{flex-direction:column;align-items:stretch;padding:20px 0 24px}.is-m .sub{font-size:18px;flex-basis:auto}.is-m .acts{flex-direction:column;align-items:stretch}.is-m .acts .btn{width:100%}.is-m .ghost{display:none}.is-m .meta{flex-direction:column;font-size:13px}';
    }
    html(m) {
      return '<section class="ink hero"><div class="field" id="field"></div>' +
        '<div class="row"><p class="sub">Your brand, your message, your website and your marketing should all point the same direction. We help you see the big picture, then do the hands-on work to bring it to life.</p>' +
        '<div class="acts"><button type="button" class="ghost" id="tg">Bring it together</button><a class="btn" href="' + BOOK + '" target="_blank" rel="noopener">Book a 20-minute call</a></div></div>' +
        '<div class="meta"><span>Nashville, Tennessee · Est. 2022</span><span>Run by its owners, Renée and Drü Collie</span><span id="clk"></span></div></section>';
    }
    after(m) {
      var self = this, R = this.shadowRoot;
      var field = R.getElementById('field');
      var h1 = '<h1 aria-label="Say it clearly. Show it well. Get found."><span>Say it clearly' + DOT + '</span><span class="out">Show it well' + DOT + '</span><span class="pk">Get found' + DOT + '</span></h1>';
      var scale = m === 'm' ? .5 : 1;
      field.innerHTML = WORDS.map(function (w, i) { return '<span class="w float" aria-hidden="true" data-i="' + i + '">' + w[0] + '</span>'; }).join('') + h1;
      this.aligned = false;
      this.place = function () {
        var cur = 0;
        R.querySelectorAll('.w').forEach(function (el) {
          var w = WORDS[+el.dataset.i];
          if (self.aligned) {
            el.className = 'w';
            el.style.cssText = 'font-weight:600;left:' + cur + 'px;top:calc(100% - 4px);font-size:' + (m === 'm' ? 12 : 15) + 'px;transform:rotate(0);opacity:1;color:' + PETAL + ';' + (m === 'm' && cur > 330 ? 'opacity:0;' : '');
            cur += Math.round(w[0].length * (m === 'm' ? 6.8 : 8.4)) + (m === 'm' ? 18 : 30);
          } else {
            el.className = 'w float';
            el.style.cssText = WF[w[5]] + 'left:' + w[1] + '%;top:' + w[2] + '%;font-size:' + Math.round(w[3] * scale) + 'px;transform:rotate(' + w[4] + 'deg);opacity:' + w[6] + ';animation-delay:-' + (i0(w) * .7) + 's';
          }
        });
        var tg = R.getElementById('tg'); if (tg) tg.textContent = self.aligned ? 'Scatter it again' : 'Bring it together';
      };
      function i0(w) { return WORDS.indexOf(w); }
      this.place();
      R.getElementById('tg').addEventListener('click', function () { self.aligned = !self.aligned; self.place(); });
      this.t2 = setTimeout(function () { self.aligned = true; self.place(); }, 2600);
      var clk = R.getElementById('clk');
      function tick() { try { clk.textContent = "It's " + new Date().toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: 'numeric', minute: '2-digit' }) + ' in Nashville'; } catch (e) { clk.textContent = 'Nashville, Tennessee'; } }
      tick(); this.t1 = setInterval(tick, 30000);
    }
    stop() { clearInterval(this.t1); clearTimeout(this.t2); }
  }

  /* 2 · TAGLINE BAND */
  class Band extends Base {
    css() {
      return '.band{padding:30px 0;overflow:hidden;white-space:nowrap;display:flex;align-items:center}.track{display:flex;width:max-content;animation:mq 42s linear infinite}@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}' +
        '.grp{display:inline-flex;align-items:center;gap:40px;padding-right:40px;font-size:56px;letter-spacing:-.035em}.l{font-weight:200}.h{font-weight:800}' +
        '.is-m .band{padding:20px 0}.is-m .grp{font-size:32px;gap:22px;padding-right:22px}';
    }
    html() {
      var g = '<span class="grp"><span class="l">Big-picture thinking</span><span class="h">' + INKDOT + '</span><span class="h">Hands-on execution</span><span class="h">' + INKDOT + '</span><span class="l">Big-picture thinking</span><span class="h">' + INKDOT + '</span><span class="h">Hands-on execution</span><span class="h">' + INKDOT + '</span></span>';
      return '<div class="petal band" role="img" aria-label="Big-picture thinking. Hands-on execution."><div class="track" aria-hidden="true">' + g + g + '</div></div>';
    }
  }

  /* 3 · PROBLEM */
  class Problem extends Base {
    css() {
      return '.top{padding:150px 48px 104px}.man{font-size:64px;line-height:1.06;letter-spacing:-.04em;font-weight:200;max-width:1120px}' +
        '.fz{font-style:italic;font-weight:300;text-decoration:underline wavy ' + FLAME + ';text-decoration-thickness:3px;text-underline-offset:12px}.man b{font-weight:800}' +
        '.desk{display:flex;border-top:1px solid ' + MIST + ';border-bottom:1px solid ' + MIST + ';background:#F3F5F9}' +
        '.pn{flex:1 1 0;height:480px;padding:28px 24px 26px;display:flex;flex-direction:column;border-left:1px solid ' + MIST + ';overflow:hidden}.pn:first-child{border-left:0}' +
        '.lb{font-size:13px;font-weight:600;letter-spacing:.02em;color:' + SLATE + '}.lb b{color:' + FLAME + ';font-weight:700;margin-right:8px}' +
        '.art{flex-grow:1;display:flex;align-items:center;justify-content:center}' +
        '.card{background:#fff;box-shadow:0 18px 40px rgba(8,31,59,.16),0 2px 6px rgba(8,31,59,.08);border-radius:6px;overflow:hidden}' +
        '.a1{width:236px;height:150px;transform:rotate(-3deg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:#7A2E8E;font-family:Georgia,serif}' +
        '.a1 svg{width:30px;height:30px}.a1 .nm1{font-style:italic;font-size:44px;line-height:1}.a1 .tg1{font-size:11px;letter-spacing:.2em;text-transform:uppercase}' +
        '.a2{width:262px;transform:rotate(2deg);font-family:Arial,Helvetica,sans-serif}.a2 .br{display:flex;gap:5px;padding:7px 9px;background:#E4E7EC}.a2 .br i{width:7px;height:7px;border-radius:50%;background:#fff}' +
        '.a2 .hd{display:flex;justify-content:space-between;align-items:center;padding:9px 12px;background:#1E7A6E;color:#fff;font-weight:900;font-size:11px;letter-spacing:.02em}.a2 .hd span{display:flex;gap:3px;flex-direction:column}.a2 .hd span i{display:block;width:14px;height:2px;background:#fff}' +
        '.a2 .hr{padding:16px 12px 14px;background:#E8F2EF}.a2 .hr p{font-weight:900;font-size:22px;line-height:1;color:#1E7A6E;text-transform:uppercase}.a2 .bt{display:inline-block;margin-top:10px;padding:5px 10px;background:#B5D334;color:#1B2B00;font-size:9px;font-weight:700;border-radius:2px}' +
        '.a2 .ln{padding:10px 12px 12px}.ln i{display:block;height:5px;border-radius:3px;background:#E4E7EC;margin-top:6px}.ln i:nth-child(2){width:80%}.ln i:nth-child(3){width:60%}' +
        '.a3{width:200px;transform:rotate(-2deg);font-family:"Courier New",Courier,monospace;color:#3A2A00}.a3 .ih{display:flex;align-items:center;gap:7px;padding:8px 10px;font-size:10px;color:#222}.a3 .ih i{width:20px;height:20px;border-radius:50%;background:#F2C230;border:2px solid #fff;box-shadow:0 0 0 1px #F2C230}' +
        '.a3 .im{height:140px;background:#F2C230;display:flex;align-items:center;justify-content:center;text-align:center;font-size:26px;line-height:1.05;font-weight:700}.a3 .lk{padding:7px 10px 9px;font-size:10px;color:#222}' +
        '.a4{width:250px;transform:rotate(3deg);font-family:"Trebuchet MS",sans-serif}.a4 .nh{padding:12px 12px;background:#C8372D;color:#fff;font-weight:700;font-size:17px;line-height:1.05}.a4 .sj{padding:9px 12px 0;font-size:11px;font-weight:700;color:#7A1E17}.a4 .nb{display:flex;gap:10px;align-items:center;padding:4px 12px}.a4 .nb i{width:64px;height:44px;border-radius:3px;background:#F3D3CF}.a4 .nb span{padding:5px 9px;background:#C8372D;color:#fff;font-size:9px;font-weight:700;border-radius:12px}' +
        '.spec{margin-top:16px;font-size:12px;line-height:1.5;color:' + SLATE + '}.spec p{display:flex;justify-content:space-between;gap:10px;border-top:1px solid ' + MIST + ';padding:4px 0}.spec p b{color:' + INK + ';font-weight:600;text-align:right}.spec p.n b{font-weight:800}' +
        '.bot{padding:88px 48px 150px}.st{font-size:76px;line-height:.98;letter-spacing:-.045em;font-weight:800}.st span{font-weight:200}.note{margin-top:18px;font-size:14px;color:' + SLATE + '}' +
        '.qs{margin-top:104px;display:flex;gap:40px;align-items:flex-start}.lead{flex:1 1 0;font-size:22px;line-height:1.3;font-weight:300;color:' + SLATE + '}' +
        '.q{flex:1 1 0;padding-top:22px;border-top:3px solid ' + INK + ';font-size:28px;line-height:1.22;letter-spacing:-.02em;font-weight:500;font-style:italic}.q2{margin-top:56px}.q3{margin-top:112px}' +
        '.is-m .top{padding:56px 24px 40px}.is-m .man{font-size:34px}.is-m .fz{text-underline-offset:8px;text-decoration-thickness:2px}' +
        '.is-m .desk{flex-wrap:wrap}.is-m .pn{flex:0 0 50%;height:230px;padding:14px 12px;border-left:0;border-top:1px solid ' + MIST + '}.is-m .pn:nth-child(even){border-left:1px solid ' + MIST + '}.is-m .pn:nth-child(-n+2){border-top:0}' +
        '.is-m .lb{font-size:11px}.is-m .lb b{margin-right:4px}.is-m .art{zoom:.56}.is-m .spec{margin-top:6px;font-size:10.5px}.is-m .spec p{display:block;padding:3px 0 0}.is-m .spec p:not(.n){display:none}.is-m .spec p.n span{display:none}.is-m .spec p b{text-align:left;word-break:break-all}' +
        '.is-m .bot{padding:40px 24px 56px}.is-m .st{font-size:40px}.is-m .qs{flex-direction:column;gap:24px;margin-top:36px}.is-m .q{font-size:22px}.is-m .q2,.is-m .q3{margin-top:0}.is-m .lead{font-size:19px}';
    }
    html() {
      return '<section class="cloud"><div class="top"><p class="man rise">Your team is working hard. The website is live. Content goes out every week. And still, <em class="fz">the message is fuzzy</em>, the pieces don\'t connect, and nobody can say <b>what\'s moving you forward' + DOT + '</b></p></div>' +
        '<div class="desk" aria-hidden="true">' +
        '<div class="pn"><p class="lb"><b>01</b>The logo</p><div class="art"><div class="card a1"><svg viewBox="0 0 30 30" fill="none" stroke="#7A2E8E" stroke-width="1.6"><circle cx="15" cy="15" r="13"/><path d="M15 23V11M15 15c-3-1-5-4-5-7 3 0 5 2 5 5M15 13c2-2 5-3 7-2-1 3-4 4-7 4"/></svg><span class="nm1">Northside</span><span class="tg1">est. 1998</span></div></div><div class="spec"><p class="n"><span>Name</span><b>Northside</b></p><p><span>Type</span><b>Georgia italic</b></p><p><span>Color</span><b>Plum</b></p></div></div>' +
        '<div class="pn"><p class="lb"><b>02</b>The website</p><div class="art"><div class="card a2"><div class="br"><i></i><i></i><i></i></div><div class="hd">NORTHSIDE COMMUNITY<span><i></i><i></i><i></i></span></div><div class="hr"><p>Welcome home!!</p><span class="bt">CLICK HERE</span></div><div class="ln"><i></i><i></i><i></i></div></div></div><div class="spec"><p class="n"><span>Name</span><b>NorthSide Community</b></p><p><span>Type</span><b>Arial Black</b></p><p><span>Color</span><b>Teal</b></p></div></div>' +
        '<div class="pn"><p class="lb"><b>03</b>The Instagram</p><div class="art"><div class="card a3"><div class="ih"><i></i>northside_official_2</div><div class="im">sunday<br>funday!!</div><div class="lk">&#9825; 12 likes</div></div></div><div class="spec"><p class="n"><span>Name</span><b>@northside_official_2</b></p><p><span>Type</span><b>Courier</b></p><p><span>Color</span><b>Mustard</b></p></div></div>' +
        '<div class="pn"><p class="lb"><b>04</b>The newsletter</p><div class="art"><div class="card a4"><div class="nh">The North Side News!!</div><p class="sj">Issue #47: BIG updates inside!!!</p><div class="ln"><i></i><i></i><i></i></div><div class="nb"><i></i><span>READ MORE &gt;&gt;</span></div><div class="ln"><i></i><i></i></div></div></div><div class="spec"><p class="n"><span>Name</span><b>The North Side News</b></p><p><span>Type</span><b>Trebuchet</b></p><p><span>Color</span><b>Brick</b></p></div></div>' +
        '</div>' +
        '<div class="bot"><p class="st rise">Same organization' + DOT + '<br><span>Four different first impressions</span>' + DOT + '</p><p class="note">Northside is made up. Your version of it probably isn\'t.</p>' +
        '<div class="qs"><p class="lead">Things we hear in the first five minutes of almost every call:</p><p class="q rise">We have a website, a logo, and a dozen tools. None of it tells one story.</p><p class="q q2 rise">I\'m tired of explaining what we do and still getting blank looks.</p><p class="q q3 rise">We do good work. It shouldn\'t be this hard for the right people to find us.</p></div></div></section>';
    }
  }

  /* 4 · REAL ISSUE + TAGLINE SPLIT */
  class Issue extends Base {
    css() {
      return '.iss{padding:150px 48px 136px}.jum{display:flex;flex-wrap:wrap;align-items:flex-end;gap:0 22px;color:rgba(251,252,254,.42);line-height:1}.jum span{display:inline-block}' +
        '.j1{font-size:88px;font-weight:800;letter-spacing:-.045em;transform:rotate(-5deg) translateY(12px)}.j2{font-size:54px;font-style:italic;font-weight:300;transform:rotate(4deg) translateY(-26px)}' +
        '.j3{font-size:124px;font-weight:200;letter-spacing:-.05em;transform:rotate(-2deg)}.j4{font-size:32px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;transform:rotate(7deg) translateY(-44px)}' +
        'h2{margin-top:36px;font-size:120px;line-height:.9;letter-spacing:-.055em;font-weight:200}h2 b{font-weight:800;color:' + PETAL + '}h2 i.dot{font-weight:800}' +
        '.two{margin-top:88px;display:flex;gap:80px;align-items:flex-start}.two p{flex:1 1 0}.body{font-size:21px;line-height:1.6;font-weight:300;color:' + MIST + '}.stake{font-size:34px;line-height:1.2;font-weight:700;letter-spacing:-.025em}' +
        '.split{display:flex}.half{flex:1 1 0;min-height:600px;padding:64px 48px;display:flex;flex-direction:column;justify-content:space-between}.half p:first-child{font-size:17px;line-height:1.5;max-width:360px}' +
        '.big{font-size:112px;line-height:.86;letter-spacing:-.06em}.lt{font-weight:200}.lt i.dot{font-weight:800}.hv{font-weight:800}.cloud .half-s{color:' + SLATE + '}' +
        '.is-m .iss{padding:56px 24px 56px}.is-m .j1{font-size:40px}.is-m .j2{font-size:28px;transform:rotate(4deg) translateY(-12px)}.is-m .j3{font-size:58px}.is-m .jum{gap:6px 12px}.is-m .j4{font-size:16px;transform:rotate(5deg) translateY(-4px)}' +
        '.is-m .jum{display:block;font-size:40px;font-weight:300;letter-spacing:-.035em;line-height:1.05}.is-m .jum span{display:inline;transform:none;font-size:inherit;font-weight:inherit;font-style:normal;letter-spacing:inherit;text-transform:none}' +
        '.is-m h2{font-size:52px}.is-m .two{flex-direction:column;gap:28px;margin-top:36px}.is-m .body{font-size:18px}.is-m .stake{font-size:26px}' +
        '.is-m .split{flex-direction:column}.is-m .half{flex:none;min-height:0;padding:40px 24px;justify-content:flex-start;gap:28px}.is-m .big{font-size:60px}';
    }
    html() {
      return '<section class="ink iss"><p class="jum" aria-label="Stop doing more marketing."><span class="j1" aria-hidden="true">Stop</span> <span class="j2" aria-hidden="true">doing</span> <span class="j3" aria-hidden="true">more</span> <span class="j4" aria-hidden="true">marketing</span></p>' +
        '<h2 class="rise">Start making it <b>work together</b>' + DOT + '</h2>' +
        '<div class="two"><p class="body">Most organizations don\'t have a marketing problem. They have an alignment problem. The brand says one thing, the website says another, and the campaigns chase a third. More tactics just add more noise.</p><p class="stake">When people can\'t tell why you\'re the right choice, they choose someone easier to understand' + DOT + '</p></div></section>' +
        '<section class="split" aria-label="Big-picture thinking. Hands-on execution."><div class="half cloud"><p class="half-s">We see the whole thing: your brand, your message, your website, and how people find you.</p><p class="big lt rise">Big-picture thinking' + DOT + '</p></div>' +
        '<div class="half petal"><p>Then we roll up our sleeves and do the work with you, start to finish.</p><p class="big hv rise">Hands-on execution' + INKDOT + '</p></div></section>';
    }
  }

  /* 5 · OWNERS (photo + bios). Photo URL comes from the "photo" attribute. */
  class Owners extends Base {
    css() {
      return '.ph{position:relative;height:800px;background:' + INK + ';display:flex;align-items:flex-end}.ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 35%}' +
        '.ph .sc{position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,31,59,0) 40%,rgba(8,31,59,.92) 100%)}' +
        '.ph h2{position:relative;padding:0 48px 56px;font-size:136px;line-height:.86;letter-spacing:-.06em;font-weight:800;color:' + CLOUD + '}' +
        '.bios{padding:88px 48px 120px;display:flex;flex-wrap:wrap;gap:56px 88px}.bio{flex:1 1 400px}.nm{font-size:44px;font-weight:800;letter-spacing:-.04em}.rl{margin-top:8px;font-size:16px;font-weight:600;color:' + SLATE + '}.bl{margin-top:22px;font-size:22px;line-height:1.45;font-weight:300}' +
        '.stats{flex:1 1 100%;display:flex;border-top:3px solid ' + INK + '}.stats div{flex:1 1 0;padding:26px 22px 0 0}.n{font-size:96px;font-weight:800;letter-spacing:-.06em;line-height:.9}.stats p+p{margin-top:12px;font-size:17px;color:' + SLATE + '}' +
        '.is-m .ph{height:520px}.is-m .ph h2{font-size:56px;padding:0 24px 32px}.is-m .bios{padding:40px 24px 56px;gap:32px}.is-m .bio{flex-basis:100%}.is-m .nm{font-size:34px}.is-m .bl{font-size:19px}' +
        '.is-m .stats{flex-direction:column}.is-m .stats div{padding:20px 0 0}.is-m .n{font-size:64px}';
    }
    html() {
      var src = this.getAttribute('photo') || 'https://static.wixstatic.com/media/c7bcf6_dcd1d041e642445987f0099fccc32074~mv2.jpg';
      return '<section class="ph"><img src="' + src + '" alt="Renée and Drü Collie in conversation" loading="lazy"><div class="sc"></div><h2 class="rise">You\'ll work with<br>the owners' + DOT + '</h2></section>' +
        '<section class="cloud bios"><div class="bio"><p class="nm">Renée Collie</p><p class="rl">Owner · Lead marketing strategist · Your main contact</p><p class="bl">More than 20 years leading marketing for growing businesses and organizations.</p></div>' +
        '<div class="bio"><p class="nm">Drü Collie</p><p class="rl">Owner · Creative and strategy director</p><p class="bl">Nearly 20 years helping organizations tell a clear story that earns trust.</p></div>' +
        '<div class="stats"><div><p class="n">2' + DOT + '</p><p>owners on every project</p></div><div><p class="n">1' + DOT + '</p><p>main contact, start to finish</p></div><div><p class="n">20' + DOT + '</p><p>minutes to know if we\'re a fit</p></div></div></section>';
    }
    static get observedAttributes() { return ['photo']; }
    attributeChangedCallback() { if (this.shadowRoot) { this.m = null; this.fit(); } }
  }

  /* 6 · WHAT WE DO (tiles) */
  class Work extends Base {
    css() {
      return '.work{padding:150px 48px}h2{font-size:120px;line-height:.88;letter-spacing:-.055em;font-weight:200;margin-bottom:80px}h2 b{font-weight:800}h2 i.dot{font-weight:800}' +
        '.grid{display:flex;flex-wrap:wrap;gap:20px}.t{border-radius:32px;padding:44px;display:flex;flex-direction:column;justify-content:space-between;gap:36px;overflow:hidden;text-decoration:none;transition:transform .4s cubic-bezier(.2,.7,.2,1)}a.t:hover{transform:translateY(-6px)}' +
        '.w7{flex:0 0 calc(58.333% - 10px);min-height:580px}.w5{flex:0 0 calc(41.667% - 10px);min-height:580px}.r2{min-height:540px}' +
        '.tt{font-size:64px;font-weight:800;letter-spacing:-.05em;line-height:.95}.td{margin-top:16px;max-width:440px;font-size:18px;line-height:1.55}.cloud .td{color:' + SLATE + '}' +
        '.card{border-radius:18px;box-shadow:0 30px 60px rgba(8,31,59,.25)}' +
        '.ba{align-self:flex-end;width:100%;max-width:430px;padding:26px;background:' + INK + ';color:' + CLOUD + ';transform:rotate(-2deg)}.ba .k{font-size:13px;font-weight:600;color:' + MIST + ';margin-bottom:10px}.ba .k2{color:' + PETAL + '}' +
        '.ba .old{font-size:16px;line-height:1.4;color:' + MIST + ';text-decoration:line-through;text-decoration-color:' + FLAME + ';text-decoration-thickness:2px;margin-bottom:20px}.ba .new{font-size:25px;line-height:1.15;font-weight:800;letter-spacing:-.03em}' +
        '.site{overflow:hidden;background:' + CLOUD + ';transform:rotate(2deg) translateY(18px)}.bar{display:flex;gap:7px;padding:12px 14px;background:' + MIST + '}.bar i{width:10px;height:10px;border-radius:50%;background:' + CLOUD + '}' +
        '.shero{background:' + INK + ';padding:28px 22px 24px}.shero p{font-size:28px;line-height:.95;font-weight:800;letter-spacing:-.04em;color:' + CLOUD + '}.pill{display:block;width:90px;height:24px;border-radius:999px;background:' + FLAME + ';margin-top:16px}' +
        '.thumbs{display:flex;gap:10px;padding:16px 22px 20px}.thumbs i{flex:1;height:54px;border-radius:6px;background:' + MIST + '}.thumbs i:last-child{background:' + PETAL + '}' +
        '.opt{border:2px solid rgba(251,252,254,.3);color:' + CLOUD + '}.opt .td{color:' + MIST + '}.o1{font-size:72px;font-weight:800;letter-spacing:-.055em;line-height:.9;color:transparent;-webkit-text-stroke:2px ' + CLOUD + '}.o1 i.dot{-webkit-text-stroke:0}.o2{margin-top:6px;font-size:72px;font-weight:800;letter-spacing:-.055em;line-height:.9}' +
        '.found{flex-direction:row;align-items:flex-end;flex-wrap:wrap}.fl{flex:1 1 240px;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;gap:24px}' +
        '.ai{flex:1 1 300px;max-width:370px;padding:22px;background:#fff;border:1px solid ' + MIST + ';box-shadow:0 30px 60px rgba(8,31,59,.14);transform:rotate(-1.5deg)}.ai .ask{margin:0 0 16px 36px;background:' + INK + ';color:' + CLOUD + ';font-size:14px;line-height:1.4;padding:12px 16px;border-radius:16px 16px 4px 16px}.ai .ans{font-size:15px;line-height:1.6;color:' + SLATE + '}.ai b{color:' + INK + '}.ai .src{margin-top:14px;font-size:12px;font-weight:600;color:' + SLATE + '}' +
        '.is-m .work{padding:56px 24px}.is-m h2{font-size:54px;margin-bottom:32px}.is-m .grid{flex-direction:column}.is-m .t{flex:none;width:100%;min-height:0;padding:28px;gap:28px;border-radius:24px}.is-m .tt{font-size:42px}.is-m .td{font-size:17px}.is-m .o1,.is-m .o2{font-size:46px}.is-m .ba .new{font-size:21px}.is-m .found{flex-direction:column;align-items:stretch}.is-m .fl{flex:none;justify-content:flex-start;gap:16px}';
    }
    html() {
      return '<section class="ink work"><h2 class="rise">The right pieces' + DOT + '<br><b>Working together' + DOT + '</b></h2><div class="grid">' +
        '<a class="t w7 cloud" href="' + BOOK + '" target="_blank" rel="noopener"><div><p class="tt">Say it clearly' + DOT + '</p><p class="td">Strategy and messaging. Get clear on who you serve, what you offer, and why you\'re the right choice.</p></div>' +
        '<div class="card ba" aria-hidden="true"><p class="k">Before</p><p class="old">We provide holistic, best-in-class solutions that empower synergy across every touchpoint.</p><p class="k k2">After</p><p class="new">We help growing churches welcome new families' + DOT + '</p></div></a>' +
        '<a class="t w5 petal" href="' + BOOK + '" target="_blank" rel="noopener"><div><p class="tt">Show it well' + INKDOT + '</p><p class="td">Brand and website. Look as strong as the work you do, and make the next step obvious.</p></div>' +
        '<div class="card site" aria-hidden="true"><div class="bar"><i></i><i></i><i></i></div><div class="shero"><p>Welcome home' + DOT + '</p><span class="pill"></span></div><div class="thumbs"><i></i><i></i><i></i></div></div></a>' +
        '<div class="t w5 r2 opt"><p class="td">Start with one piece, or bring us in for the long haul. Either way, you work with the owners.</p><div><p class="o1">One project' + DOT + '</p><p class="o2">One partner' + DOT + '</p></div></div>' +
        '<a class="t w7 r2 cloud found" href="' + BOOK + '" target="_blank" rel="noopener"><div class="fl"><p class="tt">Get found' + DOT + '</p><p class="td">SEO, GEO and marketing. Show up when people search Google and when they ask AI.</p></div>' +
        '<div class="card ai" aria-hidden="true"><p class="ask">Which nonprofits near us help families find housing?</p><p class="ans">A few trusted options nearby. <b>Your organization</b> is known for its clear intake process and weekly family nights.</p><p class="src">Source: your website</p></div></a>' +
        '</div></section>';
    }
  }

  /* 7 · STEPS + DOORS + WHAT CHANGES */
  class Steps extends Base {
    css() {
      return '.st{padding:150px 48px}h2{font-size:120px;line-height:.88;letter-spacing:-.055em;font-weight:800}svg{display:block;width:100%;height:130px;margin-top:64px}' +
        'ol{list-style:none;margin-top:20px;display:flex;gap:48px;justify-content:space-between}li{flex:1 1 0;max-width:340px}li p:first-child{font-size:30px;font-weight:800;letter-spacing:-.03em;margin-bottom:12px}li p+p{font-size:18px;line-height:1.6;color:' + SLATE + '}' +
        '.doors{display:flex}.door{flex:1 1 0;min-height:620px;padding:64px 48px;display:flex;flex-direction:column;justify-content:space-between;gap:28px;text-decoration:none}.door .s{font-size:17px;font-weight:600}.ink .s{color:' + MIST + '}.door .b{font-size:72px;line-height:.95;letter-spacing:-.05em;font-weight:800}.door .go{font-size:18px;font-weight:700}' +
        '.ch{padding:150px 48px}.ch p{font-size:64px;line-height:1.06;letter-spacing:-.04em;font-weight:200;max-width:1120px}.ch b{font-weight:800}.ch em{font-style:italic;font-weight:300}' +
        '.is-m .st{padding:56px 24px}.is-m h2{font-size:56px}.is-m svg{height:70px;margin-top:28px}.is-m ol{flex-direction:column;gap:28px}.is-m li p:first-child{font-size:24px}' +
        '.is-m .doors{flex-direction:column}.is-m .door{flex:none;min-height:0;padding:40px 24px;justify-content:flex-start;gap:28px}.is-m .door .b{font-size:42px}.is-m .ch{padding:56px 24px 40px}.is-m .ch p{font-size:34px}';
    }
    html() {
      return '<section class="cloud st"><h2 class="rise">Simple to start' + DOT + '</h2>' +
        '<svg viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true"><path d="M60 110 C 260 10, 420 10, 600 80 S 940 150, 1140 40" fill="none" stroke="' + MIST + '" stroke-width="3" stroke-dasharray="2 12" stroke-linecap="round"/><circle cx="60" cy="110" r="14" fill="' + INK + '"/><circle cx="600" cy="80" r="14" fill="' + INK + '"/><circle cx="1140" cy="40" r="22" fill="' + FLAME + '"/></svg>' +
        '<ol><li><p>Book a 20-minute call' + DOT + '</p><p>Tell us where you\'re headed and what\'s in the way.</p></li><li><p>Get a clear plan' + DOT + '</p><p>We show you what matters most, what to do first, and what it will cost.</p></li><li><p>Watch it come together' + DOT + '</p><p>We do the work alongside you, and your marketing starts pulling in one direction.</p></li></ol></section>' +
        '<section class="doors"><a class="door ink" href="' + BOOK + '" target="_blank" rel="noopener"><p class="s">For growing businesses</p><p class="b rise">You\'ve outgrown the way you talk about yourself' + DOT + '</p><p class="go">Talk with us about your business →</p></a>' +
        '<a class="door petal" href="' + CHURCH + '" target="_top"><p class="s">For churches, ministries and nonprofits</p><p class="b rise">The life inside your work isn\'t showing up online' + INKDOT + '</p><p class="go">How we help churches and ministries →</p></a></section>' +
        '<section class="cloud ch"><p class="rise">Picture it. Your team tells <b>one story</b> without a script. Visitors get what you do <em>in seconds.</em> And the right people <b>find you</b>, on Google and in AI answers' + DOT + '</p></section>';
    }
  }

  /* 8 · FAQ + CLOSE */
  var FAQ = [
    ['What does Blue Collie Studio do?', 'Blue Collie Studio is a founder-led strategy and creative studio in Nashville. We help growing businesses, churches, and nonprofits get clear on their message, build a brand and website that earn trust, and get found in Google and AI search. We do the strategy and the hands-on work.'],
    ['What is GEO, and do we need it?', 'GEO stands for Generative Engine Optimization. It helps your organization show up when people ask AI tools like ChatGPT, Gemini, or Perplexity for a recommendation. If the people you want to reach ask AI for recommendations in your field, GEO helps you show up in the answer. It works alongside SEO, not instead of it.'],
    ['Who will we work with?', 'You\'ll work with Renée and Drü directly. Renée is your main contact. When a project needs extra specialists, we bring them in and stay accountable for the work.'],
    ['Do you only work with churches and nonprofits?', 'No. We work across industries, from custom home builders to a Medicare insurance company. Churches and nonprofits are a specialty, not a limit.'],
    ['Do you use StoryBrand?', 'We use story-driven messaging inspired by StoryBrand\'s idea that the customer is the hero. We aren\'t certified StoryBrand Guides.'],
    ['How much does it cost?', 'Every project is different. After a 20-minute call, we\'ll give you a clear plan and a fixed price.'],
    ['Do you work outside Nashville?', 'Yes. We\'re based in Nashville and work with organizations across the country.'],
    ['What happens on the 20-minute call?', 'You tell us where you\'re headed and what\'s getting in the way. We\'ll ask a few questions and tell you honestly whether we\'re the right fit. No pitch deck.']
  ];
  var WORDMARK = '<svg viewBox="0 0 894.5 223.47" role="img" aria-label="Blue Collie Studio" style="display:block;width:100%;height:auto" fill="#FBFCFE"><path d="M114.841,115.061c0,20.68-13.42,43.56-49.061,43.56H0V7.04h61.38c27.721,0,45.541,16.72,45.541,39.161,0,10.56-3.96,26.4-21.341,31.46,20.021,2.86,29.261,20.02,29.261,37.4ZM58.96,37.181h-24.42v29.04h24.2c8.14,0,13.64-5.28,13.64-14.52,0-7.7-3.960-14.52-13.42-14.52ZM61.601,128.481c12.319,0,18.479-8.36,18.479-16.94,0-7.92-5.5-16.94-18.479-16.94h-27.061v33.88h27.061Z"/><path d="M122.541,158.621V0h32.56v158.621h-32.56Z"/><path d="M238.038,55.88h32.561v102.741h-32.561v-17.6c-3.52,14.3-20.02,20.24-29.479,20.24-27.28,0-40.701-18.48-40.701-49.94v-55.44h32.561v53.46c0,15.84,9.46,21.78,17.82,21.78,8.58,0,19.8-4.62,19.8-21.78v-53.46Z"/><path d="M387.856,116.821h-75.24c3.08,9.9,11.66,16.06,23.98,16.06,9.68,0,19.58-4.4,25.96-10.56l16.72,21.12c-10.12,11-27.72,17.82-44.88,17.82-32.561,0-55.44-22.44-55.440-53.68,0-33.44,25.74-54.34,55.22-54.34s54.121,20.68,54.121,51.92c0,2.86-.221,6.6-.44,11.66ZM355.956,97.681c-.439-10.12-9.46-16.94-21.12-16.94-9.68,0-19.14,4.62-22.439,16.94h43.56Z"/><path d="M392.47,82.5c0-42.68,34.32-78.1,77.001-78.1,26.62,0,49.939,13.42,63.8,33.66l-26.84,18.7c-7.92-12.32-19.58-19.8-35.42-19.8-25.521,0-43.78,20.46-43.78,45.54s17.6,46.201,43.56,46.201c16.061,0,27.721-7.48,35.641-19.8l26.84,18.7c-13.86,20.24-37.18,33.66-63.8,33.66-42.681,0-77.001-35.64-77.001-78.761Z"/><path d="M531.51,107.361c0-32.56,26.4-54.12,55.66-54.12s55.88,21.56,55.88,54.12c0,32.34-26.62,53.9-55.88,53.9s-55.66-21.56-55.66-53.9ZM609.83,107.361c0-14.08-10.12-23.98-22.66-23.98s-22.66,9.9-22.66,23.98,10.12,23.76,22.66,23.76,22.66-9.68,22.66-23.76Z"/><path d="M650.967,158.621V0h32.561v158.621h-32.561Z"/><path d="M697.604,158.621V0h32.561v158.621h-32.561Z"/><path d="M740.281,21.561c0-10.78,9.24-18.92,20.24-18.92s19.801,8.14,19.801,18.92c0,10.34-8.801,18.92-19.801,18.92s-20.24-8.58-20.24-18.92ZM744.241,158.621V55.88h32.561v102.741h-32.561Z"/><path d="M894.06,116.821h-75.24c3.08,9.9,11.66,16.06,23.98,16.06,9.68,0,19.58-4.4,25.96-10.56l16.72,21.12c-10.12,11-27.72,17.82-44.88,17.82-32.561,0-55.44-22.44-55.44-53.68,0-33.44,25.74-54.34,55.221-54.34s54.12,20.68,54.12,51.92c0,2.86-.22,6.6-.44,11.66ZM862.16,97.681c-.44-10.12-9.461-16.94-21.12-16.94-9.681,0-19.141,4.62-22.44,16.94h43.561Z"/><path d="M287.887,211.921h5.609c.11,3.245,3.135,6.379,7.864,6.379,4.51,0,7.149-2.859,7.149-5.994,0-3.354-3.025-4.949-6.104-5.774l-4.839-1.209c-8.084-2.035-9.404-6.819-9.404-9.954,0-6.654,5.884-11.108,12.593-11.108,6.819,0,12.154,4.289,12.154,11.219h-5.609c0-3.575-2.805-6.05-6.709-6.05-3.575,0-6.764,2.365-6.764,5.829,0,1.21.385,3.685,5.169,4.95l4.785,1.319c6.379,1.705,10.394,4.949,10.394,10.504,0,6.324-5.169,11.438-12.813,11.438-8.083,0-13.473-5.444-13.473-11.549Z"/><path d="M367.908,184.92v5.169h-11.273v32.721h-5.664v-32.721h-11.274v-5.169h28.211Z"/><path d="M395.686,209.776v-24.856h5.664v24.802c0,5.773,3.85,8.358,8.304,8.358s8.359-2.585,8.359-8.358v-24.802h5.664v24.856c0,8.688-6.489,13.693-14.023,13.693s-13.968-5.005-13.968-13.693Z"/><path d="M470.153,184.92c10.833,0,17.158,8.249,17.158,19.027,0,10.724-6.324,18.862-17.158,18.862h-14.738v-37.89h14.738ZM470.153,217.641c7.589,0,11.493-5.994,11.493-13.693s-3.904-13.858-11.493-13.858h-9.074v27.552h9.074Z"/><path d="M517.18,222.81v-37.89h5.664v37.89h-5.664Z"/><path d="M552.544,203.947c0-10.778,8.359-19.688,19.138-19.688,10.833,0,19.248,8.909,19.248,19.688,0,10.724-8.414,19.522-19.248,19.522-10.779,0-19.138-8.799-19.138-19.522ZM585.265,203.947c0-7.81-5.829-14.408-13.583-14.408-7.699,0-13.473,6.599-13.473,14.408,0,7.754,5.774,14.243,13.473,14.243,7.754,0,13.583-6.489,13.583-14.243Z"/></svg>';
  class Close extends Base {
    css() {
      return '.faq{padding:136px 48px 150px;display:flex;gap:88px;border-top:1px solid ' + MIST + '}.fh{flex:0 0 340px}.fh h2{font-size:96px;line-height:.88;letter-spacing:-.055em;font-weight:800}.fh p{margin-top:26px;font-size:18px;line-height:1.6;color:' + SLATE + '}' +
        '.fq{flex:1 1 0}details{border-top:1px solid ' + MIST + '}details:first-child{border-top:3px solid ' + INK + '}details:last-child{border-bottom:3px solid ' + INK + '}' +
        'summary{list-style:none;cursor:pointer;display:flex;gap:24px;align-items:baseline;padding:24px 0;font-size:21px;font-weight:700;letter-spacing:-.015em}summary::-webkit-details-marker{display:none}summary span{flex-grow:1}summary b{font-size:30px;line-height:1;color:' + FLAME + ';transition:transform .2s}details[open] summary b{transform:rotate(45deg)}' +
        'details p{padding:0 0 26px;max-width:700px;font-size:18px;line-height:1.65;color:' + SLATE + '}' +
        '.cl{padding:150px 48px 64px;display:flex;align-items:center;justify-content:space-between;gap:56px}.cl .tx{flex:1 1 0}.mix{font-size:20px;line-height:1.6;font-weight:500;color:' + PETAL + ';margin-bottom:36px}.mix span{color:' + CLOUD + '}' +
        '.cl h2{font-size:116px;line-height:.88;letter-spacing:-.055em;font-weight:200}.cl h2 b{font-weight:800}.cl h2 i.dot{font-weight:800}.cl .sub{margin-top:36px;max-width:540px;font-size:20px;line-height:1.55;font-weight:300;color:' + MIST + '}.cl .cc{margin-top:28px;font-size:17px}.cl .cc a{font-weight:700}.cl .cc small{font-size:15px;color:' + MIST + ';margin-left:8px}' +
        '.disc{flex:0 0 400px;height:400px;border-radius:50%;background:' + FLAME + ';color:' + INK + ';text-decoration:none;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px;transition:transform .5s cubic-bezier(.2,.7,.2,1)}.disc:hover{transform:scale(1.05)}.disc span{font-size:42px;font-weight:800;letter-spacing:-.04em;line-height:.95}.disc i{font-style:normal;font-size:36px;font-weight:800}' +
        '.wm{padding:40px 32px 0}' +
        '.fgrid{display:flex;gap:56px;margin-top:40px;padding:44px 48px 40px;border-top:1px solid rgba(251,252,254,.16)}.fcol{flex:1 1 0}.fcol.w{flex:1.5 1 0}' +
        '.fcol .fh2{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:' + PETAL + ';margin-bottom:16px}' +
        '.fcol a,.fcol p{display:block;font-size:17px;line-height:1.5;color:' + CLOUD + ';text-decoration:none;margin-bottom:6px}.fcol a:hover{color:' + PETAL + '}' +
        '.fcol .tl{font-size:26px;font-weight:800;letter-spacing:-.025em;line-height:1.15;margin-bottom:14px}.fcol .ds{max-width:380px;font-size:16px;font-weight:300;color:' + MIST + '}' +
        '.fbot{display:flex;justify-content:space-between;gap:16px;padding:0 48px 36px;font-size:13px;color:' + MIST + '}' +
        '.is-m .faq{flex-direction:column;gap:28px;padding:56px 24px 56px}.is-m .fh{flex-basis:auto}.is-m .fh h2{font-size:56px}.is-m summary{font-size:18px;padding:20px 0}.is-m details p{font-size:17px}' +
        '.is-m .cl{flex-direction:column;align-items:stretch;padding:64px 24px 48px}.is-m .cl h2{font-size:56px}.is-m .mix{font-size:17px}.is-m .cl .sub{font-size:18px}.is-m .disc{flex:0 0 260px;width:260px;height:260px;align-self:center}.is-m .disc span{font-size:28px}.is-m .wm{padding:24px 16px 0}.is-m .fgrid{flex-direction:column;gap:32px;margin-top:24px;padding:32px 24px 28px}.is-m .fcol .tl{font-size:22px}.is-m .fcol a,.is-m .fcol p{font-size:16px}.is-m .fbot{flex-direction:column;gap:6px;padding:0 24px 32px}';
    }
    html() {
      var q = FAQ.map(function (f, i) { return '<details' + (i === 0 ? ' open' : '') + '><summary><span>' + f[0] + '</span><b aria-hidden="true">+</b></summary><p>' + f[1] + '</p></details>'; }).join('');
      return '<section class="cloud faq"><div class="fh"><h2>Straight answers' + DOT + '</h2><p>Don\'t see yours? Ask us on a 20-minute call.</p></div><div class="fq">' + q + '</div></section>' +
        '<section class="ink"><div class="cl"><div class="tx"><p class="mix">brand · message · website · SEO · GEO · social · campaigns · email · <span>all pointing one way</span></p>' +
        '<h2 class="rise">Let\'s talk about your <b>next stage</b>' + DOT + '</h2><p class="sub">Tell us where you\'re headed, what\'s getting in the way, and what you want to build. In 20 minutes, you\'ll know whether we\'re the right partner.</p>' +
        '<p class="cc"><a class="ul" href="' + CHECK + '" target="_top">Not ready? Take the 5-minute Clarity Check →</a><small>Free · 13 questions · No email required</small></p></div>' +
        '<a class="disc" href="' + BOOK + '" target="_blank" rel="noopener"><span>Book a<br>20-minute call</span><i aria-hidden="true">→</i></a></div>' +
        '<div class="wm">' + WORDMARK + '</div>' +
        '<div class="fgrid"><div class="fcol w"><p class="tl">Big-picture thinking' + DOT + '<br>Hands-on execution' + DOT + '</p><p class="ds">A strategy and creative studio in Nashville, Tennessee. Run by its owners, Renée and Drü Collie.</p></div>' +
        '<nav class="fcol" aria-label="Footer"><p class="fh2">Explore</p><a href="/" target="_top" data-go="work">What we do</a><a href="/" target="_top" data-go="steps">How we work</a><a href="/" target="_top" data-go="owners">About</a><a href="' + CHURCH + '" target="_top">Churches &amp; Ministries</a><a href="' + CHECK + '" target="_top">The Clarity Check</a></nav>' +
        '<div class="fcol"><p class="fh2">Talk with us</p><a href="' + BOOK + '" target="_blank" rel="noopener">Book a 20-minute call</a><a href="/contact" target="_top">Contact</a><a href="tel:+16154790178">615.479.0178</a><a href="mailto:hello@bluecolliestudio.com">hello@bluecolliestudio.com</a></div></div>' +
        '<div class="fbot"><span>© 2026 Blue Collie Studio</span><span>Nashville, Tennessee</span></div></section>';
    }
    after() {
      var MAP = { work: 'bc-help,bc4-work', steps: 'bc-plan,bc4-steps', owners: 'bc-owners,bc4-owners' };
      this.shadowRoot.querySelectorAll('[data-go]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var t = document.querySelector(MAP[a.getAttribute('data-go')]);
          if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
      });
      try {
        if (!document.getElementById('bc4-faq-ld')) {
          var s = document.createElement('script');
          s.type = 'application/ld+json'; s.id = 'bc4-faq-ld';
          s.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(function (f) { return { '@type': 'Question', name: f[0], acceptedAnswer: { '@type': 'Answer', text: f[1] } }; }) });
          document.head.appendChild(s);
        }
      } catch (e) {}
    }
  }

  var TAGS = { 'bc4-hero': Hero, 'bc4-band': Band, 'bc4-problem': Problem, 'bc4-issue': Issue, 'bc4-owners': Owners, 'bc4-work': Work, 'bc4-steps': Steps, 'bc4-close': Close };
  Object.keys(TAGS).forEach(function (t) { if (!customElements.get(t)) customElements.define(t, TAGS[t]); });

  /* Aliases. The Home V4 page was duplicated from the old homepage, so its
     custom elements still carry the old tag names. Wix's tag field is fiddly
     to edit, so each old tag maps to the V4 section that now sits in its slot.
     Only the Server URL needs to change on those elements. */
  var ALIAS = { 'bc-band': Band, 'bc-ways': Problem, 'bc-fit': Issue, 'bc-owners': Owners, 'bc-help': Work, 'bc-plan': Steps, 'bc-close': Close, 'bc-hero': Hero };
  Object.keys(ALIAS).forEach(function (t) {
    if (!customElements.get(t)) customElements.define(t, class extends ALIAS[t] {});
  });
})();
