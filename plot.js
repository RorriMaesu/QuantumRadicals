import {params, yieldAtAngle, singletProb} from './sim.js';

// redraw polar plot
export function updatePolar(){
  const th = [...Array(361).keys()].map(d=>d*Math.PI/180);
  const ys = th.map(a=>yieldAtAngle(a,params));
  Plotly.react('polar',[{r:ys, theta:th.map(a=>a*180/Math.PI),
      type:'scatterpolar', mode:'lines', line:{color:'#00bcd4'}}],
      {polar:{angularaxis:{dtick:45}}, margin:{t:0}, paper_bgcolor:'#111', plot_bgcolor:'#111'});
}

// redraw coherence decay
export function updateDecay(){
  const t = [...Array(300).keys()].map(i=>i*0.02); // 0-6 μs
  const y = t.map(x=>singletProb(x,params));
  Plotly.react('decay',[{x:t,y, mode:'lines', line:{color:'#ff4081'}}],
      {xaxis:{title:'t (μs)'}, yaxis:{title:'P_S'}, margin:{t:10}, paper_bgcolor:'#111', plot_bgcolor:'#111'});
}

// parameter sweep heat-map
export function sweepMap(){
  const Avals = [...Array(31).keys()].map(i=>i);      // 0-30 MHz
  const gammas = [...Array(21).keys()].map(i=>i*0.05); // 0-1 μs⁻¹
  const z = gammas.map(g=>{
    return Avals.map(A=>{
      // crude T2 ≈ 1/γ for our simple model
      return 1/(g||0.001);
    });
  });
  Plotly.newPlot('map',[{z, x:Avals, y:gammas, type:'heatmap', colorscale:'Viridis'}],
      {xaxis:{title:'A_z (MHz)'}, yaxis:{title:'γ (μs⁻¹)'}, margin:{t:20}, paper_bgcolor:'#111', plot_bgcolor:'#111'});
  document.getElementById('map').style.display='block';
}
