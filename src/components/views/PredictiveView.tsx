import React from 'react';
import { Search, Rocket, Building2, TrendingUp, Layers, ArrowRight, Brain } from 'lucide-react';

export function PredictiveView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      {/* Search Header */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">Predictive <span className="rainbow-text">Intelligence</span></h1>
              <p className="font-body text-lg text-on-surface-variant max-w-2xl">
                  Simulate high-velocity career trajectories based on your CBT vectors and technical aptitude profiles.
              </p>
          </div>
          <div className="flex items-center gap-3 glass-panel px-5 py-3 rounded-full border-primary/20 glow-primary shrink-0">
             <div className="w-3 h-3 rounded-full bg-primary animate-breathe"></div>
             <span className="font-mono text-[10px] text-primary font-bold tracking-widest uppercase">System Override: Active</span>
          </div>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 glass-panel p-8 rounded-3xl flex flex-col gap-6 justify-center">
              <div className="relative w-full">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-outline" />
                  <input type="text" placeholder="Search directory: Tier-1 Firms, Unicorns..." className="w-full bg-surface-container-low border-0 border-b-2 border-outline/20 focus:border-primary focus:ring-0 rounded-t-xl pl-16 py-6 text-lg font-body outline-none transition-colors" />
              </div>
              <div className="flex flex-wrap gap-3">
                  <Tag label="#HFT" color="primary" />
                  <Tag label="#AI-ENGINEERING" color="secondary" />
                  <Tag label="#SYSTEMS-DESIGN" color="tertiary" />
                  <Tag label="#DEVOPS" color="default" />
              </div>
          </div>

          <div className="md:col-span-4 glass-panel p-8 rounded-3xl flex items-center justify-center bg-gradient-to-br from-primary-container/10 to-transparent border-primary/20 glow-primary text-center">
              <div>
                 <p className="font-mono text-xs uppercase tracking-widest font-bold text-primary mb-4">CBT Core Score</p>
                 <h2 className="font-display text-7xl md:text-8xl font-black rainbow-text leading-none mb-3">982</h2>
                 <p className="font-mono text-sm text-on-surface-variant tracking-wider">Percentile: Top 0.04%</p>
              </div>
          </div>
      </div>

      <section className="space-y-8">
          <div className="flex items-center justify-between">
              <h3 className="font-display text-3xl font-bold flex items-center gap-3">
                  <Rocket className="text-secondary w-8 h-8" /> University Placement Forecast
              </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ForecastCard 
                 image="https://lh3.googleusercontent.com/aida-public/AB6AXuDd0aajH9poSNczMJNAi-VsL_-vTqmpqVFDgVZpcAyVaxhC3qvirU9kyE6a_B4pG3U9-IRw36mfIch8V7hnRQTeUvUuABb54dmRQd88XvtwiID9yaarhA46t4rLaSJ9tXzypRTXZY_7xLJqMz__WU0vZqGGCv2NPXgPhQv67VJgnM7UlnHRaSH_JQFa5A48MPnRG5COWNq5jI3qYascqKrHX83K81AnzGH0wDKMKvsFGjEuc92-60TFI0ZTwkqfKQU5tH_aOMkbYBWA"
                 prob="94% Probability"
                 title="MIT / CSAIL"
                 track="Distributed Systems Track"
                 perc={94}
                 desc="Your current mastery of Rust and Parallel Computing aligns perfectly with the upcoming recruitment cycle."
                 color="primary"
              />
              <ForecastCard 
                 image="https://lh3.googleusercontent.com/aida-public/AB6AXuDPs1oZa_a7lqPEtR5V1q0FhDg2LN4kMG7zTstmJtAYYxmc1B9zQanr1-tJIEPemH0joxGsjxrY-todfpdB0cLggmMc21JThii0ja9JxCXvnPYSAo8TQMKn5DCyATiOY_ymsNdIe5CDm7Cve6PsSySfbfsyF9H3mOv1N8RgJvkXX9dtJ9ecW2cvQWfLlGtQg25YKSjcNrH5KtuCflJo0HmNuMaVcWwkCmKoBUVgO5vlSQb0kWTR43BsgS9t7Y7dk1-UsOXHN5aJ0uUh"
                 prob="81% Probability"
                 title="Stanford AI Lab"
                 track="Neuro-symbolic Learning"
                 perc={81}
                 desc="Predicted acceptance high due to your recent submission to the NeurIPS synthetic data challenge."
                 color="secondary"
              />
              <ForecastCard 
                 image="https://lh3.googleusercontent.com/aida-public/AB6AXuAJWyCcmzmaP0v0PUa_nSw4MDl_q9aI9zEH7qHcthMEUH_a_7ginTBx50rizmcmRlg1Zmf5xq7xRZ06_lPAr1Huu1zJfXKFkAHBfV4VWm7L00Ozg8K41-rVQcvtOce2juHo7H6xvWZRyJ_FVXsWlm3x1OXf1BiGmFlaHv1NIjXn_6Rmb4ykejzsK9hziWWDBEnBEARBprtj0mjOgJOk-lQkh_rQ4-Ao88NcwKiCcsOz_5C-mzPbytGowf5Bs-V0kgDmBVsFVbqWJMbC"
                 prob="75% Probability"
                 title="ETH Zürich"
                 track="Quantum Algorithms"
                 perc={75}
                 desc="Strong mathematical alignment. Consider optimizing your Qiskit portfolio for an additional 12% boost."
                 color="tertiary"
              />
          </div>
      </section>

      <section className="space-y-8 pb-10">
          <h3 className="font-display text-3xl font-bold flex items-center gap-3">
              <Building2 className="text-primary w-8 h-8" /> Hiring Tracks & Firms
          </h3>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8">
             <CompanyCard icon={<Layers />} firm="NEURAL LINKAGE" tier="TIER-01" color="primary" t1="Core Infrastructure" t2="Signal Processing" />
             <CompanyCard icon={<TrendingUp />} firm="CITADEL SEC" tier="HFT / QUANT" color="secondary" t1="Quant Engineering" t2="FPGA Development" />
             <CompanyCard icon={<Brain />} firm="ANTHROPIC AI" tier="UNICORN" color="tertiary" t1="Alignment Research" t2="Model Optimization" />
          </div>
      </section>
    </div>
  );
}

