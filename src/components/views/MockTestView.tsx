import React, { useState } from 'react';
import { Timer, Bookmark, ArrowLeft, ArrowRight } from 'lucide-react';

export function MockTestView() {
  const [marked, setMarked] = useState(false);
  const answered = [1, 2, 4, 5, 8, 9, 10, 11, 12, 13];
  const review = [3, 7, 14];

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar: Question Grid */}
      <aside className="w-full md:w-80 bg-surface-container-low border-r border-white/5 flex flex-col shrink-0 overflow-y-auto">
        {/* Timer */}
        <div className="p-6 border-b border-white/5 bg-surface-container/30">
          <div className="flex justify-between items-center mb-2">
            <span className="font-mono text-xs text-outline uppercase tracking-widest font-bold">Remaining</span>
            <Timer className="text-secondary w-5 h-5" />
          </div>
          <div className="font-display text-4xl font-black text-secondary tracking-tighter">
            01:24:57
          </div>
          <div className="mt-4 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-[75%] glow-secondary"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-mono text-xs text-on-surface uppercase tracking-widest font-bold">Question Grid</h3>
            <span className="font-mono text-[10px] text-outline">14 / 60</span>
          </div>
          
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 60 }).map((_, i) => {
              const num = i + 1;
              const isAnswered = answered.includes(num);
              const isReview = review.includes(num);
              const isActive = num === 14;

              let btnClass = "w-10 h-10 rounded-lg flex items-center justify-center font-mono text-[11px] transition-all border font-bold ";
              if (isAnswered) {
                  btnClass += "bg-primary text-on-primary border-primary glow-primary";
              } else if (isReview) {
                  btnClass += "bg-tertiary/20 text-tertiary border-tertiary shadow-[0_0_15px_rgba(219,225,255,0.2)]";
              } else {
                  btnClass += "bg-surface-container-highest text-outline border-white/5";
              }
              if (isActive) {
                  btnClass += " ring-2 ring-white ring-offset-2 ring-offset-surface";
              }

              return (
                <button key={num} className={btnClass}>
                  {num.toString().padStart(2, '0')}
                </button>
              );
            })}
          </div>

          <div className="mt-8 space-y-3">
             <LegendItem color="bg-primary glow-primary" label="Answered" />
             <LegendItem color="bg-tertiary/20 border border-tertiary" label="Marked for Review" />
             <LegendItem color="bg-surface-container-highest border border-white/10" label="Not Visited" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 flex flex-col bg-surface overflow-y-auto">
        <div className="px-8 py-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 bg-surface/90 backdrop-blur-md z-20">
          <div>
            <span className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold">Question 14 of 60</span>
            <h2 className="font-display text-2xl text-on-surface mt-1 font-bold">Distributed Systems Consistency</h2>
          </div>
          <button 
            onClick={() => setMarked(!marked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${marked ? 'border-tertiary bg-tertiary/20 text-tertiary' : 'border-tertiary/30 text-tertiary hover:bg-tertiary/10'} transition-all font-mono text-[10px] uppercase tracking-widest font-bold`}
          >
            <Bookmark className={`w-4 h-4 ${marked ? 'fill-current' : ''}`} />
            Mark for Review
          </button>
        </div>

        <div className="p-8 max-w-4xl mx-auto w-full space-y-8 pb-32">
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              In a geographically distributed database system utilizing an eventual consistency model, a developer observes significant replication lag between the US-East and AP-South clusters. Given the following pseudo-code configuration for a consensus engine, identify the most likely bottleneck leading to increased stale read latency.
            </p>

            <div className="glass-panel p-6 rounded-2xl border-white/10 font-mono text-sm overflow-x-auto bg-[#0a111a]">
                <pre>
<span className="text-outline-variant">// Cluster Configuration Initialization</span>
<span className="text-tertiary">cluster</span>.primary_region = <span className="text-secondary">'us-east-1'</span>;
<span className="text-tertiary">cluster</span>.replicas = [<span className="text-secondary">'eu-west-1'</span>, <span className="text-secondary">'ap-south-1'</span>];
<span className="text-tertiary">cluster</span>.consensus_protocol = <span className="text-secondary">'RAFT'</span>;

<span className="text-outline-variant">// Heartbeat Interval (ms)</span>
<span className="text-tertiary">const</span> HB_INTERVAL = <span className="text-secondary">2500</span>;
<span className="text-tertiary">const</span> QUORUM_THRESHOLD = (<span className="text-tertiary">cluster</span>.replicas.length + 1) / 2;

<span className="text-outline-variant">// Replication Stream Handler</span>
<span className="text-tertiary">function</span> <span className="text-primary-container">syncLog</span>(packet) {"{"}
    <span className="text-tertiary">if</span> (packet.latency {">"} <span className="text-secondary">500</span>) {"{"}
        <span className="text-tertiary">return</span> <span className="text-primary-container">retryWithExponentialBackoff</span>(packet);
    {"}"}
    <span className="text-tertiary">return</span> <span className="text-primary-container">commitLocal</span>(packet);
{"}"}
                </pre>
            </div>

            <div className="space-y-4 pt-4">
                <Option label="Option A" text="The HB_INTERVAL is set too high for rapid failover detection, causing log serialization delays." />
                <Option label="Option B" text="The 500ms latency threshold in syncLog triggers excessive retries due to trans-continental RTT limitations." selected />
                <Option label="Option C" text="RAFT consensus requires a strict majority which cannot be achieved with only 2 replicas plus 1 primary." />
                <Option label="Option D" text="The Quorum threshold calculation uses integer division incorrectly, preventing commit finalization." />
            </div>
        </div>

        <div className="mt-auto p-6 md:px-8 border-t border-white/5 bg-surface-container-lowest/90 backdrop-blur-xl flex flex-col md:flex-row justify-between gap-4 sticky bottom-0 z-20">
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-outline/30 text-on-surface hover:bg-white/5 transition-all font-mono text-[11px] uppercase tracking-widest font-bold">
               <ArrowLeft className="w-5 h-5" /> Previous
            </button>
            <div className="flex gap-4">
               <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-all font-mono text-[11px] uppercase tracking-widest font-bold">
                  Clear Response
               </button>
               <button className="flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-primary text-on-primary font-mono text-[11px] uppercase tracking-widest font-bold glow-primary active:scale-95 transition-all">
                  Save & Next <ArrowRight className="w-5 h-5" />
               </button>
            </div>
        </div>
      </section>
    </div>
  );
}

function LegendItem({ color, label }: any) {
  return (
      <div className="flex items-center gap-3 relative z-10">
          <div className={`w-3 h-3 rounded-sm ${color}`}></div>
          <span className="font-mono text-[10px] text-outline uppercase tracking-widest font-bold">{label}</span>
      </div>
  );
}

function Option({ label, text, selected = false }: any) {
    if (selected) {
        return (
            <label className="flex items-start gap-5 p-6 rounded-2xl border-2 border-primary bg-primary/10 glow-primary cursor-pointer active:scale-[0.99] transition-transform">
               <input type="radio" name="opt" defaultChecked className="mt-1" />
               <div>
                   <span className="block font-mono text-[10px] text-primary uppercase tracking-widest font-bold mb-2">{label}</span>
                   <p className="font-body text-on-surface font-medium">{text}</p>
               </div>
            </label>
        );
    }
    return (
        <label className="flex items-start gap-5 p-6 rounded-2xl border border-white/5 bg-surface-container-low hover:border-primary/50 cursor-pointer active:scale-[0.99] transition-all">
               <input type="radio" name="opt" className="mt-1 opacity-50" />
               <div>
                   <span className="block font-mono text-[10px] text-outline uppercase tracking-widest font-bold mb-2">{label}</span>
                   <p className="font-body text-on-surface-variant font-medium">{text}</p>
               </div>
        </label>
    );
}
