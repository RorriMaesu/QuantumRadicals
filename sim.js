// Quick radical-pair solver (S-T two-level) in vanilla JS
// Units: MHz for couplings, μs for time, mT for B
export const params = {B:0.05, A:5, J:0, D:0, gamma:0.1};

// helper
const pi = Math.PI;

// Compute Δω (effective singlet-triplet splitting in MHz)
function deltaOmega({B,A,J,D}) {
  const zeeman = 28.0 * B;     // γ_e B in MHz (γ_e = 28 MHz/mT)
  return Math.sqrt((A/2)**2 + (J+D-zeeman)**2);
}

// Time-domain singlet probability (analytical S ↔ T oscillation with decoherence γ)
export function singletProb(t,p=params){
  const δω = deltaOmega(p);
  return 0.5*(1 + Math.exp(-p.gamma*t)*Math.cos(2*pi*δω*t));
}

// Polar yield integral Φ_S(θ) for 0-π (fast numeric)
export function yieldAtAngle(theta,p=params){
  // simple orientation via A_z = A cosθ, A_x = A sinθ
  const Aeff = p.A*Math.abs(Math.cos(theta));
  const local = {...p, A:Aeff};
  // integrate 0--5 μs
  let sum=0, dt=0.002; // μs
  for(let t=0;t<=5;t+=dt) sum+= singletProb(t,local)*dt;
  return sum;      // proportional to yield
}
