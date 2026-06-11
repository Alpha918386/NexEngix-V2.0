import React from 'react';
import { Route, Brain, Network, AlertTriangle, Play, BookOpen } from 'lucide-react';

export function RoadmapView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-5xl font-bold text-primary mb-3 uppercase tracking-tight">Neural_Pathway</h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl">
            Adaptive engineering syllabus generated for <span className="text-primary font-bold">Cloud Infrastructure Specialist</span>. Your focus: Optimized Resource Scheduling and Edge Security.
          </p>
        </div>
        <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform glow-primary font-mono text-sm tracking-widest uppercase">
          Initialize Session <Play className="w-4 h-4" />
        </button>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Dynamic Roadmap */}
        <div className="lg:col-span-8 space-y-10">
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
            <h2 className="font-display text-3xl font-bold text-primary mb-10 flex items-center gap-3">
              <Route className="w-8 h-8" />
              Adaptive Roadmap
            </h2>
            
            <div className="relative pl-12 space-y-12">
              <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-gradient-to-b from-primary via-tertiary to-secondary rounded-full"></div>
              
              {/* Milestone 1 */}
              <div className="relative group cursor-pointer">
                <div className="absolute -left-[37px] top-1 w-6 h-6 rounded-full bg-surface border-2 border-primary flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-primary uppercase tracking-widest">Phase 01</span>
                      <span className="px-2 py-0.5 bg-primary/20 text-primary font-mono text-[10px] rounded uppercase font-bold tracking-wider">Completed</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">Distributed Systems Core</h3>
                    <p className="font-body text-on-surface-variant">Mastering CAP theorem, consensus algorithms (Raft/Paxos), and gossip protocols.</p>
                  </div>
                  <div className="md:w-24 flex items-center justify-end font-display text-6xl font-black opacity-10">
                    01
                  </div>
                </div>
              </div>
              
              {/* Milestone 2 */}
              <div className="relative group cursor-pointer">
                <div className="absolute -left-[37px] top-1 w-6 h-6 rounded-full bg-surface border-2 border-secondary flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-breathe"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-secondary/50 bg-secondary/10 hover:bg-secondary/15 transition-colors glow-secondary">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-secondary uppercase tracking-widest">Phase 02</span>
                      <span className="px-2 py-0.5 bg-secondary/20 text-secondary font-mono text-[10px] rounded uppercase font-bold tracking-wider">Active Recovery</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-on-surface">Cloud-Native Security Patterns</h3>
                    <p className="font-body text-on-surface-variant">Deep dive into Zero Trust Architecture, mTLS orchestration, and IAM policy hardening.</p>
                    <div className="mt-4 flex gap-2">
                        <span className="px-3 py-1 bg-surface-container-high border border-white/5 rounded-full text-xs font-mono">mTLS Deep Dive</span>
                        <span className="px-3 py-1 bg-surface-container-high border border-white/5 rounded-full text-xs font-mono">Policy as Code</span>
                    </div>
                  </div>
                  <div className="md:w-24 flex items-center justify-end font-display text-6xl font-black opacity-10">
                    02
                  </div>
                </div>
              </div>
              
              {/* Milestone 3 */}
              <div className="relative group cursor-pointer opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="absolute -left-[37px] top-1 w-6 h-6 rounded-full bg-surface border-2 border-outline flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-outline"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-outline/20 bg-surface-container-low">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">Phase 03</span>
                      <span className="px-2 py-0.5 bg-outline/20 text-on-surface-variant font-mono text-[10px] rounded uppercase font-bold tracking-wider">Locked</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">Observability & SRE</h3>
                    <p className="font-body text-on-surface-variant">High-cardinality metrics, tracing across boundaries, and error budget management.</p>
                  </div>
                  <div className="md:w-24 flex items-center justify-end font-display text-6xl font-black opacity-10">
                    03
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-primary flex flex-col items-start hover:bg-white/5 transition-colors cursor-pointer">
               <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-4 border border-primary/30">
                 <Brain className="w-6 h-6" />
               </div>
               <span className="font-mono text-xs text-primary tracking-widest font-bold mb-2">45 MIN</span>
               <h4 className="font-display text-xl font-bold mb-2">Active Recall</h4>
               <p className="font-body text-on-surface-variant text-sm mb-6 flex-1">Topic: Kubernetes Scheduler Priority Class & Preemption.</p>
               <button className="w-full py-3 bg-surface-container-highest border border-white/5 rounded-xl text-primary font-mono text-sm tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-colors">Start Drill</button>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-tertiary flex flex-col items-start hover:bg-white/5 transition-colors cursor-pointer">
               <div className="w-12 h-12 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center mb-4 border border-tertiary/30">
                 <BookOpen className="w-6 h-6" />
               </div>
               <span className="font-mono text-xs text-tertiary tracking-widest font-bold mb-2">90 MIN</span>
               <h4 className="font-display text-xl font-bold mb-2">Mock Test Simulation</h4>
               <p className="font-body text-on-surface-variant text-sm mb-6 flex-1">Architectural Design Review: Scale-to-Zero Serverless Clusters.</p>
               <button className="w-full py-3 bg-surface-container-highest border border-white/5 rounded-xl text-tertiary font-mono text-sm tracking-widest uppercase hover:bg-tertiary hover:text-on-tertiary transition-colors">Initialize Simulation</button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-display text-xl text-secondary font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Array Weak Points
            </h3>
            
            <div className="space-y-6">
              <WeaknessItem name="Network Partitioning" value="32" color="secondary" label="CRITICAL" />
              <WeaknessItem name="Latency Optimization" value="58" color="primary" label="MODERATE" />
              <WeaknessItem name="Data Consistency" value="84" color="tertiary" label="STABLE" />
            </div>
            
            <div className="mt-8 p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
               <p className="font-mono text-[11px] leading-relaxed text-on-surface-variant">
                 <span className="text-secondary font-bold uppercase">AI Recommendation:</span> Your retention of distributed locks is failing under stress tests. Allocating 3 extra hours to "Revision" this week.
               </p>
            </div>
          </div>
          
          <div className="glass-panel rounded-2xl aspect-square flex flex-col items-center justify-center p-8 text-center border-t-2 border-t-primary glow-primary relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/5"></div>
             <Network className="w-16 h-16 text-primary mb-4 relative z-10 animate-breathe" />
             <h3 className="font-display text-2xl font-bold mb-2 relative z-10">The Neural Core</h3>
             <p className="font-body text-on-surface-variant text-sm relative z-10">Real-time simulation of your knowledge expansion across the tech stack.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeaknessItem({ name, value, color, label }: { name: string; value: string; color: 'primary' | 'secondary' | 'tertiary'; label: string }) {
    const bgColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[color];
    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
    }[color];

    return (
        <div>
           <div className="flex justify-between items-end mb-2">
               <span className="font-body text-sm font-semibold">{name}</span>
               <span className={`font-mono text-[10px] tracking-wider uppercase ${textColor}`}>{label} ({value}% Mastery)</span>
           </div>
           <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-white/5">
                <div className={`h-full ${bgColor}`} style={{ width: `${value}%` }}></div>
           </div>
        </div>
    );
}
