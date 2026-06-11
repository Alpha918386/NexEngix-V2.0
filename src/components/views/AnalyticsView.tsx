import React from 'react';
import { Download, RefreshCcw, CheckCircle, XCircle, BrainCircuit } from 'lucide-react';

export function AnalyticsView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen">
      <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-breathe"></div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase font-bold">Diagnostic Session #4402</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">System Architecture Analysis</h2>
        </div>
        <div className="flex gap-4">
            <button className="px-6 py-4 rounded-xl border border-outline/30 text-on-surface hover:bg-white/5 transition-all font-mono text-[11px] uppercase tracking-widest font-bold flex items-center gap-3">
               <Download className="w-4 h-4" /> Export Report
            </button>
            <button className="px-6 py-4 rounded-xl bg-primary text-on-primary font-mono text-[11px] uppercase tracking-widest font-bold glow-primary hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
               <RefreshCcw className="w-4 h-4" /> Retake Test
            </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        {/* Performance Distribution */}
        <div className="md:col-span-4 glass-panel p-8 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
            <h3 className="font-mono text-[10px] text-outline uppercase tracking-widest font-bold self-start mb-10">Performance Distribution</h3>
            
            <div className="relative w-56 h-56 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 absolute inset-0" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="16" fill="transparent" stroke="#e6b4ff" strokeWidth="3.5" strokeDasharray="72 100" strokeLinecap="round" className="glow-primary" />
                    <circle cx="18" cy="18" r="16" fill="transparent" stroke="#b3c5ff" strokeWidth="3.5" strokeDasharray="15 100" strokeDashoffset="-72" strokeLinecap="round" />
                </svg>
                <div className="text-center z-10">
                    <span className="block font-display text-5xl font-bold text-primary">84%</span>
                    <span className="font-mono text-[10px] text-outline uppercase tracking-widest font-bold mt-1 block">Success</span>
                </div>
            </div>

            <div className="grid grid-cols-3 w-full mt-10 gap-4">
                <Stat label="Correct" val="42" color="text-primary" />
                <Stat label="Wrong" val="6" color="text-secondary" />
                <Stat label="Skipped" val="2" color="text-tertiary" />
            </div>
        </div>

        {/* Improvement Vector */}
        <div className="md:col-span-8 glass-panel p-8 rounded-3xl flex flex-col">
           <div className="flex items-center justify-between mb-10">
               <h3 className="font-mono text-[10px] text-outline uppercase tracking-widest font-bold">Improvement Vector</h3>
               <div className="flex items-center gap-4">
                   <LegendDot color="bg-primary" label="Accuracy" />
                   <LegendDot color="bg-tertiary" label="Velocity" />
               </div>
           </div>

           <div className="flex-1 w-full flex items-end gap-3 px-4 relative mt-12 pb-4">
               {/* Graph columns */}
               <GraphCol h="40%" />
               <GraphCol h="55%" />
               <GraphCol h="48%" />
               <GraphCol h="70%" />
               <GraphCol h="65%" />
               <GraphCol h="85%" />
               <div className="flex-1 bg-primary rounded-t relative group flex items-end justify-center glow-primary" style={{ height: '92%' }}>
                  <div className="absolute -top-10 glass-panel px-3 py-1.5 rounded-lg font-mono text-xs font-bold text-primary">84%</div>
               </div>
           </div>

           <div className="flex justify-between px-4 pt-4 border-t border-white/5 mt-4">
               <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Session 38</span>
               <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Session 44 (Latest)</span>
           </div>
        </div>
      </div>

      <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <h3 className="font-display text-3xl font-bold">Session Review</h3>
              <div className="flex flex-wrap items-center gap-3">
                  <FilterBtn label="All" active />
                  <FilterBtn label="Correct" val="42" />
                  <FilterBtn label="Incorrect" val="6" />
                  <FilterBtn label="Unanswered" val="2" />
              </div>
          </div>

          <div className="space-y-6">
             <ReviewQuestion 
               num="01" 
               tag="Kubernetes Orchestration" 
               status="CORRECT" 
               q="Describe the primary mechanism used by Kubernetes for maintaining the desired state of a deployment across a cluster."
               opt1="A) Control Plane Reconciliation Loop"
               opt2="B) Static Manifest Locking"
               exp="You correctly identified the **Reconciliation Loop**. In Kubernetes, the `kube-controller-manager` continuously compares the *observed state* of the cluster with the *desired state* defined in the etcd store. If discrepancies exist, it executes corrective actions to bring them back into alignment."
             />
             <ReviewQuestion 
               num="02" 
               tag="Distributed Systems" 
               status="INCORRECT" 
               q="What is the primary trade-off addressed by the CAP theorem in a network-partitioned distributed database?"
               opt1="A) Consistency vs Availability"
               opt2="C) Consistency vs Latency"
               isIncorrect={true}
               exp="You confused **CAP** with **PACELC**. While the CAP theorem states that in the event of a network partition (**P**), a system must choose between Consistency (**C**) and Availability (**A**), PACELC extends this by discussing the Latency/Consistency trade-off during normal operation."
             />
          </div>
      </section>
    </div>
  );
}

