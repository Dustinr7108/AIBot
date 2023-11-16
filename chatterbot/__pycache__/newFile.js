import { e, i, n, s } from "./polymer_bundled.min";

new window.MutationObserver((function () { s = !1; const t = n.length; for (let e = 0; e < t; e++) { let t = n[e]; if (t) try { t(); } catch (t) { setTimeout((() => { throw t; })); } } n.splice(0, t), e += t; })).observe(i, { characterData: !0 });
