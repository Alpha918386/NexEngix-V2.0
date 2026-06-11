import React from 'react';
import { Zap, Activity, BrainCircuit, ArrowRight, MoreVertical } from 'lucide-react';

export function DashboardView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-2">
            Welcome back, <span className="rainbow-text">Lead Engineer</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Neural uplink established. Your cognitive performance is trending 12% higher than last session. Ready for today's deployment?
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Daily Cognitive Streak */}
        <div className="lg:col-span-4">
          <div className="glass-panel p-8 rounded-2xl h-full flex flex-col relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary-container/10 border border-primary/20">
                  <Zap className="text-primary w-5 h-5" />
                </div>
                <span className="font-mono text-sm uppercase text-outline tracking-widest font-semibold">Cognitive Streak</span>
              </div>
            </div>
            
            <div className="flex items-baseline gap-3 mb-auto">
              <span className="font-display text-7xl font-extrabold leading-none text-on-surface">42</span>
              <span className="text-primary font-display text-xl uppercase font-bold">Days</span>
            </div>
            
            <div className="mt-12 space-y-4 relative z-10">
              <div className="flex justify-between items-end">
                <span className="text-on-surface-variant font-mono text-sm">Velocity Index</span>
                <span className="text-primary font-mono text-sm font-bold">98.4%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary w-[98.4%]"></div>
              </div>
              <p className="text-outline font-mono text-xs opacity-70">
                Top 2% of the global engineering fleet.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Performance Card */}
        <div className="lg:col-span-8">
          <div className="glass-panel p-8 rounded-2xl h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20">
                  <Activity className="text-secondary w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-semibold">Recent CBT Performance</h3>
              </div>
              <button className="font-mono text-sm text-outline hover:text-on-surface transition-colors uppercase tracking-wider">
                View Details
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <MetricBox label="Architecture" value="920" color="text-secondary" />
              <MetricBox label="Concurrency" value="885" color="text-tertiary" />
              <MetricBox label="Security" value="942" color="text-primary" />
              <MetricBox label="Systems" value="810" color="text-on-surface" />
            </div>

            {/* Simulated Chart Container */}
            <div className="relative h-32 w-full mt-auto rounded-lg overflow-hidden flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 L0,50 Q25,60 50,30 T100,20 L100,100 Z" fill="url(#grad)" opacity="0.4"/>
                    <path d="M0,50 Q25,60 50,30 T100,20" fill="none" stroke="var(--color-primary-container)" strokeWidth="2"/>
                    <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-primary)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Neural Recommendations & Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-display text-2xl font-semibold flex items-center gap-3 mb-6">
            <BrainCircuit className="text-primary" />
            Neural Recommendations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RecommendationCard 
              type="Active Research"
              color="border-l-primary text-primary"
              title="Distributed Systems"
              desc="Explore Paxos vs Raft consensus algorithms in high-latency networks."
              tag="HIGH PRIORITY"
              time="12m Read"
            />
            <RecommendationCard 
              type="Mastery Path"
              color="border-l-secondary text-secondary"
              title="Rust Concurrency"
              desc="Deep dive into Send/Sync traits and zero-cost abstraction patterns."
              tag="SKILL GAP"
              time="45m Drill"
            />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-2xl font-semibold mb-6">Upcoming Milestones</h3>
            <div className="space-y-4">
                <MilestoneItem date="24" month="OCT" title="Systems Architecture Mock" time="09:00 - 11:30 AM" />
                <MilestoneItem date="28" month="OCT" title="Kubernetes Advanced Exam" time="Certification Window" />
            </div>
        </div>
      </div>
    </div>
  );
}

function MetricBox({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="p-4 rounded-xl bg-surface-container-low border border-outline/10">
      <p className="text-outline font-mono text-xs uppercase tracking-wider mb-2">{label}</p>
      <p className={`font-display text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

function RecommendationCard({ type, color, title, desc, tag, time }: any) {
  return (
    <div className={`glass-card p-6 rounded-xl flex flex-col gap-4 group cursor-pointer border-l-4 ${color} hover:translate-x-1 transition-transform`}>
      <div className="flex justify-between items-start">
        <span className="font-mono text-xs uppercase tracking-widest">{type}</span>
        <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <div>
        <h4 className="font-display text-xl font-semibold mb-2 text-on-surface">{title}</h4>
        <p className="text-on-surface-variant text-sm">{desc}</p>
      </div>
      <div className="flex items-center gap-3 mt-auto pt-2">
        <span className="bg-surface-container-high px-2 py-1 rounded text-[10px] font-mono font-bold">{tag}</span>
        <span className="text-outline font-mono text-[10px]">{time}</span>
      </div>
    </div>
  );
}

function MilestoneItem({ date, month, title, time }: { date: string, month: string, title: string, time: string }) {
    return (
        <div className="glass-card p-4 rounded-xl flex items-center justify-between group hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-surface-container-low flex flex-col items-center justify-center border border-white/5 group-hover:bg-primary/10 transition-colors">
                    <span className="text-[10px] font-mono text-outline uppercase">{month}</span>
                    <span className="text-xl font-bold text-on-surface">{date}</span>
                </div>
                <div>
                    <h5 className="font-bold text-on-surface text-lg">{title}</h5>
                    <p className="text-outline font-mono text-xs mt-1">{time}</p>
                </div>
            </div>
            <button className="text-outline hover:text-on-surface p-2">
                <MoreVertical className="w-5 h-5" />
            </button>
        </div>
    );
}