function Tag({ label, color }: any) {
    const styling = {
        primary: 'bg-primary/10 text-primary border-primary/30',
        secondary: 'bg-secondary/10 text-secondary border-secondary/30',
        tertiary: 'bg-tertiary/10 text-tertiary border-tertiary/30',
        default: 'bg-surface-container-high text-on-surface-variant border-outline/20'
    }[color as string];

    return <span className={`px-4 py-1.5 rounded-full border font-mono text-[10px] tracking-wider font-bold ${styling}`}>{label}</span>;
}

function ForecastCard({ image, prob, title, track, perc, desc, color }: any) {
    const bgMap = {
        primary: 'bg-primary text-on-primary',
        secondary: 'bg-secondary text-on-secondary',
        tertiary: 'bg-tertiary text-on-tertiary'
    }[color as string] || 'bg-primary';

    const fillMap = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color as string];

    return (
        <div className={`glass-panel rounded-3xl overflow-hidden group hover:border-${color}/50 hover:glow-${color} transition-all duration-500 cursor-pointer flex flex-col`}>
             <div className="h-40 relative overflow-hidden">
                 <img src={image} className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700" alt="campus" />
                 <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                 <div className={`absolute top-4 right-4 ${bgMap} px-3 py-1.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-widest`}>
                    {prob}
                 </div>
             </div>
             <div className="p-8 space-y-6 flex-1 flex flex-col justify-between z-10 bg-surface/40">
                 <div>
                     <h4 className="font-display text-2xl font-bold mb-2 text-on-surface">{title}</h4>
                     <p className="font-mono text-[10px] text-outline uppercase tracking-widest font-bold mb-5">{track}</p>
                     <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden mb-4">
                         <div className={`h-full ${fillMap}`} style={{ width: `${perc}%` }}></div>
                     </div>
                     <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                        {desc}
                     </p>
                 </div>
                 <button className={`w-full py-4 rounded-xl border border-${color}/30 text-${color} font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-${color}/10 transition-colors`}>
                     View Requirements
                 </button>
             </div>
        </div>
    );
}

function CompanyCard({ icon, firm, tier, color, t1, t2 }: any) {
     const tColorClass = {
         primary: 'text-primary border-primary/30 group-hover:text-primary glow-primary',
         secondary: 'text-secondary border-secondary/30 group-hover:text-secondary glow-secondary',
         tertiary: 'text-tertiary border-tertiary/30 group-hover:text-tertiary shadow-[0_0_20px_-5px_rgba(247,244,255,0.4)]'
     }[color as string];

     return (
         <div className="w-[400px] shrink-0 glass-panel p-8 rounded-3xl group cursor-pointer hover:bg-surface-container/50 transition-colors">
             <div className="flex justify-between items-start mb-6">
                 <div className={`w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center border ${tColorClass} transition-colors`}>
                    {icon}
                 </div>
                 <span className={`font-mono text-[10px] font-bold uppercase tracking-widest text-${color}`}>{tier}</span>
             </div>
             <h4 className="font-display text-2xl font-bold mb-2 group-hover:text-white transition-colors">{firm}</h4>
             <div className="space-y-4 mt-8">
                 <p className="font-mono text-[10px] text-outline font-bold tracking-widest uppercase mb-1">Active Tracks:</p>
                 <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                     <span className="font-body font-semibold text-sm">{t1}</span>
                     <ArrowRight className={`w-4 h-4 text-${color}`} />
                 </div>
                 <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                     <span className="font-body font-semibold text-sm">{t2}</span>
                     <ArrowRight className={`w-4 h-4 text-${color}`} />
                 </div>
             </div>
         </div>
     );
}