function Stat({ label, val, color }: any) {
    return (
        <div className="text-center">
            <p className="font-mono text-[9px] text-outline uppercase tracking-widest font-bold mb-2">{label}</p>
            <p className={`font-display text-3xl font-bold ${color}`}>{val}</p>
        </div>
    );
}

function LegendDot({ color, label }: any) {
    return (
        <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest font-bold text-outline">
            <div className={`w-2 h-2 rounded-full ${color}`}></div> {label}
        </span>
    );
}

function GraphCol({ h }: any) {
    return <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors rounded-t cursor-pointer" style={{ height: h }}></div>
}

function FilterBtn({ label, val, active }: any) {
    return (
        <button className={`px-5 py-2.5 rounded-full glass-panel border flex items-center gap-3 transition-colors ${active ? 'border-primary text-primary glow-primary bg-primary/10' : 'border-transparent text-outline hover:border-outline/30'}`}>
            <span className="font-mono text-[10px] tracking-widest uppercase font-bold">{label}</span>
            {val && <span className="bg-surface-container px-2 py-0.5 rounded text-[10px] font-mono">{val}</span>}
        </button>
    );
}

function ReviewQuestion({ num, tag, status, q, opt1, opt2, isIncorrect, exp }: any) {
    const isCorrect = !isIncorrect;
    const color = isCorrect ? 'primary' : 'secondary';
    const bgClass = isCorrect ? 'bg-primary/10' : 'bg-secondary/10';
    const textClass = isCorrect ? 'text-primary' : 'text-secondary';
    const borderClass = isCorrect ? 'border-primary/30 text-primary glow-primary' : 'border-secondary/30 text-secondary glow-secondary';
    const Icon = isCorrect ? CheckCircle : XCircle;

    return (
        <div className={`glass-panel border border-white/5 rounded-3xl overflow-hidden hover:border-${color}/30 transition-all group`}>
             <div className="p-8">
                 <div className="flex justify-between items-center mb-6">
                     <div className="flex items-center gap-4">
                         <span className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center font-mono font-bold text-outline">{num}</span>
                         <span className={`px-3 py-1 rounded-lg ${bgClass} ${textClass} text-[10px] font-mono uppercase tracking-widest font-bold`}>{tag}</span>
                     </div>
                     <div className={`flex items-center gap-2 ${textClass}`}>
                         <Icon className="w-5 h-5" />
                         <span className="font-mono text-[11px] uppercase tracking-widest font-bold">{status}</span>
                     </div>
                 </div>
                 
                 <p className="font-body text-xl mb-8 leading-relaxed text-on-surface">{q}</p>

                 <div className="space-y-4 mb-8">
                     <div className={`p-5 rounded-2xl bg-surface-container-low border flex items-center justify-between ${isCorrect ? borderClass : 'border-primary/20 bg-primary/5'}`}>
                         <div className="flex flex-col">
                             {isIncorrect && <span className="font-mono text-[9px] uppercase tracking-widest font-bold mb-2 text-primary">Correct Answer</span>}
                             <span className="font-body font-semibold text-on-surface">{opt1}</span>
                         </div>
                         <CheckCircle className={`w-5 h-5 ${isIncorrect ? 'text-primary' : textClass}`} />
                     </div>
                     
                     {isIncorrect && (
                         <div className={`p-5 rounded-2xl bg-surface-container-low border flex items-center justify-between ${borderClass} glow-secondary`}>
                             <div className="flex flex-col">
                                 <span className="font-mono text-[9px] uppercase tracking-widest font-bold mb-2 text-secondary">Your Answer</span>
                                 <span className="font-body font-semibold text-on-surface">{opt2}</span>
                             </div>
                             <XCircle className="w-5 h-5 text-secondary" />
                         </div>
                     )}

                     {isCorrect && (
                         <div className="p-5 rounded-2xl bg-surface-container-lowest/50 border border-white/5 flex items-center justify-between opacity-50">
                             <div className="flex flex-col">
                                 <span className="font-body font-semibold text-outline">{opt2}</span>
                             </div>
                         </div>
                     )}
                 </div>

                 {/* AI Explainer */}
                 <div className={`rounded-2xl ${isCorrect ? 'bg-primary/5 border-primary/20' : 'bg-surface-container border-secondary/20'} p-6 border-l-4`}>
                    <div className="flex items-center gap-3 mb-4">
                        <BrainCircuit className={`w-6 h-6 ${textClass}`} />
                        <h4 className={`font-mono text-[11px] uppercase tracking-widest font-bold ${textClass}`}>AI Explainer</h4>
                    </div>
                    <p className="font-body text-on-surface-variant leading-relaxed">
                        {exp}
                    </p>
                 </div>
             </div>
        </div>
    );
}
