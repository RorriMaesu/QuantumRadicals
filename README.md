# QuantumRadicals – Interactive Radical-Pair Simulator

A 100 % static single-page app that visualizes room-temperature spin
coherence in biomimetic radical pairs.

**Live demo:** <https://rorrimaesu.github.io/QuantumRadicals/>

## Features
* Drag sliders for B, hyperfine A, exchange J, dipolar D, decoherence γ
* Instant polar plot of singlet yield vs angle
* Animated coherence-decay graph
* Heat-map sweep of T₂ across (A,γ)
* Vanilla JS + Plotly, no build step, deploys via GitHub Pages

Physics: minimal two-level analytic model.

---

## Step-by-Step Build & Deploy Guide

| Step | Command / Action | Purpose |
|------|------------------|---------|
| 1 | `gh repo create QuantumRadicals --public -y` | create empty repo |
| 2 | `cd QuantumRadicals`<br>`echo` *(paste code files)* | add `index.html`, `style.css`, `sim.js`, `plot.js`, `README.md` |
| 3 | `git add . && git commit -m "initial radical-pair sim"` | commit |
| 4 | `git push -u origin main` | push to GitHub |
| 5 | In repo settings → **Pages** → branch `/main` + root | enable Pages |
| 6 | wait 1-2 min → open <https://rorrimaesu.github.io/QuantumRadicals/> | 🎉 working demo |

No bundlers, no npm—*super light*.

---

## Why it'll amaze

* **Zero install:** loads instantly in any browser—even mobile—thanks to Plotly's CDN.
* **Real physics:** sliders run an analytic radical-pair model in JavaScript, not canned data.
* **Live animation:** the coherence curve re-calculates every ~20 ms, visibly damping as γ grows.
* **STEM outreach:** users discover how tiny parameter tweaks flip quantum behavior.
* **Hack-ready:** only ♥4 KB of JS; advanced users can fork and add QuTiPy-compiled WASM later.

---

> **Next-level ideas**  
> • Swap analytic solver for a small WASM-compiled Lindblad integrator (Pyodide)  
> • Add "movie mode" that records GIFs of the oscillations  
> • Embed in your LaTeX article via `\href` QR-code to let reviewers play 😎  

---

Happy quantum hacking!  
*— Andrew (rorrimaesu)*
