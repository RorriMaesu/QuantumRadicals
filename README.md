# QuantumRadicals – Radical-Pair Quantum-Coherence Workbench v2.0

A 100% static single-page app that visualizes quantum spin coherence in biomimetic radical pairs with real-time interactive visualizations, enhanced with literature-anchored presets and research-grade features.

**Live demo:** <https://rorrimaesu.github.io/QuantumRadicals/>

## What's New in v2.0 — "Quantum-Coherence Workbench"

1. **DOI-linked presets**
   *Flavin-Trp (Hore 2023)* and *PDI-ZnP (Baker 2024)* presets with direct DOI links and figure references. Includes inline benchmark notice to verify reproduction of published data.

2. **Enhanced temperature and bath physics**
   * Temperature-driven γ(T) with T² law (77K to 350K)
   * Nuclear bath size slider to model multi-nuclear effects
   * Spin-orbit coupling (SOC) toggle for heavy-atom effects

3. **Improved disorder modeling**
   * σJ and σD sliders with reproducible Monte-Carlo averaging
   * Seed control for exact reproducibility of disorder simulations
   * Single-click JSON export for sharing exact parameter sets

4. **Better visualization**
   * Units on all axes for publication-ready figures
   * Heat-map button for A vs γ design chart
   * Benchmark overlay with literature references

These enhancements transform the application into a true "Quantum-Coherence Workbench" suitable for research and education.

## Core Features
* Interactive controls for all key parameters:
  * Magnetic field strength (B) in mT
  * Hyperfine coupling (A) in MHz
  * Exchange interaction (J) in MHz
  * Dipolar coupling (D) in MHz
  * Decoherence rate (γ) in μs⁻¹
  * Temperature (T) in K
  * Exchange coupling disorder (σJ) in MHz
  * Dipolar coupling disorder (σD) in MHz
  * Nuclear bath size (nuclei)
  * Reproducibility seed
  * Spin-orbit coupling toggle
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
* Structural disorder through reproducible Monte-Carlo averaging
* Spin-orbit coupling effects
* Multi-nuclear bath scaling
* Literature-validated parameter sets with DOI references

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
