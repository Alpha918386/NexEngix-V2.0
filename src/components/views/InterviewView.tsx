import React from 'react';
import { Bot, User, Mic, ArrowRight, Activity, Clock } from 'lucide-react';

export function InterviewView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: AI Persona & Evaluation */}
      <aside className="lg:col-span-4 space-y-6">
        {/* AI Persona Glassmorphic Card */}
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-lg overflow-hidden border border-primary/30">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMMlrfVeApZClfTW1oLX2b4ivKRke_6121CyJpvqcwFffh4MUgO2v_WVBHW1qYb3xDH8374wNLU667nBWP4st2zZssSJBJ8W2iFC-oovisZiB9ljO-sWeyNrcXw7tj7kXzkWGybb_8kamiliFqFwlc1B7LYt0Z1l5NcWvXNvCIJLHMrZPXhDQV48OTrC3Jmmq0vVEMcoQSMDYwoUEDiyMnYb7LKXl_EsUao2Qp8StaRF3vIQi5pq0Izsu5NYAM_WMraozNaM1wbLc" 
                alt="AI Interviewer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl text-primary font-bold">Interviewer A1</h2>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-breathe"></span>
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">Active Analysis</span>
              </div>
            </div>
          </div>
          
          <p className="font-body text-on-surface-variant mb-6 text-sm">
            "I will evaluate your technical logic, system design paradigms, and communication clarity. Focus on architectural trade-offs."
          </p>
          
          {/* Performance Score Meter */}
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="font-mono text-sm text-on-surface uppercase tracking-wider">Live Score</span>
              <span className="font-display text-5xl font-bold text-primary">8.4</span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-secondary w-[84%] transition-all duration-1000 glow-primary"></div>
            </div>
            <p className="font-mono text-[10px] text-on-surface-variant text-right uppercase tracking-wider">OPTIONAL PERFORMANCE</p>
          </div>
        </div>
        
        {/* Session Stats */}
        <div className="glass-panel p-6 rounded-2xl grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-on-surface-variant" />
              <p className="font-mono text-xs text-on-surface-variant uppercase">Time Elapsed</p>
            </div>
            <p className="font-display text-2xl font-bold text-on-surface">14:22</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-on-surface-variant" />
              <p className="font-mono text-xs text-on-surface-variant uppercase">Confidence</p>
            </div>
            <p className="font-display text-2xl font-bold text-tertiary">92%</p>
          </div>
        </div>
      </aside>

      {/* Right Column: Interactive Chat & Input */}
      <section className="lg:col-span-8 flex flex-col gap-6 h-[calc(100vh-140px)]">
        {/* Question Thread */}
        <div className="flex-grow space-y-6 overflow-y-auto hide-scrollbar pr-4">
          {/* AI Question */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center shrink-0 border border-outline/20">
              <Bot className="text-primary w-5 h-5" />
            </div>
            <div className="glass-card rounded-2xl rounded-tl-none p-6 max-w-[85%]">
              <p className="font-mono text-[10px] text-primary mb-3 uppercase tracking-widest">QUESTION 04 // SYSTEM DESIGN</p>
              <p className="font-body text-lg leading-relaxed">
                How would you approach designing a globally distributed real-time data ingestion layer that maintains strong consistency for critical updates while allowing eventual consistency for metadata?
              </p>
            </div>
          </div>
          
          {/* User Previous Response */}
          <div className="flex gap-4 items-start justify-end">
            <div className="glass-card bg-primary-container/10 border-primary/20 rounded-2xl rounded-tr-none p-6 max-w-[85%] text-right">
              <p className="font-body text-lg leading-relaxed text-on-surface">
                I'd implement a multi-region leader architecture with a quorum-based replication strategy for the critical state, likely using something like Spanner or a custom Raft implementation.
              </p>
            </div>
            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center shrink-0 glow-primary">
              <User className="text-on-primary w-5 h-5" />
            </div>
          </div>
          
          {/* Current AI Prompt */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center shrink-0 border border-outline/20">
              <Bot className="text-primary w-5 h-5" />
            </div>
            <div className="glass-card rounded-2xl rounded-tl-none p-6 max-w-[85%] border-l-2 border-l-primary glow-primary">
              <p className="font-mono text-[10px] text-primary mb-3 uppercase tracking-widest">FOLLOW-UP // CONCURRENCY</p>
              <p className="font-body text-lg leading-relaxed">
                Excellent. In that Raft implementation, how would you handle the "Thundering Herd" problem during a leader re-election phase across high-latency links?
              </p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="mt-auto glass-panel p-6 rounded-2xl border-t border-primary/20 relative">
          <div className="flex flex-col gap-4">
            {/* Voice Waveform Visualization */}
            <div className="h-8 flex items-center justify-center gap-1 opacity-70">
              {[40, 60, 80, 100, 60, 80, 40, 60, 90, 50, 30].map((h, i) => (
                <div 
                  key={i} 
                  className="w-1.5 bg-primary rounded-full animate-breathe" 
                  style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                className="w-full bg-surface-container/50 border-0 border-b border-outline/30 focus:border-primary focus:ring-0 transition-all font-body py-4 pl-4 pr-32 rounded-lg outline-none" 
                placeholder="Explain your architectural reasoning..."
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                <button className="p-2 text-primary hover:bg-white/5 rounded-lg transition-all">
                  <Mic className="w-5 h-5" />
                </button>
                <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-mono text-sm font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform active:scale-95 glow-primary">
                  INITIALIZE <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
