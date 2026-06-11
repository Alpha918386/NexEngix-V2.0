import React from 'react';
import { Zap, CheckCircle, Circle, Play, RefreshCw, Waves, Filter } from 'lucide-react';

export function FocusView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Panel: Cognitive Telemetry */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-primary/20">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="text-secondary w-5 h-5" />
              <h3 className="font-display text-xl text-secondary font-semibold">Neural Streak</h3>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between font-mono text-xs text-on-surface-variant mb-2 tracking-widest">
                  <span>COGNITIVE LOAD</span>
                  <span className="text-on-surface">42%</span>
                </div>
                <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[42%] transition-all duration-1000"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-xs text-on-surface-variant mb-2 tracking-widest">
                  <span>SESSION VELOCITY</span>
                  <span className="text-on-surface">HIGH</span>
                </div>
                <div className="flex gap-1 h-2">
                  <div className="w-full bg-primary rounded-sm opacity-100"></div>
                  <div className="w-full bg-primary rounded-sm opacity-80"></div>
                  <div className="w-full bg-primary rounded-sm opacity-60"></div>
                  <div className="w-full bg-primary rounded-sm opacity-40"></div>
                  <div className="w-full bg-primary rounded-sm opacity-20"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-mono text-xs text-on-surface-variant uppercase mb-4 tracking-widest">Active Objectives</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                <span className="font-body text-on-surface">Optimize Shader Kernel</span>
              </li>
              <li className="flex items-start gap-3">
                <Circle className="text-outline w-5 h-5 shrink-0" />
                <span className="font-body text-on-surface-variant">Review PR #842</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Center: The Deep Work Timer */}
        <section className="lg:col-span-6 flex flex-col items-center justify-center min-h-[500px]">
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="50%" cy="50%" r="46%" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-surface-container-high" />
              <circle cx="50%" cy="50%" r="46%" fill="transparent" stroke="currentColor" strokeWidth="6" strokeDasharray="289%" strokeDashoffset="0%" strokeLinecap="round" className="text-primary transition-all duration-1000 glow-primary" />
            </svg>
            <div className="text-center z-10">
              <p className="font-mono text-sm text-primary uppercase tracking-[0.3em] mb-2 font-bold">Deep Focus</p>
              <h1 className="font-display text-7xl font-extrabold rainbow-text">25:00</h1>
              <div className="mt-8 flex justify-center gap-6">
                <button className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all glow-primary">
                  <Play className="w-8 h-8 ml-1" />
                </button>
                <button className="w-16 h-16 rounded-full border border-outline text-outline hover:text-on-surface hover:border-on-surface flex items-center justify-center transition-all bg-surface-container-lowest/50">
                  <RefreshCw className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex gap-4">
            <button className="glass-card px-6 py-2 rounded-full font-mono text-xs font-bold text-primary border-primary/40 bg-primary/10 tracking-widest uppercase glow-primary">Pomodoro</button>
            <button className="glass-card px-6 py-2 rounded-full font-mono text-xs font-bold text-on-surface-variant tracking-widest uppercase hover:text-on-surface hover:bg-white/5 transition-colors">Short Break</button>
            <button className="glass-card px-6 py-2 rounded-full font-mono text-xs font-bold text-on-surface-variant tracking-widest uppercase hover:text-on-surface hover:bg-white/5 transition-colors">Long Break</button>
          </div>
        </section>

        {/* Right Panel: Audio & Atmosphere */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border-secondary/20 relative overflow-hidden">
            <h3 className="font-display text-xl text-on-surface mb-6">Acoustic Field</h3>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs text-on-surface-variant tracking-widest">Synthesis Mode</span>
                <span className="text-[10px] font-mono text-secondary bg-secondary/10 px-2 py-0.5 rounded border border-secondary/30 font-bold">LOW-PASS</span>
              </div>
              
              {/* Audio Visualizer Mock */}
              <div className="h-20 flex items-end justify-between gap-1">
                {[40, 60, 30, 80, 50, 40, 90].map((h, i) => (
                  <div key={i} className={`w-full bg-primary/60 rounded-sm animate-breathe`} style={{ height: `${h}%`, animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Waves className="text-on-surface-variant w-5 h-5 shrink-0" />
                <input type="range" className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" defaultValue="65" />
              </div>
              <div className="flex items-center gap-4">
                <Filter className="text-on-surface-variant w-5 h-5 shrink-0" />
                <input type="range" className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-secondary" defaultValue="30" />
              </div>
            </div>
          </div>
          
          <div className="glass-panel rounded-2xl overflow-hidden relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW-ldZcW9uZXPvZpZBvyMEQmb9cgTp6Ct3V7sguoe7V99jyWHH_8XbVONSDMjYlHLRMojS0Jhm866lMvV4QzNfWcfMr6Z2SbkcblNIHRZYtccUdh7a_MCA-EK3dq7FLcKenwG637m9P7s7BtyitcHFw628tkbb15YwD-k6HwleFaexmvmZ1nyhU9U3ab27qqcCVUdbHiEMa6RW-XUc4IwayUIA5yy7oWBLbfKHWq8we-LTYRMoxMRC4G0mcAD0WgnVLl6EeeJ3krHf" 
              alt="Circuit Board Aesthetic" 
              className="w-full h-48 object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent flex flex-col justify-end p-6">
              <p className="font-mono text-sm font-bold text-on-surface uppercase tracking-widest mb-1">Aesthetic Anchor</p>
              <p className="font-mono text-[10px] text-primary">NEURAL_DAMPENING_ACTIVE</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
