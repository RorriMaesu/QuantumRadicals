import {params, yieldAtAngle, singletProb, pi, toRad} from './sim.js';

// redraw polar plot
export function updatePolar(){
  const th = [...Array(361).keys()].map(d => toRad(d));
  const r = th.map(a => yieldAtAngle(a, params));
  Plotly.react('polar', [{
    r,
    theta: th.map(a => a * 180 / pi),
    type: 'scatterpolar',
    mode: 'lines',
    line: {color: 'var(--accent)'}
  }], {
    paper_bgcolor: 'var(--bg)',
    plot_bgcolor: 'var(--bg)',
    polar: {angularaxis: {dtick: 45}},
    margin: {t: 0}
  }, {
    displayModeBar: false
  });
}

// redraw coherence decay
export function updateDecay(){
  const t = [...Array(301).keys()].map(i => i * 0.02); // 0-6 μs
  const y = t.map(x => singletProb(x, params));
  Plotly.react('decay', [{
    x: t,
    y,
    mode: 'lines',
    line: {color: 'var(--accent2)'}
  }], {
    paper_bgcolor: 'var(--bg)',
    plot_bgcolor: 'var(--bg)',
    xaxis: {title: 't (μs)'},
    yaxis: {title: 'P_S'},
    margin: {t: 10}
  }, {
    displayModeBar: false
  });
}

// parameter sweep heat-map
export function sweepMap(){
  const Avals = [...Array(31).keys()];      // 0-30 MHz
  const gammas = [...Array(21).keys()].map(i => i * 0.05); // 0-1 μs⁻¹

  // Calculate coherence times (T2 ≈ 1/γ)
  const z = gammas.map(g => {
    return Avals.map(() => {
      return 1/(g || 0.001); // Avoid division by zero
    });
  });

  Plotly.newPlot('map', [{
    z,
    x: Avals,
    y: gammas,
    type: 'heatmap',
    colorscale: 'Viridis'
  }], {
    paper_bgcolor: 'var(--bg)',
    plot_bgcolor: 'var(--bg)',
    xaxis: {title: 'A_z (MHz)'},
    yaxis: {title: 'γ (μs⁻¹)'},
    margin: {t: 20}
  }, {
    displayModeBar: false
  });

  document.getElementById('map').style.display = 'block';
}
