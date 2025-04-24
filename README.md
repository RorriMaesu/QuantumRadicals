# QuantumRadicals – Literature-Anchored Radical-Pair Quantum Simulator

A 100% static single-page app that visualizes quantum spin coherence in biomimetic radical pairs with real-time interactive visualizations, now enhanced with literature-anchored presets and research-grade features.

**Live demo:** <https://rorrimaesu.github.io/QuantumRadicals/>

## What's New — And Why It Matters

1. **Literature-anchored presets**
   *Flavin-Trp* and *Porphyrin–PDI* buttons load real g/A/J/D values (from 2023–24 papers). Now the tool reproduces **publishable numbers** instead of toy values.

2. **Temperature slider (77 K → 350 K)**
   The dephasing rate γ(T) follows a T² law, letting users test cryogenic vs ambient decoherence on-the-fly.

3. **Disorder averaging**
   Added σJ and σD sliders. Monte-Carlo averaging shows how **structural disorder** flattens the compass signal—useful for experimentalists deciding how rigid their linker must be.

4. **Download-CSV button**
   Exports angle-resolved yields so researchers can drop raw data into Origin / Matlab and compare with bench experiments.

5. **Heat-map sweep**
   One-click 2-D plot of singlet survival vs hyperfine & γ gives a quick design chart.

These additions transform the page from a demo into a **research aid**: you can reproduce figures, attach CSV data to lab notebooks, and instantly see how cooling or disorder will hurt/help coherence.

## Core Features
* Interactive sliders for all key parameters:
  * Magnetic field strength (B) in mT
  * Hyperfine coupling (A) in MHz
  * Exchange interaction (J) in MHz
  * Dipolar coupling (D) in MHz
  * Decoherence rate (γ) in μs⁻¹
  * Temperature (T) in K
  * Exchange coupling disorder (σJ) in MHz
  * Dipolar coupling disorder (σD) in MHz
* Real-time polar plot of singlet yield vs orientation angle
* Animated coherence-decay graph showing quantum oscillations
* Heat-map visualization of singlet survival across parameter space
* Clean, responsive dark theme that works on mobile and desktop
* Vanilla JS + Plotly, no build step, deploys via GitHub Pages

## Physics
The simulation implements a physically accurate two-level analytic model of radical pair dynamics, including:
* Zeeman interaction with external magnetic field
* Hyperfine coupling with nuclear spins
* Exchange and dipolar interactions between electron spins
* Temperature-dependent quantum decoherence effects
* Orientation dependence of hyperfine coupling
* Structural disorder through Monte-Carlo averaging
* Literature-validated parameter sets from recent publications

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
